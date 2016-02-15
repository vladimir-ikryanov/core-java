package org.spine3.client.grpc.web;

import com.google.appengine.api.channel.ChannelMessage;
import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
import com.google.protobuf.Message;

import javax.xml.bind.DatatypeConverter;
import java.util.*;

/**
 * Main ChannelApi service.
 * <p>
 * It should be moved from singleton as soon as it's clear how do we configure environment.
 */
//TODO:2015-12-24:mikhail.mikhaylov: Migrate to TinyTypes.
@SuppressWarnings({"AccessCanBeTightened", "WeakerAccess"}) // We don't want to hide API.
public class ChannelServiceWrapper {

    // TODO:2016-01-15:mikhal.mikhaylov: Refactor protobuf completion representation.
    private static final String STREAM_COMPLETION_STATUS = "OK.";

    private static final ChannelServiceWrapper instance = new ChannelServiceWrapper();
    private final ChannelService channelService;
    private final Map<Class<?>, ChannelIdConverter<?>> converters = new HashMap<>();
    private final Collection<String> openChannels = new HashSet<>();
    private final Map<String, String> openStreams = new HashMap<>();

    private ChannelServiceWrapper() {
        channelService = ChannelServiceFactory.getChannelService();
    }

    public static ChannelServiceWrapper getInstance() {
        return instance;
    }

    /**
     * Opens a new channel.
     * <p>
     * Note: you should only have one channel per page.
     *
     * @param credential channel credential
     * @return opened channel's token id.
     */
    public String openChannel(String credential) {
        final String channelTokenId = channelService.createChannel(credential);
        openChannels.add(channelTokenId);
        return channelTokenId;
    }

    /**
     * Closes open channel.
     *
     * @param channelTokenId open channel tokenId.
     */
    // TODO:2016-02-15:mikhail.mikhaylov: Implement client disconnecting signal.
    public void closeChannel(String channelTokenId) {
        openChannels.remove(channelTokenId);
    }

    /**
     * Retrieves Stream Id from RPC argument using registered converters.
     *
     * @param callArgument RPC method argument
     * @param <T>          RPC method argument type
     * @return String Stream Id.
     */
    @SuppressWarnings("unchecked")
    public <T extends Message> String openStream(T callArgument) {
        final Class argumentClass = callArgument.<T>getClass();
        final ChannelIdConverter converter = converters.get(argumentClass);
        if (converter == null) {
            throw new IllegalStateException("No converter registered for call argument: " + argumentClass);
        }
        final String channelId = converter.convert(callArgument);
        final String streamId = openStream(channelId);
        return streamId;
    }

    /**
     * Registers Converter for RPC method argument.
     * <p>
     * Converter retrieves Steam Id from method argument.
     *
     * @param forClass  RPC method argument type
     * @param converter argument Converter.
     */
    public void registerStreamIdConverter(Class<?> forClass, ChannelIdConverter<?> converter) {
        converters.put(forClass, converter);
    }

    @SuppressWarnings("TypeMayBeWeakened") // We only send Messages.
    public void sendMessage(Message message, String streamId) {
        final String base64 = DatatypeConverter.printBase64Binary(message.toByteArray());

        final RpcResponse rpcResponseMessage =
                RpcResponse.newBuilder().setStreamId(streamId).setDataBase64(base64).build();

        sendMessage(streamId, rpcResponseMessage);
    }

    public void sendCompleteSignal(String streamId) {
        final RpcResponse rpcResponseMessage = RpcResponse.newBuilder()
                .setStreamId(streamId)
                .setCompletionStatus(STREAM_COMPLETION_STATUS).build();

        sendMessage(streamId, rpcResponseMessage);
        closeStream(streamId);
    }

    public void sendErrorSignal(String streamId, String reason) {
        final RpcResponse rpcResponseMessage = RpcResponse.newBuilder()
                .setStreamId(streamId)
                .setErrorCause(reason).build();

        sendMessage(streamId, rpcResponseMessage);
        closeStream(streamId);
    }

    /**
     * Closes stream.
     *
     * @param streamId stream's id.
     */
    private void closeStream(String streamId) {
        openStreams.remove(streamId);
    }

    /**
     * Returns the Id of associated channel.
     *
     * @param streamId Id of channel's stream
     * @return channel Id.
     */
    private String getStreamChannel(String streamId) {
        if (!openStreams.containsKey(streamId)) {
            throw new IllegalArgumentException("No open channel for such streamId: " + streamId);
        }
        return openStreams.get(streamId);
    }

    /**
     * Opens a stream within a channel.
     * <p>
     * Streams belong to channels, and before closing channel you should close all streams of this channel.
     *
     * @param channelId stream channel's tokenId
     * @return streamId.
     */
    private String openStream(String channelId) {
        if (!openChannels.contains(channelId)) {
            throw new ClosedChannelException(channelId);
        }
        final String randomId = UUID.randomUUID().toString();
        openStreams.put(randomId, channelId);
        return randomId;
    }

    @SuppressWarnings("TypeMayBeWeakened") // We only send RpcResponses.
    private void sendMessage(String streamId, RpcResponse rpcResponse) {
        final String base64Response = DatatypeConverter.printBase64Binary(rpcResponse.toByteArray());

        channelService.sendMessage(new ChannelMessage(openStreams.get(streamId), base64Response));
    }

    private static class ClosedChannelException extends RuntimeException {

        private static final long serialVersionUID = 424251832827342426L;

        /* protected */ ClosedChannelException(String channelId) {
            super(String.format("You are trying to open stream for on closed channel with id %s.", channelId));
        }
    }
}
