/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.google.protobuf.Any');
goog.provide('proto.google.protobuf.Api');
goog.provide('proto.google.protobuf.BoolValue');
goog.provide('proto.google.protobuf.BytesValue');
goog.provide('proto.google.protobuf.DescriptorProto');
goog.provide('proto.google.protobuf.DescriptorProto.ExtensionRange');
goog.provide('proto.google.protobuf.DescriptorProto.ReservedRange');
goog.provide('proto.google.protobuf.DoubleValue');
goog.provide('proto.google.protobuf.Duration');
goog.provide('proto.google.protobuf.Empty');
goog.provide('proto.google.protobuf.Enum');
goog.provide('proto.google.protobuf.EnumDescriptorProto');
goog.provide('proto.google.protobuf.EnumOptions');
goog.provide('proto.google.protobuf.EnumValue');
goog.provide('proto.google.protobuf.EnumValueDescriptorProto');
goog.provide('proto.google.protobuf.EnumValueOptions');
goog.provide('proto.google.protobuf.Field');
goog.provide('proto.google.protobuf.Field.Cardinality');
goog.provide('proto.google.protobuf.Field.Kind');
goog.provide('proto.google.protobuf.FieldDescriptorProto');
goog.provide('proto.google.protobuf.FieldDescriptorProto.Label');
goog.provide('proto.google.protobuf.FieldDescriptorProto.Type');
goog.provide('proto.google.protobuf.FieldMask');
goog.provide('proto.google.protobuf.FieldOptions');
goog.provide('proto.google.protobuf.FieldOptions.CType');
goog.provide('proto.google.protobuf.FieldOptions.JSType');
goog.provide('proto.google.protobuf.FileDescriptorProto');
goog.provide('proto.google.protobuf.FileDescriptorSet');
goog.provide('proto.google.protobuf.FileOptions');
goog.provide('proto.google.protobuf.FileOptions.OptimizeMode');
goog.provide('proto.google.protobuf.FloatValue');
goog.provide('proto.google.protobuf.Int32Value');
goog.provide('proto.google.protobuf.Int64Value');
goog.provide('proto.google.protobuf.ListValue');
goog.provide('proto.google.protobuf.MessageOptions');
goog.provide('proto.google.protobuf.Method');
goog.provide('proto.google.protobuf.MethodDescriptorProto');
goog.provide('proto.google.protobuf.MethodOptions');
goog.provide('proto.google.protobuf.Mixin');
goog.provide('proto.google.protobuf.NullValue');
goog.provide('proto.google.protobuf.OneofDescriptorProto');
goog.provide('proto.google.protobuf.Option');
goog.provide('proto.google.protobuf.ServiceDescriptorProto');
goog.provide('proto.google.protobuf.ServiceOptions');
goog.provide('proto.google.protobuf.SourceCodeInfo');
goog.provide('proto.google.protobuf.SourceCodeInfo.Location');
goog.provide('proto.google.protobuf.SourceContext');
goog.provide('proto.google.protobuf.StringValue');
goog.provide('proto.google.protobuf.Struct');
goog.provide('proto.google.protobuf.Struct.FieldsEntry');
goog.provide('proto.google.protobuf.Syntax');
goog.provide('proto.google.protobuf.Timestamp');
goog.provide('proto.google.protobuf.Type');
goog.provide('proto.google.protobuf.UInt32Value');
goog.provide('proto.google.protobuf.UInt64Value');
goog.provide('proto.google.protobuf.UninterpretedOption');
goog.provide('proto.google.protobuf.UninterpretedOption.NamePart');
goog.provide('proto.google.protobuf.Value');
goog.provide('proto.google.protobuf.compiler.CodeGeneratorRequest');
goog.provide('proto.google.protobuf.compiler.CodeGeneratorResponse');
goog.provide('proto.google.protobuf.compiler.CodeGeneratorResponse.File');
goog.provide('proto.spine.base.Color');
goog.provide('proto.spine.base.CommandContext');
goog.provide('proto.spine.base.CommandId');
goog.provide('proto.spine.base.EmailAddress');
goog.provide('proto.spine.base.Error');
goog.provide('proto.spine.base.EventContext');
goog.provide('proto.spine.base.EventId');
goog.provide('proto.spine.base.EventRecord');
goog.provide('proto.spine.base.PersonName');
goog.provide('proto.spine.base.PhotoLink');
goog.provide('proto.spine.base.User');
goog.provide('proto.spine.base.UserId');
goog.provide('proto.spine.client.Channel');
goog.provide('proto.spine.client.ClientId');
goog.provide('proto.spine.client.ClientRequest');
goog.provide('proto.spine.client.CodeVersion');
goog.provide('proto.spine.client.CommandRequest');
goog.provide('proto.spine.client.CommandResponse');
goog.provide('proto.spine.client.CommandResponse.ErrorCode');
goog.provide('proto.spine.client.Connection');
goog.provide('proto.spine.client.DeviceType');
goog.provide('proto.spine.client.Language');
goog.provide('proto.spine.client.OsInfo');
goog.provide('proto.spine.client.QueryContext');
goog.provide('proto.spine.client.grpc.web.ChannelConnectionCredential');
goog.provide('proto.spine.client.grpc.web.ChannelConnectionResponse');
goog.provide('proto.spine.client.grpc.web.PhraseSaidEvent');
goog.provide('proto.spine.client.grpc.web.RpcResponse');
goog.provide('proto.spine.client.grpc.web.SimpleClientRequest');
goog.provide('proto.spine.client.grpc.web.SimpleCommandRequest');
goog.provide('proto.spine.client.grpc.web.SimpleCommandResponse');
goog.provide('proto.spine.client.grpc.web.SimpleConnection');
goog.provide('proto.spine.client.grpc.web.SimpleEventRecord');
goog.provide('proto.spine.client.grpc.web.SuccessfulRpcCall');
goog.provide('proto.spine.client.grpc.web.VoidRpcArgument');
goog.provide('proto.spine.client.grpc.web.WebServiceStreamingResponse');
goog.provide('proto.spine.money.Currency');
goog.provide('proto.spine.money.CurrencyOptions');
goog.provide('proto.spine.money.Money');
goog.provide('proto.spine.money.currency');
goog.provide('proto.spine.server.CommandResult');
goog.provide('proto.spine.server.aggregate.Snapshot');
goog.provide('proto.spine.server.storage.AggregateEvents');
goog.provide('proto.spine.server.storage.AggregateStorageRecord');
goog.provide('proto.spine.server.storage.CommandStoreRecord');
goog.provide('proto.spine.server.storage.EventStoreRecord');
goog.provide('proto.spine.sharing.Group');
goog.provide('proto.spine.sharing.GroupId');
goog.provide('proto.spine.sharing.Permission');
goog.provide('proto.spine.sharing.Sharing');
goog.provide('proto.spine.sharing.SharingLevel');
goog.provide('proto.spine.sharing.Subject');
goog.provide('proto.spine.time.LocalDate');
goog.provide('proto.spine.time.LocalTime');
goog.provide('proto.spine.time.MonthOfYear');
goog.provide('proto.spine.time.OffsetDate');
goog.provide('proto.spine.time.OffsetDateTime');
goog.provide('proto.spine.time.OffsetTime');
goog.provide('proto.spine.time.ZoneOffset');
goog.provide('proto.spine.users.Domain');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.ExtensionFieldInfo');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Any = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Any, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Any.displayName = 'proto.google.protobuf.Any';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Any.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Any.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Any} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Any.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeUrl: msg.getTypeUrl(),
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Any}
 */
proto.google.protobuf.Any.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Any;
  return proto.google.protobuf.Any.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Any} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Any}
 */
proto.google.protobuf.Any.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Any} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Any.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Any.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Any.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValue();
  if (f.length > 0) {
    writer.writeBytesRawString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Any} The clone.
 */
proto.google.protobuf.Any.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Any} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string type_url = 1;
 * @return {string}
 */
proto.google.protobuf.Any.prototype.getTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Any.prototype.setTypeUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {string}
 */
proto.google.protobuf.Any.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.google.protobuf.Any.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.SourceContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.SourceContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.SourceContext.displayName = 'proto.google.protobuf.SourceContext';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.SourceContext.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.SourceContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.SourceContext} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.SourceContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileName: msg.getFileName()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.SourceContext}
 */
proto.google.protobuf.SourceContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.SourceContext;
  return proto.google.protobuf.SourceContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.SourceContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.SourceContext}
 */
proto.google.protobuf.SourceContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.SourceContext} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.SourceContext.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.SourceContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.SourceContext.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFileName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.SourceContext} The clone.
 */
proto.google.protobuf.SourceContext.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.SourceContext} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.google.protobuf.SourceContext.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.SourceContext.prototype.setFileName = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Type = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.Type.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.Type, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Type.displayName = 'proto.google.protobuf.Type';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.Type.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Type.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Type.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Type} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Type.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.google.protobuf.Field.toObject, includeInstance),
    oneofsList: jspb.Message.getField(msg, 3),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.google.protobuf.Option.toObject, includeInstance),
    sourceContext: (f = msg.getSourceContext()) && proto.google.protobuf.SourceContext.toObject(includeInstance, f),
    syntax: msg.getSyntax()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Type}
 */
proto.google.protobuf.Type.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Type;
  return proto.google.protobuf.Type.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Type} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Type}
 */
proto.google.protobuf.Type.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Field;
      reader.readMessage(value,proto.google.protobuf.Field.deserializeBinaryFromReader);
      msg.getFieldsList().push(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.getOneofsList().push(value);
      break;
    case 4:
      var value = new proto.google.protobuf.Option;
      reader.readMessage(value,proto.google.protobuf.Option.deserializeBinaryFromReader);
      msg.getOptionsList().push(value);
      break;
    case 5:
      var value = new proto.google.protobuf.SourceContext;
      reader.readMessage(value,proto.google.protobuf.SourceContext.deserializeBinaryFromReader);
      msg.setSourceContext(value);
      break;
    case 6:
      var value = /** @type {!proto.google.protobuf.Syntax} */ (reader.readEnum());
      msg.setSyntax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Type} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Type.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Type.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Type.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.Field.serializeBinaryToWriter
    );
  }
  f = this.getOneofsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = this.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.Option.serializeBinaryToWriter
    );
  }
  f = this.getSourceContext();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.protobuf.SourceContext.serializeBinaryToWriter
    );
  }
  f = this.getSyntax();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Type} The clone.
 */
proto.google.protobuf.Type.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Type} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.Type.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Type.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Field fields = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Field>}
 */
proto.google.protobuf.Type.prototype.getFieldsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Field>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Field, 2));
};


/** @param {Array.<!proto.google.protobuf.Field>|undefined} value  */
proto.google.protobuf.Type.prototype.setFieldsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.google.protobuf.Type.prototype.clearFieldsList = function() {
  this.setFieldsList([]);
};


/**
 * repeated string oneofs = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.protobuf.Type.prototype.getOneofsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {Array.<string>} value  */
proto.google.protobuf.Type.prototype.setOneofsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * repeated Option options = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Option>}
 */
proto.google.protobuf.Type.prototype.getOptionsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Option, 4));
};


/** @param {Array.<!proto.google.protobuf.Option>|undefined} value  */
proto.google.protobuf.Type.prototype.setOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.google.protobuf.Type.prototype.clearOptionsList = function() {
  this.setOptionsList([]);
};


/**
 * optional SourceContext source_context = 5;
 * @return {proto.google.protobuf.SourceContext}
 */
proto.google.protobuf.Type.prototype.getSourceContext = function() {
  return /** @type{proto.google.protobuf.SourceContext} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.SourceContext, 5));
};


/** @param {proto.google.protobuf.SourceContext|undefined} value  */
proto.google.protobuf.Type.prototype.setSourceContext = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.google.protobuf.Type.prototype.clearSourceContext = function() {
  this.setSourceContext(undefined);
};


/**
 * optional Syntax syntax = 6;
 * @return {!proto.google.protobuf.Syntax}
 */
proto.google.protobuf.Type.prototype.getSyntax = function() {
  return /** @type {!proto.google.protobuf.Syntax} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {!proto.google.protobuf.Syntax} value  */
proto.google.protobuf.Type.prototype.setSyntax = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Field = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.Field.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.Field, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Field.displayName = 'proto.google.protobuf.Field';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.Field.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Field.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Field.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Field} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Field.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: msg.getKind(),
    cardinality: msg.getCardinality(),
    number: msg.getNumber(),
    name: msg.getName(),
    typeUrl: msg.getTypeUrl(),
    oneofIndex: msg.getOneofIndex(),
    packed: msg.getPacked(),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.google.protobuf.Option.toObject, includeInstance),
    jsonName: msg.getJsonName(),
    defaultValue: msg.getDefaultValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Field}
 */
proto.google.protobuf.Field.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Field;
  return proto.google.protobuf.Field.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Field} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Field}
 */
proto.google.protobuf.Field.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.Field.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {!proto.google.protobuf.Field.Cardinality} */ (reader.readEnum());
      msg.setCardinality(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeUrl(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOneofIndex(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacked(value);
      break;
    case 9:
      var value = new proto.google.protobuf.Option;
      reader.readMessage(value,proto.google.protobuf.Option.deserializeBinaryFromReader);
      msg.getOptionsList().push(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Field} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Field.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Field.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Field.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getCardinality();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getOneofIndex();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = this.getPacked();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = this.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.protobuf.Option.serializeBinaryToWriter
    );
  }
  f = this.getJsonName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = this.getDefaultValue();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Field} The clone.
 */
proto.google.protobuf.Field.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Field} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Kind kind = 1;
 * @return {!proto.google.protobuf.Field.Kind}
 */
proto.google.protobuf.Field.prototype.getKind = function() {
  return /** @type {!proto.google.protobuf.Field.Kind} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.google.protobuf.Field.Kind} value  */
proto.google.protobuf.Field.prototype.setKind = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Cardinality cardinality = 2;
 * @return {!proto.google.protobuf.Field.Cardinality}
 */
proto.google.protobuf.Field.prototype.getCardinality = function() {
  return /** @type {!proto.google.protobuf.Field.Cardinality} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.google.protobuf.Field.Cardinality} value  */
proto.google.protobuf.Field.prototype.setCardinality = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 number = 3;
 * @return {number}
 */
proto.google.protobuf.Field.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.google.protobuf.Field.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.google.protobuf.Field.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.google.protobuf.Field.prototype.setName = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string type_url = 6;
 * @return {string}
 */
proto.google.protobuf.Field.prototype.getTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.google.protobuf.Field.prototype.setTypeUrl = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 oneof_index = 7;
 * @return {number}
 */
proto.google.protobuf.Field.prototype.getOneofIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.google.protobuf.Field.prototype.setOneofIndex = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool packed = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.Field.prototype.getPacked = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 8, false));
};


/** @param {boolean} value  */
proto.google.protobuf.Field.prototype.setPacked = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * repeated Option options = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Option>}
 */
proto.google.protobuf.Field.prototype.getOptionsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Option, 9));
};


/** @param {Array.<!proto.google.protobuf.Option>|undefined} value  */
proto.google.protobuf.Field.prototype.setOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


proto.google.protobuf.Field.prototype.clearOptionsList = function() {
  this.setOptionsList([]);
};


/**
 * optional string json_name = 10;
 * @return {string}
 */
proto.google.protobuf.Field.prototype.getJsonName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 10, ""));
};


/** @param {string} value  */
proto.google.protobuf.Field.prototype.setJsonName = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional string default_value = 11;
 * @return {string}
 */
proto.google.protobuf.Field.prototype.getDefaultValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 11, ""));
};


/** @param {string} value  */
proto.google.protobuf.Field.prototype.setDefaultValue = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * @enum {number}
 */
proto.google.protobuf.Field.Kind = {
  TYPE_UNKNOWN: 0,
  TYPE_DOUBLE: 1,
  TYPE_FLOAT: 2,
  TYPE_INT64: 3,
  TYPE_UINT64: 4,
  TYPE_INT32: 5,
  TYPE_FIXED64: 6,
  TYPE_FIXED32: 7,
  TYPE_BOOL: 8,
  TYPE_STRING: 9,
  TYPE_GROUP: 10,
  TYPE_MESSAGE: 11,
  TYPE_BYTES: 12,
  TYPE_UINT32: 13,
  TYPE_ENUM: 14,
  TYPE_SFIXED32: 15,
  TYPE_SFIXED64: 16,
  TYPE_SINT32: 17,
  TYPE_SINT64: 18
};

/**
 * @enum {number}
 */
proto.google.protobuf.Field.Cardinality = {
  CARDINALITY_UNKNOWN: 0,
  CARDINALITY_OPTIONAL: 1,
  CARDINALITY_REQUIRED: 2,
  CARDINALITY_REPEATED: 3
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Enum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.Enum.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.Enum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Enum.displayName = 'proto.google.protobuf.Enum';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.Enum.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Enum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Enum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Enum} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Enum.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    enumvalueList: jspb.Message.toObjectList(msg.getEnumvalueList(),
    proto.google.protobuf.EnumValue.toObject, includeInstance),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.google.protobuf.Option.toObject, includeInstance),
    sourceContext: (f = msg.getSourceContext()) && proto.google.protobuf.SourceContext.toObject(includeInstance, f),
    syntax: msg.getSyntax()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Enum}
 */
proto.google.protobuf.Enum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Enum;
  return proto.google.protobuf.Enum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Enum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Enum}
 */
proto.google.protobuf.Enum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.EnumValue;
      reader.readMessage(value,proto.google.protobuf.EnumValue.deserializeBinaryFromReader);
      msg.getEnumvalueList().push(value);
      break;
    case 3:
      var value = new proto.google.protobuf.Option;
      reader.readMessage(value,proto.google.protobuf.Option.deserializeBinaryFromReader);
      msg.getOptionsList().push(value);
      break;
    case 4:
      var value = new proto.google.protobuf.SourceContext;
      reader.readMessage(value,proto.google.protobuf.SourceContext.deserializeBinaryFromReader);
      msg.setSourceContext(value);
      break;
    case 5:
      var value = /** @type {!proto.google.protobuf.Syntax} */ (reader.readEnum());
      msg.setSyntax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Enum} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Enum.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Enum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Enum.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getEnumvalueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.EnumValue.serializeBinaryToWriter
    );
  }
  f = this.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.protobuf.Option.serializeBinaryToWriter
    );
  }
  f = this.getSourceContext();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.protobuf.SourceContext.serializeBinaryToWriter
    );
  }
  f = this.getSyntax();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Enum} The clone.
 */
proto.google.protobuf.Enum.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Enum} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.Enum.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Enum.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated EnumValue enumvalue = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.EnumValue>}
 */
proto.google.protobuf.Enum.prototype.getEnumvalueList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumValue, 2));
};


/** @param {Array.<!proto.google.protobuf.EnumValue>|undefined} value  */
proto.google.protobuf.Enum.prototype.setEnumvalueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.google.protobuf.Enum.prototype.clearEnumvalueList = function() {
  this.setEnumvalueList([]);
};


/**
 * repeated Option options = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Option>}
 */
proto.google.protobuf.Enum.prototype.getOptionsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Option, 3));
};


/** @param {Array.<!proto.google.protobuf.Option>|undefined} value  */
proto.google.protobuf.Enum.prototype.setOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.google.protobuf.Enum.prototype.clearOptionsList = function() {
  this.setOptionsList([]);
};


/**
 * optional SourceContext source_context = 4;
 * @return {proto.google.protobuf.SourceContext}
 */
proto.google.protobuf.Enum.prototype.getSourceContext = function() {
  return /** @type{proto.google.protobuf.SourceContext} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.SourceContext, 4));
};


/** @param {proto.google.protobuf.SourceContext|undefined} value  */
proto.google.protobuf.Enum.prototype.setSourceContext = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.protobuf.Enum.prototype.clearSourceContext = function() {
  this.setSourceContext(undefined);
};


/**
 * optional Syntax syntax = 5;
 * @return {!proto.google.protobuf.Syntax}
 */
proto.google.protobuf.Enum.prototype.getSyntax = function() {
  return /** @type {!proto.google.protobuf.Syntax} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {!proto.google.protobuf.Syntax} value  */
proto.google.protobuf.Enum.prototype.setSyntax = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.EnumValue.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumValue.displayName = 'proto.google.protobuf.EnumValue';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumValue.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.EnumValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    number: msg.getNumber(),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.google.protobuf.Option.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumValue}
 */
proto.google.protobuf.EnumValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumValue;
  return proto.google.protobuf.EnumValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumValue}
 */
proto.google.protobuf.EnumValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 3:
      var value = new proto.google.protobuf.Option;
      reader.readMessage(value,proto.google.protobuf.Option.deserializeBinaryFromReader);
      msg.getOptionsList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.protobuf.Option.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.EnumValue} The clone.
 */
proto.google.protobuf.EnumValue.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.EnumValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.EnumValue.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.EnumValue.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 number = 2;
 * @return {number}
 */
proto.google.protobuf.EnumValue.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.google.protobuf.EnumValue.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated Option options = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Option>}
 */
proto.google.protobuf.EnumValue.prototype.getOptionsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Option, 3));
};


/** @param {Array.<!proto.google.protobuf.Option>|undefined} value  */
proto.google.protobuf.EnumValue.prototype.setOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.google.protobuf.EnumValue.prototype.clearOptionsList = function() {
  this.setOptionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Option = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Option, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Option.displayName = 'proto.google.protobuf.Option';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Option.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Option.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Option} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Option.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    value: (f = msg.getValue()) && proto.google.protobuf.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Option}
 */
proto.google.protobuf.Option.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Option;
  return proto.google.protobuf.Option.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Option} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Option}
 */
proto.google.protobuf.Option.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Option} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Option.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Option.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Option.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Option} The clone.
 */
proto.google.protobuf.Option.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Option} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.Option.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Option.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Any value = 2;
 * @return {proto.google.protobuf.Any}
 */
proto.google.protobuf.Option.prototype.getValue = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 2));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.google.protobuf.Option.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.protobuf.Option.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * @enum {number}
 */
proto.google.protobuf.Syntax = {
  SYNTAX_PROTO2: 0,
  SYNTAX_PROTO3: 1
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Api = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.Api.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.Api, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Api.displayName = 'proto.google.protobuf.Api';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.Api.repeatedFields_ = [2,3,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Api.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Api.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Api} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Api.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    methodsList: jspb.Message.toObjectList(msg.getMethodsList(),
    proto.google.protobuf.Method.toObject, includeInstance),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.google.protobuf.Option.toObject, includeInstance),
    version: msg.getVersion(),
    sourceContext: (f = msg.getSourceContext()) && proto.google.protobuf.SourceContext.toObject(includeInstance, f),
    mixinsList: jspb.Message.toObjectList(msg.getMixinsList(),
    proto.google.protobuf.Mixin.toObject, includeInstance),
    syntax: msg.getSyntax()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Api}
 */
proto.google.protobuf.Api.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Api;
  return proto.google.protobuf.Api.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Api} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Api}
 */
proto.google.protobuf.Api.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Method;
      reader.readMessage(value,proto.google.protobuf.Method.deserializeBinaryFromReader);
      msg.getMethodsList().push(value);
      break;
    case 3:
      var value = new proto.google.protobuf.Option;
      reader.readMessage(value,proto.google.protobuf.Option.deserializeBinaryFromReader);
      msg.getOptionsList().push(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 5:
      var value = new proto.google.protobuf.SourceContext;
      reader.readMessage(value,proto.google.protobuf.SourceContext.deserializeBinaryFromReader);
      msg.setSourceContext(value);
      break;
    case 6:
      var value = new proto.google.protobuf.Mixin;
      reader.readMessage(value,proto.google.protobuf.Mixin.deserializeBinaryFromReader);
      msg.getMixinsList().push(value);
      break;
    case 7:
      var value = /** @type {!proto.google.protobuf.Syntax} */ (reader.readEnum());
      msg.setSyntax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Api} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Api.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Api.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Api.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.Method.serializeBinaryToWriter
    );
  }
  f = this.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.protobuf.Option.serializeBinaryToWriter
    );
  }
  f = this.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getSourceContext();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.protobuf.SourceContext.serializeBinaryToWriter
    );
  }
  f = this.getMixinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.Mixin.serializeBinaryToWriter
    );
  }
  f = this.getSyntax();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Api} The clone.
 */
proto.google.protobuf.Api.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Api} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.Api.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Api.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated Method methods = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Method>}
 */
proto.google.protobuf.Api.prototype.getMethodsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Method>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Method, 2));
};


/** @param {Array.<!proto.google.protobuf.Method>|undefined} value  */
proto.google.protobuf.Api.prototype.setMethodsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.google.protobuf.Api.prototype.clearMethodsList = function() {
  this.setMethodsList([]);
};


/**
 * repeated Option options = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Option>}
 */
proto.google.protobuf.Api.prototype.getOptionsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Option, 3));
};


/** @param {Array.<!proto.google.protobuf.Option>|undefined} value  */
proto.google.protobuf.Api.prototype.setOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.google.protobuf.Api.prototype.clearOptionsList = function() {
  this.setOptionsList([]);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.google.protobuf.Api.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.google.protobuf.Api.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional SourceContext source_context = 5;
 * @return {proto.google.protobuf.SourceContext}
 */
proto.google.protobuf.Api.prototype.getSourceContext = function() {
  return /** @type{proto.google.protobuf.SourceContext} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.SourceContext, 5));
};


/** @param {proto.google.protobuf.SourceContext|undefined} value  */
proto.google.protobuf.Api.prototype.setSourceContext = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.google.protobuf.Api.prototype.clearSourceContext = function() {
  this.setSourceContext(undefined);
};


/**
 * repeated Mixin mixins = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Mixin>}
 */
proto.google.protobuf.Api.prototype.getMixinsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Mixin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Mixin, 6));
};


/** @param {Array.<!proto.google.protobuf.Mixin>|undefined} value  */
proto.google.protobuf.Api.prototype.setMixinsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


proto.google.protobuf.Api.prototype.clearMixinsList = function() {
  this.setMixinsList([]);
};


/**
 * optional Syntax syntax = 7;
 * @return {!proto.google.protobuf.Syntax}
 */
proto.google.protobuf.Api.prototype.getSyntax = function() {
  return /** @type {!proto.google.protobuf.Syntax} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {!proto.google.protobuf.Syntax} value  */
proto.google.protobuf.Api.prototype.setSyntax = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Method = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.Method.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.Method, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Method.displayName = 'proto.google.protobuf.Method';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.Method.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Method.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Method.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Method} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Method.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    requestTypeUrl: msg.getRequestTypeUrl(),
    requestStreaming: msg.getRequestStreaming(),
    responseTypeUrl: msg.getResponseTypeUrl(),
    responseStreaming: msg.getResponseStreaming(),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.google.protobuf.Option.toObject, includeInstance),
    syntax: msg.getSyntax()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Method}
 */
proto.google.protobuf.Method.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Method;
  return proto.google.protobuf.Method.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Method} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Method}
 */
proto.google.protobuf.Method.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestTypeUrl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestStreaming(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseTypeUrl(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResponseStreaming(value);
      break;
    case 6:
      var value = new proto.google.protobuf.Option;
      reader.readMessage(value,proto.google.protobuf.Option.deserializeBinaryFromReader);
      msg.getOptionsList().push(value);
      break;
    case 7:
      var value = /** @type {!proto.google.protobuf.Syntax} */ (reader.readEnum());
      msg.setSyntax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Method} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Method.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Method.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Method.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRequestTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getRequestStreaming();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getResponseTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getResponseStreaming();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = this.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.Option.serializeBinaryToWriter
    );
  }
  f = this.getSyntax();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Method} The clone.
 */
proto.google.protobuf.Method.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Method} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.Method.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Method.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string request_type_url = 2;
 * @return {string}
 */
proto.google.protobuf.Method.prototype.getRequestTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.google.protobuf.Method.prototype.setRequestTypeUrl = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool request_streaming = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.Method.prototype.getRequestStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 3, false));
};


/** @param {boolean} value  */
proto.google.protobuf.Method.prototype.setRequestStreaming = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string response_type_url = 4;
 * @return {string}
 */
proto.google.protobuf.Method.prototype.getResponseTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.google.protobuf.Method.prototype.setResponseTypeUrl = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool response_streaming = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.Method.prototype.getResponseStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 5, false));
};


/** @param {boolean} value  */
proto.google.protobuf.Method.prototype.setResponseStreaming = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * repeated Option options = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Option>}
 */
proto.google.protobuf.Method.prototype.getOptionsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Option, 6));
};


/** @param {Array.<!proto.google.protobuf.Option>|undefined} value  */
proto.google.protobuf.Method.prototype.setOptionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


proto.google.protobuf.Method.prototype.clearOptionsList = function() {
  this.setOptionsList([]);
};


/**
 * optional Syntax syntax = 7;
 * @return {!proto.google.protobuf.Syntax}
 */
proto.google.protobuf.Method.prototype.getSyntax = function() {
  return /** @type {!proto.google.protobuf.Syntax} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {!proto.google.protobuf.Syntax} value  */
proto.google.protobuf.Method.prototype.setSyntax = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Mixin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Mixin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Mixin.displayName = 'proto.google.protobuf.Mixin';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Mixin.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Mixin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Mixin} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Mixin.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    root: msg.getRoot()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Mixin}
 */
proto.google.protobuf.Mixin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Mixin;
  return proto.google.protobuf.Mixin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Mixin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Mixin}
 */
proto.google.protobuf.Mixin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Mixin} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Mixin.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Mixin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Mixin.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRoot();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Mixin} The clone.
 */
proto.google.protobuf.Mixin.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Mixin} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.Mixin.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Mixin.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string root = 2;
 * @return {string}
 */
proto.google.protobuf.Mixin.prototype.getRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.google.protobuf.Mixin.prototype.setRoot = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FileDescriptorSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.FileDescriptorSet.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileDescriptorSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FileDescriptorSet.displayName = 'proto.google.protobuf.FileDescriptorSet';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileDescriptorSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorSet.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileDescriptorSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileDescriptorSet} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileList: jspb.Message.toObjectList(msg.getFileList(),
    proto.google.protobuf.FileDescriptorProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FileDescriptorSet}
 */
proto.google.protobuf.FileDescriptorSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileDescriptorSet;
  return proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileDescriptorSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileDescriptorSet}
 */
proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.FileDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader);
      msg.getFileList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileDescriptorSet} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FileDescriptorSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FileDescriptorSet.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.FileDescriptorSet} The clone.
 */
proto.google.protobuf.FileDescriptorSet.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.FileDescriptorSet} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated FileDescriptorProto file = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.FileDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorSet.prototype.getFileList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FileDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FileDescriptorProto, 1));
};


/** @param {Array.<!proto.google.protobuf.FileDescriptorProto>|undefined} value  */
proto.google.protobuf.FileDescriptorSet.prototype.setFileList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.google.protobuf.FileDescriptorSet.prototype.clearFileList = function() {
  this.setFileList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FileDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.FileDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FileDescriptorProto.displayName = 'proto.google.protobuf.FileDescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileDescriptorProto.repeatedFields_ = [3,10,11,4,5,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.FileDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    pb_package: jspb.Message.getField(msg, 2),
    dependencyList: jspb.Message.getField(msg, 3),
    publicDependencyList: jspb.Message.getField(msg, 10),
    weakDependencyList: jspb.Message.getField(msg, 11),
    messageTypeList: jspb.Message.toObjectList(msg.getMessageTypeList(),
    proto.google.protobuf.DescriptorProto.toObject, includeInstance),
    enumTypeList: jspb.Message.toObjectList(msg.getEnumTypeList(),
    proto.google.protobuf.EnumDescriptorProto.toObject, includeInstance),
    serviceList: jspb.Message.toObjectList(msg.getServiceList(),
    proto.google.protobuf.ServiceDescriptorProto.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.FileOptions.toObject(includeInstance, f),
    sourceCodeInfo: (f = msg.getSourceCodeInfo()) && proto.google.protobuf.SourceCodeInfo.toObject(includeInstance, f),
    syntax: jspb.Message.getField(msg, 12)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileDescriptorProto;
  return proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.getDependencyList().push(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getPublicDependencyList().push(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getWeakDependencyList().push(value);
      break;
    case 4:
      var value = new proto.google.protobuf.DescriptorProto;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader);
      msg.getMessageTypeList().push(value);
      break;
    case 5:
      var value = new proto.google.protobuf.EnumDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader);
      msg.getEnumTypeList().push(value);
      break;
    case 6:
      var value = new proto.google.protobuf.ServiceDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader);
      msg.getServiceList().push(value);
      break;
    case 7:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.getExtensionList().push(value);
      break;
    case 8:
      var value = new proto.google.protobuf.FileOptions;
      reader.readMessage(value,proto.google.protobuf.FileOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 9:
      var value = new proto.google.protobuf.SourceCodeInfo;
      reader.readMessage(value,proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader);
      msg.setSourceCodeInfo(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSyntax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FileDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FileDescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPackage();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = this.getPublicDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      10,
      f
    );
  }
  f = this.getWeakDependencyList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      11,
      f
    );
  }
  f = this.getMessageTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.DescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getEnumTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getServiceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getOptions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.FileOptions.serializeBinaryToWriter
    );
  }
  f = this.getSourceCodeInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter
    );
  }
  f = this.getSyntax();
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.FileDescriptorProto} The clone.
 */
proto.google.protobuf.FileDescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.FileDescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string package = 2;
 * @return {string?}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getPackage = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setPackage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearPackage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * repeated string dependency = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getDependencyList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {Array.<string>|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setDependencyList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearDependencyList = function() {
  jspb.Message.setField(this, 3, []);
};


/**
 * repeated int32 public_dependency = 10;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getPublicDependencyList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 10));
};


/** @param {Array.<number>|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setPublicDependencyList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearPublicDependencyList = function() {
  jspb.Message.setField(this, 10, []);
};


/**
 * repeated int32 weak_dependency = 11;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getWeakDependencyList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 11));
};


/** @param {Array.<number>|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setWeakDependencyList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearWeakDependencyList = function() {
  jspb.Message.setField(this, 11, []);
};


/**
 * repeated DescriptorProto message_type = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.DescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getMessageTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 4));
};


/** @param {Array.<!proto.google.protobuf.DescriptorProto>|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setMessageTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearMessageTypeList = function() {
  this.setMessageTypeList([]);
};


/**
 * repeated EnumDescriptorProto enum_type = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.EnumDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getEnumTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 5));
};


/** @param {Array.<!proto.google.protobuf.EnumDescriptorProto>|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setEnumTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearEnumTypeList = function() {
  this.setEnumTypeList([]);
};


/**
 * repeated ServiceDescriptorProto service = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.ServiceDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getServiceList = function() {
  return /** @type{!Array.<!proto.google.protobuf.ServiceDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.ServiceDescriptorProto, 6));
};


/** @param {Array.<!proto.google.protobuf.ServiceDescriptorProto>|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setServiceList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearServiceList = function() {
  this.setServiceList([]);
};


/**
 * repeated FieldDescriptorProto extension = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getExtensionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 7));
};


/** @param {Array.<!proto.google.protobuf.FieldDescriptorProto>|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setExtensionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearExtensionList = function() {
  this.setExtensionList([]);
};


/**
 * optional FileOptions options = 8;
 * @return {proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getOptions = function() {
  return /** @type{proto.google.protobuf.FileOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FileOptions, 8));
};


/** @param {proto.google.protobuf.FileOptions|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * optional SourceCodeInfo source_code_info = 9;
 * @return {proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getSourceCodeInfo = function() {
  return /** @type{proto.google.protobuf.SourceCodeInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.SourceCodeInfo, 9));
};


/** @param {proto.google.protobuf.SourceCodeInfo|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setSourceCodeInfo = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearSourceCodeInfo = function() {
  this.setSourceCodeInfo(undefined);
};


/**
 * optional string syntax = 12;
 * @return {string?}
 */
proto.google.protobuf.FileDescriptorProto.prototype.getSyntax = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 12));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileDescriptorProto.prototype.setSyntax = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.google.protobuf.FileDescriptorProto.prototype.clearSyntax = function() {
  jspb.Message.setField(this, 12, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.DescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.DescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.DescriptorProto.displayName = 'proto.google.protobuf.DescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.DescriptorProto.repeatedFields_ = [2,6,3,4,5,8,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    fieldList: jspb.Message.toObjectList(msg.getFieldList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto.google.protobuf.FieldDescriptorProto.toObject, includeInstance),
    nestedTypeList: jspb.Message.toObjectList(msg.getNestedTypeList(),
    proto.google.protobuf.DescriptorProto.toObject, includeInstance),
    enumTypeList: jspb.Message.toObjectList(msg.getEnumTypeList(),
    proto.google.protobuf.EnumDescriptorProto.toObject, includeInstance),
    extensionRangeList: jspb.Message.toObjectList(msg.getExtensionRangeList(),
    proto.google.protobuf.DescriptorProto.ExtensionRange.toObject, includeInstance),
    oneofDeclList: jspb.Message.toObjectList(msg.getOneofDeclList(),
    proto.google.protobuf.OneofDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.MessageOptions.toObject(includeInstance, f),
    reservedRangeList: jspb.Message.toObjectList(msg.getReservedRangeList(),
    proto.google.protobuf.DescriptorProto.ReservedRange.toObject, includeInstance),
    reservedNameList: jspb.Message.getField(msg, 10)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto;
  return proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto}
 */
proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.getFieldList().push(value);
      break;
    case 6:
      var value = new proto.google.protobuf.FieldDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader);
      msg.getExtensionList().push(value);
      break;
    case 3:
      var value = new proto.google.protobuf.DescriptorProto;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader);
      msg.getNestedTypeList().push(value);
      break;
    case 4:
      var value = new proto.google.protobuf.EnumDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader);
      msg.getEnumTypeList().push(value);
      break;
    case 5:
      var value = new proto.google.protobuf.DescriptorProto.ExtensionRange;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader);
      msg.getExtensionRangeList().push(value);
      break;
    case 8:
      var value = new proto.google.protobuf.OneofDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader);
      msg.getOneofDeclList().push(value);
      break;
    case 7:
      var value = new proto.google.protobuf.MessageOptions;
      reader.readMessage(value,proto.google.protobuf.MessageOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 9:
      var value = new proto.google.protobuf.DescriptorProto.ReservedRange;
      reader.readMessage(value,proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader);
      msg.getReservedRangeList().push(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.getReservedNameList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.DescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getFieldList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getNestedTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.protobuf.DescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getEnumTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getExtensionRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter
    );
  }
  f = this.getOneofDeclList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getOptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.protobuf.MessageOptions.serializeBinaryToWriter
    );
  }
  f = this.getReservedRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter
    );
  }
  f = this.getReservedNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.DescriptorProto} The clone.
 */
proto.google.protobuf.DescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.DescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.DescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * repeated FieldDescriptorProto field = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getFieldList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 2));
};


/** @param {Array.<!proto.google.protobuf.FieldDescriptorProto>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setFieldList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearFieldList = function() {
  this.setFieldList([]);
};


/**
 * repeated FieldDescriptorProto extension = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.FieldDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getExtensionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FieldDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 6));
};


/** @param {Array.<!proto.google.protobuf.FieldDescriptorProto>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setExtensionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearExtensionList = function() {
  this.setExtensionList([]);
};


/**
 * repeated DescriptorProto nested_type = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.DescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getNestedTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 3));
};


/** @param {Array.<!proto.google.protobuf.DescriptorProto>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setNestedTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearNestedTypeList = function() {
  this.setNestedTypeList([]);
};


/**
 * repeated EnumDescriptorProto enum_type = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.EnumDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getEnumTypeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 4));
};


/** @param {Array.<!proto.google.protobuf.EnumDescriptorProto>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setEnumTypeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearEnumTypeList = function() {
  this.setEnumTypeList([]);
};


/**
 * repeated ExtensionRange extension_range = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.DescriptorProto.ExtensionRange>}
 */
proto.google.protobuf.DescriptorProto.prototype.getExtensionRangeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto.ExtensionRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ExtensionRange, 5));
};


/** @param {Array.<!proto.google.protobuf.DescriptorProto.ExtensionRange>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setExtensionRangeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearExtensionRangeList = function() {
  this.setExtensionRangeList([]);
};


/**
 * repeated OneofDescriptorProto oneof_decl = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.OneofDescriptorProto>}
 */
proto.google.protobuf.DescriptorProto.prototype.getOneofDeclList = function() {
  return /** @type{!Array.<!proto.google.protobuf.OneofDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.OneofDescriptorProto, 8));
};


/** @param {Array.<!proto.google.protobuf.OneofDescriptorProto>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setOneofDeclList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearOneofDeclList = function() {
  this.setOneofDeclList([]);
};


/**
 * optional MessageOptions options = 7;
 * @return {proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.DescriptorProto.prototype.getOptions = function() {
  return /** @type{proto.google.protobuf.MessageOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.MessageOptions, 7));
};


/** @param {proto.google.protobuf.MessageOptions|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * repeated ReservedRange reserved_range = 9;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.DescriptorProto.ReservedRange>}
 */
proto.google.protobuf.DescriptorProto.prototype.getReservedRangeList = function() {
  return /** @type{!Array.<!proto.google.protobuf.DescriptorProto.ReservedRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ReservedRange, 9));
};


/** @param {Array.<!proto.google.protobuf.DescriptorProto.ReservedRange>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setReservedRangeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


proto.google.protobuf.DescriptorProto.prototype.clearReservedRangeList = function() {
  this.setReservedRangeList([]);
};


/**
 * repeated string reserved_name = 10;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.protobuf.DescriptorProto.prototype.getReservedNameList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 10));
};


/** @param {Array.<string>|undefined} value  */
proto.google.protobuf.DescriptorProto.prototype.setReservedNameList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


proto.google.protobuf.DescriptorProto.prototype.clearReservedNameList = function() {
  jspb.Message.setField(this, 10, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.DescriptorProto.ExtensionRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto.ExtensionRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.DescriptorProto.ExtensionRange.displayName = 'proto.google.protobuf.DescriptorProto.ExtensionRange';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.ExtensionRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getField(msg, 1),
    end: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto.ExtensionRange;
  return proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto.ExtensionRange} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStart();
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getEnd();
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.DescriptorProto.ExtensionRange} The clone.
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.DescriptorProto.ExtensionRange} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 start = 1;
 * @return {number?}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getStart = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setStart = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearStart = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional int32 end = 2;
 * @return {number?}
 */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getEnd = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.DescriptorProto.ReservedRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.DescriptorProto.ReservedRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.DescriptorProto.ReservedRange.displayName = 'proto.google.protobuf.DescriptorProto.ReservedRange';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DescriptorProto.ReservedRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getField(msg, 1),
    end: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DescriptorProto.ReservedRange;
  return proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DescriptorProto.ReservedRange} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStart();
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getEnd();
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.DescriptorProto.ReservedRange} The clone.
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.DescriptorProto.ReservedRange} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 start = 1;
 * @return {number?}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getStart = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setStart = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearStart = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional int32 end = 2;
 * @return {number?}
 */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getEnd = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FieldDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.FieldDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FieldDescriptorProto.displayName = 'proto.google.protobuf.FieldDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FieldDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FieldDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.FieldDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    number: jspb.Message.getField(msg, 3),
    label: jspb.Message.getField(msg, 4),
    type: jspb.Message.getField(msg, 5),
    typeName: jspb.Message.getField(msg, 6),
    extendee: jspb.Message.getField(msg, 2),
    defaultValue: jspb.Message.getField(msg, 7),
    oneofIndex: jspb.Message.getField(msg, 9),
    jsonName: jspb.Message.getField(msg, 10),
    options: (f = msg.getOptions()) && proto.google.protobuf.FieldOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FieldDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FieldDescriptorProto;
  return proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FieldDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FieldDescriptorProto}
 */
proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 4:
      var value = /** @type {!proto.google.protobuf.FieldDescriptorProto.Label} */ (reader.readEnum());
      msg.setLabel(value);
      break;
    case 5:
      var value = /** @type {!proto.google.protobuf.FieldDescriptorProto.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtendee(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOneofIndex(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setJsonName(value);
      break;
    case 8:
      var value = new proto.google.protobuf.FieldOptions;
      reader.readMessage(value,proto.google.protobuf.FieldOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FieldDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FieldDescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getNumber();
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getLabel();
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = this.getType();
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = this.getTypeName();
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getExtendee();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getDefaultValue();
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getOneofIndex();
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = this.getJsonName();
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = this.getOptions();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.FieldOptions.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.FieldDescriptorProto} The clone.
 */
proto.google.protobuf.FieldDescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.FieldDescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional int32 number = 3;
 * @return {number?}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getNumber = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearNumber = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional Label label = 4;
 * @return {proto.google.protobuf.FieldDescriptorProto.Label}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getLabel = function() {
  return /** @type {proto.google.protobuf.FieldDescriptorProto.Label} */ (jspb.Message.getField(this, 4));
};


/** @param {proto.google.protobuf.FieldDescriptorProto.Label|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setLabel = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearLabel = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * optional Type type = 5;
 * @return {proto.google.protobuf.FieldDescriptorProto.Type}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getType = function() {
  return /** @type {proto.google.protobuf.FieldDescriptorProto.Type} */ (jspb.Message.getField(this, 5));
};


/** @param {proto.google.protobuf.FieldDescriptorProto.Type|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setType = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearType = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * optional string type_name = 6;
 * @return {string?}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getTypeName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 6));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setTypeName = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearTypeName = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * optional string extendee = 2;
 * @return {string?}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getExtendee = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setExtendee = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearExtendee = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional string default_value = 7;
 * @return {string?}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getDefaultValue = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 7));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setDefaultValue = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearDefaultValue = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * optional int32 oneof_index = 9;
 * @return {number?}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getOneofIndex = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 9));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setOneofIndex = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearOneofIndex = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * optional string json_name = 10;
 * @return {string?}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getJsonName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 10));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setJsonName = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearJsonName = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * optional FieldOptions options = 8;
 * @return {proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldDescriptorProto.prototype.getOptions = function() {
  return /** @type{proto.google.protobuf.FieldOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FieldOptions, 8));
};


/** @param {proto.google.protobuf.FieldOptions|undefined} value  */
proto.google.protobuf.FieldDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.google.protobuf.FieldDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * @enum {number}
 */
proto.google.protobuf.FieldDescriptorProto.Type = {
  TYPE_DOUBLE: 1,
  TYPE_FLOAT: 2,
  TYPE_INT64: 3,
  TYPE_UINT64: 4,
  TYPE_INT32: 5,
  TYPE_FIXED64: 6,
  TYPE_FIXED32: 7,
  TYPE_BOOL: 8,
  TYPE_STRING: 9,
  TYPE_GROUP: 10,
  TYPE_MESSAGE: 11,
  TYPE_BYTES: 12,
  TYPE_UINT32: 13,
  TYPE_ENUM: 14,
  TYPE_SFIXED32: 15,
  TYPE_SFIXED64: 16,
  TYPE_SINT32: 17,
  TYPE_SINT64: 18
};

/**
 * @enum {number}
 */
proto.google.protobuf.FieldDescriptorProto.Label = {
  LABEL_OPTIONAL: 1,
  LABEL_REQUIRED: 2,
  LABEL_REPEATED: 3
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.OneofDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.OneofDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.OneofDescriptorProto.displayName = 'proto.google.protobuf.OneofDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.OneofDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.OneofDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.OneofDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.OneofDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.OneofDescriptorProto;
  return proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.OneofDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.OneofDescriptorProto}
 */
proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.OneofDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.OneofDescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.OneofDescriptorProto} The clone.
 */
proto.google.protobuf.OneofDescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.OneofDescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.OneofDescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.OneofDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.OneofDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.EnumDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumDescriptorProto.displayName = 'proto.google.protobuf.EnumDescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumDescriptorProto.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.EnumDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.google.protobuf.EnumValueDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.EnumOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumDescriptorProto;
  return proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumDescriptorProto}
 */
proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.EnumValueDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader);
      msg.getValueList().push(value);
      break;
    case 3:
      var value = new proto.google.protobuf.EnumOptions;
      reader.readMessage(value,proto.google.protobuf.EnumOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumDescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.EnumOptions.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.EnumDescriptorProto} The clone.
 */
proto.google.protobuf.EnumDescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.EnumDescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.EnumDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * repeated EnumValueDescriptorProto value = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.EnumValueDescriptorProto>}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getValueList = function() {
  return /** @type{!Array.<!proto.google.protobuf.EnumValueDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumValueDescriptorProto, 2));
};


/** @param {Array.<!proto.google.protobuf.EnumValueDescriptorProto>|undefined} value  */
proto.google.protobuf.EnumDescriptorProto.prototype.setValueList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearValueList = function() {
  this.setValueList([]);
};


/**
 * optional EnumOptions options = 3;
 * @return {proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumDescriptorProto.prototype.getOptions = function() {
  return /** @type{proto.google.protobuf.EnumOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.EnumOptions, 3));
};


/** @param {proto.google.protobuf.EnumOptions|undefined} value  */
proto.google.protobuf.EnumDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.protobuf.EnumDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumValueDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.EnumValueDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumValueDescriptorProto.displayName = 'proto.google.protobuf.EnumValueDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumValueDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.EnumValueDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    number: jspb.Message.getField(msg, 2),
    options: (f = msg.getOptions()) && proto.google.protobuf.EnumValueOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumValueDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumValueDescriptorProto;
  return proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto}
 */
proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 3:
      var value = new proto.google.protobuf.EnumValueOptions;
      reader.readMessage(value,proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumValueDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getNumber();
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.EnumValueDescriptorProto} The clone.
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.EnumValueDescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.EnumValueDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional int32 number = 2;
 * @return {number?}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getNumber = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.EnumValueDescriptorProto.prototype.clearNumber = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional EnumValueOptions options = 3;
 * @return {proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueDescriptorProto.prototype.getOptions = function() {
  return /** @type{proto.google.protobuf.EnumValueOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.EnumValueOptions, 3));
};


/** @param {proto.google.protobuf.EnumValueOptions|undefined} value  */
proto.google.protobuf.EnumValueDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.protobuf.EnumValueDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.ServiceDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.ServiceDescriptorProto.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ServiceDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.ServiceDescriptorProto.displayName = 'proto.google.protobuf.ServiceDescriptorProto';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ServiceDescriptorProto.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ServiceDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ServiceDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.ServiceDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    methodList: jspb.Message.toObjectList(msg.getMethodList(),
    proto.google.protobuf.MethodDescriptorProto.toObject, includeInstance),
    options: (f = msg.getOptions()) && proto.google.protobuf.ServiceOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ServiceDescriptorProto;
  return proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ServiceDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ServiceDescriptorProto}
 */
proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.protobuf.MethodDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader);
      msg.getMethodList().push(value);
      break;
    case 3:
      var value = new proto.google.protobuf.ServiceOptions;
      reader.readMessage(value,proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ServiceDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMethodList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter
    );
  }
  f = this.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.ServiceOptions.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.ServiceDescriptorProto} The clone.
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.ServiceDescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.ServiceDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.ServiceDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * repeated MethodDescriptorProto method = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.MethodDescriptorProto>}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getMethodList = function() {
  return /** @type{!Array.<!proto.google.protobuf.MethodDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.MethodDescriptorProto, 2));
};


/** @param {Array.<!proto.google.protobuf.MethodDescriptorProto>|undefined} value  */
proto.google.protobuf.ServiceDescriptorProto.prototype.setMethodList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.google.protobuf.ServiceDescriptorProto.prototype.clearMethodList = function() {
  this.setMethodList([]);
};


/**
 * optional ServiceOptions options = 3;
 * @return {proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceDescriptorProto.prototype.getOptions = function() {
  return /** @type{proto.google.protobuf.ServiceOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.ServiceOptions, 3));
};


/** @param {proto.google.protobuf.ServiceOptions|undefined} value  */
proto.google.protobuf.ServiceDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.protobuf.ServiceDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.MethodDescriptorProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.MethodDescriptorProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.MethodDescriptorProto.displayName = 'proto.google.protobuf.MethodDescriptorProto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MethodDescriptorProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MethodDescriptorProto} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.MethodDescriptorProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    inputType: jspb.Message.getField(msg, 2),
    outputType: jspb.Message.getField(msg, 3),
    options: (f = msg.getOptions()) && proto.google.protobuf.MethodOptions.toObject(includeInstance, f),
    clientStreaming: jspb.Message.getField(msg, 5) != null ? jspb.Message.getField(msg, 5) : false,
    serverStreaming: jspb.Message.getField(msg, 6) != null ? jspb.Message.getField(msg, 6) : false
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.MethodDescriptorProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MethodDescriptorProto;
  return proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MethodDescriptorProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MethodDescriptorProto}
 */
proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputType(value);
      break;
    case 4:
      var value = new proto.google.protobuf.MethodOptions;
      reader.readMessage(value,proto.google.protobuf.MethodOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClientStreaming(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setServerStreaming(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MethodDescriptorProto} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.MethodDescriptorProto.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getInputType();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getOutputType();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.protobuf.MethodOptions.serializeBinaryToWriter
    );
  }
  f = this.getClientStreaming();
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = this.getServerStreaming();
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.MethodDescriptorProto} The clone.
 */
proto.google.protobuf.MethodDescriptorProto.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.MethodDescriptorProto} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.MethodDescriptorProto.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string input_type = 2;
 * @return {string?}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getInputType = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.MethodDescriptorProto.prototype.setInputType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearInputType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional string output_type = 3;
 * @return {string?}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getOutputType = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.MethodDescriptorProto.prototype.setOutputType = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearOutputType = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional MethodOptions options = 4;
 * @return {proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getOptions = function() {
  return /** @type{proto.google.protobuf.MethodOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.MethodOptions, 4));
};


/** @param {proto.google.protobuf.MethodOptions|undefined} value  */
proto.google.protobuf.MethodDescriptorProto.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * optional bool client_streaming = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getClientStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 5) != null ? jspb.Message.getField(this, 5) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.MethodDescriptorProto.prototype.setClientStreaming = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearClientStreaming = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * optional bool server_streaming = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MethodDescriptorProto.prototype.getServerStreaming = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 6) != null ? jspb.Message.getField(this, 6) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.MethodDescriptorProto.prototype.setServerStreaming = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.MethodDescriptorProto.prototype.clearServerStreaming = function() {
  jspb.Message.setField(this, 6, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FileOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1000, proto.google.protobuf.FileOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FileOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FileOptions.displayName = 'proto.google.protobuf.FileOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FileOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FileOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FileOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FileOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.FileOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    javaPackage: jspb.Message.getField(msg, 1),
    javaOuterClassname: jspb.Message.getField(msg, 8),
    javaMultipleFiles: jspb.Message.getField(msg, 10) != null ? jspb.Message.getField(msg, 10) : false,
    javaGenerateEqualsAndHash: jspb.Message.getField(msg, 20) != null ? jspb.Message.getField(msg, 20) : false,
    javaStringCheckUtf8: jspb.Message.getField(msg, 27) != null ? jspb.Message.getField(msg, 27) : false,
    optimizeFor: jspb.Message.getField(msg, 9) != null ? jspb.Message.getField(msg, 9) : 1,
    goPackage: jspb.Message.getField(msg, 11),
    ccGenericServices: jspb.Message.getField(msg, 16) != null ? jspb.Message.getField(msg, 16) : false,
    javaGenericServices: jspb.Message.getField(msg, 17) != null ? jspb.Message.getField(msg, 17) : false,
    pyGenericServices: jspb.Message.getField(msg, 18) != null ? jspb.Message.getField(msg, 18) : false,
    deprecated: jspb.Message.getField(msg, 23) != null ? jspb.Message.getField(msg, 23) : false,
    ccEnableArenas: jspb.Message.getField(msg, 31) != null ? jspb.Message.getField(msg, 31) : false,
    objcClassPrefix: jspb.Message.getField(msg, 36),
    csharpNamespace: jspb.Message.getField(msg, 37),
    javananoUseDeprecatedPackage: jspb.Message.getField(msg, 38),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.FileOptions.extensions, proto.google.protobuf.FileOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FileOptions;
  return proto.google.protobuf.FileOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FileOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FileOptions}
 */
proto.google.protobuf.FileOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJavaPackage(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setJavaOuterClassname(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaMultipleFiles(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaGenerateEqualsAndHash(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaStringCheckUtf8(value);
      break;
    case 9:
      var value = /** @type {!proto.google.protobuf.FileOptions.OptimizeMode} */ (reader.readEnum());
      msg.setOptimizeFor(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoPackage(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCcGenericServices(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavaGenericServices(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPyGenericServices(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 31:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCcEnableArenas(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjcClassPrefix(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.setCsharpNamespace(value);
      break;
    case 38:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJavananoUseDeprecatedPackage(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.getUninterpretedOptionList().push(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.FileOptions.extensions,
        proto.google.protobuf.FileOptions.prototype.getExtension,
        proto.google.protobuf.FileOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FileOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FileOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FileOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FileOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getJavaPackage();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getJavaOuterClassname();
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getJavaMultipleFiles();
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = this.getJavaGenerateEqualsAndHash();
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = this.getJavaStringCheckUtf8();
  if (f != null) {
    writer.writeBool(
      27,
      f
    );
  }
  f = this.getOptimizeFor();
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = this.getGoPackage();
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = this.getCcGenericServices();
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = this.getJavaGenericServices();
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = this.getPyGenericServices();
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = this.getDeprecated();
  if (f != null) {
    writer.writeBool(
      23,
      f
    );
  }
  f = this.getCcEnableArenas();
  if (f != null) {
    writer.writeBool(
      31,
      f
    );
  }
  f = this.getObjcClassPrefix();
  if (f != null) {
    writer.writeString(
      36,
      f
    );
  }
  f = this.getCsharpNamespace();
  if (f != null) {
    writer.writeString(
      37,
      f
    );
  }
  f = this.getJavananoUseDeprecatedPackage();
  if (f != null) {
    writer.writeBool(
      38,
      f
    );
  }
  f = this.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(this, writer, proto.google.protobuf.FileOptions.extensions,
    proto.google.protobuf.FileOptions.prototype.getExtension);
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.FileOptions} The clone.
 */
proto.google.protobuf.FileOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.FileOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string java_package = 1;
 * @return {string?}
 */
proto.google.protobuf.FileOptions.prototype.getJavaPackage = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setJavaPackage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaPackage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string java_outer_classname = 8;
 * @return {string?}
 */
proto.google.protobuf.FileOptions.prototype.getJavaOuterClassname = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 8));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setJavaOuterClassname = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaOuterClassname = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * optional bool java_multiple_files = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaMultipleFiles = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 10) != null ? jspb.Message.getField(this, 10) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setJavaMultipleFiles = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaMultipleFiles = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * optional bool java_generate_equals_and_hash = 20;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaGenerateEqualsAndHash = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 20) != null ? jspb.Message.getField(this, 20) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setJavaGenerateEqualsAndHash = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaGenerateEqualsAndHash = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * optional bool java_string_check_utf8 = 27;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaStringCheckUtf8 = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 27) != null ? jspb.Message.getField(this, 27) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setJavaStringCheckUtf8 = function(value) {
  jspb.Message.setField(this, 27, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaStringCheckUtf8 = function() {
  jspb.Message.setField(this, 27, undefined);
};


/**
 * optional OptimizeMode optimize_for = 9;
 * @return {proto.google.protobuf.FileOptions.OptimizeMode}
 */
proto.google.protobuf.FileOptions.prototype.getOptimizeFor = function() {
  return /** @type {proto.google.protobuf.FileOptions.OptimizeMode} */ (jspb.Message.getField(this, 9) != null ? jspb.Message.getField(this, 9) : 1);
};


/** @param {proto.google.protobuf.FileOptions.OptimizeMode|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setOptimizeFor = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.google.protobuf.FileOptions.prototype.clearOptimizeFor = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * optional string go_package = 11;
 * @return {string?}
 */
proto.google.protobuf.FileOptions.prototype.getGoPackage = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 11));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setGoPackage = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.google.protobuf.FileOptions.prototype.clearGoPackage = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * optional bool cc_generic_services = 16;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getCcGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 16) != null ? jspb.Message.getField(this, 16) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setCcGenericServices = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.google.protobuf.FileOptions.prototype.clearCcGenericServices = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * optional bool java_generic_services = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getJavaGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 17) != null ? jspb.Message.getField(this, 17) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setJavaGenericServices = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavaGenericServices = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * optional bool py_generic_services = 18;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getPyGenericServices = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 18) != null ? jspb.Message.getField(this, 18) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setPyGenericServices = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.google.protobuf.FileOptions.prototype.clearPyGenericServices = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * optional bool deprecated = 23;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 23) != null ? jspb.Message.getField(this, 23) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.google.protobuf.FileOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * optional bool cc_enable_arenas = 31;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FileOptions.prototype.getCcEnableArenas = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 31) != null ? jspb.Message.getField(this, 31) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setCcEnableArenas = function(value) {
  jspb.Message.setField(this, 31, value);
};


proto.google.protobuf.FileOptions.prototype.clearCcEnableArenas = function() {
  jspb.Message.setField(this, 31, undefined);
};


/**
 * optional string objc_class_prefix = 36;
 * @return {string?}
 */
proto.google.protobuf.FileOptions.prototype.getObjcClassPrefix = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 36));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setObjcClassPrefix = function(value) {
  jspb.Message.setField(this, 36, value);
};


proto.google.protobuf.FileOptions.prototype.clearObjcClassPrefix = function() {
  jspb.Message.setField(this, 36, undefined);
};


/**
 * optional string csharp_namespace = 37;
 * @return {string?}
 */
proto.google.protobuf.FileOptions.prototype.getCsharpNamespace = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 37));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setCsharpNamespace = function(value) {
  jspb.Message.setField(this, 37, value);
};


proto.google.protobuf.FileOptions.prototype.clearCsharpNamespace = function() {
  jspb.Message.setField(this, 37, undefined);
};


/**
 * optional bool javanano_use_deprecated_package = 38;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.google.protobuf.FileOptions.prototype.getJavananoUseDeprecatedPackage = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 38));
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setJavananoUseDeprecatedPackage = function(value) {
  jspb.Message.setField(this, 38, value);
};


proto.google.protobuf.FileOptions.prototype.clearJavananoUseDeprecatedPackage = function() {
  jspb.Message.setField(this, 38, undefined);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.FileOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption>|undefined} value  */
proto.google.protobuf.FileOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


proto.google.protobuf.FileOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.FileOptions.extensions = {};

/**
 * @enum {number}
 */
proto.google.protobuf.FileOptions.OptimizeMode = {
  SPEED: 1,
  CODE_SIZE: 2,
  LITE_RUNTIME: 3
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.MessageOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1000, proto.google.protobuf.MessageOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.MessageOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.MessageOptions.displayName = 'proto.google.protobuf.MessageOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.MessageOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MessageOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MessageOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MessageOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.MessageOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageSetWireFormat: jspb.Message.getField(msg, 1) != null ? jspb.Message.getField(msg, 1) : false,
    noStandardDescriptorAccessor: jspb.Message.getField(msg, 2) != null ? jspb.Message.getField(msg, 2) : false,
    deprecated: jspb.Message.getField(msg, 3) != null ? jspb.Message.getField(msg, 3) : false,
    mapEntry: jspb.Message.getField(msg, 7),
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.MessageOptions.extensions, proto.google.protobuf.MessageOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.MessageOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MessageOptions;
  return proto.google.protobuf.MessageOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MessageOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MessageOptions}
 */
proto.google.protobuf.MessageOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMessageSetWireFormat(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoStandardDescriptorAccessor(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMapEntry(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.getUninterpretedOptionList().push(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.MessageOptions.extensions,
        proto.google.protobuf.MessageOptions.prototype.getExtension,
        proto.google.protobuf.MessageOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MessageOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.MessageOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MessageOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.MessageOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMessageSetWireFormat();
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getNoStandardDescriptorAccessor();
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = this.getDeprecated();
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getMapEntry();
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = this.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(this, writer, proto.google.protobuf.MessageOptions.extensions,
    proto.google.protobuf.MessageOptions.prototype.getExtension);
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.MessageOptions} The clone.
 */
proto.google.protobuf.MessageOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.MessageOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool message_set_wire_format = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getMessageSetWireFormat = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 1) != null ? jspb.Message.getField(this, 1) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.MessageOptions.prototype.setMessageSetWireFormat = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.MessageOptions.prototype.clearMessageSetWireFormat = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional bool no_standard_descriptor_accessor = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getNoStandardDescriptorAccessor = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 2) != null ? jspb.Message.getField(this, 2) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.MessageOptions.prototype.setNoStandardDescriptorAccessor = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.MessageOptions.prototype.clearNoStandardDescriptorAccessor = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional bool deprecated = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MessageOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 3) != null ? jspb.Message.getField(this, 3) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.MessageOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.MessageOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional bool map_entry = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.google.protobuf.MessageOptions.prototype.getMapEntry = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 7));
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.MessageOptions.prototype.setMapEntry = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.google.protobuf.MessageOptions.prototype.clearMapEntry = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.MessageOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption>|undefined} value  */
proto.google.protobuf.MessageOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


proto.google.protobuf.MessageOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.MessageOptions.extensions = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FieldOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1000, proto.google.protobuf.FieldOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FieldOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FieldOptions.displayName = 'proto.google.protobuf.FieldOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FieldOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FieldOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FieldOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FieldOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.FieldOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    ctype: jspb.Message.getField(msg, 1) != null ? jspb.Message.getField(msg, 1) : 0,
    packed: jspb.Message.getField(msg, 2),
    jstype: jspb.Message.getField(msg, 6) != null ? jspb.Message.getField(msg, 6) : 0,
    lazy: jspb.Message.getField(msg, 5) != null ? jspb.Message.getField(msg, 5) : false,
    deprecated: jspb.Message.getField(msg, 3) != null ? jspb.Message.getField(msg, 3) : false,
    weak: jspb.Message.getField(msg, 10) != null ? jspb.Message.getField(msg, 10) : false,
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.FieldOptions.extensions, proto.google.protobuf.FieldOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FieldOptions;
  return proto.google.protobuf.FieldOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FieldOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FieldOptions}
 */
proto.google.protobuf.FieldOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.FieldOptions.CType} */ (reader.readEnum());
      msg.setCtype(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPacked(value);
      break;
    case 6:
      var value = /** @type {!proto.google.protobuf.FieldOptions.JSType} */ (reader.readEnum());
      msg.setJstype(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLazy(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWeak(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.getUninterpretedOptionList().push(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.FieldOptions.extensions,
        proto.google.protobuf.FieldOptions.prototype.getExtension,
        proto.google.protobuf.FieldOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FieldOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FieldOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FieldOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FieldOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCtype();
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getPacked();
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = this.getJstype();
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = this.getLazy();
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = this.getDeprecated();
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getWeak();
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = this.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(this, writer, proto.google.protobuf.FieldOptions.extensions,
    proto.google.protobuf.FieldOptions.prototype.getExtension);
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.FieldOptions} The clone.
 */
proto.google.protobuf.FieldOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.FieldOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional CType ctype = 1;
 * @return {proto.google.protobuf.FieldOptions.CType}
 */
proto.google.protobuf.FieldOptions.prototype.getCtype = function() {
  return /** @type {proto.google.protobuf.FieldOptions.CType} */ (jspb.Message.getField(this, 1) != null ? jspb.Message.getField(this, 1) : 0);
};


/** @param {proto.google.protobuf.FieldOptions.CType|undefined} value  */
proto.google.protobuf.FieldOptions.prototype.setCtype = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.FieldOptions.prototype.clearCtype = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional bool packed = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.google.protobuf.FieldOptions.prototype.getPacked = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 2));
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FieldOptions.prototype.setPacked = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.FieldOptions.prototype.clearPacked = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional JSType jstype = 6;
 * @return {proto.google.protobuf.FieldOptions.JSType}
 */
proto.google.protobuf.FieldOptions.prototype.getJstype = function() {
  return /** @type {proto.google.protobuf.FieldOptions.JSType} */ (jspb.Message.getField(this, 6) != null ? jspb.Message.getField(this, 6) : 0);
};


/** @param {proto.google.protobuf.FieldOptions.JSType|undefined} value  */
proto.google.protobuf.FieldOptions.prototype.setJstype = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.FieldOptions.prototype.clearJstype = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * optional bool lazy = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getLazy = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 5) != null ? jspb.Message.getField(this, 5) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FieldOptions.prototype.setLazy = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.FieldOptions.prototype.clearLazy = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * optional bool deprecated = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 3) != null ? jspb.Message.getField(this, 3) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FieldOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.FieldOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional bool weak = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.FieldOptions.prototype.getWeak = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 10) != null ? jspb.Message.getField(this, 10) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.FieldOptions.prototype.setWeak = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.google.protobuf.FieldOptions.prototype.clearWeak = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.FieldOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption>|undefined} value  */
proto.google.protobuf.FieldOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


proto.google.protobuf.FieldOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.FieldOptions.extensions = {};

/**
 * @enum {number}
 */
proto.google.protobuf.FieldOptions.CType = {
  STRING: 0,
  CORD: 1,
  STRING_PIECE: 2
};

/**
 * @enum {number}
 */
proto.google.protobuf.FieldOptions.JSType = {
  JS_NORMAL: 0,
  JS_STRING: 1,
  JS_NUMBER: 2
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1000, proto.google.protobuf.EnumOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumOptions.displayName = 'proto.google.protobuf.EnumOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.EnumOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowAlias: jspb.Message.getField(msg, 2),
    deprecated: jspb.Message.getField(msg, 3) != null ? jspb.Message.getField(msg, 3) : false,
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.EnumOptions.extensions, proto.google.protobuf.EnumOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumOptions;
  return proto.google.protobuf.EnumOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumOptions}
 */
proto.google.protobuf.EnumOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowAlias(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.getUninterpretedOptionList().push(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.EnumOptions.extensions,
        proto.google.protobuf.EnumOptions.prototype.getExtension,
        proto.google.protobuf.EnumOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAllowAlias();
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = this.getDeprecated();
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(this, writer, proto.google.protobuf.EnumOptions.extensions,
    proto.google.protobuf.EnumOptions.prototype.getExtension);
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.EnumOptions} The clone.
 */
proto.google.protobuf.EnumOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.EnumOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool allow_alias = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.google.protobuf.EnumOptions.prototype.getAllowAlias = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 2));
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.EnumOptions.prototype.setAllowAlias = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.EnumOptions.prototype.clearAllowAlias = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional bool deprecated = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.EnumOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 3) != null ? jspb.Message.getField(this, 3) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.EnumOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.EnumOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.EnumOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption>|undefined} value  */
proto.google.protobuf.EnumOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


proto.google.protobuf.EnumOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.EnumOptions.extensions = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.EnumValueOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1000, proto.google.protobuf.EnumValueOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.EnumValueOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.EnumValueOptions.displayName = 'proto.google.protobuf.EnumValueOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.EnumValueOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.EnumValueOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.EnumValueOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.EnumValueOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.EnumValueOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getField(msg, 1) != null ? jspb.Message.getField(msg, 1) : false,
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.EnumValueOptions.extensions, proto.google.protobuf.EnumValueOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.EnumValueOptions;
  return proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.EnumValueOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.EnumValueOptions}
 */
proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.getUninterpretedOptionList().push(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.EnumValueOptions.extensions,
        proto.google.protobuf.EnumValueOptions.prototype.getExtension,
        proto.google.protobuf.EnumValueOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.EnumValueOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.EnumValueOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.EnumValueOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeprecated();
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = this.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(this, writer, proto.google.protobuf.EnumValueOptions.extensions,
    proto.google.protobuf.EnumValueOptions.prototype.getExtension);
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.EnumValueOptions} The clone.
 */
proto.google.protobuf.EnumValueOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.EnumValueOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool deprecated = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.EnumValueOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 1) != null ? jspb.Message.getField(this, 1) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.EnumValueOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.EnumValueOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.EnumValueOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption>|undefined} value  */
proto.google.protobuf.EnumValueOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


proto.google.protobuf.EnumValueOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.EnumValueOptions.extensions = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.ServiceOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1000, proto.google.protobuf.ServiceOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ServiceOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.ServiceOptions.displayName = 'proto.google.protobuf.ServiceOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ServiceOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ServiceOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ServiceOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ServiceOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.ServiceOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getField(msg, 33) != null ? jspb.Message.getField(msg, 33) : false,
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.ServiceOptions.extensions, proto.google.protobuf.ServiceOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ServiceOptions;
  return proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ServiceOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ServiceOptions}
 */
proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.getUninterpretedOptionList().push(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.ServiceOptions.extensions,
        proto.google.protobuf.ServiceOptions.prototype.getExtension,
        proto.google.protobuf.ServiceOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ServiceOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.ServiceOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ServiceOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.ServiceOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeprecated();
  if (f != null) {
    writer.writeBool(
      33,
      f
    );
  }
  f = this.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(this, writer, proto.google.protobuf.ServiceOptions.extensions,
    proto.google.protobuf.ServiceOptions.prototype.getExtension);
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.ServiceOptions} The clone.
 */
proto.google.protobuf.ServiceOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.ServiceOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool deprecated = 33;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.ServiceOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 33) != null ? jspb.Message.getField(this, 33) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.ServiceOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 33, value);
};


proto.google.protobuf.ServiceOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 33, undefined);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.ServiceOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption>|undefined} value  */
proto.google.protobuf.ServiceOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


proto.google.protobuf.ServiceOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.ServiceOptions.extensions = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.MethodOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1000, proto.google.protobuf.MethodOptions.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.MethodOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.MethodOptions.displayName = 'proto.google.protobuf.MethodOptions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.MethodOptions.repeatedFields_ = [999];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.MethodOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.MethodOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.MethodOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.MethodOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    deprecated: jspb.Message.getField(msg, 33) != null ? jspb.Message.getField(msg, 33) : false,
    uninterpretedOptionList: jspb.Message.toObjectList(msg.getUninterpretedOptionList(),
    proto.google.protobuf.UninterpretedOption.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.google.protobuf.MethodOptions.extensions, proto.google.protobuf.MethodOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.MethodOptions;
  return proto.google.protobuf.MethodOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.MethodOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.MethodOptions}
 */
proto.google.protobuf.MethodOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 33:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeprecated(value);
      break;
    case 999:
      var value = new proto.google.protobuf.UninterpretedOption;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader);
      msg.getUninterpretedOptionList().push(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.google.protobuf.MethodOptions.extensions,
        proto.google.protobuf.MethodOptions.prototype.getExtension,
        proto.google.protobuf.MethodOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.MethodOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.MethodOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.MethodOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.MethodOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeprecated();
  if (f != null) {
    writer.writeBool(
      33,
      f
    );
  }
  f = this.getUninterpretedOptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      999,
      f,
      proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(this, writer, proto.google.protobuf.MethodOptions.extensions,
    proto.google.protobuf.MethodOptions.prototype.getExtension);
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.MethodOptions} The clone.
 */
proto.google.protobuf.MethodOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.MethodOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool deprecated = 33;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.MethodOptions.prototype.getDeprecated = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 33) != null ? jspb.Message.getField(this, 33) : false);
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.MethodOptions.prototype.setDeprecated = function(value) {
  jspb.Message.setField(this, 33, value);
};


proto.google.protobuf.MethodOptions.prototype.clearDeprecated = function() {
  jspb.Message.setField(this, 33, undefined);
};


/**
 * repeated UninterpretedOption uninterpreted_option = 999;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption>}
 */
proto.google.protobuf.MethodOptions.prototype.getUninterpretedOptionList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption>|undefined} value  */
proto.google.protobuf.MethodOptions.prototype.setUninterpretedOptionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 999, value);
};


proto.google.protobuf.MethodOptions.prototype.clearUninterpretedOptionList = function() {
  this.setUninterpretedOptionList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object.<number, jspb.ExtensionFieldInfo>}
 */
proto.google.protobuf.MethodOptions.extensions = {};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.UninterpretedOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.UninterpretedOption.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.UninterpretedOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.UninterpretedOption.displayName = 'proto.google.protobuf.UninterpretedOption';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.UninterpretedOption.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UninterpretedOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UninterpretedOption} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    nameList: jspb.Message.toObjectList(msg.getNameList(),
    proto.google.protobuf.UninterpretedOption.NamePart.toObject, includeInstance),
    identifierValue: jspb.Message.getField(msg, 3),
    positiveIntValue: jspb.Message.getField(msg, 4),
    negativeIntValue: jspb.Message.getField(msg, 5),
    doubleValue: jspb.Message.getField(msg, 6),
    stringValue: jspb.Message.getField(msg, 7),
    aggregateValue: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.UninterpretedOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UninterpretedOption;
  return proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UninterpretedOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UninterpretedOption}
 */
proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.protobuf.UninterpretedOption.NamePart;
      reader.readMessage(value,proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader);
      msg.getNameList().push(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifierValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPositiveIntValue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNegativeIntValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readBytes());
      msg.setStringValue(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UninterpretedOption} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.UninterpretedOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UninterpretedOption.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNameList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter
    );
  }
  f = this.getIdentifierValue();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getPositiveIntValue();
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = this.getNegativeIntValue();
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = this.getDoubleValue();
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = this.getStringValue();
  if (f != null) {
    writer.writeBytesRawString(
      7,
      f
    );
  }
  f = this.getAggregateValue();
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.UninterpretedOption} The clone.
 */
proto.google.protobuf.UninterpretedOption.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.UninterpretedOption} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated NamePart name = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.UninterpretedOption.NamePart>}
 */
proto.google.protobuf.UninterpretedOption.prototype.getNameList = function() {
  return /** @type{!Array.<!proto.google.protobuf.UninterpretedOption.NamePart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption.NamePart, 2));
};


/** @param {Array.<!proto.google.protobuf.UninterpretedOption.NamePart>|undefined} value  */
proto.google.protobuf.UninterpretedOption.prototype.setNameList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearNameList = function() {
  this.setNameList([]);
};


/**
 * optional string identifier_value = 3;
 * @return {string?}
 */
proto.google.protobuf.UninterpretedOption.prototype.getIdentifierValue = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.UninterpretedOption.prototype.setIdentifierValue = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearIdentifierValue = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional uint64 positive_int_value = 4;
 * @return {number?}
 */
proto.google.protobuf.UninterpretedOption.prototype.getPositiveIntValue = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.UninterpretedOption.prototype.setPositiveIntValue = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearPositiveIntValue = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * optional int64 negative_int_value = 5;
 * @return {number?}
 */
proto.google.protobuf.UninterpretedOption.prototype.getNegativeIntValue = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.UninterpretedOption.prototype.setNegativeIntValue = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearNegativeIntValue = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * optional double double_value = 6;
 * @return {number?}
 */
proto.google.protobuf.UninterpretedOption.prototype.getDoubleValue = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.UninterpretedOption.prototype.setDoubleValue = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearDoubleValue = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * optional bytes string_value = 7;
 * @return {string?}
 */
proto.google.protobuf.UninterpretedOption.prototype.getStringValue = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 7));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.UninterpretedOption.prototype.setStringValue = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearStringValue = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * optional string aggregate_value = 8;
 * @return {string?}
 */
proto.google.protobuf.UninterpretedOption.prototype.getAggregateValue = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 8));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.UninterpretedOption.prototype.setAggregateValue = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.google.protobuf.UninterpretedOption.prototype.clearAggregateValue = function() {
  jspb.Message.setField(this, 8, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.UninterpretedOption.NamePart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.UninterpretedOption.NamePart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.UninterpretedOption.NamePart.displayName = 'proto.google.protobuf.UninterpretedOption.NamePart';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UninterpretedOption.NamePart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.UninterpretedOption.NamePart.toObject = function(includeInstance, msg) {
  var f, obj = {
    namePart: jspb.Message.getField(msg, 1),
    isExtension: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UninterpretedOption.NamePart;
  return proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart}
 */
proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamePart(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExtension(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UninterpretedOption.NamePart} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNamePart();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getIsExtension();
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.UninterpretedOption.NamePart} The clone.
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.UninterpretedOption.NamePart} */ (jspb.Message.cloneMessage(this));
};


/**
 * required string name_part = 1;
 * @return {string}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.getNamePart = function() {
  return /** @type {string} */ (jspb.Message.getField(this, 1));
};


/** @param {string|undefined} value  */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.setNamePart = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearNamePart = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * required bool is_extension = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.getIsExtension = function() {
  return /** @type {boolean} */ (jspb.Message.getField(this, 2));
};


/** @param {boolean|undefined} value  */
proto.google.protobuf.UninterpretedOption.NamePart.prototype.setIsExtension = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearIsExtension = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.SourceCodeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.SourceCodeInfo.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.SourceCodeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.SourceCodeInfo.displayName = 'proto.google.protobuf.SourceCodeInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.SourceCodeInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.SourceCodeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.SourceCodeInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationList: jspb.Message.toObjectList(msg.getLocationList(),
    proto.google.protobuf.SourceCodeInfo.Location.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.SourceCodeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.SourceCodeInfo;
  return proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.SourceCodeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.SourceCodeInfo}
 */
proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.SourceCodeInfo.Location;
      reader.readMessage(value,proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader);
      msg.getLocationList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.SourceCodeInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.SourceCodeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.SourceCodeInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLocationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.SourceCodeInfo} The clone.
 */
proto.google.protobuf.SourceCodeInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.SourceCodeInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Location location = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.SourceCodeInfo.Location>}
 */
proto.google.protobuf.SourceCodeInfo.prototype.getLocationList = function() {
  return /** @type{!Array.<!proto.google.protobuf.SourceCodeInfo.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.SourceCodeInfo.Location, 1));
};


/** @param {Array.<!proto.google.protobuf.SourceCodeInfo.Location>|undefined} value  */
proto.google.protobuf.SourceCodeInfo.prototype.setLocationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.google.protobuf.SourceCodeInfo.prototype.clearLocationList = function() {
  this.setLocationList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.SourceCodeInfo.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.SourceCodeInfo.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.SourceCodeInfo.Location.displayName = 'proto.google.protobuf.SourceCodeInfo.Location';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_ = [1,2,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.SourceCodeInfo.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.SourceCodeInfo.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathList: jspb.Message.getField(msg, 1),
    spanList: jspb.Message.getField(msg, 2),
    leadingComments: jspb.Message.getField(msg, 3),
    trailingComments: jspb.Message.getField(msg, 4),
    leadingDetachedCommentsList: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.SourceCodeInfo.Location;
  return proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location}
 */
proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setPathList(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setSpanList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeadingComments(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrailingComments(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.getLeadingDetachedCommentsList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.SourceCodeInfo.Location} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPathList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
  f = this.getSpanList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = this.getLeadingComments();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getTrailingComments();
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getLeadingDetachedCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.SourceCodeInfo.Location} The clone.
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.SourceCodeInfo.Location} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated int32 path = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getPathList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<number>|undefined} value  */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setPathList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearPathList = function() {
  jspb.Message.setField(this, 1, []);
};


/**
 * repeated int32 span = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getSpanList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<number>|undefined} value  */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setSpanList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearSpanList = function() {
  jspb.Message.setField(this, 2, []);
};


/**
 * optional string leading_comments = 3;
 * @return {string?}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingComments = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingComments = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingComments = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional string trailing_comments = 4;
 * @return {string?}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getTrailingComments = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setTrailingComments = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearTrailingComments = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * repeated string leading_detached_comments = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingDetachedCommentsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 6));
};


/** @param {Array.<string>|undefined} value  */
proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingDetachedCommentsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingDetachedCommentsList = function() {
  jspb.Message.setField(this, 6, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.compiler.CodeGeneratorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.compiler.CodeGeneratorRequest.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.compiler.CodeGeneratorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.compiler.CodeGeneratorRequest.displayName = 'proto.google.protobuf.compiler.CodeGeneratorRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.repeatedFields_ = [1,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.compiler.CodeGeneratorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.compiler.CodeGeneratorRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileToGenerateList: jspb.Message.getField(msg, 1),
    parameter: jspb.Message.getField(msg, 2),
    protoFileList: jspb.Message.toObjectList(msg.getProtoFileList(),
    proto.google.protobuf.FileDescriptorProto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.compiler.CodeGeneratorRequest;
  return proto.google.protobuf.compiler.CodeGeneratorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.getFileToGenerateList().push(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameter(value);
      break;
    case 15:
      var value = new proto.google.protobuf.FileDescriptorProto;
      reader.readMessage(value,proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader);
      msg.getProtoFileList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFileToGenerateList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = this.getParameter();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getProtoFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} The clone.
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.compiler.CodeGeneratorRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated string file_to_generate = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.getFileToGenerateList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<string>|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.setFileToGenerateList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.clearFileToGenerateList = function() {
  jspb.Message.setField(this, 1, []);
};


/**
 * optional string parameter = 2;
 * @return {string?}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.getParameter = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.setParameter = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.clearParameter = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * repeated google.protobuf.FileDescriptorProto proto_file = 15;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.FileDescriptorProto>}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.getProtoFileList = function() {
  return /** @type{!Array.<!proto.google.protobuf.FileDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.FileDescriptorProto, 15));
};


/** @param {Array.<!proto.google.protobuf.FileDescriptorProto>|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.setProtoFileList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 15, value);
};


proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.clearProtoFileList = function() {
  this.setProtoFileList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.compiler.CodeGeneratorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.compiler.CodeGeneratorResponse.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.compiler.CodeGeneratorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.compiler.CodeGeneratorResponse.displayName = 'proto.google.protobuf.compiler.CodeGeneratorResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.compiler.CodeGeneratorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getField(msg, 1),
    fileList: jspb.Message.toObjectList(msg.getFileList(),
    proto.google.protobuf.compiler.CodeGeneratorResponse.File.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.compiler.CodeGeneratorResponse;
  return proto.google.protobuf.compiler.CodeGeneratorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 15:
      var value = new proto.google.protobuf.compiler.CodeGeneratorResponse.File;
      reader.readMessage(value,proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinaryFromReader);
      msg.getFileList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getError();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.google.protobuf.compiler.CodeGeneratorResponse.File.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse} The clone.
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.compiler.CodeGeneratorResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string error = 1;
 * @return {string?}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.getError = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.clearError = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * repeated File file = 15;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.compiler.CodeGeneratorResponse.File>}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.getFileList = function() {
  return /** @type{!Array.<!proto.google.protobuf.compiler.CodeGeneratorResponse.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.compiler.CodeGeneratorResponse.File, 15));
};


/** @param {Array.<!proto.google.protobuf.compiler.CodeGeneratorResponse.File>|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.setFileList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 15, value);
};


proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.clearFileList = function() {
  this.setFileList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.compiler.CodeGeneratorResponse.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.compiler.CodeGeneratorResponse.File.displayName = 'proto.google.protobuf.compiler.CodeGeneratorResponse.File';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.compiler.CodeGeneratorResponse.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    insertionPoint: jspb.Message.getField(msg, 2),
    content: jspb.Message.getField(msg, 15)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.compiler.CodeGeneratorResponse.File;
  return proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsertionPoint(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getInsertionPoint();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getContent();
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} The clone.
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string insertion_point = 2;
 * @return {string?}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.getInsertionPoint = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.setInsertionPoint = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.clearInsertionPoint = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional string content = 15;
 * @return {string?}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.getContent = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 15));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.setContent = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.clearContent = function() {
  jspb.Message.setField(this, 15, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Duration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Duration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Duration.displayName = 'proto.google.protobuf.Duration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Duration.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Duration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Duration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Duration.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: msg.getSeconds(),
    nanos: msg.getNanos()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Duration}
 */
proto.google.protobuf.Duration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Duration;
  return proto.google.protobuf.Duration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Duration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Duration}
 */
proto.google.protobuf.Duration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Duration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Duration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Duration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Duration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSeconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Duration} The clone.
 */
proto.google.protobuf.Duration.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Duration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.google.protobuf.Duration.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.Duration.prototype.setSeconds = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.google.protobuf.Duration.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.google.protobuf.Duration.prototype.setNanos = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Empty.displayName = 'proto.google.protobuf.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Empty} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Empty;
  return proto.google.protobuf.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Empty}
 */
proto.google.protobuf.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Empty} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Empty.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Empty.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Empty} The clone.
 */
proto.google.protobuf.Empty.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Empty} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FieldMask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.FieldMask.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.FieldMask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FieldMask.displayName = 'proto.google.protobuf.FieldMask';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.FieldMask.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FieldMask.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FieldMask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FieldMask} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.FieldMask.toObject = function(includeInstance, msg) {
  var f, obj = {
    pathsList: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FieldMask}
 */
proto.google.protobuf.FieldMask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FieldMask;
  return proto.google.protobuf.FieldMask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FieldMask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FieldMask}
 */
proto.google.protobuf.FieldMask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.getPathsList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FieldMask} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FieldMask.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FieldMask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FieldMask.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.FieldMask} The clone.
 */
proto.google.protobuf.FieldMask.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.FieldMask} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated string paths = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.protobuf.FieldMask.prototype.getPathsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<string>} value  */
proto.google.protobuf.FieldMask.prototype.setPathsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Struct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.Struct.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.Struct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Struct.displayName = 'proto.google.protobuf.Struct';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.Struct.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Struct.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Struct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Struct} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Struct.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.google.protobuf.Struct.FieldsEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Struct}
 */
proto.google.protobuf.Struct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Struct;
  return proto.google.protobuf.Struct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Struct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Struct}
 */
proto.google.protobuf.Struct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Struct.FieldsEntry;
      reader.readMessage(value,proto.google.protobuf.Struct.FieldsEntry.deserializeBinaryFromReader);
      msg.getFieldsList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Struct} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Struct.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Struct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Struct.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.Struct.FieldsEntry.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Struct} The clone.
 */
proto.google.protobuf.Struct.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Struct} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated FieldsEntry fields = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Struct.FieldsEntry>}
 */
proto.google.protobuf.Struct.prototype.getFieldsList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Struct.FieldsEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Struct.FieldsEntry, 1));
};


/** @param {Array.<!proto.google.protobuf.Struct.FieldsEntry>|undefined} value  */
proto.google.protobuf.Struct.prototype.setFieldsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.google.protobuf.Struct.prototype.clearFieldsList = function() {
  this.setFieldsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Struct.FieldsEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Struct.FieldsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Struct.FieldsEntry.displayName = 'proto.google.protobuf.Struct.FieldsEntry';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Struct.FieldsEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Struct.FieldsEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Struct.FieldsEntry} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Struct.FieldsEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey(),
    value: (f = msg.getValue()) && proto.google.protobuf.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Struct.FieldsEntry}
 */
proto.google.protobuf.Struct.FieldsEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Struct.FieldsEntry;
  return proto.google.protobuf.Struct.FieldsEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Struct.FieldsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Struct.FieldsEntry}
 */
proto.google.protobuf.Struct.FieldsEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Value;
      reader.readMessage(value,proto.google.protobuf.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Struct.FieldsEntry} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Struct.FieldsEntry.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Struct.FieldsEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Struct.FieldsEntry.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.Value.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Struct.FieldsEntry} The clone.
 */
proto.google.protobuf.Struct.FieldsEntry.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Struct.FieldsEntry} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.google.protobuf.Struct.FieldsEntry.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.Struct.FieldsEntry.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Value value = 2;
 * @return {proto.google.protobuf.Value}
 */
proto.google.protobuf.Struct.FieldsEntry.prototype.getValue = function() {
  return /** @type{proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Value, 2));
};


/** @param {proto.google.protobuf.Value|undefined} value  */
proto.google.protobuf.Struct.FieldsEntry.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.google.protobuf.Struct.FieldsEntry.prototype.clearValue = function() {
  this.setValue(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.protobuf.Value.oneofGroups_);
};
goog.inherits(proto.google.protobuf.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Value.displayName = 'proto.google.protobuf.Value';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.protobuf.Value.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.google.protobuf.Value.KindCase = {
  KIND_NOT_SET: 0,
  NULL_VALUE: 1,
  NUMBER_VALUE: 2,
  STRING_VALUE: 3,
  BOOL_VALUE: 4,
  STRUCT_VALUE: 5,
  LIST_VALUE: 6
};

/**
 * @return {proto.google.protobuf.Value.KindCase}
 */
proto.google.protobuf.Value.prototype.getKindCase = function() {
  return /** @type {proto.google.protobuf.Value.KindCase} */(jspb.Message.computeOneofCase(this, proto.google.protobuf.Value.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Value} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    nullValue: jspb.Message.getField(msg, 1),
    numberValue: jspb.Message.getField(msg, 2),
    stringValue: jspb.Message.getField(msg, 3),
    boolValue: jspb.Message.getField(msg, 4),
    structValue: (f = msg.getStructValue()) && proto.google.protobuf.Struct.toObject(includeInstance, f),
    listValue: (f = msg.getListValue()) && proto.google.protobuf.ListValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Value}
 */
proto.google.protobuf.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Value;
  return proto.google.protobuf.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Value}
 */
proto.google.protobuf.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.NullValue} */ (reader.readEnum());
      msg.setNullValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNumberValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 5:
      var value = new proto.google.protobuf.Struct;
      reader.readMessage(value,proto.google.protobuf.Struct.deserializeBinaryFromReader);
      msg.setStructValue(value);
      break;
    case 6:
      var value = new proto.google.protobuf.ListValue;
      reader.readMessage(value,proto.google.protobuf.ListValue.deserializeBinaryFromReader);
      msg.setListValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Value} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Value.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Value.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNullValue();
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getNumberValue();
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = this.getStringValue();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getBoolValue();
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = this.getStructValue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.protobuf.Struct.serializeBinaryToWriter
    );
  }
  f = this.getListValue();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.protobuf.ListValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Value} The clone.
 */
proto.google.protobuf.Value.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Value} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional NullValue null_value = 1;
 * @return {proto.google.protobuf.NullValue}
 */
proto.google.protobuf.Value.prototype.getNullValue = function() {
  return /** @type {proto.google.protobuf.NullValue} */ (jspb.Message.getField(this, 1));
};


/** @param {proto.google.protobuf.NullValue|undefined} value  */
proto.google.protobuf.Value.prototype.setNullValue = function(value) {
  jspb.Message.setOneofField(this, 1, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearNullValue = function() {
  jspb.Message.setOneofField(this, 1, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * optional double number_value = 2;
 * @return {number?}
 */
proto.google.protobuf.Value.prototype.getNumberValue = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.google.protobuf.Value.prototype.setNumberValue = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearNumberValue = function() {
  jspb.Message.setOneofField(this, 2, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * optional string string_value = 3;
 * @return {string?}
 */
proto.google.protobuf.Value.prototype.getStringValue = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.google.protobuf.Value.prototype.setStringValue = function(value) {
  jspb.Message.setOneofField(this, 3, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearStringValue = function() {
  jspb.Message.setOneofField(this, 3, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * optional bool bool_value = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.google.protobuf.Value.prototype.getBoolValue = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 4));
};


/** @param {boolean?|undefined} value  */
proto.google.protobuf.Value.prototype.setBoolValue = function(value) {
  jspb.Message.setOneofField(this, 4, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearBoolValue = function() {
  jspb.Message.setOneofField(this, 4, proto.google.protobuf.Value.oneofGroups_[0], undefined);
};


/**
 * optional Struct struct_value = 5;
 * @return {proto.google.protobuf.Struct}
 */
proto.google.protobuf.Value.prototype.getStructValue = function() {
  return /** @type{proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Struct, 5));
};


/** @param {proto.google.protobuf.Struct|undefined} value  */
proto.google.protobuf.Value.prototype.setStructValue = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearStructValue = function() {
  this.setStructValue(undefined);
};


/**
 * optional ListValue list_value = 6;
 * @return {proto.google.protobuf.ListValue}
 */
proto.google.protobuf.Value.prototype.getListValue = function() {
  return /** @type{proto.google.protobuf.ListValue} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.ListValue, 6));
};


/** @param {proto.google.protobuf.ListValue|undefined} value  */
proto.google.protobuf.Value.prototype.setListValue = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.google.protobuf.Value.oneofGroups_[0], value);
};


proto.google.protobuf.Value.prototype.clearListValue = function() {
  this.setListValue(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.ListValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.ListValue.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.ListValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.ListValue.displayName = 'proto.google.protobuf.ListValue';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.ListValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.ListValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.ListValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.ListValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.ListValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.google.protobuf.Value.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.ListValue}
 */
proto.google.protobuf.ListValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.ListValue;
  return proto.google.protobuf.ListValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.ListValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.ListValue}
 */
proto.google.protobuf.ListValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Value;
      reader.readMessage(value,proto.google.protobuf.Value.deserializeBinaryFromReader);
      msg.getValuesList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.ListValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.ListValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.ListValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.ListValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.Value.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.ListValue} The clone.
 */
proto.google.protobuf.ListValue.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.ListValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Value values = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Value>}
 */
proto.google.protobuf.ListValue.prototype.getValuesList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Value, 1));
};


/** @param {Array.<!proto.google.protobuf.Value>|undefined} value  */
proto.google.protobuf.ListValue.prototype.setValuesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.google.protobuf.ListValue.prototype.clearValuesList = function() {
  this.setValuesList([]);
};


/**
 * @enum {number}
 */
proto.google.protobuf.NullValue = {
  NULL_VALUE: 0
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Timestamp.displayName = 'proto.google.protobuf.Timestamp';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: msg.getSeconds(),
    nanos: msg.getNanos()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.google.protobuf.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Timestamp;
  return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Timestamp}
 */
proto.google.protobuf.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Timestamp.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Timestamp.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSeconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Timestamp} The clone.
 */
proto.google.protobuf.Timestamp.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Timestamp} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.google.protobuf.Timestamp.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.Timestamp.prototype.setSeconds = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.google.protobuf.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.google.protobuf.Timestamp.prototype.setNanos = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.DoubleValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.DoubleValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.DoubleValue.displayName = 'proto.google.protobuf.DoubleValue';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.DoubleValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.DoubleValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.DoubleValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.DoubleValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.google.protobuf.DoubleValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.DoubleValue;
  return proto.google.protobuf.DoubleValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.DoubleValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.google.protobuf.DoubleValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.DoubleValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DoubleValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.DoubleValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.DoubleValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.DoubleValue} The clone.
 */
proto.google.protobuf.DoubleValue.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.DoubleValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.google.protobuf.DoubleValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.DoubleValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.FloatValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.FloatValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.FloatValue.displayName = 'proto.google.protobuf.FloatValue';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.FloatValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.FloatValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.FloatValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.FloatValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.FloatValue}
 */
proto.google.protobuf.FloatValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.FloatValue;
  return proto.google.protobuf.FloatValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.FloatValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.FloatValue}
 */
proto.google.protobuf.FloatValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.FloatValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FloatValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.FloatValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.FloatValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.FloatValue} The clone.
 */
proto.google.protobuf.FloatValue.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.FloatValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.google.protobuf.FloatValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.FloatValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Int64Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Int64Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Int64Value.displayName = 'proto.google.protobuf.Int64Value';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Int64Value.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Int64Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Int64Value} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Int64Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Int64Value}
 */
proto.google.protobuf.Int64Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Int64Value;
  return proto.google.protobuf.Int64Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Int64Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Int64Value}
 */
proto.google.protobuf.Int64Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Int64Value} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Int64Value.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Int64Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Int64Value.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Int64Value} The clone.
 */
proto.google.protobuf.Int64Value.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Int64Value} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.google.protobuf.Int64Value.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.Int64Value.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.UInt64Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.UInt64Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.UInt64Value.displayName = 'proto.google.protobuf.UInt64Value';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UInt64Value.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UInt64Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UInt64Value} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.UInt64Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.UInt64Value}
 */
proto.google.protobuf.UInt64Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UInt64Value;
  return proto.google.protobuf.UInt64Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UInt64Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UInt64Value}
 */
proto.google.protobuf.UInt64Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UInt64Value} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UInt64Value.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.UInt64Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UInt64Value.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.UInt64Value} The clone.
 */
proto.google.protobuf.UInt64Value.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.UInt64Value} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 value = 1;
 * @return {number}
 */
proto.google.protobuf.UInt64Value.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.UInt64Value.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.Int32Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.Int32Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.Int32Value.displayName = 'proto.google.protobuf.Int32Value';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.Int32Value.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.Int32Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.Int32Value} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.Int32Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.Int32Value}
 */
proto.google.protobuf.Int32Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.Int32Value;
  return proto.google.protobuf.Int32Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.Int32Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.Int32Value}
 */
proto.google.protobuf.Int32Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.Int32Value} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Int32Value.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.Int32Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.Int32Value.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.Int32Value} The clone.
 */
proto.google.protobuf.Int32Value.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.Int32Value} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.google.protobuf.Int32Value.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.Int32Value.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.UInt32Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.UInt32Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.UInt32Value.displayName = 'proto.google.protobuf.UInt32Value';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.UInt32Value.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.UInt32Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.UInt32Value} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.UInt32Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.UInt32Value}
 */
proto.google.protobuf.UInt32Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.UInt32Value;
  return proto.google.protobuf.UInt32Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.UInt32Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.UInt32Value}
 */
proto.google.protobuf.UInt32Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.UInt32Value} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UInt32Value.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.UInt32Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.UInt32Value.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.UInt32Value} The clone.
 */
proto.google.protobuf.UInt32Value.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.UInt32Value} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 value = 1;
 * @return {number}
 */
proto.google.protobuf.UInt32Value.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.google.protobuf.UInt32Value.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.BoolValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.BoolValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.BoolValue.displayName = 'proto.google.protobuf.BoolValue';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.BoolValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.BoolValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.BoolValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.BoolValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.BoolValue}
 */
proto.google.protobuf.BoolValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.BoolValue;
  return proto.google.protobuf.BoolValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.BoolValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.BoolValue}
 */
proto.google.protobuf.BoolValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.BoolValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.BoolValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.BoolValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.BoolValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.BoolValue} The clone.
 */
proto.google.protobuf.BoolValue.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.BoolValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bool value = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.google.protobuf.BoolValue.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1, false));
};


/** @param {boolean} value  */
proto.google.protobuf.BoolValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.StringValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.StringValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.StringValue.displayName = 'proto.google.protobuf.StringValue';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.StringValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.StringValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.StringValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.StringValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.protobuf.StringValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.StringValue;
  return proto.google.protobuf.StringValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.StringValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.protobuf.StringValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.StringValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.StringValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.StringValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.StringValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.StringValue} The clone.
 */
proto.google.protobuf.StringValue.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.StringValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.google.protobuf.StringValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.StringValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.BytesValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.BytesValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.protobuf.BytesValue.displayName = 'proto.google.protobuf.BytesValue';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.BytesValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.BytesValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.BytesValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.protobuf.BytesValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.BytesValue}
 */
proto.google.protobuf.BytesValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.BytesValue;
  return proto.google.protobuf.BytesValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.BytesValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.BytesValue}
 */
proto.google.protobuf.BytesValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.BytesValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.BytesValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.BytesValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.protobuf.BytesValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeBytesRawString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.protobuf.BytesValue} The clone.
 */
proto.google.protobuf.BytesValue.prototype.cloneMessage = function() {
  return /** @type {!proto.google.protobuf.BytesValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes value = 1;
 * @return {string}
 */
proto.google.protobuf.BytesValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.protobuf.BytesValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.Color = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.Color, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.Color.displayName = 'proto.spine.base.Color';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.Color} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    red: msg.getRed(),
    green: msg.getGreen(),
    blue: msg.getBlue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.Color}
 */
proto.spine.base.Color.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.Color;
  return proto.spine.base.Color.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.Color} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.Color}
 */
proto.spine.base.Color.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGreen(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.Color} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.Color.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.Color.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRed();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getGreen();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getBlue();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.Color} The clone.
 */
proto.spine.base.Color.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.Color} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 red = 1;
 * @return {number}
 */
proto.spine.base.Color.prototype.getRed = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.spine.base.Color.prototype.setRed = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 green = 2;
 * @return {number}
 */
proto.spine.base.Color.prototype.getGreen = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.spine.base.Color.prototype.setGreen = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 blue = 3;
 * @return {number}
 */
proto.spine.base.Color.prototype.getBlue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.spine.base.Color.prototype.setBlue = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.UserId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.UserId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.UserId.displayName = 'proto.spine.base.UserId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.UserId.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.UserId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.UserId} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.UserId.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.UserId}
 */
proto.spine.base.UserId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.UserId;
  return proto.spine.base.UserId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.UserId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.UserId}
 */
proto.spine.base.UserId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.UserId} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.UserId.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.UserId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.UserId.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.UserId} The clone.
 */
proto.spine.base.UserId.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.UserId} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.spine.base.UserId.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.base.UserId.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.time.ZoneOffset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.time.ZoneOffset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.time.ZoneOffset.displayName = 'proto.spine.time.ZoneOffset';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.time.ZoneOffset.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.time.ZoneOffset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.time.ZoneOffset} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.time.ZoneOffset.toObject = function(includeInstance, msg) {
  var f, obj = {
    amountseconds: msg.getAmountseconds(),
    id: msg.getId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.time.ZoneOffset}
 */
proto.spine.time.ZoneOffset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.time.ZoneOffset;
  return proto.spine.time.ZoneOffset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.time.ZoneOffset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.time.ZoneOffset}
 */
proto.spine.time.ZoneOffset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmountseconds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.time.ZoneOffset} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.ZoneOffset.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.time.ZoneOffset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.ZoneOffset.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAmountseconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.time.ZoneOffset} The clone.
 */
proto.spine.time.ZoneOffset.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.time.ZoneOffset} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 amountSeconds = 1;
 * @return {number}
 */
proto.spine.time.ZoneOffset.prototype.getAmountseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.spine.time.ZoneOffset.prototype.setAmountseconds = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.spine.time.ZoneOffset.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.spine.time.ZoneOffset.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.time.LocalDate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.time.LocalDate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.time.LocalDate.displayName = 'proto.spine.time.LocalDate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.time.LocalDate.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.time.LocalDate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.time.LocalDate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.time.LocalDate.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: msg.getYear(),
    month: msg.getMonth(),
    day: msg.getDay()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.time.LocalDate}
 */
proto.spine.time.LocalDate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.time.LocalDate;
  return proto.spine.time.LocalDate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.time.LocalDate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.time.LocalDate}
 */
proto.spine.time.LocalDate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {!proto.spine.time.MonthOfYear} */ (reader.readEnum());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.time.LocalDate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.LocalDate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.time.LocalDate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.LocalDate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMonth();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getDay();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.time.LocalDate} The clone.
 */
proto.spine.time.LocalDate.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.time.LocalDate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.spine.time.LocalDate.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.spine.time.LocalDate.prototype.setYear = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional MonthOfYear month = 2;
 * @return {!proto.spine.time.MonthOfYear}
 */
proto.spine.time.LocalDate.prototype.getMonth = function() {
  return /** @type {!proto.spine.time.MonthOfYear} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.spine.time.MonthOfYear} value  */
proto.spine.time.LocalDate.prototype.setMonth = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 day = 3;
 * @return {number}
 */
proto.spine.time.LocalDate.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.spine.time.LocalDate.prototype.setDay = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.time.LocalTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.time.LocalTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.time.LocalTime.displayName = 'proto.spine.time.LocalTime';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.time.LocalTime.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.time.LocalTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.time.LocalTime} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.time.LocalTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    hours: msg.getHours(),
    minutes: msg.getMinutes(),
    seconds: msg.getSeconds(),
    millis: msg.getMillis(),
    nanos: msg.getNanos()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.time.LocalTime}
 */
proto.spine.time.LocalTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.time.LocalTime;
  return proto.spine.time.LocalTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.time.LocalTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.time.LocalTime}
 */
proto.spine.time.LocalTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHours(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinutes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeconds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMillis(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.time.LocalTime} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.LocalTime.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.time.LocalTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.LocalTime.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHours();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMinutes();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getSeconds();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getMillis();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getNanos();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.time.LocalTime} The clone.
 */
proto.spine.time.LocalTime.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.time.LocalTime} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 hours = 1;
 * @return {number}
 */
proto.spine.time.LocalTime.prototype.getHours = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.spine.time.LocalTime.prototype.setHours = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 minutes = 2;
 * @return {number}
 */
proto.spine.time.LocalTime.prototype.getMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.spine.time.LocalTime.prototype.setMinutes = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 seconds = 3;
 * @return {number}
 */
proto.spine.time.LocalTime.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.spine.time.LocalTime.prototype.setSeconds = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 millis = 4;
 * @return {number}
 */
proto.spine.time.LocalTime.prototype.getMillis = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.spine.time.LocalTime.prototype.setMillis = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int64 nanos = 5;
 * @return {number}
 */
proto.spine.time.LocalTime.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.spine.time.LocalTime.prototype.setNanos = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.time.OffsetTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.time.OffsetTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.time.OffsetTime.displayName = 'proto.spine.time.OffsetTime';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.time.OffsetTime.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.time.OffsetTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.time.OffsetTime} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.time.OffsetTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && proto.spine.time.LocalTime.toObject(includeInstance, f),
    offset: (f = msg.getOffset()) && proto.spine.time.ZoneOffset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.time.OffsetTime}
 */
proto.spine.time.OffsetTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.time.OffsetTime;
  return proto.spine.time.OffsetTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.time.OffsetTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.time.OffsetTime}
 */
proto.spine.time.OffsetTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.time.LocalTime;
      reader.readMessage(value,proto.spine.time.LocalTime.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = new proto.spine.time.ZoneOffset;
      reader.readMessage(value,proto.spine.time.ZoneOffset.deserializeBinaryFromReader);
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.time.OffsetTime} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.OffsetTime.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.time.OffsetTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.OffsetTime.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.time.LocalTime.serializeBinaryToWriter
    );
  }
  f = this.getOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.time.ZoneOffset.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.time.OffsetTime} The clone.
 */
proto.spine.time.OffsetTime.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.time.OffsetTime} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LocalTime time = 1;
 * @return {proto.spine.time.LocalTime}
 */
proto.spine.time.OffsetTime.prototype.getTime = function() {
  return /** @type{proto.spine.time.LocalTime} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.LocalTime, 1));
};


/** @param {proto.spine.time.LocalTime|undefined} value  */
proto.spine.time.OffsetTime.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.time.OffsetTime.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * optional ZoneOffset offset = 2;
 * @return {proto.spine.time.ZoneOffset}
 */
proto.spine.time.OffsetTime.prototype.getOffset = function() {
  return /** @type{proto.spine.time.ZoneOffset} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.ZoneOffset, 2));
};


/** @param {proto.spine.time.ZoneOffset|undefined} value  */
proto.spine.time.OffsetTime.prototype.setOffset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.time.OffsetTime.prototype.clearOffset = function() {
  this.setOffset(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.time.OffsetDate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.time.OffsetDate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.time.OffsetDate.displayName = 'proto.spine.time.OffsetDate';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.time.OffsetDate.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.time.OffsetDate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.time.OffsetDate} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.time.OffsetDate.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && proto.spine.time.LocalDate.toObject(includeInstance, f),
    offset: (f = msg.getOffset()) && proto.spine.time.ZoneOffset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.time.OffsetDate}
 */
proto.spine.time.OffsetDate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.time.OffsetDate;
  return proto.spine.time.OffsetDate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.time.OffsetDate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.time.OffsetDate}
 */
proto.spine.time.OffsetDate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.time.LocalDate;
      reader.readMessage(value,proto.spine.time.LocalDate.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = new proto.spine.time.ZoneOffset;
      reader.readMessage(value,proto.spine.time.ZoneOffset.deserializeBinaryFromReader);
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.time.OffsetDate} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.OffsetDate.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.time.OffsetDate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.OffsetDate.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.time.LocalDate.serializeBinaryToWriter
    );
  }
  f = this.getOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.time.ZoneOffset.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.time.OffsetDate} The clone.
 */
proto.spine.time.OffsetDate.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.time.OffsetDate} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LocalDate date = 1;
 * @return {proto.spine.time.LocalDate}
 */
proto.spine.time.OffsetDate.prototype.getDate = function() {
  return /** @type{proto.spine.time.LocalDate} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.LocalDate, 1));
};


/** @param {proto.spine.time.LocalDate|undefined} value  */
proto.spine.time.OffsetDate.prototype.setDate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.time.OffsetDate.prototype.clearDate = function() {
  this.setDate(undefined);
};


/**
 * optional ZoneOffset offset = 2;
 * @return {proto.spine.time.ZoneOffset}
 */
proto.spine.time.OffsetDate.prototype.getOffset = function() {
  return /** @type{proto.spine.time.ZoneOffset} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.ZoneOffset, 2));
};


/** @param {proto.spine.time.ZoneOffset|undefined} value  */
proto.spine.time.OffsetDate.prototype.setOffset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.time.OffsetDate.prototype.clearOffset = function() {
  this.setOffset(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.time.OffsetDateTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.time.OffsetDateTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.time.OffsetDateTime.displayName = 'proto.spine.time.OffsetDateTime';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.time.OffsetDateTime.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.time.OffsetDateTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.time.OffsetDateTime} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.time.OffsetDateTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && proto.spine.time.LocalDate.toObject(includeInstance, f),
    time: (f = msg.getTime()) && proto.spine.time.LocalTime.toObject(includeInstance, f),
    offset: (f = msg.getOffset()) && proto.spine.time.ZoneOffset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.time.OffsetDateTime}
 */
proto.spine.time.OffsetDateTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.time.OffsetDateTime;
  return proto.spine.time.OffsetDateTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.time.OffsetDateTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.time.OffsetDateTime}
 */
proto.spine.time.OffsetDateTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.time.LocalDate;
      reader.readMessage(value,proto.spine.time.LocalDate.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = new proto.spine.time.LocalTime;
      reader.readMessage(value,proto.spine.time.LocalTime.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.spine.time.ZoneOffset;
      reader.readMessage(value,proto.spine.time.ZoneOffset.deserializeBinaryFromReader);
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.time.OffsetDateTime} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.OffsetDateTime.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.time.OffsetDateTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.time.OffsetDateTime.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.time.LocalDate.serializeBinaryToWriter
    );
  }
  f = this.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.time.LocalTime.serializeBinaryToWriter
    );
  }
  f = this.getOffset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.spine.time.ZoneOffset.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.time.OffsetDateTime} The clone.
 */
proto.spine.time.OffsetDateTime.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.time.OffsetDateTime} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LocalDate date = 1;
 * @return {proto.spine.time.LocalDate}
 */
proto.spine.time.OffsetDateTime.prototype.getDate = function() {
  return /** @type{proto.spine.time.LocalDate} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.LocalDate, 1));
};


/** @param {proto.spine.time.LocalDate|undefined} value  */
proto.spine.time.OffsetDateTime.prototype.setDate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.time.OffsetDateTime.prototype.clearDate = function() {
  this.setDate(undefined);
};


/**
 * optional LocalTime time = 2;
 * @return {proto.spine.time.LocalTime}
 */
proto.spine.time.OffsetDateTime.prototype.getTime = function() {
  return /** @type{proto.spine.time.LocalTime} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.LocalTime, 2));
};


/** @param {proto.spine.time.LocalTime|undefined} value  */
proto.spine.time.OffsetDateTime.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.time.OffsetDateTime.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * optional ZoneOffset offset = 3;
 * @return {proto.spine.time.ZoneOffset}
 */
proto.spine.time.OffsetDateTime.prototype.getOffset = function() {
  return /** @type{proto.spine.time.ZoneOffset} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.ZoneOffset, 3));
};


/** @param {proto.spine.time.ZoneOffset|undefined} value  */
proto.spine.time.OffsetDateTime.prototype.setOffset = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.spine.time.OffsetDateTime.prototype.clearOffset = function() {
  this.setOffset(undefined);
};


/**
 * @enum {number}
 */
proto.spine.time.MonthOfYear = {
  UNDEFINED: 0,
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.CommandId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.CommandId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.CommandId.displayName = 'proto.spine.base.CommandId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.CommandId.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.CommandId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.CommandId} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.CommandId.toObject = function(includeInstance, msg) {
  var f, obj = {
    actor: (f = msg.getActor()) && proto.spine.base.UserId.toObject(includeInstance, f),
    timestamp: (f = msg.getTimestamp()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.CommandId}
 */
proto.spine.base.CommandId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.CommandId;
  return proto.spine.base.CommandId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.CommandId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.CommandId}
 */
proto.spine.base.CommandId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.base.UserId;
      reader.readMessage(value,proto.spine.base.UserId.deserializeBinaryFromReader);
      msg.setActor(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.CommandId} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.CommandId.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.CommandId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.CommandId.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getActor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.base.UserId.serializeBinaryToWriter
    );
  }
  f = this.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.CommandId} The clone.
 */
proto.spine.base.CommandId.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.CommandId} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional UserId actor = 1;
 * @return {proto.spine.base.UserId}
 */
proto.spine.base.CommandId.prototype.getActor = function() {
  return /** @type{proto.spine.base.UserId} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.UserId, 1));
};


/** @param {proto.spine.base.UserId|undefined} value  */
proto.spine.base.CommandId.prototype.setActor = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.base.CommandId.prototype.clearActor = function() {
  this.setActor(undefined);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.spine.base.CommandId.prototype.getTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.spine.base.CommandId.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.base.CommandId.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.CommandContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.CommandContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.CommandContext.displayName = 'proto.spine.base.CommandContext';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.CommandContext.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.CommandContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.CommandContext} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.CommandContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandId: (f = msg.getCommandId()) && proto.spine.base.CommandId.toObject(includeInstance, f),
    zoneOffset: (f = msg.getZoneOffset()) && proto.spine.time.ZoneOffset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.CommandContext}
 */
proto.spine.base.CommandContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.CommandContext;
  return proto.spine.base.CommandContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.CommandContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.CommandContext}
 */
proto.spine.base.CommandContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.base.CommandId;
      reader.readMessage(value,proto.spine.base.CommandId.deserializeBinaryFromReader);
      msg.setCommandId(value);
      break;
    case 2:
      var value = new proto.spine.time.ZoneOffset;
      reader.readMessage(value,proto.spine.time.ZoneOffset.deserializeBinaryFromReader);
      msg.setZoneOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.CommandContext} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.CommandContext.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.CommandContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.CommandContext.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCommandId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.base.CommandId.serializeBinaryToWriter
    );
  }
  f = this.getZoneOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.time.ZoneOffset.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.CommandContext} The clone.
 */
proto.spine.base.CommandContext.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.CommandContext} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional CommandId command_id = 1;
 * @return {proto.spine.base.CommandId}
 */
proto.spine.base.CommandContext.prototype.getCommandId = function() {
  return /** @type{proto.spine.base.CommandId} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.CommandId, 1));
};


/** @param {proto.spine.base.CommandId|undefined} value  */
proto.spine.base.CommandContext.prototype.setCommandId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.base.CommandContext.prototype.clearCommandId = function() {
  this.setCommandId(undefined);
};


/**
 * optional spine.time.ZoneOffset zone_offset = 2;
 * @return {proto.spine.time.ZoneOffset}
 */
proto.spine.base.CommandContext.prototype.getZoneOffset = function() {
  return /** @type{proto.spine.time.ZoneOffset} */ (
    jspb.Message.getWrapperField(this, proto.spine.time.ZoneOffset, 2));
};


/** @param {proto.spine.time.ZoneOffset|undefined} value  */
proto.spine.base.CommandContext.prototype.setZoneOffset = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.base.CommandContext.prototype.clearZoneOffset = function() {
  this.setZoneOffset(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.users.Domain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.users.Domain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.users.Domain.displayName = 'proto.spine.users.Domain';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.users.Domain.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.users.Domain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.users.Domain} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.users.Domain.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.users.Domain}
 */
proto.spine.users.Domain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.users.Domain;
  return proto.spine.users.Domain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.users.Domain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.users.Domain}
 */
proto.spine.users.Domain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.users.Domain} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.users.Domain.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.users.Domain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.users.Domain.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.users.Domain} The clone.
 */
proto.spine.users.Domain.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.users.Domain} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.spine.users.Domain.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.users.Domain.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.EmailAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.EmailAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.EmailAddress.displayName = 'proto.spine.base.EmailAddress';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.EmailAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.EmailAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.EmailAddress} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.EmailAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.EmailAddress}
 */
proto.spine.base.EmailAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.EmailAddress;
  return proto.spine.base.EmailAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.EmailAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.EmailAddress}
 */
proto.spine.base.EmailAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.EmailAddress} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EmailAddress.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.EmailAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EmailAddress.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.EmailAddress} The clone.
 */
proto.spine.base.EmailAddress.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.EmailAddress} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.spine.base.EmailAddress.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.base.EmailAddress.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.spine.base.Error.oneofGroups_);
};
goog.inherits(proto.spine.base.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.Error.displayName = 'proto.spine.base.Error';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.spine.base.Error.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.spine.base.Error.KindCase = {
  KIND_NOT_SET: 0,
  CODE: 1,
  TYPE: 2
};

/**
 * @return {proto.spine.base.Error.KindCase}
 */
proto.spine.base.Error.prototype.getKindCase = function() {
  return /** @type {proto.spine.base.Error.KindCase} */(jspb.Message.computeOneofCase(this, proto.spine.base.Error.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.Error} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    data: (f = msg.getData()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    message: msg.getMessage(),
    stacktrace: msg.getStacktrace()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.Error}
 */
proto.spine.base.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.Error;
  return proto.spine.base.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.Error}
 */
proto.spine.base.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 10:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStacktrace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.Error} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.Error.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.Error.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCode();
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getType();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getData();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = this.getMessage();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = this.getStacktrace();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.Error} The clone.
 */
proto.spine.base.Error.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.Error} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 code = 1;
 * @return {number?}
 */
proto.spine.base.Error.prototype.getCode = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.spine.base.Error.prototype.setCode = function(value) {
  jspb.Message.setOneofField(this, 1, proto.spine.base.Error.oneofGroups_[0], value);
};


proto.spine.base.Error.prototype.clearCode = function() {
  jspb.Message.setOneofField(this, 1, proto.spine.base.Error.oneofGroups_[0], undefined);
};


/**
 * optional string type = 2;
 * @return {string?}
 */
proto.spine.base.Error.prototype.getType = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.spine.base.Error.prototype.setType = function(value) {
  jspb.Message.setOneofField(this, 2, proto.spine.base.Error.oneofGroups_[0], value);
};


proto.spine.base.Error.prototype.clearType = function() {
  jspb.Message.setOneofField(this, 2, proto.spine.base.Error.oneofGroups_[0], undefined);
};


/**
 * optional google.protobuf.Any data = 10;
 * @return {proto.google.protobuf.Any}
 */
proto.spine.base.Error.prototype.getData = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 10));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.spine.base.Error.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.spine.base.Error.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * optional string message = 11;
 * @return {string}
 */
proto.spine.base.Error.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 11, ""));
};


/** @param {string} value  */
proto.spine.base.Error.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string stacktrace = 12;
 * @return {string}
 */
proto.spine.base.Error.prototype.getStacktrace = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 12, ""));
};


/** @param {string} value  */
proto.spine.base.Error.prototype.setStacktrace = function(value) {
  jspb.Message.setField(this, 12, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.EventId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.EventId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.EventId.displayName = 'proto.spine.base.EventId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.EventId.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.EventId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.EventId} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.EventId.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandId: (f = msg.getCommandId()) && proto.spine.base.CommandId.toObject(includeInstance, f),
    deltaNanos: msg.getDeltaNanos()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.EventId}
 */
proto.spine.base.EventId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.EventId;
  return proto.spine.base.EventId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.EventId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.EventId}
 */
proto.spine.base.EventId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.base.CommandId;
      reader.readMessage(value,proto.spine.base.CommandId.deserializeBinaryFromReader);
      msg.setCommandId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeltaNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.EventId} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EventId.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.EventId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EventId.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCommandId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.base.CommandId.serializeBinaryToWriter
    );
  }
  f = this.getDeltaNanos();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.EventId} The clone.
 */
proto.spine.base.EventId.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.EventId} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional CommandId command_id = 1;
 * @return {proto.spine.base.CommandId}
 */
proto.spine.base.EventId.prototype.getCommandId = function() {
  return /** @type{proto.spine.base.CommandId} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.CommandId, 1));
};


/** @param {proto.spine.base.CommandId|undefined} value  */
proto.spine.base.EventId.prototype.setCommandId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.base.EventId.prototype.clearCommandId = function() {
  this.setCommandId(undefined);
};


/**
 * optional int64 delta_nanos = 2;
 * @return {number}
 */
proto.spine.base.EventId.prototype.getDeltaNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.spine.base.EventId.prototype.setDeltaNanos = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.EventContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spine.base.EventContext.repeatedFields_, null);
};
goog.inherits(proto.spine.base.EventContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.EventContext.displayName = 'proto.spine.base.EventContext';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spine.base.EventContext.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.EventContext.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.EventContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.EventContext} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.EventContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: (f = msg.getEventId()) && proto.spine.base.EventId.toObject(includeInstance, f),
    aggregateId: (f = msg.getAggregateId()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    version: msg.getVersion(),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto.google.protobuf.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.EventContext}
 */
proto.spine.base.EventContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.EventContext;
  return proto.spine.base.EventContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.EventContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.EventContext}
 */
proto.spine.base.EventContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.base.EventId;
      reader.readMessage(value,proto.spine.base.EventId.deserializeBinaryFromReader);
      msg.setEventId(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setAggregateId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 4:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.getAttributesList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.EventContext} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EventContext.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.EventContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EventContext.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getEventId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.base.EventId.serializeBinaryToWriter
    );
  }
  f = this.getAggregateId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = this.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.EventContext} The clone.
 */
proto.spine.base.EventContext.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.EventContext} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional EventId event_id = 1;
 * @return {proto.spine.base.EventId}
 */
proto.spine.base.EventContext.prototype.getEventId = function() {
  return /** @type{proto.spine.base.EventId} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.EventId, 1));
};


/** @param {proto.spine.base.EventId|undefined} value  */
proto.spine.base.EventContext.prototype.setEventId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.base.EventContext.prototype.clearEventId = function() {
  this.setEventId(undefined);
};


/**
 * optional google.protobuf.Any aggregate_id = 2;
 * @return {proto.google.protobuf.Any}
 */
proto.spine.base.EventContext.prototype.getAggregateId = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 2));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.spine.base.EventContext.prototype.setAggregateId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.base.EventContext.prototype.clearAggregateId = function() {
  this.setAggregateId(undefined);
};


/**
 * optional int32 version = 3;
 * @return {number}
 */
proto.spine.base.EventContext.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.spine.base.EventContext.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated google.protobuf.Any attributes = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.spine.base.EventContext.prototype.getAttributesList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Any, 4));
};


/** @param {Array.<!proto.google.protobuf.Any>|undefined} value  */
proto.spine.base.EventContext.prototype.setAttributesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.spine.base.EventContext.prototype.clearAttributesList = function() {
  this.setAttributesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.EventRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.EventRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.EventRecord.displayName = 'proto.spine.base.EventRecord';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.EventRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.EventRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.EventRecord} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.EventRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: (f = msg.getEvent()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.spine.base.EventContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.EventRecord}
 */
proto.spine.base.EventRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.EventRecord;
  return proto.spine.base.EventRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.EventRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.EventRecord}
 */
proto.spine.base.EventRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 2:
      var value = new proto.spine.base.EventContext;
      reader.readMessage(value,proto.spine.base.EventContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.EventRecord} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EventRecord.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.EventRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.EventRecord.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = this.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.base.EventContext.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.EventRecord} The clone.
 */
proto.spine.base.EventRecord.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.EventRecord} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Any event = 1;
 * @return {proto.google.protobuf.Any}
 */
proto.spine.base.EventRecord.prototype.getEvent = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 1));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.spine.base.EventRecord.prototype.setEvent = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.base.EventRecord.prototype.clearEvent = function() {
  this.setEvent(undefined);
};


/**
 * optional EventContext context = 2;
 * @return {proto.spine.base.EventContext}
 */
proto.spine.base.EventRecord.prototype.getContext = function() {
  return /** @type{proto.spine.base.EventContext} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.EventContext, 2));
};


/** @param {proto.spine.base.EventContext|undefined} value  */
proto.spine.base.EventRecord.prototype.setContext = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.base.EventRecord.prototype.clearContext = function() {
  this.setContext(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.PersonName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.PersonName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.PersonName.displayName = 'proto.spine.base.PersonName';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.PersonName.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.PersonName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.PersonName} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.PersonName.toObject = function(includeInstance, msg) {
  var f, obj = {
    honorificPrefix: msg.getHonorificPrefix(),
    givenName: msg.getGivenName(),
    middleName: msg.getMiddleName(),
    familyName: msg.getFamilyName(),
    honorificSuffix: msg.getHonorificSuffix()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.PersonName}
 */
proto.spine.base.PersonName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.PersonName;
  return proto.spine.base.PersonName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.PersonName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.PersonName}
 */
proto.spine.base.PersonName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHonorificPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMiddleName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFamilyName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHonorificSuffix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.PersonName} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.PersonName.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.PersonName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.PersonName.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHonorificPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getGivenName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getMiddleName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getFamilyName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getHonorificSuffix();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.PersonName} The clone.
 */
proto.spine.base.PersonName.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.PersonName} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string honorific_prefix = 1;
 * @return {string}
 */
proto.spine.base.PersonName.prototype.getHonorificPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.base.PersonName.prototype.setHonorificPrefix = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string given_name = 2;
 * @return {string}
 */
proto.spine.base.PersonName.prototype.getGivenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.spine.base.PersonName.prototype.setGivenName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string middle_name = 3;
 * @return {string}
 */
proto.spine.base.PersonName.prototype.getMiddleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.spine.base.PersonName.prototype.setMiddleName = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string family_name = 4;
 * @return {string}
 */
proto.spine.base.PersonName.prototype.getFamilyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.spine.base.PersonName.prototype.setFamilyName = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string honorific_suffix = 5;
 * @return {string}
 */
proto.spine.base.PersonName.prototype.getHonorificSuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.spine.base.PersonName.prototype.setHonorificSuffix = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.PhotoLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.PhotoLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.PhotoLink.displayName = 'proto.spine.base.PhotoLink';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.PhotoLink.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.PhotoLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.PhotoLink} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.PhotoLink.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: msg.getUrl()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.PhotoLink}
 */
proto.spine.base.PhotoLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.PhotoLink;
  return proto.spine.base.PhotoLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.PhotoLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.PhotoLink}
 */
proto.spine.base.PhotoLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.PhotoLink} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.PhotoLink.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.PhotoLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.PhotoLink.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.PhotoLink} The clone.
 */
proto.spine.base.PhotoLink.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.PhotoLink} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.spine.base.PhotoLink.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.base.PhotoLink.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.base.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.base.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.base.User.displayName = 'proto.spine.base.User';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.base.User.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.base.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.base.User} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.base.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.spine.base.UserId.toObject(includeInstance, f),
    name: (f = msg.getName()) && proto.spine.base.PersonName.toObject(includeInstance, f),
    email: (f = msg.getEmail()) && proto.spine.base.EmailAddress.toObject(includeInstance, f),
    photo: (f = msg.getPhoto()) && proto.spine.base.PhotoLink.toObject(includeInstance, f),
    domainAdmin: msg.getDomainAdmin()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.base.User}
 */
proto.spine.base.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.base.User;
  return proto.spine.base.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.base.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.base.User}
 */
proto.spine.base.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.base.UserId;
      reader.readMessage(value,proto.spine.base.UserId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.spine.base.PersonName;
      reader.readMessage(value,proto.spine.base.PersonName.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 3:
      var value = new proto.spine.base.EmailAddress;
      reader.readMessage(value,proto.spine.base.EmailAddress.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 4:
      var value = new proto.spine.base.PhotoLink;
      reader.readMessage(value,proto.spine.base.PhotoLink.deserializeBinaryFromReader);
      msg.setPhoto(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDomainAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.base.User} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.User.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.base.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.base.User.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.base.UserId.serializeBinaryToWriter
    );
  }
  f = this.getName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.base.PersonName.serializeBinaryToWriter
    );
  }
  f = this.getEmail();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.spine.base.EmailAddress.serializeBinaryToWriter
    );
  }
  f = this.getPhoto();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.spine.base.PhotoLink.serializeBinaryToWriter
    );
  }
  f = this.getDomainAdmin();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.base.User} The clone.
 */
proto.spine.base.User.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.base.User} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional UserId id = 1;
 * @return {proto.spine.base.UserId}
 */
proto.spine.base.User.prototype.getId = function() {
  return /** @type{proto.spine.base.UserId} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.UserId, 1));
};


/** @param {proto.spine.base.UserId|undefined} value  */
proto.spine.base.User.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.base.User.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * optional PersonName name = 2;
 * @return {proto.spine.base.PersonName}
 */
proto.spine.base.User.prototype.getName = function() {
  return /** @type{proto.spine.base.PersonName} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.PersonName, 2));
};


/** @param {proto.spine.base.PersonName|undefined} value  */
proto.spine.base.User.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.base.User.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * optional EmailAddress email = 3;
 * @return {proto.spine.base.EmailAddress}
 */
proto.spine.base.User.prototype.getEmail = function() {
  return /** @type{proto.spine.base.EmailAddress} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.EmailAddress, 3));
};


/** @param {proto.spine.base.EmailAddress|undefined} value  */
proto.spine.base.User.prototype.setEmail = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.spine.base.User.prototype.clearEmail = function() {
  this.setEmail(undefined);
};


/**
 * optional PhotoLink photo = 4;
 * @return {proto.spine.base.PhotoLink}
 */
proto.spine.base.User.prototype.getPhoto = function() {
  return /** @type{proto.spine.base.PhotoLink} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.PhotoLink, 4));
};


/** @param {proto.spine.base.PhotoLink|undefined} value  */
proto.spine.base.User.prototype.setPhoto = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.spine.base.User.prototype.clearPhoto = function() {
  this.setPhoto(undefined);
};


/**
 * optional bool domain_admin = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.spine.base.User.prototype.getDomainAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 5, false));
};


/** @param {boolean} value  */
proto.spine.base.User.prototype.setDomainAdmin = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.CodeVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.CodeVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.CodeVersion.displayName = 'proto.spine.client.CodeVersion';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.CodeVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.CodeVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.CodeVersion} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.CodeVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    major: msg.getMajor(),
    minor: msg.getMinor(),
    patchLevel: msg.getPatchLevel(),
    buildNumber: msg.getBuildNumber()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.CodeVersion}
 */
proto.spine.client.CodeVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.CodeVersion;
  return proto.spine.client.CodeVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.CodeVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.CodeVersion}
 */
proto.spine.client.CodeVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMajor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPatchLevel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBuildNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.CodeVersion} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.CodeVersion.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.CodeVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.CodeVersion.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMajor();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMinor();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getPatchLevel();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getBuildNumber();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.CodeVersion} The clone.
 */
proto.spine.client.CodeVersion.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.CodeVersion} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 major = 1;
 * @return {number}
 */
proto.spine.client.CodeVersion.prototype.getMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.spine.client.CodeVersion.prototype.setMajor = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 minor = 2;
 * @return {number}
 */
proto.spine.client.CodeVersion.prototype.getMinor = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.spine.client.CodeVersion.prototype.setMinor = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 patch_level = 3;
 * @return {number}
 */
proto.spine.client.CodeVersion.prototype.getPatchLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.spine.client.CodeVersion.prototype.setPatchLevel = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 build_number = 4;
 * @return {number}
 */
proto.spine.client.CodeVersion.prototype.getBuildNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.spine.client.CodeVersion.prototype.setBuildNumber = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.OsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.OsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.OsInfo.displayName = 'proto.spine.client.OsInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.OsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.OsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.OsInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.OsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    version: (f = msg.getVersion()) && proto.spine.client.CodeVersion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.OsInfo}
 */
proto.spine.client.OsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.OsInfo;
  return proto.spine.client.OsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.OsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.OsInfo}
 */
proto.spine.client.OsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.spine.client.CodeVersion;
      reader.readMessage(value,proto.spine.client.CodeVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.OsInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.OsInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.OsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.OsInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.client.CodeVersion.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.OsInfo} The clone.
 */
proto.spine.client.OsInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.OsInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.spine.client.OsInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.OsInfo.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional CodeVersion version = 2;
 * @return {proto.spine.client.CodeVersion}
 */
proto.spine.client.OsInfo.prototype.getVersion = function() {
  return /** @type{proto.spine.client.CodeVersion} */ (
    jspb.Message.getWrapperField(this, proto.spine.client.CodeVersion, 2));
};


/** @param {proto.spine.client.CodeVersion|undefined} value  */
proto.spine.client.OsInfo.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.client.OsInfo.prototype.clearVersion = function() {
  this.setVersion(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.ClientId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.ClientId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.ClientId.displayName = 'proto.spine.client.ClientId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.ClientId.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.ClientId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.ClientId} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.ClientId.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.ClientId}
 */
proto.spine.client.ClientId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.ClientId;
  return proto.spine.client.ClientId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.ClientId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.ClientId}
 */
proto.spine.client.ClientId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.ClientId} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.ClientId.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.ClientId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.ClientId.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.ClientId} The clone.
 */
proto.spine.client.ClientId.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.ClientId} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.spine.client.ClientId.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.ClientId.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.ClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.ClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.ClientRequest.displayName = 'proto.spine.client.ClientRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.ClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.ClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.ClientRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.ClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.spine.client.ClientId.toObject(includeInstance, f),
    device: msg.getDevice(),
    version: (f = msg.getVersion()) && proto.spine.client.CodeVersion.toObject(includeInstance, f),
    os: (f = msg.getOs()) && proto.spine.client.OsInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.ClientRequest}
 */
proto.spine.client.ClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.ClientRequest;
  return proto.spine.client.ClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.ClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.ClientRequest}
 */
proto.spine.client.ClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.client.ClientId;
      reader.readMessage(value,proto.spine.client.ClientId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.spine.client.DeviceType} */ (reader.readEnum());
      msg.setDevice(value);
      break;
    case 3:
      var value = new proto.spine.client.CodeVersion;
      reader.readMessage(value,proto.spine.client.CodeVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new proto.spine.client.OsInfo;
      reader.readMessage(value,proto.spine.client.OsInfo.deserializeBinaryFromReader);
      msg.setOs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.ClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.ClientRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.ClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.ClientRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.client.ClientId.serializeBinaryToWriter
    );
  }
  f = this.getDevice();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getVersion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.spine.client.CodeVersion.serializeBinaryToWriter
    );
  }
  f = this.getOs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.spine.client.OsInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.ClientRequest} The clone.
 */
proto.spine.client.ClientRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.ClientRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ClientId id = 1;
 * @return {proto.spine.client.ClientId}
 */
proto.spine.client.ClientRequest.prototype.getId = function() {
  return /** @type{proto.spine.client.ClientId} */ (
    jspb.Message.getWrapperField(this, proto.spine.client.ClientId, 1));
};


/** @param {proto.spine.client.ClientId|undefined} value  */
proto.spine.client.ClientRequest.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.client.ClientRequest.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * optional DeviceType device = 2;
 * @return {!proto.spine.client.DeviceType}
 */
proto.spine.client.ClientRequest.prototype.getDevice = function() {
  return /** @type {!proto.spine.client.DeviceType} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.spine.client.DeviceType} value  */
proto.spine.client.ClientRequest.prototype.setDevice = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional CodeVersion version = 3;
 * @return {proto.spine.client.CodeVersion}
 */
proto.spine.client.ClientRequest.prototype.getVersion = function() {
  return /** @type{proto.spine.client.CodeVersion} */ (
    jspb.Message.getWrapperField(this, proto.spine.client.CodeVersion, 3));
};


/** @param {proto.spine.client.CodeVersion|undefined} value  */
proto.spine.client.ClientRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.spine.client.ClientRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * optional OsInfo os = 4;
 * @return {proto.spine.client.OsInfo}
 */
proto.spine.client.ClientRequest.prototype.getOs = function() {
  return /** @type{proto.spine.client.OsInfo} */ (
    jspb.Message.getWrapperField(this, proto.spine.client.OsInfo, 4));
};


/** @param {proto.spine.client.OsInfo|undefined} value  */
proto.spine.client.ClientRequest.prototype.setOs = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.spine.client.ClientRequest.prototype.clearOs = function() {
  this.setOs(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.spine.client.Connection.oneofGroups_);
};
goog.inherits(proto.spine.client.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.Connection.displayName = 'proto.spine.client.Connection';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.spine.client.Connection.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.spine.client.Connection.TypeCase = {
  TYPE_NOT_SET: 0,
  CHANNEL: 1
};

/**
 * @return {proto.spine.client.Connection.TypeCase}
 */
proto.spine.client.Connection.prototype.getTypeCase = function() {
  return /** @type {proto.spine.client.Connection.TypeCase} */(jspb.Message.computeOneofCase(this, proto.spine.client.Connection.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.Connection} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: (f = msg.getChannel()) && proto.spine.client.Channel.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.Connection}
 */
proto.spine.client.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.Connection;
  return proto.spine.client.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.Connection}
 */
proto.spine.client.Connection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.client.Channel;
      reader.readMessage(value,proto.spine.client.Channel.deserializeBinaryFromReader);
      msg.setChannel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.Connection} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.Connection.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.Connection.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.client.Channel.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.Connection} The clone.
 */
proto.spine.client.Connection.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.Connection} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Channel channel = 1;
 * @return {proto.spine.client.Channel}
 */
proto.spine.client.Connection.prototype.getChannel = function() {
  return /** @type{proto.spine.client.Channel} */ (
    jspb.Message.getWrapperField(this, proto.spine.client.Channel, 1));
};


/** @param {proto.spine.client.Channel|undefined} value  */
proto.spine.client.Connection.prototype.setChannel = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.spine.client.Connection.oneofGroups_[0], value);
};


proto.spine.client.Connection.prototype.clearChannel = function() {
  this.setChannel(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.Channel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.Channel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.Channel.displayName = 'proto.spine.client.Channel';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.Channel.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.Channel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.Channel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.Channel.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: msg.getToken()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.Channel}
 */
proto.spine.client.Channel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.Channel;
  return proto.spine.client.Channel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.Channel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.Channel}
 */
proto.spine.client.Channel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.Channel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.Channel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.Channel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.Channel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.Channel} The clone.
 */
proto.spine.client.Channel.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.Channel} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.spine.client.Channel.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.Channel.prototype.setToken = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.spine.client.DeviceType = {
  UNKNOWN: 0,
  BROWSER: 1,
  BROWSER_MOBILE: 2,
  PHONE_ANDROID: 20,
  PHONE_IOS: 21,
  PHONE_WINDOWS: 22,
  TABLET_ANDROID: 40,
  TABLET_IOS: 41,
  TABLET_WINDOWS: 42,
  WATCH_ANDROID: 50,
  WATCH_APPLE: 51,
  SERVICE: 100
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.CommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.CommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.CommandRequest.displayName = 'proto.spine.client.CommandRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.CommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.CommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.CommandRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.CommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: (f = msg.getCommand()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.spine.base.CommandContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.CommandRequest}
 */
proto.spine.client.CommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.CommandRequest;
  return proto.spine.client.CommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.CommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.CommandRequest}
 */
proto.spine.client.CommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    case 2:
      var value = new proto.spine.base.CommandContext;
      reader.readMessage(value,proto.spine.base.CommandContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.CommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.CommandRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.CommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.CommandRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCommand();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = this.getContext();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.base.CommandContext.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.CommandRequest} The clone.
 */
proto.spine.client.CommandRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.CommandRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Any command = 1;
 * @return {proto.google.protobuf.Any}
 */
proto.spine.client.CommandRequest.prototype.getCommand = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 1));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.spine.client.CommandRequest.prototype.setCommand = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.client.CommandRequest.prototype.clearCommand = function() {
  this.setCommand(undefined);
};


/**
 * optional spine.base.CommandContext context = 2;
 * @return {proto.spine.base.CommandContext}
 */
proto.spine.client.CommandRequest.prototype.getContext = function() {
  return /** @type{proto.spine.base.CommandContext} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.CommandContext, 2));
};


/** @param {proto.spine.base.CommandContext|undefined} value  */
proto.spine.client.CommandRequest.prototype.setContext = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.client.CommandRequest.prototype.clearContext = function() {
  this.setContext(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.CommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.spine.client.CommandResponse.oneofGroups_);
};
goog.inherits(proto.spine.client.CommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.CommandResponse.displayName = 'proto.spine.client.CommandResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.spine.client.CommandResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.spine.client.CommandResponse.ValueCase = {
  VALUE_NOT_SET: 0,
  OK: 1,
  ERROR: 2
};

/**
 * @return {proto.spine.client.CommandResponse.ValueCase}
 */
proto.spine.client.CommandResponse.prototype.getValueCase = function() {
  return /** @type {proto.spine.client.CommandResponse.ValueCase} */(jspb.Message.computeOneofCase(this, proto.spine.client.CommandResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.CommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.CommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.CommandResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.CommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.google.protobuf.Empty.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.spine.base.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.CommandResponse}
 */
proto.spine.client.CommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.CommandResponse;
  return proto.spine.client.CommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.CommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.CommandResponse}
 */
proto.spine.client.CommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Empty;
      reader.readMessage(value,proto.google.protobuf.Empty.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.spine.base.Error;
      reader.readMessage(value,proto.spine.base.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.CommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.CommandResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.CommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.CommandResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Empty.serializeBinaryToWriter
    );
  }
  f = this.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.base.Error.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.CommandResponse} The clone.
 */
proto.spine.client.CommandResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.CommandResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Empty ok = 1;
 * @return {proto.google.protobuf.Empty}
 */
proto.spine.client.CommandResponse.prototype.getOk = function() {
  return /** @type{proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Empty, 1));
};


/** @param {proto.google.protobuf.Empty|undefined} value  */
proto.spine.client.CommandResponse.prototype.setOk = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.spine.client.CommandResponse.oneofGroups_[0], value);
};


proto.spine.client.CommandResponse.prototype.clearOk = function() {
  this.setOk(undefined);
};


/**
 * optional spine.base.Error error = 2;
 * @return {proto.spine.base.Error}
 */
proto.spine.client.CommandResponse.prototype.getError = function() {
  return /** @type{proto.spine.base.Error} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.Error, 2));
};


/** @param {proto.spine.base.Error|undefined} value  */
proto.spine.client.CommandResponse.prototype.setError = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.spine.client.CommandResponse.oneofGroups_[0], value);
};


proto.spine.client.CommandResponse.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * @enum {number}
 */
proto.spine.client.CommandResponse.ErrorCode = {
  UNKNOWN: 0,
  UNSUPPORTED_COMMAND: 1,
  INCOMPLETE_COMMAND: 2
};

/**
 * @enum {number}
 */
proto.spine.client.Language = {
  UNDEFINED: 0
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.QueryContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.QueryContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.QueryContext.displayName = 'proto.spine.client.QueryContext';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.QueryContext.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.QueryContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.QueryContext} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.QueryContext.toObject = function(includeInstance, msg) {
  var f, obj = {
    language: msg.getLanguage()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.QueryContext}
 */
proto.spine.client.QueryContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.QueryContext;
  return proto.spine.client.QueryContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.QueryContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.QueryContext}
 */
proto.spine.client.QueryContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.spine.client.Language} */ (reader.readEnum());
      msg.setLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.QueryContext} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.QueryContext.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.QueryContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.QueryContext.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLanguage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.QueryContext} The clone.
 */
proto.spine.client.QueryContext.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.QueryContext} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Language language = 1;
 * @return {!proto.spine.client.Language}
 */
proto.spine.client.QueryContext.prototype.getLanguage = function() {
  return /** @type {!proto.spine.client.Language} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.spine.client.Language} value  */
proto.spine.client.QueryContext.prototype.setLanguage = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.money.Money = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.money.Money, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.money.Money.displayName = 'proto.spine.money.Money';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.money.Money.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.money.Money.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.money.Money} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.money.Money.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: msg.getAmount(),
    currency: msg.getCurrency()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.money.Money}
 */
proto.spine.money.Money.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.money.Money;
  return proto.spine.money.Money.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.money.Money} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.money.Money}
 */
proto.spine.money.Money.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {!proto.spine.money.Currency} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.money.Money} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.money.Money.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.money.Money.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.money.Money.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAmount();
  if (f !== 0) {
    writer.writeSint64(
      1,
      f
    );
  }
  f = this.getCurrency();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.money.Money} The clone.
 */
proto.spine.money.Money.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.money.Money} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional sint64 amount = 1;
 * @return {number}
 */
proto.spine.money.Money.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.spine.money.Money.prototype.setAmount = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Currency currency = 2;
 * @return {!proto.spine.money.Currency}
 */
proto.spine.money.Money.prototype.getCurrency = function() {
  return /** @type {!proto.spine.money.Currency} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.spine.money.Currency} value  */
proto.spine.money.Money.prototype.setCurrency = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.money.CurrencyOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.money.CurrencyOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.money.CurrencyOptions.displayName = 'proto.spine.money.CurrencyOptions';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.money.CurrencyOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.money.CurrencyOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.money.CurrencyOptions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.money.CurrencyOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName(),
    symbol: msg.getSymbol(),
    numericCode: msg.getNumericCode(),
    exponentDigits: msg.getExponentDigits()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.money.CurrencyOptions}
 */
proto.spine.money.CurrencyOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.money.CurrencyOptions;
  return proto.spine.money.CurrencyOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.money.CurrencyOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.money.CurrencyOptions}
 */
proto.spine.money.CurrencyOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumericCode(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExponentDigits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.money.CurrencyOptions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.money.CurrencyOptions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.money.CurrencyOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.money.CurrencyOptions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getNumericCode();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getExponentDigits();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.money.CurrencyOptions} The clone.
 */
proto.spine.money.CurrencyOptions.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.money.CurrencyOptions} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.spine.money.CurrencyOptions.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.money.CurrencyOptions.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string symbol = 2;
 * @return {string}
 */
proto.spine.money.CurrencyOptions.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.spine.money.CurrencyOptions.prototype.setSymbol = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 numeric_code = 3;
 * @return {number}
 */
proto.spine.money.CurrencyOptions.prototype.getNumericCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.spine.money.CurrencyOptions.prototype.setNumericCode = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 exponent_digits = 4;
 * @return {number}
 */
proto.spine.money.CurrencyOptions.prototype.getExponentDigits = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.spine.money.CurrencyOptions.prototype.setExponentDigits = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.spine.money.Currency = {
  AED: 0,
  AFN: 1,
  ALL: 2,
  AMD: 3,
  ANG: 4,
  AOA: 5,
  ARS: 6,
  AUD: 7,
  AWG: 8,
  AZN: 9,
  BAM: 10,
  BBD: 11,
  BDT: 12,
  BGN: 13,
  BHD: 14,
  BIF: 15,
  BMD: 16,
  BND: 17,
  BOB: 18,
  BOV: 19,
  BRL: 20,
  BSD: 21,
  BTN: 22,
  BWP: 23,
  BYR: 24,
  BZD: 25,
  CAD: 26,
  CDF: 27,
  CHE: 28,
  CHF: 29,
  CHW: 30,
  CLF: 31,
  CLP: 32,
  CNY: 33,
  COP: 34,
  COU: 35,
  CRC: 36,
  CUC: 37,
  CUP: 38,
  CVE: 39,
  CZK: 40,
  DJF: 41,
  DKK: 42,
  DOP: 43,
  DZD: 44,
  EGP: 45,
  ERN: 46,
  ETB: 47,
  EUR: 48,
  FJD: 49,
  FKP: 50,
  GBP: 51,
  GEL: 52,
  GHS: 53,
  GIP: 54,
  GMD: 55,
  GNF: 56,
  GTQ: 57,
  GYD: 58,
  HKD: 59,
  HNL: 60,
  HRK: 61,
  HTG: 62,
  HUF: 63,
  IDR: 64,
  ILS: 65,
  INR: 66,
  IQD: 67,
  IRR: 68,
  ISK: 69,
  JMD: 70,
  JOD: 71,
  JPY: 72,
  KES: 73,
  KGS: 74,
  KHR: 75,
  KMF: 76,
  KPW: 77,
  KRW: 78,
  KWD: 79,
  KYD: 80,
  KZT: 81,
  LAK: 82,
  LBP: 83,
  LKR: 84,
  LRD: 85,
  LSL: 86,
  LYD: 87,
  MAD: 88,
  MDL: 89,
  MGA: 90,
  MKD: 91,
  MMK: 92,
  MNT: 93,
  MOP: 94,
  MRO: 95,
  MUR: 96,
  MVR: 97,
  MWK: 98,
  MXN: 99,
  MXV: 100,
  MYR: 101,
  MZN: 102,
  NAD: 103,
  NGN: 104,
  NIO: 105,
  NOK: 106,
  NPR: 107,
  NZD: 108,
  OMR: 109,
  PAB: 110,
  PEN: 111,
  PGK: 112,
  PHP: 113,
  PKR: 114,
  PLN: 115,
  PYG: 116,
  QAR: 117,
  RON: 118,
  RSD: 119,
  RUB: 120,
  RWF: 121,
  SAR: 122,
  SBD: 123,
  SCR: 124,
  SDG: 125,
  SEK: 126,
  SGD: 127,
  SHP: 128,
  SLL: 129,
  SOS: 130,
  SRD: 131,
  SSP: 132,
  STD: 133,
  SVC: 134,
  SYP: 135,
  SZL: 136,
  THB: 137,
  TJS: 138,
  TMT: 139,
  TND: 140,
  TOP: 141,
  TRY: 142,
  TTD: 143,
  TWD: 144,
  TZS: 145,
  UAH: 146,
  UGX: 147,
  USD: 148,
  USN: 149,
  UYI: 150,
  UYU: 151,
  UZS: 152,
  VEF: 153,
  VND: 154,
  VUV: 155,
  WST: 156,
  XAF: 157,
  XAG: 158,
  XAU: 159,
  XBA: 160,
  XBB: 161,
  XBC: 162,
  XBD: 163,
  XCD: 164,
  XDR: 165,
  XOF: 166,
  XPD: 167,
  XPF: 168,
  XPT: 169,
  XSU: 170,
  XTS: 171,
  XUA: 172,
  XXX: 173,
  YER: 174,
  ZAR: 175,
  ZMW: 176,
  ZWL: 177
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.server.aggregate.Snapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.server.aggregate.Snapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.server.aggregate.Snapshot.displayName = 'proto.spine.server.aggregate.Snapshot';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.server.aggregate.Snapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.server.aggregate.Snapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.server.aggregate.Snapshot} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.server.aggregate.Snapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    whenModified: (f = msg.getWhenModified()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    version: msg.getVersion(),
    timestamp: (f = msg.getTimestamp()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.server.aggregate.Snapshot}
 */
proto.spine.server.aggregate.Snapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.server.aggregate.Snapshot;
  return proto.spine.server.aggregate.Snapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.server.aggregate.Snapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.server.aggregate.Snapshot}
 */
proto.spine.server.aggregate.Snapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setWhenModified(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 4:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.server.aggregate.Snapshot} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.aggregate.Snapshot.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.server.aggregate.Snapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.aggregate.Snapshot.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = this.getWhenModified();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.server.aggregate.Snapshot} The clone.
 */
proto.spine.server.aggregate.Snapshot.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.server.aggregate.Snapshot} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Any state = 1;
 * @return {proto.google.protobuf.Any}
 */
proto.spine.server.aggregate.Snapshot.prototype.getState = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 1));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.spine.server.aggregate.Snapshot.prototype.setState = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.server.aggregate.Snapshot.prototype.clearState = function() {
  this.setState(undefined);
};


/**
 * optional google.protobuf.Timestamp when_modified = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.spine.server.aggregate.Snapshot.prototype.getWhenModified = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.spine.server.aggregate.Snapshot.prototype.setWhenModified = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.spine.server.aggregate.Snapshot.prototype.clearWhenModified = function() {
  this.setWhenModified(undefined);
};


/**
 * optional int32 version = 3;
 * @return {number}
 */
proto.spine.server.aggregate.Snapshot.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.spine.server.aggregate.Snapshot.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.spine.server.aggregate.Snapshot.prototype.getTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 4));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.spine.server.aggregate.Snapshot.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.spine.server.aggregate.Snapshot.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.server.CommandResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spine.server.CommandResult.repeatedFields_, null);
};
goog.inherits(proto.spine.server.CommandResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.server.CommandResult.displayName = 'proto.spine.server.CommandResult';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spine.server.CommandResult.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.server.CommandResult.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.server.CommandResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.server.CommandResult} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.server.CommandResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventrecordList: jspb.Message.toObjectList(msg.getEventrecordList(),
    proto.spine.base.EventRecord.toObject, includeInstance),
    errorList: jspb.Message.toObjectList(msg.getErrorList(),
    proto.google.protobuf.Any.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.server.CommandResult}
 */
proto.spine.server.CommandResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.server.CommandResult;
  return proto.spine.server.CommandResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.server.CommandResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.server.CommandResult}
 */
proto.spine.server.CommandResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.base.EventRecord;
      reader.readMessage(value,proto.spine.base.EventRecord.deserializeBinaryFromReader);
      msg.getEventrecordList().push(value);
      break;
    case 2:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.getErrorList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.server.CommandResult} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.CommandResult.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.server.CommandResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.CommandResult.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getEventrecordList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.spine.base.EventRecord.serializeBinaryToWriter
    );
  }
  f = this.getErrorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.server.CommandResult} The clone.
 */
proto.spine.server.CommandResult.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.server.CommandResult} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated spine.base.EventRecord eventRecord = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.spine.base.EventRecord>}
 */
proto.spine.server.CommandResult.prototype.getEventrecordList = function() {
  return /** @type{!Array.<!proto.spine.base.EventRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.spine.base.EventRecord, 1));
};


/** @param {Array.<!proto.spine.base.EventRecord>|undefined} value  */
proto.spine.server.CommandResult.prototype.setEventrecordList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.spine.server.CommandResult.prototype.clearEventrecordList = function() {
  this.setEventrecordList([]);
};


/**
 * repeated google.protobuf.Any error = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.protobuf.Any>}
 */
proto.spine.server.CommandResult.prototype.getErrorList = function() {
  return /** @type{!Array.<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Any, 2));
};


/** @param {Array.<!proto.google.protobuf.Any>|undefined} value  */
proto.spine.server.CommandResult.prototype.setErrorList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.spine.server.CommandResult.prototype.clearErrorList = function() {
  this.setErrorList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.server.storage.AggregateStorageRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.spine.server.storage.AggregateStorageRecord.oneofGroups_);
};
goog.inherits(proto.spine.server.storage.AggregateStorageRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.server.storage.AggregateStorageRecord.displayName = 'proto.spine.server.storage.AggregateStorageRecord';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.spine.server.storage.AggregateStorageRecord.oneofGroups_ = [[20,21]];

/**
 * @enum {number}
 */
proto.spine.server.storage.AggregateStorageRecord.KindCase = {
  KIND_NOT_SET: 0,
  EVENT_RECORD: 20,
  SNAPSHOT: 21
};

/**
 * @return {proto.spine.server.storage.AggregateStorageRecord.KindCase}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getKindCase = function() {
  return /** @type {proto.spine.server.storage.AggregateStorageRecord.KindCase} */(jspb.Message.computeOneofCase(this, proto.spine.server.storage.AggregateStorageRecord.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.server.storage.AggregateStorageRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.server.storage.AggregateStorageRecord} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.server.storage.AggregateStorageRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    aggregateId: msg.getAggregateId(),
    eventType: msg.getEventType(),
    eventId: msg.getEventId(),
    version: msg.getVersion(),
    eventRecord: (f = msg.getEventRecord()) && proto.spine.base.EventRecord.toObject(includeInstance, f),
    snapshot: (f = msg.getSnapshot()) && proto.spine.server.aggregate.Snapshot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.server.storage.AggregateStorageRecord}
 */
proto.spine.server.storage.AggregateStorageRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.server.storage.AggregateStorageRecord;
  return proto.spine.server.storage.AggregateStorageRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.server.storage.AggregateStorageRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.server.storage.AggregateStorageRecord}
 */
proto.spine.server.storage.AggregateStorageRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 20:
      var value = new proto.spine.base.EventRecord;
      reader.readMessage(value,proto.spine.base.EventRecord.deserializeBinaryFromReader);
      msg.setEventRecord(value);
      break;
    case 21:
      var value = new proto.spine.server.aggregate.Snapshot;
      reader.readMessage(value,proto.spine.server.aggregate.Snapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.server.storage.AggregateStorageRecord} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.AggregateStorageRecord.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getAggregateId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getEventType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getEventId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getEventRecord();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.spine.base.EventRecord.serializeBinaryToWriter
    );
  }
  f = this.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.spine.server.aggregate.Snapshot.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.server.storage.AggregateStorageRecord} The clone.
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.server.storage.AggregateStorageRecord} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 1));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.spine.server.storage.AggregateStorageRecord.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.server.storage.AggregateStorageRecord.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * optional string aggregate_id = 2;
 * @return {string}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getAggregateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.spine.server.storage.AggregateStorageRecord.prototype.setAggregateId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string event_type = 3;
 * @return {string}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.spine.server.storage.AggregateStorageRecord.prototype.setEventType = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string event_id = 4;
 * @return {string}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.spine.server.storage.AggregateStorageRecord.prototype.setEventId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 version = 5;
 * @return {number}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.spine.server.storage.AggregateStorageRecord.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional spine.base.EventRecord event_record = 20;
 * @return {proto.spine.base.EventRecord}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getEventRecord = function() {
  return /** @type{proto.spine.base.EventRecord} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.EventRecord, 20));
};


/** @param {proto.spine.base.EventRecord|undefined} value  */
proto.spine.server.storage.AggregateStorageRecord.prototype.setEventRecord = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.spine.server.storage.AggregateStorageRecord.oneofGroups_[0], value);
};


proto.spine.server.storage.AggregateStorageRecord.prototype.clearEventRecord = function() {
  this.setEventRecord(undefined);
};


/**
 * optional spine.server.aggregate.Snapshot snapshot = 21;
 * @return {proto.spine.server.aggregate.Snapshot}
 */
proto.spine.server.storage.AggregateStorageRecord.prototype.getSnapshot = function() {
  return /** @type{proto.spine.server.aggregate.Snapshot} */ (
    jspb.Message.getWrapperField(this, proto.spine.server.aggregate.Snapshot, 21));
};


/** @param {proto.spine.server.aggregate.Snapshot|undefined} value  */
proto.spine.server.storage.AggregateStorageRecord.prototype.setSnapshot = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.spine.server.storage.AggregateStorageRecord.oneofGroups_[0], value);
};


proto.spine.server.storage.AggregateStorageRecord.prototype.clearSnapshot = function() {
  this.setSnapshot(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.server.storage.AggregateEvents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spine.server.storage.AggregateEvents.repeatedFields_, null);
};
goog.inherits(proto.spine.server.storage.AggregateEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.server.storage.AggregateEvents.displayName = 'proto.spine.server.storage.AggregateEvents';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spine.server.storage.AggregateEvents.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.server.storage.AggregateEvents.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.server.storage.AggregateEvents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.server.storage.AggregateEvents} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.server.storage.AggregateEvents.toObject = function(includeInstance, msg) {
  var f, obj = {
    snapshot: (f = msg.getSnapshot()) && proto.spine.server.aggregate.Snapshot.toObject(includeInstance, f),
    eventRecordList: jspb.Message.toObjectList(msg.getEventRecordList(),
    proto.spine.base.EventRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.server.storage.AggregateEvents}
 */
proto.spine.server.storage.AggregateEvents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.server.storage.AggregateEvents;
  return proto.spine.server.storage.AggregateEvents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.server.storage.AggregateEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.server.storage.AggregateEvents}
 */
proto.spine.server.storage.AggregateEvents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.server.aggregate.Snapshot;
      reader.readMessage(value,proto.spine.server.aggregate.Snapshot.deserializeBinaryFromReader);
      msg.setSnapshot(value);
      break;
    case 2:
      var value = new proto.spine.base.EventRecord;
      reader.readMessage(value,proto.spine.base.EventRecord.deserializeBinaryFromReader);
      msg.getEventRecordList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.server.storage.AggregateEvents} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.AggregateEvents.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.server.storage.AggregateEvents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.AggregateEvents.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSnapshot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.server.aggregate.Snapshot.serializeBinaryToWriter
    );
  }
  f = this.getEventRecordList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.spine.base.EventRecord.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.server.storage.AggregateEvents} The clone.
 */
proto.spine.server.storage.AggregateEvents.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.server.storage.AggregateEvents} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional spine.server.aggregate.Snapshot snapshot = 1;
 * @return {proto.spine.server.aggregate.Snapshot}
 */
proto.spine.server.storage.AggregateEvents.prototype.getSnapshot = function() {
  return /** @type{proto.spine.server.aggregate.Snapshot} */ (
    jspb.Message.getWrapperField(this, proto.spine.server.aggregate.Snapshot, 1));
};


/** @param {proto.spine.server.aggregate.Snapshot|undefined} value  */
proto.spine.server.storage.AggregateEvents.prototype.setSnapshot = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.server.storage.AggregateEvents.prototype.clearSnapshot = function() {
  this.setSnapshot(undefined);
};


/**
 * repeated spine.base.EventRecord event_record = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.spine.base.EventRecord>}
 */
proto.spine.server.storage.AggregateEvents.prototype.getEventRecordList = function() {
  return /** @type{!Array.<!proto.spine.base.EventRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.spine.base.EventRecord, 2));
};


/** @param {Array.<!proto.spine.base.EventRecord>|undefined} value  */
proto.spine.server.storage.AggregateEvents.prototype.setEventRecordList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.spine.server.storage.AggregateEvents.prototype.clearEventRecordList = function() {
  this.setEventRecordList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.server.storage.CommandStoreRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.server.storage.CommandStoreRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.server.storage.CommandStoreRecord.displayName = 'proto.spine.server.storage.CommandStoreRecord';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.server.storage.CommandStoreRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.server.storage.CommandStoreRecord} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.server.storage.CommandStoreRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    commandType: msg.getCommandType(),
    commandId: msg.getCommandId(),
    aggregateIdType: msg.getAggregateIdType(),
    aggregateId: msg.getAggregateId(),
    command: (f = msg.getCommand()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.spine.base.CommandContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.server.storage.CommandStoreRecord}
 */
proto.spine.server.storage.CommandStoreRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.server.storage.CommandStoreRecord;
  return proto.spine.server.storage.CommandStoreRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.server.storage.CommandStoreRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.server.storage.CommandStoreRecord}
 */
proto.spine.server.storage.CommandStoreRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateIdType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateId(value);
      break;
    case 20:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    case 21:
      var value = new proto.spine.base.CommandContext;
      reader.readMessage(value,proto.spine.base.CommandContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.server.storage.CommandStoreRecord} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.CommandStoreRecord.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.CommandStoreRecord.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getCommandType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getCommandId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getAggregateIdType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getAggregateId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getCommand();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = this.getContext();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.spine.base.CommandContext.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.server.storage.CommandStoreRecord} The clone.
 */
proto.spine.server.storage.CommandStoreRecord.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.server.storage.CommandStoreRecord} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.getTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 1));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.spine.server.storage.CommandStoreRecord.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.server.storage.CommandStoreRecord.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * optional string command_type = 2;
 * @return {string}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.getCommandType = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.spine.server.storage.CommandStoreRecord.prototype.setCommandType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string command_id = 3;
 * @return {string}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.getCommandId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.spine.server.storage.CommandStoreRecord.prototype.setCommandId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string aggregate_id_type = 4;
 * @return {string}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.getAggregateIdType = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.spine.server.storage.CommandStoreRecord.prototype.setAggregateIdType = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string aggregate_id = 5;
 * @return {string}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.getAggregateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.spine.server.storage.CommandStoreRecord.prototype.setAggregateId = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional google.protobuf.Any command = 20;
 * @return {proto.google.protobuf.Any}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.getCommand = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 20));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.spine.server.storage.CommandStoreRecord.prototype.setCommand = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


proto.spine.server.storage.CommandStoreRecord.prototype.clearCommand = function() {
  this.setCommand(undefined);
};


/**
 * optional spine.base.CommandContext context = 21;
 * @return {proto.spine.base.CommandContext}
 */
proto.spine.server.storage.CommandStoreRecord.prototype.getContext = function() {
  return /** @type{proto.spine.base.CommandContext} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.CommandContext, 21));
};


/** @param {proto.spine.base.CommandContext|undefined} value  */
proto.spine.server.storage.CommandStoreRecord.prototype.setContext = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


proto.spine.server.storage.CommandStoreRecord.prototype.clearContext = function() {
  this.setContext(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.server.storage.EventStoreRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.server.storage.EventStoreRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.server.storage.EventStoreRecord.displayName = 'proto.spine.server.storage.EventStoreRecord';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.server.storage.EventStoreRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.server.storage.EventStoreRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.server.storage.EventStoreRecord} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.server.storage.EventStoreRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    eventType: msg.getEventType(),
    aggregateId: msg.getAggregateId(),
    eventId: msg.getEventId(),
    event: (f = msg.getEvent()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.spine.base.EventContext.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.server.storage.EventStoreRecord}
 */
proto.spine.server.storage.EventStoreRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.server.storage.EventStoreRecord;
  return proto.spine.server.storage.EventStoreRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.server.storage.EventStoreRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.server.storage.EventStoreRecord}
 */
proto.spine.server.storage.EventStoreRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 20:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 21:
      var value = new proto.spine.base.EventContext;
      reader.readMessage(value,proto.spine.base.EventContext.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.server.storage.EventStoreRecord} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.EventStoreRecord.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.server.storage.EventStoreRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.server.storage.EventStoreRecord.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getEventType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getAggregateId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getEventId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getEvent();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = this.getContext();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.spine.base.EventContext.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.server.storage.EventStoreRecord} The clone.
 */
proto.spine.server.storage.EventStoreRecord.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.server.storage.EventStoreRecord} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.spine.server.storage.EventStoreRecord.prototype.getTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 1));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.spine.server.storage.EventStoreRecord.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.server.storage.EventStoreRecord.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * optional string event_type = 2;
 * @return {string}
 */
proto.spine.server.storage.EventStoreRecord.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.spine.server.storage.EventStoreRecord.prototype.setEventType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string aggregate_id = 3;
 * @return {string}
 */
proto.spine.server.storage.EventStoreRecord.prototype.getAggregateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.spine.server.storage.EventStoreRecord.prototype.setAggregateId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string event_id = 4;
 * @return {string}
 */
proto.spine.server.storage.EventStoreRecord.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.spine.server.storage.EventStoreRecord.prototype.setEventId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional google.protobuf.Any event = 20;
 * @return {proto.google.protobuf.Any}
 */
proto.spine.server.storage.EventStoreRecord.prototype.getEvent = function() {
  return /** @type{proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 20));
};


/** @param {proto.google.protobuf.Any|undefined} value  */
proto.spine.server.storage.EventStoreRecord.prototype.setEvent = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


proto.spine.server.storage.EventStoreRecord.prototype.clearEvent = function() {
  this.setEvent(undefined);
};


/**
 * optional spine.base.EventContext context = 21;
 * @return {proto.spine.base.EventContext}
 */
proto.spine.server.storage.EventStoreRecord.prototype.getContext = function() {
  return /** @type{proto.spine.base.EventContext} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.EventContext, 21));
};


/** @param {proto.spine.base.EventContext|undefined} value  */
proto.spine.server.storage.EventStoreRecord.prototype.setContext = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


proto.spine.server.storage.EventStoreRecord.prototype.clearContext = function() {
  this.setContext(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.sharing.GroupId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.sharing.GroupId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.sharing.GroupId.displayName = 'proto.spine.sharing.GroupId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.sharing.GroupId.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.sharing.GroupId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.sharing.GroupId} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.sharing.GroupId.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.sharing.GroupId}
 */
proto.spine.sharing.GroupId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.sharing.GroupId;
  return proto.spine.sharing.GroupId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.sharing.GroupId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.sharing.GroupId}
 */
proto.spine.sharing.GroupId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.sharing.GroupId} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.GroupId.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.sharing.GroupId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.GroupId.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.sharing.GroupId} The clone.
 */
proto.spine.sharing.GroupId.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.sharing.GroupId} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.spine.sharing.GroupId.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.sharing.GroupId.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.sharing.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spine.sharing.Group.repeatedFields_, null);
};
goog.inherits(proto.spine.sharing.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.sharing.Group.displayName = 'proto.spine.sharing.Group';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spine.sharing.Group.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.sharing.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.sharing.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.sharing.Group} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.sharing.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.spine.sharing.GroupId.toObject(includeInstance, f),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.spine.base.UserId.toObject, includeInstance),
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    proto.spine.sharing.GroupId.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.sharing.Group}
 */
proto.spine.sharing.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.sharing.Group;
  return proto.spine.sharing.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.sharing.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.sharing.Group}
 */
proto.spine.sharing.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.sharing.GroupId;
      reader.readMessage(value,proto.spine.sharing.GroupId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.spine.base.UserId;
      reader.readMessage(value,proto.spine.base.UserId.deserializeBinaryFromReader);
      msg.getUsersList().push(value);
      break;
    case 3:
      var value = new proto.spine.sharing.GroupId;
      reader.readMessage(value,proto.spine.sharing.GroupId.deserializeBinaryFromReader);
      msg.getGroupsList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.sharing.Group} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Group.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.sharing.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Group.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.sharing.GroupId.serializeBinaryToWriter
    );
  }
  f = this.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.spine.base.UserId.serializeBinaryToWriter
    );
  }
  f = this.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.spine.sharing.GroupId.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.sharing.Group} The clone.
 */
proto.spine.sharing.Group.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.sharing.Group} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GroupId id = 1;
 * @return {proto.spine.sharing.GroupId}
 */
proto.spine.sharing.Group.prototype.getId = function() {
  return /** @type{proto.spine.sharing.GroupId} */ (
    jspb.Message.getWrapperField(this, proto.spine.sharing.GroupId, 1));
};


/** @param {proto.spine.sharing.GroupId|undefined} value  */
proto.spine.sharing.Group.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.sharing.Group.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * repeated spine.base.UserId users = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.spine.base.UserId>}
 */
proto.spine.sharing.Group.prototype.getUsersList = function() {
  return /** @type{!Array.<!proto.spine.base.UserId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.spine.base.UserId, 2));
};


/** @param {Array.<!proto.spine.base.UserId>|undefined} value  */
proto.spine.sharing.Group.prototype.setUsersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.spine.sharing.Group.prototype.clearUsersList = function() {
  this.setUsersList([]);
};


/**
 * repeated GroupId groups = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.spine.sharing.GroupId>}
 */
proto.spine.sharing.Group.prototype.getGroupsList = function() {
  return /** @type{!Array.<!proto.spine.sharing.GroupId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.spine.sharing.GroupId, 3));
};


/** @param {Array.<!proto.spine.sharing.GroupId>|undefined} value  */
proto.spine.sharing.Group.prototype.setGroupsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.spine.sharing.Group.prototype.clearGroupsList = function() {
  this.setGroupsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.sharing.Subject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.spine.sharing.Subject.oneofGroups_);
};
goog.inherits(proto.spine.sharing.Subject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.sharing.Subject.displayName = 'proto.spine.sharing.Subject';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.spine.sharing.Subject.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.spine.sharing.Subject.KindCase = {
  KIND_NOT_SET: 0,
  USER: 1,
  GROUP: 2
};

/**
 * @return {proto.spine.sharing.Subject.KindCase}
 */
proto.spine.sharing.Subject.prototype.getKindCase = function() {
  return /** @type {proto.spine.sharing.Subject.KindCase} */(jspb.Message.computeOneofCase(this, proto.spine.sharing.Subject.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.sharing.Subject.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.sharing.Subject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.sharing.Subject} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.sharing.Subject.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.spine.base.UserId.toObject(includeInstance, f),
    group: (f = msg.getGroup()) && proto.spine.sharing.GroupId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.sharing.Subject}
 */
proto.spine.sharing.Subject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.sharing.Subject;
  return proto.spine.sharing.Subject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.sharing.Subject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.sharing.Subject}
 */
proto.spine.sharing.Subject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.base.UserId;
      reader.readMessage(value,proto.spine.base.UserId.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new proto.spine.sharing.GroupId;
      reader.readMessage(value,proto.spine.sharing.GroupId.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.sharing.Subject} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Subject.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.sharing.Subject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Subject.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.base.UserId.serializeBinaryToWriter
    );
  }
  f = this.getGroup();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.spine.sharing.GroupId.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.sharing.Subject} The clone.
 */
proto.spine.sharing.Subject.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.sharing.Subject} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional spine.base.UserId user = 1;
 * @return {proto.spine.base.UserId}
 */
proto.spine.sharing.Subject.prototype.getUser = function() {
  return /** @type{proto.spine.base.UserId} */ (
    jspb.Message.getWrapperField(this, proto.spine.base.UserId, 1));
};


/** @param {proto.spine.base.UserId|undefined} value  */
proto.spine.sharing.Subject.prototype.setUser = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.spine.sharing.Subject.oneofGroups_[0], value);
};


proto.spine.sharing.Subject.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * optional GroupId group = 2;
 * @return {proto.spine.sharing.GroupId}
 */
proto.spine.sharing.Subject.prototype.getGroup = function() {
  return /** @type{proto.spine.sharing.GroupId} */ (
    jspb.Message.getWrapperField(this, proto.spine.sharing.GroupId, 2));
};


/** @param {proto.spine.sharing.GroupId|undefined} value  */
proto.spine.sharing.Subject.prototype.setGroup = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.spine.sharing.Subject.oneofGroups_[0], value);
};


proto.spine.sharing.Subject.prototype.clearGroup = function() {
  this.setGroup(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.sharing.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.sharing.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.sharing.Permission.displayName = 'proto.spine.sharing.Permission';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.sharing.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.sharing.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.sharing.Permission} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.sharing.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: (f = msg.getSubject()) && proto.spine.sharing.Subject.toObject(includeInstance, f),
    level: msg.getLevel()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.sharing.Permission}
 */
proto.spine.sharing.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.sharing.Permission;
  return proto.spine.sharing.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.sharing.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.sharing.Permission}
 */
proto.spine.sharing.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spine.sharing.Subject;
      reader.readMessage(value,proto.spine.sharing.Subject.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    case 2:
      var value = /** @type {!proto.spine.sharing.SharingLevel} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.sharing.Permission} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Permission.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.sharing.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Permission.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSubject();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.spine.sharing.Subject.serializeBinaryToWriter
    );
  }
  f = this.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.sharing.Permission} The clone.
 */
proto.spine.sharing.Permission.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.sharing.Permission} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Subject subject = 1;
 * @return {proto.spine.sharing.Subject}
 */
proto.spine.sharing.Permission.prototype.getSubject = function() {
  return /** @type{proto.spine.sharing.Subject} */ (
    jspb.Message.getWrapperField(this, proto.spine.sharing.Subject, 1));
};


/** @param {proto.spine.sharing.Subject|undefined} value  */
proto.spine.sharing.Permission.prototype.setSubject = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.spine.sharing.Permission.prototype.clearSubject = function() {
  this.setSubject(undefined);
};


/**
 * optional SharingLevel level = 2;
 * @return {!proto.spine.sharing.SharingLevel}
 */
proto.spine.sharing.Permission.prototype.getLevel = function() {
  return /** @type {!proto.spine.sharing.SharingLevel} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.spine.sharing.SharingLevel} value  */
proto.spine.sharing.Permission.prototype.setLevel = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.sharing.Sharing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spine.sharing.Sharing.repeatedFields_, null);
};
goog.inherits(proto.spine.sharing.Sharing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.sharing.Sharing.displayName = 'proto.spine.sharing.Sharing';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spine.sharing.Sharing.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.sharing.Sharing.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.sharing.Sharing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.sharing.Sharing} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.sharing.Sharing.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.spine.sharing.Permission.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.sharing.Sharing}
 */
proto.spine.sharing.Sharing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.sharing.Sharing;
  return proto.spine.sharing.Sharing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.sharing.Sharing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.sharing.Sharing}
 */
proto.spine.sharing.Sharing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.spine.sharing.Permission;
      reader.readMessage(value,proto.spine.sharing.Permission.deserializeBinaryFromReader);
      msg.getPermissionsList().push(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.sharing.Sharing} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Sharing.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.sharing.Sharing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.sharing.Sharing.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.spine.sharing.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.sharing.Sharing} The clone.
 */
proto.spine.sharing.Sharing.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.sharing.Sharing} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Permission permissions = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.spine.sharing.Permission>}
 */
proto.spine.sharing.Sharing.prototype.getPermissionsList = function() {
  return /** @type{!Array.<!proto.spine.sharing.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.spine.sharing.Permission, 2));
};


/** @param {Array.<!proto.spine.sharing.Permission>|undefined} value  */
proto.spine.sharing.Sharing.prototype.setPermissionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.spine.sharing.Sharing.prototype.clearPermissionsList = function() {
  this.setPermissionsList([]);
};


/**
 * @enum {number}
 */
proto.spine.sharing.SharingLevel = {
  NONE: 0,
  VIEW: 1,
  COMMENT: 2,
  EDIT: 3,
  MODERATE: 4,
  ADMINISTRATE: 5
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.SuccessfulRpcCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.SuccessfulRpcCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.SuccessfulRpcCall.displayName = 'proto.spine.client.grpc.web.SuccessfulRpcCall';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.SuccessfulRpcCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.SuccessfulRpcCall} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.SuccessfulRpcCall}
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.SuccessfulRpcCall;
  return proto.spine.client.grpc.web.SuccessfulRpcCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.SuccessfulRpcCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.SuccessfulRpcCall}
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.SuccessfulRpcCall} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.SuccessfulRpcCall} The clone.
 */
proto.spine.client.grpc.web.SuccessfulRpcCall.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.SuccessfulRpcCall} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.VoidRpcArgument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.VoidRpcArgument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.VoidRpcArgument.displayName = 'proto.spine.client.grpc.web.VoidRpcArgument';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.VoidRpcArgument.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.VoidRpcArgument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.VoidRpcArgument} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.VoidRpcArgument.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.VoidRpcArgument}
 */
proto.spine.client.grpc.web.VoidRpcArgument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.VoidRpcArgument;
  return proto.spine.client.grpc.web.VoidRpcArgument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.VoidRpcArgument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.VoidRpcArgument}
 */
proto.spine.client.grpc.web.VoidRpcArgument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.VoidRpcArgument} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.VoidRpcArgument.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.VoidRpcArgument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.VoidRpcArgument.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.VoidRpcArgument} The clone.
 */
proto.spine.client.grpc.web.VoidRpcArgument.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.VoidRpcArgument} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.RpcResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.spine.client.grpc.web.RpcResponse.oneofGroups_);
};
goog.inherits(proto.spine.client.grpc.web.RpcResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.RpcResponse.displayName = 'proto.spine.client.grpc.web.RpcResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.spine.client.grpc.web.RpcResponse.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.spine.client.grpc.web.RpcResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  DATA_BASE64: 2,
  COMPLETION_STATUS: 3,
  ERROR_CAUSE: 4
};

/**
 * @return {proto.spine.client.grpc.web.RpcResponse.ResultCase}
 */
proto.spine.client.grpc.web.RpcResponse.prototype.getResultCase = function() {
  return /** @type {proto.spine.client.grpc.web.RpcResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.spine.client.grpc.web.RpcResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.RpcResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.RpcResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.RpcResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.RpcResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamId: msg.getStreamId(),
    dataBase64: jspb.Message.getField(msg, 2),
    completionStatus: jspb.Message.getField(msg, 3),
    errorCause: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.RpcResponse}
 */
proto.spine.client.grpc.web.RpcResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.RpcResponse;
  return proto.spine.client.grpc.web.RpcResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.RpcResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.RpcResponse}
 */
proto.spine.client.grpc.web.RpcResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataBase64(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompletionStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorCause(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.RpcResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.RpcResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.RpcResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.RpcResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getDataBase64();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getCompletionStatus();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getErrorCause();
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.RpcResponse} The clone.
 */
proto.spine.client.grpc.web.RpcResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.RpcResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string stream_id = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.RpcResponse.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.RpcResponse.prototype.setStreamId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string data_base64 = 2;
 * @return {string?}
 */
proto.spine.client.grpc.web.RpcResponse.prototype.getDataBase64 = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.spine.client.grpc.web.RpcResponse.prototype.setDataBase64 = function(value) {
  jspb.Message.setOneofField(this, 2, proto.spine.client.grpc.web.RpcResponse.oneofGroups_[0], value);
};


proto.spine.client.grpc.web.RpcResponse.prototype.clearDataBase64 = function() {
  jspb.Message.setOneofField(this, 2, proto.spine.client.grpc.web.RpcResponse.oneofGroups_[0], undefined);
};


/**
 * optional string completion_status = 3;
 * @return {string?}
 */
proto.spine.client.grpc.web.RpcResponse.prototype.getCompletionStatus = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.spine.client.grpc.web.RpcResponse.prototype.setCompletionStatus = function(value) {
  jspb.Message.setOneofField(this, 3, proto.spine.client.grpc.web.RpcResponse.oneofGroups_[0], value);
};


proto.spine.client.grpc.web.RpcResponse.prototype.clearCompletionStatus = function() {
  jspb.Message.setOneofField(this, 3, proto.spine.client.grpc.web.RpcResponse.oneofGroups_[0], undefined);
};


/**
 * optional string error_cause = 4;
 * @return {string?}
 */
proto.spine.client.grpc.web.RpcResponse.prototype.getErrorCause = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.spine.client.grpc.web.RpcResponse.prototype.setErrorCause = function(value) {
  jspb.Message.setOneofField(this, 4, proto.spine.client.grpc.web.RpcResponse.oneofGroups_[0], value);
};


proto.spine.client.grpc.web.RpcResponse.prototype.clearErrorCause = function() {
  jspb.Message.setOneofField(this, 4, proto.spine.client.grpc.web.RpcResponse.oneofGroups_[0], undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.WebServiceStreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.WebServiceStreamingResponse.displayName = 'proto.spine.client.grpc.web.WebServiceStreamingResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.WebServiceStreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.WebServiceStreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamId: msg.getStreamId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.WebServiceStreamingResponse}
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.WebServiceStreamingResponse;
  return proto.spine.client.grpc.web.WebServiceStreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.WebServiceStreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.WebServiceStreamingResponse}
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.WebServiceStreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStreamId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.WebServiceStreamingResponse} The clone.
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.WebServiceStreamingResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string stream_id = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.WebServiceStreamingResponse.prototype.getStreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.WebServiceStreamingResponse.prototype.setStreamId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.ChannelConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.ChannelConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.ChannelConnectionResponse.displayName = 'proto.spine.client.grpc.web.ChannelConnectionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.ChannelConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.ChannelConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelId: msg.getChannelId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.ChannelConnectionResponse}
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.ChannelConnectionResponse;
  return proto.spine.client.grpc.web.ChannelConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.ChannelConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.ChannelConnectionResponse}
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.ChannelConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannelId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.ChannelConnectionResponse} The clone.
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.ChannelConnectionResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string channel_id = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.ChannelConnectionResponse.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.ChannelConnectionResponse.prototype.setChannelId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.ChannelConnectionCredential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.ChannelConnectionCredential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.ChannelConnectionCredential.displayName = 'proto.spine.client.grpc.web.ChannelConnectionCredential';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.ChannelConnectionCredential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.ChannelConnectionCredential} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.toObject = function(includeInstance, msg) {
  var f, obj = {
    credential: msg.getCredential()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.ChannelConnectionCredential}
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.ChannelConnectionCredential;
  return proto.spine.client.grpc.web.ChannelConnectionCredential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.ChannelConnectionCredential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.ChannelConnectionCredential}
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredential(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.ChannelConnectionCredential} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCredential();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.ChannelConnectionCredential} The clone.
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.ChannelConnectionCredential} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string credential = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.ChannelConnectionCredential.prototype.getCredential = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.ChannelConnectionCredential.prototype.setCredential = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.PhraseSaidEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.PhraseSaidEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.PhraseSaidEvent.displayName = 'proto.spine.client.grpc.web.PhraseSaidEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.PhraseSaidEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.PhraseSaidEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.PhraseSaidEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.PhraseSaidEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    phrase: msg.getPhrase()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.PhraseSaidEvent}
 */
proto.spine.client.grpc.web.PhraseSaidEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.PhraseSaidEvent;
  return proto.spine.client.grpc.web.PhraseSaidEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.PhraseSaidEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.PhraseSaidEvent}
 */
proto.spine.client.grpc.web.PhraseSaidEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhrase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.PhraseSaidEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.PhraseSaidEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.PhraseSaidEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.PhraseSaidEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPhrase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.PhraseSaidEvent} The clone.
 */
proto.spine.client.grpc.web.PhraseSaidEvent.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.PhraseSaidEvent} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string phrase = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.PhraseSaidEvent.prototype.getPhrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.PhraseSaidEvent.prototype.setPhrase = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.SimpleCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.SimpleCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.SimpleCommandRequest.displayName = 'proto.spine.client.grpc.web.SimpleCommandRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.SimpleCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.SimpleCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.SimpleCommandRequest}
 */
proto.spine.client.grpc.web.SimpleCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.SimpleCommandRequest;
  return proto.spine.client.grpc.web.SimpleCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.SimpleCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.SimpleCommandRequest}
 */
proto.spine.client.grpc.web.SimpleCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.SimpleCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleCommandRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.SimpleCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleCommandRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.SimpleCommandRequest} The clone.
 */
proto.spine.client.grpc.web.SimpleCommandRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.SimpleCommandRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.SimpleCommandRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.SimpleCommandRequest.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.SimpleCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.SimpleCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.SimpleCommandResponse.displayName = 'proto.spine.client.grpc.web.SimpleCommandResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.SimpleCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.SimpleCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.SimpleCommandResponse}
 */
proto.spine.client.grpc.web.SimpleCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.SimpleCommandResponse;
  return proto.spine.client.grpc.web.SimpleCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.SimpleCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.SimpleCommandResponse}
 */
proto.spine.client.grpc.web.SimpleCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.SimpleCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleCommandResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.SimpleCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleCommandResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.SimpleCommandResponse} The clone.
 */
proto.spine.client.grpc.web.SimpleCommandResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.SimpleCommandResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.SimpleCommandResponse.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.SimpleCommandResponse.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.SimpleEventRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.SimpleEventRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.SimpleEventRecord.displayName = 'proto.spine.client.grpc.web.SimpleEventRecord';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleEventRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.SimpleEventRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.SimpleEventRecord} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleEventRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.SimpleEventRecord}
 */
proto.spine.client.grpc.web.SimpleEventRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.SimpleEventRecord;
  return proto.spine.client.grpc.web.SimpleEventRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.SimpleEventRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.SimpleEventRecord}
 */
proto.spine.client.grpc.web.SimpleEventRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.SimpleEventRecord} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleEventRecord.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.SimpleEventRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleEventRecord.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.SimpleEventRecord} The clone.
 */
proto.spine.client.grpc.web.SimpleEventRecord.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.SimpleEventRecord} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.SimpleEventRecord.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.SimpleEventRecord.prototype.setValue = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.SimpleClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.SimpleClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.SimpleClientRequest.displayName = 'proto.spine.client.grpc.web.SimpleClientRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.SimpleClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.SimpleClientRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: msg.getClientId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.SimpleClientRequest}
 */
proto.spine.client.grpc.web.SimpleClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.SimpleClientRequest;
  return proto.spine.client.grpc.web.SimpleClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.SimpleClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.SimpleClientRequest}
 */
proto.spine.client.grpc.web.SimpleClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.SimpleClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleClientRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.SimpleClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleClientRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.SimpleClientRequest} The clone.
 */
proto.spine.client.grpc.web.SimpleClientRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.SimpleClientRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.SimpleClientRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.SimpleClientRequest.prototype.setClientId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.spine.client.grpc.web.SimpleConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spine.client.grpc.web.SimpleConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.spine.client.grpc.web.SimpleConnection.displayName = 'proto.spine.client.grpc.web.SimpleConnection';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.spine.client.grpc.web.SimpleConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spine.client.grpc.web.SimpleConnection} msg The msg instance to transform.
 * @return {!Object}
 */
proto.spine.client.grpc.web.SimpleConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelToken: msg.getChannelToken()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.spine.client.grpc.web.SimpleConnection}
 */
proto.spine.client.grpc.web.SimpleConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spine.client.grpc.web.SimpleConnection;
  return proto.spine.client.grpc.web.SimpleConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spine.client.grpc.web.SimpleConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spine.client.grpc.web.SimpleConnection}
 */
proto.spine.client.grpc.web.SimpleConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.spine.client.grpc.web.SimpleConnection} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleConnection.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.spine.client.grpc.web.SimpleConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.spine.client.grpc.web.SimpleConnection.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChannelToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.spine.client.grpc.web.SimpleConnection} The clone.
 */
proto.spine.client.grpc.web.SimpleConnection.prototype.cloneMessage = function() {
  return /** @type {!proto.spine.client.grpc.web.SimpleConnection} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string channel_token = 1;
 * @return {string}
 */
proto.spine.client.grpc.web.SimpleConnection.prototype.getChannelToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.spine.client.grpc.web.SimpleConnection.prototype.setChannelToken = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `currency`.
 * @type {!jspb.ExtensionFieldInfo.<!proto.spine.money.CurrencyOptions>}
 */
proto.spine.money.currency = new jspb.ExtensionFieldInfo(
    1025,
    {currency: 0},
    proto.spine.money.CurrencyOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.spine.money.CurrencyOptions.toObject),
    0,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.spine.money.CurrencyOptions.serializeBinaryToWriter,
    proto.spine.money.CurrencyOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.google.protobuf.EnumValueOptions.extensions[1025] = proto.spine.money.currency;

