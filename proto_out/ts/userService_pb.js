// source: proto/userService.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_user_pb = require('../proto/user_pb.js');
goog.object.extend(proto, proto_user_pb);
goog.exportSymbol('proto.pj.sakuchin.percussion.proto.GetUserResponse', null, global);
goog.exportSymbol('proto.pj.sakuchin.percussion.proto.PutUserResponse', null, global);
goog.exportSymbol('proto.pj.sakuchin.percussion.proto.SignupUserRequest', null, global);
goog.exportSymbol('proto.pj.sakuchin.percussion.proto.SignupUserResponse', null, global);
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
proto.pj.sakuchin.percussion.proto.SignupUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pj.sakuchin.percussion.proto.SignupUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pj.sakuchin.percussion.proto.SignupUserRequest.displayName = 'proto.pj.sakuchin.percussion.proto.SignupUserRequest';
}
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
proto.pj.sakuchin.percussion.proto.SignupUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pj.sakuchin.percussion.proto.SignupUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pj.sakuchin.percussion.proto.SignupUserResponse.displayName = 'proto.pj.sakuchin.percussion.proto.SignupUserResponse';
}
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
proto.pj.sakuchin.percussion.proto.GetUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pj.sakuchin.percussion.proto.GetUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pj.sakuchin.percussion.proto.GetUserResponse.displayName = 'proto.pj.sakuchin.percussion.proto.GetUserResponse';
}
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
proto.pj.sakuchin.percussion.proto.PutUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pj.sakuchin.percussion.proto.PutUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pj.sakuchin.percussion.proto.PutUserResponse.displayName = 'proto.pj.sakuchin.percussion.proto.PutUserResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pj.sakuchin.percussion.proto.SignupUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pj.sakuchin.percussion.proto.SignupUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pj.sakuchin.percussion.proto.SignupUserRequest}
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pj.sakuchin.percussion.proto.SignupUserRequest;
  return proto.pj.sakuchin.percussion.proto.SignupUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pj.sakuchin.percussion.proto.SignupUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pj.sakuchin.percussion.proto.SignupUserRequest}
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pj.sakuchin.percussion.proto.SignupUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pj.sakuchin.percussion.proto.SignupUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pj.sakuchin.percussion.proto.SignupUserRequest} returns this
 */
proto.pj.sakuchin.percussion.proto.SignupUserRequest.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pj.sakuchin.percussion.proto.SignupUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pj.sakuchin.percussion.proto.SignupUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto_user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pj.sakuchin.percussion.proto.SignupUserResponse}
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pj.sakuchin.percussion.proto.SignupUserResponse;
  return proto.pj.sakuchin.percussion.proto.SignupUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pj.sakuchin.percussion.proto.SignupUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pj.sakuchin.percussion.proto.SignupUserResponse}
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_user_pb.User;
      reader.readMessage(value,proto_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pj.sakuchin.percussion.proto.SignupUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pj.sakuchin.percussion.proto.SignupUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.pj.sakuchin.percussion.proto.User}
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.prototype.getUser = function() {
  return /** @type{?proto.pj.sakuchin.percussion.proto.User} */ (
    jspb.Message.getWrapperField(this, proto_user_pb.User, 1));
};


/**
 * @param {?proto.pj.sakuchin.percussion.proto.User|undefined} value
 * @return {!proto.pj.sakuchin.percussion.proto.SignupUserResponse} returns this
*/
proto.pj.sakuchin.percussion.proto.SignupUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pj.sakuchin.percussion.proto.SignupUserResponse} returns this
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pj.sakuchin.percussion.proto.SignupUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pj.sakuchin.percussion.proto.GetUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pj.sakuchin.percussion.proto.GetUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto_user_pb.User.toObject(includeInstance, f),
    userprofile: (f = msg.getUserprofile()) && proto_user_pb.UserProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pj.sakuchin.percussion.proto.GetUserResponse}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pj.sakuchin.percussion.proto.GetUserResponse;
  return proto.pj.sakuchin.percussion.proto.GetUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pj.sakuchin.percussion.proto.GetUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pj.sakuchin.percussion.proto.GetUserResponse}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_user_pb.User;
      reader.readMessage(value,proto_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new proto_user_pb.UserProfile;
      reader.readMessage(value,proto_user_pb.UserProfile.deserializeBinaryFromReader);
      msg.setUserprofile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pj.sakuchin.percussion.proto.GetUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pj.sakuchin.percussion.proto.GetUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUserprofile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_user_pb.UserProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.pj.sakuchin.percussion.proto.User}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.getUser = function() {
  return /** @type{?proto.pj.sakuchin.percussion.proto.User} */ (
    jspb.Message.getWrapperField(this, proto_user_pb.User, 1));
};


/**
 * @param {?proto.pj.sakuchin.percussion.proto.User|undefined} value
 * @return {!proto.pj.sakuchin.percussion.proto.GetUserResponse} returns this
*/
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pj.sakuchin.percussion.proto.GetUserResponse} returns this
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserProfile userProfile = 2;
 * @return {?proto.pj.sakuchin.percussion.proto.UserProfile}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.getUserprofile = function() {
  return /** @type{?proto.pj.sakuchin.percussion.proto.UserProfile} */ (
    jspb.Message.getWrapperField(this, proto_user_pb.UserProfile, 2));
};


/**
 * @param {?proto.pj.sakuchin.percussion.proto.UserProfile|undefined} value
 * @return {!proto.pj.sakuchin.percussion.proto.GetUserResponse} returns this
*/
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.setUserprofile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pj.sakuchin.percussion.proto.GetUserResponse} returns this
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.clearUserprofile = function() {
  return this.setUserprofile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pj.sakuchin.percussion.proto.GetUserResponse.prototype.hasUserprofile = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pj.sakuchin.percussion.proto.PutUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pj.sakuchin.percussion.proto.PutUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto_user_pb.User.toObject(includeInstance, f),
    userprofile: (f = msg.getUserprofile()) && proto_user_pb.UserProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pj.sakuchin.percussion.proto.PutUserResponse}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pj.sakuchin.percussion.proto.PutUserResponse;
  return proto.pj.sakuchin.percussion.proto.PutUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pj.sakuchin.percussion.proto.PutUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pj.sakuchin.percussion.proto.PutUserResponse}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_user_pb.User;
      reader.readMessage(value,proto_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = new proto_user_pb.UserProfile;
      reader.readMessage(value,proto_user_pb.UserProfile.deserializeBinaryFromReader);
      msg.setUserprofile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pj.sakuchin.percussion.proto.PutUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pj.sakuchin.percussion.proto.PutUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUserprofile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_user_pb.UserProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.pj.sakuchin.percussion.proto.User}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.getUser = function() {
  return /** @type{?proto.pj.sakuchin.percussion.proto.User} */ (
    jspb.Message.getWrapperField(this, proto_user_pb.User, 1));
};


/**
 * @param {?proto.pj.sakuchin.percussion.proto.User|undefined} value
 * @return {!proto.pj.sakuchin.percussion.proto.PutUserResponse} returns this
*/
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pj.sakuchin.percussion.proto.PutUserResponse} returns this
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserProfile userProfile = 2;
 * @return {?proto.pj.sakuchin.percussion.proto.UserProfile}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.getUserprofile = function() {
  return /** @type{?proto.pj.sakuchin.percussion.proto.UserProfile} */ (
    jspb.Message.getWrapperField(this, proto_user_pb.UserProfile, 2));
};


/**
 * @param {?proto.pj.sakuchin.percussion.proto.UserProfile|undefined} value
 * @return {!proto.pj.sakuchin.percussion.proto.PutUserResponse} returns this
*/
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.setUserprofile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pj.sakuchin.percussion.proto.PutUserResponse} returns this
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.clearUserprofile = function() {
  return this.setUserprofile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pj.sakuchin.percussion.proto.PutUserResponse.prototype.hasUserprofile = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.pj.sakuchin.percussion.proto);
