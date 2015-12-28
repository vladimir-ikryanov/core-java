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
@SuppressWarnings("AccessCanBeTightened") // We don't want to hide API.
public class ChannelServiceWrapper {

    private static ChannelServiceWrapper instance = new ChannelServiceWrapper();
    private final ChannelService channelService;
    private Map<Class<?>, StreamIdConverter<?>> converters = new HashMap<>();
    private List<String> openChannels = new ArrayList<>();
    private Map<String, String> openStreams = new HashMap<>();

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
    public void closeChannel(String channelTokenId) {
        openChannels.remove(channelTokenId);
    }

    /**
     * Opens a stream within a channel.
     * <p>
     * Streams belong to channels, and before closing channel you should close all streams of this channel.
     *
     * @param channelTokenId stream channel's tokenId
     * @return streamId.
     */
    public String openStream(String channelTokenId) {
        String randomId = UUID.randomUUID().toString();
        //TODO:2015-12-24:mikhail.mikhaylov: Check if collisions may appear.
//        while (openChannels.contains(randomId)) {
//            randomId = UUID.randomUUID().toString();
//        }
        openStreams.put(randomId, channelTokenId);
        return randomId;
    }

    /**
     * Closes stream.
     *
     * @param streamId stream's id.
     */
    public void closeStream(String streamId) {
        //TODO:2015-12-24:mikhail.mikhaylov: Send closing signal.
        openStreams.remove(streamId);
    }

    /**
     * Returns the Id of associated channel.
     *
     * @param streamId Id of channel's stream
     * @return channel Id.
     */
    public String getStreamChannel(String streamId) {
        if (!openStreams.containsKey(streamId)) {
            throw new IllegalArgumentException("No open channel for such streamId: " + streamId);
        }
        return openStreams.get(streamId);
    }

    /**
     * Retrieves Stream Id from RPC argument using registered converters.
     *
     * @param callArgument RPC method argument
     * @param <T>          RPC method argument type
     * @return String Stream Id.
     */
    @SuppressWarnings("unchecked")
    public <T extends Message> String getStreamId(T callArgument) {
        Class argumentClass = callArgument.<T>getClass();
        final StreamIdConverter converter = converters.get(argumentClass);
        if (converter == null) {
            throw new IllegalStateException("No converter registered for call argument: " + argumentClass);
        }
        return converter.convert(callArgument);
    }

    /**
     * Registers Converter for RPC method argument.
     * <p>
     * Converter retrieves Steam Id from method argument.
     *
     * @param forClass  RPC method argument type
     * @param converter argument Converter.
     */
    public void registerStreamIdConverter(Class<?> forClass, StreamIdConverter<?> converter) {
        converters.put(forClass, converter);
    }

    public void sendMessage(Message message, String streamId) {
        final String base64 = DatatypeConverter.printBase64Binary(message.toByteArray());

        final RpcResponse rpcResponseMessage =
                RpcResponse.newBuilder().setStreamId(streamId).setDataBase64(base64).build();

        final String base64Response = DatatypeConverter.printBase64Binary(rpcResponseMessage.toByteArray());
        // SEND MESSAGE
        // SEND CHANNEL ID

        channelService.sendMessage(new ChannelMessage(openStreams.get(streamId), base64Response));
    }

    /**
     * Broadcasts message to ALL open streams.
     * <p>
     * Test purposes ONLY. Redesign required. Should be VERY slow.
     *
     * @param message Broadcasting message.
     */
    @Deprecated
    public void broadCast(Message message) {
        for (String stream : openStreams.keySet()) {
            sendMessage(message, stream);
        }
    }

    /**
     * As we can define a service with any possible message as argument and stream as result, we
     * must know how to associate it's call's result with open stream.
     *
     * @param <T> RPC call argument
     */
    public interface StreamIdConverter<T extends Message> {
        String convert(T argument);
    }
}
