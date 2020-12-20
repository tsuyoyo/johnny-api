// source: proto/area.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.pj.sakuchin.percussion.proto.City', null, global);
goog.exportSymbol('proto.pj.sakuchin.percussion.proto.Prefecture', null, global);
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
proto.pj.sakuchin.percussion.proto.City = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pj.sakuchin.percussion.proto.City, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pj.sakuchin.percussion.proto.City.displayName = 'proto.pj.sakuchin.percussion.proto.City';
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
proto.pj.sakuchin.percussion.proto.City.prototype.toObject = function(opt_includeInstance) {
  return proto.pj.sakuchin.percussion.proto.City.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pj.sakuchin.percussion.proto.City} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.City.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    prefecture: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pj.sakuchin.percussion.proto.City}
 */
proto.pj.sakuchin.percussion.proto.City.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pj.sakuchin.percussion.proto.City;
  return proto.pj.sakuchin.percussion.proto.City.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pj.sakuchin.percussion.proto.City} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pj.sakuchin.percussion.proto.City}
 */
proto.pj.sakuchin.percussion.proto.City.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.pj.sakuchin.percussion.proto.Prefecture} */ (reader.readEnum());
      msg.setPrefecture(value);
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
proto.pj.sakuchin.percussion.proto.City.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pj.sakuchin.percussion.proto.City.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pj.sakuchin.percussion.proto.City} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pj.sakuchin.percussion.proto.City.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrefecture();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pj.sakuchin.percussion.proto.City.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pj.sakuchin.percussion.proto.City} returns this
 */
proto.pj.sakuchin.percussion.proto.City.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pj.sakuchin.percussion.proto.City.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pj.sakuchin.percussion.proto.City} returns this
 */
proto.pj.sakuchin.percussion.proto.City.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Prefecture prefecture = 3;
 * @return {!proto.pj.sakuchin.percussion.proto.Prefecture}
 */
proto.pj.sakuchin.percussion.proto.City.prototype.getPrefecture = function() {
  return /** @type {!proto.pj.sakuchin.percussion.proto.Prefecture} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pj.sakuchin.percussion.proto.Prefecture} value
 * @return {!proto.pj.sakuchin.percussion.proto.City} returns this
 */
proto.pj.sakuchin.percussion.proto.City.prototype.setPrefecture = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.pj.sakuchin.percussion.proto.Prefecture = {
  UNKNOWN: 0,
  HOKKAIDO: 1,
  AOMORI: 2,
  IWATE: 3,
  MIYAGI: 4,
  AKITA: 5,
  YAMAGATA: 6,
  FUKUSHIMA: 7,
  IBARAKI: 8,
  TOCHIGI: 9,
  GUNNMA: 10,
  SAITAMA: 11,
  CHIBA: 12,
  TOKYO: 13,
  KANAGAWA: 14,
  NIIGATA: 15,
  TOYAMA: 16,
  ISHIKAWA: 17,
  FUKUI: 18,
  YAMANASHI: 19,
  NAGANO: 20,
  GIFU: 21,
  SHIZUOKA: 22,
  AICHI: 23,
  MIE: 24,
  SHIGA: 25,
  KYOTO: 26,
  OSAKA: 27,
  HYOGO: 28,
  NARA: 29,
  WAKAYAMA: 30,
  TOTTORI: 31,
  SHIMANE: 32,
  OKAYAMA: 33,
  HIROSHIMA: 34,
  YAMAGUCHI: 35,
  TOKUSHIMA: 36,
  KAGAWA: 37,
  EHIME: 38,
  KOCHI: 39,
  FUKUOKA: 40,
  SAGA: 41,
  NAGASAKI: 42,
  KUMAMOTO: 43,
  OITA: 44,
  MIYAZAKI: 45,
  KAGOSHIMA: 46,
  OKINAWA: 47
};

goog.object.extend(exports, proto.pj.sakuchin.percussion.proto);
