/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pj = (function() {

    /**
     * Namespace pj.
     * @exports pj
     * @namespace
     */
    var pj = {};

    pj.sakuchin = (function() {

        /**
         * Namespace sakuchin.
         * @memberof pj
         * @namespace
         */
        var sakuchin = {};

        sakuchin.percussion = (function() {

            /**
             * Namespace percussion.
             * @memberof pj.sakuchin
             * @namespace
             */
            var percussion = {};

            percussion.proto = (function() {

                /**
                 * Namespace proto.
                 * @memberof pj.sakuchin.percussion
                 * @namespace
                 */
                var proto = {};

                /**
                 * Prefecture enum.
                 * @name pj.sakuchin.percussion.proto.Prefecture
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} HOKKAIDO=1 HOKKAIDO value
                 * @property {number} AOMORI=2 AOMORI value
                 * @property {number} IWATE=3 IWATE value
                 * @property {number} MIYAGI=4 MIYAGI value
                 * @property {number} AKITA=5 AKITA value
                 * @property {number} YAMAGATA=6 YAMAGATA value
                 * @property {number} FUKUSHIMA=7 FUKUSHIMA value
                 * @property {number} IBARAKI=8 IBARAKI value
                 * @property {number} TOCHIGI=9 TOCHIGI value
                 * @property {number} GUNNMA=10 GUNNMA value
                 * @property {number} SAITAMA=11 SAITAMA value
                 * @property {number} CHIBA=12 CHIBA value
                 * @property {number} TOKYO=13 TOKYO value
                 * @property {number} KANAGAWA=14 KANAGAWA value
                 * @property {number} NIIGATA=15 NIIGATA value
                 * @property {number} TOYAMA=16 TOYAMA value
                 * @property {number} ISHIKAWA=17 ISHIKAWA value
                 * @property {number} FUKUI=18 FUKUI value
                 * @property {number} YAMANASHI=19 YAMANASHI value
                 * @property {number} NAGANO=20 NAGANO value
                 * @property {number} GIFU=21 GIFU value
                 * @property {number} SHIZUOKA=22 SHIZUOKA value
                 * @property {number} AICHI=23 AICHI value
                 * @property {number} MIE=24 MIE value
                 * @property {number} SHIGA=25 SHIGA value
                 * @property {number} KYOTO=26 KYOTO value
                 * @property {number} OSAKA=27 OSAKA value
                 * @property {number} HYOGO=28 HYOGO value
                 * @property {number} NARA=29 NARA value
                 * @property {number} WAKAYAMA=30 WAKAYAMA value
                 * @property {number} TOTTORI=31 TOTTORI value
                 * @property {number} SHIMANE=32 SHIMANE value
                 * @property {number} OKAYAMA=33 OKAYAMA value
                 * @property {number} HIROSHIMA=34 HIROSHIMA value
                 * @property {number} YAMAGUCHI=35 YAMAGUCHI value
                 * @property {number} TOKUSHIMA=36 TOKUSHIMA value
                 * @property {number} KAGAWA=37 KAGAWA value
                 * @property {number} EHIME=38 EHIME value
                 * @property {number} KOCHI=39 KOCHI value
                 * @property {number} FUKUOKA=40 FUKUOKA value
                 * @property {number} SAGA=41 SAGA value
                 * @property {number} NAGASAKI=42 NAGASAKI value
                 * @property {number} KUMAMOTO=43 KUMAMOTO value
                 * @property {number} OITA=44 OITA value
                 * @property {number} MIYAZAKI=45 MIYAZAKI value
                 * @property {number} KAGOSHIMA=46 KAGOSHIMA value
                 * @property {number} OKINAWA=47 OKINAWA value
                 */
                proto.Prefecture = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "HOKKAIDO"] = 1;
                    values[valuesById[2] = "AOMORI"] = 2;
                    values[valuesById[3] = "IWATE"] = 3;
                    values[valuesById[4] = "MIYAGI"] = 4;
                    values[valuesById[5] = "AKITA"] = 5;
                    values[valuesById[6] = "YAMAGATA"] = 6;
                    values[valuesById[7] = "FUKUSHIMA"] = 7;
                    values[valuesById[8] = "IBARAKI"] = 8;
                    values[valuesById[9] = "TOCHIGI"] = 9;
                    values[valuesById[10] = "GUNNMA"] = 10;
                    values[valuesById[11] = "SAITAMA"] = 11;
                    values[valuesById[12] = "CHIBA"] = 12;
                    values[valuesById[13] = "TOKYO"] = 13;
                    values[valuesById[14] = "KANAGAWA"] = 14;
                    values[valuesById[15] = "NIIGATA"] = 15;
                    values[valuesById[16] = "TOYAMA"] = 16;
                    values[valuesById[17] = "ISHIKAWA"] = 17;
                    values[valuesById[18] = "FUKUI"] = 18;
                    values[valuesById[19] = "YAMANASHI"] = 19;
                    values[valuesById[20] = "NAGANO"] = 20;
                    values[valuesById[21] = "GIFU"] = 21;
                    values[valuesById[22] = "SHIZUOKA"] = 22;
                    values[valuesById[23] = "AICHI"] = 23;
                    values[valuesById[24] = "MIE"] = 24;
                    values[valuesById[25] = "SHIGA"] = 25;
                    values[valuesById[26] = "KYOTO"] = 26;
                    values[valuesById[27] = "OSAKA"] = 27;
                    values[valuesById[28] = "HYOGO"] = 28;
                    values[valuesById[29] = "NARA"] = 29;
                    values[valuesById[30] = "WAKAYAMA"] = 30;
                    values[valuesById[31] = "TOTTORI"] = 31;
                    values[valuesById[32] = "SHIMANE"] = 32;
                    values[valuesById[33] = "OKAYAMA"] = 33;
                    values[valuesById[34] = "HIROSHIMA"] = 34;
                    values[valuesById[35] = "YAMAGUCHI"] = 35;
                    values[valuesById[36] = "TOKUSHIMA"] = 36;
                    values[valuesById[37] = "KAGAWA"] = 37;
                    values[valuesById[38] = "EHIME"] = 38;
                    values[valuesById[39] = "KOCHI"] = 39;
                    values[valuesById[40] = "FUKUOKA"] = 40;
                    values[valuesById[41] = "SAGA"] = 41;
                    values[valuesById[42] = "NAGASAKI"] = 42;
                    values[valuesById[43] = "KUMAMOTO"] = 43;
                    values[valuesById[44] = "OITA"] = 44;
                    values[valuesById[45] = "MIYAZAKI"] = 45;
                    values[valuesById[46] = "KAGOSHIMA"] = 46;
                    values[valuesById[47] = "OKINAWA"] = 47;
                    return values;
                })();

                proto.City = (function() {

                    /**
                     * Properties of a City.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface ICity
                     * @property {string|null} [id] City id
                     * @property {string|null} [name] City name
                     * @property {pj.sakuchin.percussion.proto.Prefecture|null} [prefecture] City prefecture
                     */

                    /**
                     * Constructs a new City.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a City.
                     * @implements ICity
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.ICity=} [properties] Properties to set
                     */
                    function City(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * City id.
                     * @member {string} id
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     */
                    City.prototype.id = "";

                    /**
                     * City name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     */
                    City.prototype.name = "";

                    /**
                     * City prefecture.
                     * @member {pj.sakuchin.percussion.proto.Prefecture} prefecture
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     */
                    City.prototype.prefecture = 0;

                    /**
                     * Creates a new City instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ICity=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.City} City instance
                     */
                    City.create = function create(properties) {
                        return new City(properties);
                    };

                    /**
                     * Encodes the specified City message. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ICity} message City message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    City.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.prefecture != null && Object.hasOwnProperty.call(message, "prefecture"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.prefecture);
                        return writer;
                    };

                    /**
                     * Encodes the specified City message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ICity} message City message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    City.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a City message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.City} City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    City.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.City();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.prefecture = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a City message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.City} City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    City.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a City message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    City.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.prefecture != null && message.hasOwnProperty("prefecture"))
                            switch (message.prefecture) {
                            default:
                                return "prefecture: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 25:
                            case 26:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                            case 31:
                            case 32:
                            case 33:
                            case 34:
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                            case 41:
                            case 42:
                            case 43:
                            case 44:
                            case 45:
                            case 46:
                            case 47:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a City message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.City} City
                     */
                    City.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.City)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.City();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        switch (object.prefecture) {
                        case "UNKNOWN":
                        case 0:
                            message.prefecture = 0;
                            break;
                        case "HOKKAIDO":
                        case 1:
                            message.prefecture = 1;
                            break;
                        case "AOMORI":
                        case 2:
                            message.prefecture = 2;
                            break;
                        case "IWATE":
                        case 3:
                            message.prefecture = 3;
                            break;
                        case "MIYAGI":
                        case 4:
                            message.prefecture = 4;
                            break;
                        case "AKITA":
                        case 5:
                            message.prefecture = 5;
                            break;
                        case "YAMAGATA":
                        case 6:
                            message.prefecture = 6;
                            break;
                        case "FUKUSHIMA":
                        case 7:
                            message.prefecture = 7;
                            break;
                        case "IBARAKI":
                        case 8:
                            message.prefecture = 8;
                            break;
                        case "TOCHIGI":
                        case 9:
                            message.prefecture = 9;
                            break;
                        case "GUNNMA":
                        case 10:
                            message.prefecture = 10;
                            break;
                        case "SAITAMA":
                        case 11:
                            message.prefecture = 11;
                            break;
                        case "CHIBA":
                        case 12:
                            message.prefecture = 12;
                            break;
                        case "TOKYO":
                        case 13:
                            message.prefecture = 13;
                            break;
                        case "KANAGAWA":
                        case 14:
                            message.prefecture = 14;
                            break;
                        case "NIIGATA":
                        case 15:
                            message.prefecture = 15;
                            break;
                        case "TOYAMA":
                        case 16:
                            message.prefecture = 16;
                            break;
                        case "ISHIKAWA":
                        case 17:
                            message.prefecture = 17;
                            break;
                        case "FUKUI":
                        case 18:
                            message.prefecture = 18;
                            break;
                        case "YAMANASHI":
                        case 19:
                            message.prefecture = 19;
                            break;
                        case "NAGANO":
                        case 20:
                            message.prefecture = 20;
                            break;
                        case "GIFU":
                        case 21:
                            message.prefecture = 21;
                            break;
                        case "SHIZUOKA":
                        case 22:
                            message.prefecture = 22;
                            break;
                        case "AICHI":
                        case 23:
                            message.prefecture = 23;
                            break;
                        case "MIE":
                        case 24:
                            message.prefecture = 24;
                            break;
                        case "SHIGA":
                        case 25:
                            message.prefecture = 25;
                            break;
                        case "KYOTO":
                        case 26:
                            message.prefecture = 26;
                            break;
                        case "OSAKA":
                        case 27:
                            message.prefecture = 27;
                            break;
                        case "HYOGO":
                        case 28:
                            message.prefecture = 28;
                            break;
                        case "NARA":
                        case 29:
                            message.prefecture = 29;
                            break;
                        case "WAKAYAMA":
                        case 30:
                            message.prefecture = 30;
                            break;
                        case "TOTTORI":
                        case 31:
                            message.prefecture = 31;
                            break;
                        case "SHIMANE":
                        case 32:
                            message.prefecture = 32;
                            break;
                        case "OKAYAMA":
                        case 33:
                            message.prefecture = 33;
                            break;
                        case "HIROSHIMA":
                        case 34:
                            message.prefecture = 34;
                            break;
                        case "YAMAGUCHI":
                        case 35:
                            message.prefecture = 35;
                            break;
                        case "TOKUSHIMA":
                        case 36:
                            message.prefecture = 36;
                            break;
                        case "KAGAWA":
                        case 37:
                            message.prefecture = 37;
                            break;
                        case "EHIME":
                        case 38:
                            message.prefecture = 38;
                            break;
                        case "KOCHI":
                        case 39:
                            message.prefecture = 39;
                            break;
                        case "FUKUOKA":
                        case 40:
                            message.prefecture = 40;
                            break;
                        case "SAGA":
                        case 41:
                            message.prefecture = 41;
                            break;
                        case "NAGASAKI":
                        case 42:
                            message.prefecture = 42;
                            break;
                        case "KUMAMOTO":
                        case 43:
                            message.prefecture = 43;
                            break;
                        case "OITA":
                        case 44:
                            message.prefecture = 44;
                            break;
                        case "MIYAZAKI":
                        case 45:
                            message.prefecture = 45;
                            break;
                        case "KAGOSHIMA":
                        case 46:
                            message.prefecture = 46;
                            break;
                        case "OKINAWA":
                        case 47:
                            message.prefecture = 47;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a City message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @static
                     * @param {pj.sakuchin.percussion.proto.City} message City
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    City.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.prefecture = options.enums === String ? "UNKNOWN" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.prefecture != null && message.hasOwnProperty("prefecture"))
                            object.prefecture = options.enums === String ? $root.pj.sakuchin.percussion.proto.Prefecture[message.prefecture] : message.prefecture;
                        return object;
                    };

                    /**
                     * Converts this City to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.City
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    City.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return City;
                })();

                proto.GetAreaCityResponse = (function() {

                    /**
                     * Properties of a GetAreaCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetAreaCityResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] GetAreaCityResponse cities
                     */

                    /**
                     * Constructs a new GetAreaCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetAreaCityResponse.
                     * @implements IGetAreaCityResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse=} [properties] Properties to set
                     */
                    function GetAreaCityResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetAreaCityResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @instance
                     */
                    GetAreaCityResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new GetAreaCityResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse instance
                     */
                    GetAreaCityResponse.create = function create(properties) {
                        return new GetAreaCityResponse(properties);
                    };

                    /**
                     * Encodes the specified GetAreaCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse} message GetAreaCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetAreaCityResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetAreaCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetAreaCityResponse} message GetAreaCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetAreaCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetAreaCityResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetAreaCityResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetAreaCityResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetAreaCityResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetAreaCityResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetAreaCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetAreaCityResponse} GetAreaCityResponse
                     */
                    GetAreaCityResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetAreaCityResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetAreaCityResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetAreaCityResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetAreaCityResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetAreaCityResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetAreaCityResponse} message GetAreaCityResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetAreaCityResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetAreaCityResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetAreaCityResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetAreaCityResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetAreaCityResponse;
                })();

                proto.EmptyResponse = (function() {

                    /**
                     * Properties of an EmptyResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IEmptyResponse
                     */

                    /**
                     * Constructs a new EmptyResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents an EmptyResponse.
                     * @implements IEmptyResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse=} [properties] Properties to set
                     */
                    function EmptyResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new EmptyResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse instance
                     */
                    EmptyResponse.create = function create(properties) {
                        return new EmptyResponse(properties);
                    };

                    /**
                     * Encodes the specified EmptyResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse} message EmptyResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EmptyResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IEmptyResponse} message EmptyResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EmptyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EmptyResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.EmptyResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EmptyResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EmptyResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EmptyResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.EmptyResponse} EmptyResponse
                     */
                    EmptyResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.EmptyResponse)
                            return object;
                        return new $root.pj.sakuchin.percussion.proto.EmptyResponse();
                    };

                    /**
                     * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.EmptyResponse} message EmptyResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EmptyResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this EmptyResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.EmptyResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EmptyResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EmptyResponse;
                })();

                proto.PercussionApiError = (function() {

                    /**
                     * Properties of a PercussionApiError.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPercussionApiError
                     * @property {pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode|null} [errorCode] PercussionApiError errorCode
                     * @property {string|null} [message] PercussionApiError message
                     */

                    /**
                     * Constructs a new PercussionApiError.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PercussionApiError.
                     * @implements IPercussionApiError
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError=} [properties] Properties to set
                     */
                    function PercussionApiError(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PercussionApiError errorCode.
                     * @member {pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode} errorCode
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @instance
                     */
                    PercussionApiError.prototype.errorCode = 0;

                    /**
                     * PercussionApiError message.
                     * @member {string} message
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @instance
                     */
                    PercussionApiError.prototype.message = "";

                    /**
                     * Creates a new PercussionApiError instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError instance
                     */
                    PercussionApiError.create = function create(properties) {
                        return new PercussionApiError(properties);
                    };

                    /**
                     * Encodes the specified PercussionApiError message. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError} message PercussionApiError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PercussionApiError.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                        return writer;
                    };

                    /**
                     * Encodes the specified PercussionApiError message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPercussionApiError} message PercussionApiError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PercussionApiError.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PercussionApiError.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PercussionApiError();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.errorCode = reader.int32();
                                break;
                            case 2:
                                message.message = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PercussionApiError.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PercussionApiError message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PercussionApiError.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            switch (message.errorCode) {
                            default:
                                return "errorCode: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                break;
                            }
                        if (message.message != null && message.hasOwnProperty("message"))
                            if (!$util.isString(message.message))
                                return "message: string expected";
                        return null;
                    };

                    /**
                     * Creates a PercussionApiError message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PercussionApiError} PercussionApiError
                     */
                    PercussionApiError.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PercussionApiError)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PercussionApiError();
                        switch (object.errorCode) {
                        case "UNKNOWN":
                        case 0:
                            message.errorCode = 0;
                            break;
                        case "NO_TOKEN":
                        case 1:
                            message.errorCode = 1;
                            break;
                        case "INVALID_FIREBASE_TOKEN":
                        case 2:
                            message.errorCode = 2;
                            break;
                        case "USER_HAS_BEEN_ALREADY_REGISTERED":
                        case 3:
                            message.errorCode = 3;
                            break;
                        case "DB_ERROR":
                        case 4:
                            message.errorCode = 4;
                            break;
                        case "INVALID_PARAMETER":
                        case 5:
                            message.errorCode = 5;
                            break;
                        case "AUTHENTICATION_ERROR":
                        case 6:
                            message.errorCode = 6;
                            break;
                        case "LOGIN_REQUIRED":
                        case 7:
                            message.errorCode = 7;
                            break;
                        }
                        if (object.message != null)
                            message.message = String(object.message);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PercussionApiError message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PercussionApiError} message PercussionApiError
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PercussionApiError.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.errorCode = options.enums === String ? "UNKNOWN" : 0;
                            object.message = "";
                        }
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            object.errorCode = options.enums === String ? $root.pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode[message.errorCode] : message.errorCode;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        return object;
                    };

                    /**
                     * Converts this PercussionApiError to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PercussionApiError
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PercussionApiError.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * ErrorCode enum.
                     * @name pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode
                     * @enum {number}
                     * @property {number} UNKNOWN=0 UNKNOWN value
                     * @property {number} NO_TOKEN=1 NO_TOKEN value
                     * @property {number} INVALID_FIREBASE_TOKEN=2 INVALID_FIREBASE_TOKEN value
                     * @property {number} USER_HAS_BEEN_ALREADY_REGISTERED=3 USER_HAS_BEEN_ALREADY_REGISTERED value
                     * @property {number} DB_ERROR=4 DB_ERROR value
                     * @property {number} INVALID_PARAMETER=5 INVALID_PARAMETER value
                     * @property {number} AUTHENTICATION_ERROR=6 AUTHENTICATION_ERROR value
                     * @property {number} LOGIN_REQUIRED=7 LOGIN_REQUIRED value
                     */
                    PercussionApiError.ErrorCode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "UNKNOWN"] = 0;
                        values[valuesById[1] = "NO_TOKEN"] = 1;
                        values[valuesById[2] = "INVALID_FIREBASE_TOKEN"] = 2;
                        values[valuesById[3] = "USER_HAS_BEEN_ALREADY_REGISTERED"] = 3;
                        values[valuesById[4] = "DB_ERROR"] = 4;
                        values[valuesById[5] = "INVALID_PARAMETER"] = 5;
                        values[valuesById[6] = "AUTHENTICATION_ERROR"] = 6;
                        values[valuesById[7] = "LOGIN_REQUIRED"] = 7;
                        return values;
                    })();

                    return PercussionApiError;
                })();

                proto.GetSuggestCityResponse = (function() {

                    /**
                     * Properties of a GetSuggestCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetSuggestCityResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] GetSuggestCityResponse cities
                     */

                    /**
                     * Constructs a new GetSuggestCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetSuggestCityResponse.
                     * @implements IGetSuggestCityResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse=} [properties] Properties to set
                     */
                    function GetSuggestCityResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetSuggestCityResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @instance
                     */
                    GetSuggestCityResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new GetSuggestCityResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse instance
                     */
                    GetSuggestCityResponse.create = function create(properties) {
                        return new GetSuggestCityResponse(properties);
                    };

                    /**
                     * Encodes the specified GetSuggestCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse} message GetSuggestCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetSuggestCityResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetSuggestCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetSuggestCityResponse} message GetSuggestCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetSuggestCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetSuggestCityResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetSuggestCityResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetSuggestCityResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetSuggestCityResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetSuggestCityResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetSuggestCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetSuggestCityResponse} GetSuggestCityResponse
                     */
                    GetSuggestCityResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetSuggestCityResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetSuggestCityResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetSuggestCityResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetSuggestCityResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetSuggestCityResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetSuggestCityResponse} message GetSuggestCityResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetSuggestCityResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetSuggestCityResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetSuggestCityResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetSuggestCityResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetSuggestCityResponse;
                })();

                proto.User = (function() {

                    /**
                     * Properties of a User.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IUser
                     * @property {string|null} [id] User id
                     * @property {string|null} [name] User name
                     * @property {string|null} [photo] User photo
                     */

                    /**
                     * Constructs a new User.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a User.
                     * @implements IUser
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IUser=} [properties] Properties to set
                     */
                    function User(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * User id.
                     * @member {string} id
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     */
                    User.prototype.id = "";

                    /**
                     * User name.
                     * @member {string} name
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     */
                    User.prototype.name = "";

                    /**
                     * User photo.
                     * @member {string} photo
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     */
                    User.prototype.photo = "";

                    /**
                     * Creates a new User instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUser=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.User} User instance
                     */
                    User.create = function create(properties) {
                        return new User(properties);
                    };

                    /**
                     * Encodes the specified User message. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.photo != null && Object.hasOwnProperty.call(message, "photo"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.photo);
                        return writer;
                    };

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.User();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.photo = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a User message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    User.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.photo != null && message.hasOwnProperty("photo"))
                            if (!$util.isString(message.photo))
                                return "photo: string expected";
                        return null;
                    };

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.User} User
                     */
                    User.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.User)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.User();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.photo != null)
                            message.photo = String(object.photo);
                        return message;
                    };

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @static
                     * @param {pj.sakuchin.percussion.proto.User} message User
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    User.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                            object.photo = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.photo != null && message.hasOwnProperty("photo"))
                            object.photo = message.photo;
                        return object;
                    };

                    /**
                     * Converts this User to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.User
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    User.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return User;
                })();

                proto.UserProfile = (function() {

                    /**
                     * Properties of a UserProfile.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IUserProfile
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [activeCities] UserProfile activeCities
                     */

                    /**
                     * Constructs a new UserProfile.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a UserProfile.
                     * @implements IUserProfile
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IUserProfile=} [properties] Properties to set
                     */
                    function UserProfile(properties) {
                        this.activeCities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UserProfile activeCities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} activeCities
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @instance
                     */
                    UserProfile.prototype.activeCities = $util.emptyArray;

                    /**
                     * Creates a new UserProfile instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUserProfile=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile instance
                     */
                    UserProfile.create = function create(properties) {
                        return new UserProfile(properties);
                    };

                    /**
                     * Encodes the specified UserProfile message. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUserProfile} message UserProfile message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserProfile.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.activeCities != null && message.activeCities.length)
                            for (var i = 0; i < message.activeCities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.activeCities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified UserProfile message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IUserProfile} message UserProfile message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserProfile.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserProfile.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.UserProfile();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.activeCities && message.activeCities.length))
                                    message.activeCities = [];
                                message.activeCities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserProfile.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a UserProfile message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UserProfile.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.activeCities != null && message.hasOwnProperty("activeCities")) {
                            if (!Array.isArray(message.activeCities))
                                return "activeCities: array expected";
                            for (var i = 0; i < message.activeCities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.activeCities[i]);
                                if (error)
                                    return "activeCities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a UserProfile message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.UserProfile} UserProfile
                     */
                    UserProfile.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.UserProfile)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.UserProfile();
                        if (object.activeCities) {
                            if (!Array.isArray(object.activeCities))
                                throw TypeError(".pj.sakuchin.percussion.proto.UserProfile.activeCities: array expected");
                            message.activeCities = [];
                            for (var i = 0; i < object.activeCities.length; ++i) {
                                if (typeof object.activeCities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.UserProfile.activeCities: object expected");
                                message.activeCities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.activeCities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a UserProfile message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @static
                     * @param {pj.sakuchin.percussion.proto.UserProfile} message UserProfile
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UserProfile.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.activeCities = [];
                        if (message.activeCities && message.activeCities.length) {
                            object.activeCities = [];
                            for (var j = 0; j < message.activeCities.length; ++j)
                                object.activeCities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.activeCities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this UserProfile to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.UserProfile
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UserProfile.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UserProfile;
                })();

                proto.SignupUserRequest = (function() {

                    /**
                     * Properties of a SignupUserRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface ISignupUserRequest
                     * @property {string|null} [token] SignupUserRequest token
                     */

                    /**
                     * Constructs a new SignupUserRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a SignupUserRequest.
                     * @implements ISignupUserRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest=} [properties] Properties to set
                     */
                    function SignupUserRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SignupUserRequest token.
                     * @member {string} token
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @instance
                     */
                    SignupUserRequest.prototype.token = "";

                    /**
                     * Creates a new SignupUserRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest instance
                     */
                    SignupUserRequest.create = function create(properties) {
                        return new SignupUserRequest(properties);
                    };

                    /**
                     * Encodes the specified SignupUserRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest} message SignupUserRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                        return writer;
                    };

                    /**
                     * Encodes the specified SignupUserRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserRequest} message SignupUserRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.SignupUserRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.token = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SignupUserRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SignupUserRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        return null;
                    };

                    /**
                     * Creates a SignupUserRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.SignupUserRequest} SignupUserRequest
                     */
                    SignupUserRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.SignupUserRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.SignupUserRequest();
                        if (object.token != null)
                            message.token = String(object.token);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SignupUserRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.SignupUserRequest} message SignupUserRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SignupUserRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.token = "";
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        return object;
                    };

                    /**
                     * Converts this SignupUserRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.SignupUserRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SignupUserRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SignupUserRequest;
                })();

                proto.SignupUserResponse = (function() {

                    /**
                     * Properties of a SignupUserResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface ISignupUserResponse
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] SignupUserResponse user
                     */

                    /**
                     * Constructs a new SignupUserResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a SignupUserResponse.
                     * @implements ISignupUserResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse=} [properties] Properties to set
                     */
                    function SignupUserResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SignupUserResponse user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @instance
                     */
                    SignupUserResponse.prototype.user = null;

                    /**
                     * Creates a new SignupUserResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse instance
                     */
                    SignupUserResponse.create = function create(properties) {
                        return new SignupUserResponse(properties);
                    };

                    /**
                     * Encodes the specified SignupUserResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse} message SignupUserResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified SignupUserResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.ISignupUserResponse} message SignupUserResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SignupUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.SignupUserResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SignupUserResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SignupUserResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SignupUserResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a SignupUserResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.SignupUserResponse} SignupUserResponse
                     */
                    SignupUserResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.SignupUserResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.SignupUserResponse();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.SignupUserResponse.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a SignupUserResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.SignupUserResponse} message SignupUserResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SignupUserResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.user = null;
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        return object;
                    };

                    /**
                     * Converts this SignupUserResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.SignupUserResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SignupUserResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SignupUserResponse;
                })();

                proto.PostUserLoginRequest = (function() {

                    /**
                     * Properties of a PostUserLoginRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostUserLoginRequest
                     * @property {string|null} [token] PostUserLoginRequest token
                     */

                    /**
                     * Constructs a new PostUserLoginRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostUserLoginRequest.
                     * @implements IPostUserLoginRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest=} [properties] Properties to set
                     */
                    function PostUserLoginRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostUserLoginRequest token.
                     * @member {string} token
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @instance
                     */
                    PostUserLoginRequest.prototype.token = "";

                    /**
                     * Creates a new PostUserLoginRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest instance
                     */
                    PostUserLoginRequest.create = function create(properties) {
                        return new PostUserLoginRequest(properties);
                    };

                    /**
                     * Encodes the specified PostUserLoginRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest} message PostUserLoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                        return writer;
                    };

                    /**
                     * Encodes the specified PostUserLoginRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginRequest} message PostUserLoginRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostUserLoginRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.token = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostUserLoginRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostUserLoginRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.token != null && message.hasOwnProperty("token"))
                            if (!$util.isString(message.token))
                                return "token: string expected";
                        return null;
                    };

                    /**
                     * Creates a PostUserLoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginRequest} PostUserLoginRequest
                     */
                    PostUserLoginRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostUserLoginRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostUserLoginRequest();
                        if (object.token != null)
                            message.token = String(object.token);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostUserLoginRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostUserLoginRequest} message PostUserLoginRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostUserLoginRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.token = "";
                        if (message.token != null && message.hasOwnProperty("token"))
                            object.token = message.token;
                        return object;
                    };

                    /**
                     * Converts this PostUserLoginRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostUserLoginRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostUserLoginRequest;
                })();

                proto.PostUserLoginResponse = (function() {

                    /**
                     * Properties of a PostUserLoginResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPostUserLoginResponse
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] PostUserLoginResponse user
                     */

                    /**
                     * Constructs a new PostUserLoginResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PostUserLoginResponse.
                     * @implements IPostUserLoginResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse=} [properties] Properties to set
                     */
                    function PostUserLoginResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PostUserLoginResponse user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @instance
                     */
                    PostUserLoginResponse.prototype.user = null;

                    /**
                     * Creates a new PostUserLoginResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse instance
                     */
                    PostUserLoginResponse.create = function create(properties) {
                        return new PostUserLoginResponse(properties);
                    };

                    /**
                     * Encodes the specified PostUserLoginResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse} message PostUserLoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PostUserLoginResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPostUserLoginResponse} message PostUserLoginResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PostUserLoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PostUserLoginResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PostUserLoginResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PostUserLoginResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PostUserLoginResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PostUserLoginResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PostUserLoginResponse} PostUserLoginResponse
                     */
                    PostUserLoginResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PostUserLoginResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PostUserLoginResponse();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PostUserLoginResponse.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PostUserLoginResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PostUserLoginResponse} message PostUserLoginResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PostUserLoginResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.user = null;
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        return object;
                    };

                    /**
                     * Converts this PostUserLoginResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PostUserLoginResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PostUserLoginResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PostUserLoginResponse;
                })();

                proto.GetUserProfileResponse = (function() {

                    /**
                     * Properties of a GetUserProfileResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetUserProfileResponse
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] GetUserProfileResponse user
                     * @property {pj.sakuchin.percussion.proto.IUserProfile|null} [userProfile] GetUserProfileResponse userProfile
                     */

                    /**
                     * Constructs a new GetUserProfileResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetUserProfileResponse.
                     * @implements IGetUserProfileResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse=} [properties] Properties to set
                     */
                    function GetUserProfileResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetUserProfileResponse user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @instance
                     */
                    GetUserProfileResponse.prototype.user = null;

                    /**
                     * GetUserProfileResponse userProfile.
                     * @member {pj.sakuchin.percussion.proto.IUserProfile|null|undefined} userProfile
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @instance
                     */
                    GetUserProfileResponse.prototype.userProfile = null;

                    /**
                     * Creates a new GetUserProfileResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse instance
                     */
                    GetUserProfileResponse.create = function create(properties) {
                        return new GetUserProfileResponse(properties);
                    };

                    /**
                     * Encodes the specified GetUserProfileResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse} message GetUserProfileResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserProfileResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.userProfile != null && Object.hasOwnProperty.call(message, "userProfile"))
                            $root.pj.sakuchin.percussion.proto.UserProfile.encode(message.userProfile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetUserProfileResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserProfileResponse} message GetUserProfileResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserProfileResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserProfileResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetUserProfileResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserProfileResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetUserProfileResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetUserProfileResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        if (message.userProfile != null && message.hasOwnProperty("userProfile")) {
                            var error = $root.pj.sakuchin.percussion.proto.UserProfile.verify(message.userProfile);
                            if (error)
                                return "userProfile." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetUserProfileResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetUserProfileResponse} GetUserProfileResponse
                     */
                    GetUserProfileResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetUserProfileResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetUserProfileResponse();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.GetUserProfileResponse.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        if (object.userProfile != null) {
                            if (typeof object.userProfile !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.GetUserProfileResponse.userProfile: object expected");
                            message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.fromObject(object.userProfile);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetUserProfileResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetUserProfileResponse} message GetUserProfileResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetUserProfileResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.user = null;
                            object.userProfile = null;
                        }
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        if (message.userProfile != null && message.hasOwnProperty("userProfile"))
                            object.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.toObject(message.userProfile, options);
                        return object;
                    };

                    /**
                     * Converts this GetUserProfileResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetUserProfileResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetUserProfileResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetUserProfileResponse;
                })();

                proto.PutUserProfileRequest = (function() {

                    /**
                     * Properties of a PutUserProfileRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutUserProfileRequest
                     * @property {pj.sakuchin.percussion.proto.IUser|null} [user] PutUserProfileRequest user
                     * @property {pj.sakuchin.percussion.proto.IUserProfile|null} [userProfile] PutUserProfileRequest userProfile
                     */

                    /**
                     * Constructs a new PutUserProfileRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutUserProfileRequest.
                     * @implements IPutUserProfileRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest=} [properties] Properties to set
                     */
                    function PutUserProfileRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutUserProfileRequest user.
                     * @member {pj.sakuchin.percussion.proto.IUser|null|undefined} user
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @instance
                     */
                    PutUserProfileRequest.prototype.user = null;

                    /**
                     * PutUserProfileRequest userProfile.
                     * @member {pj.sakuchin.percussion.proto.IUserProfile|null|undefined} userProfile
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @instance
                     */
                    PutUserProfileRequest.prototype.userProfile = null;

                    /**
                     * Creates a new PutUserProfileRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest instance
                     */
                    PutUserProfileRequest.create = function create(properties) {
                        return new PutUserProfileRequest(properties);
                    };

                    /**
                     * Encodes the specified PutUserProfileRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest} message PutUserProfileRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserProfileRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                            $root.pj.sakuchin.percussion.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.userProfile != null && Object.hasOwnProperty.call(message, "userProfile"))
                            $root.pj.sakuchin.percussion.proto.UserProfile.encode(message.userProfile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutUserProfileRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserProfileRequest} message PutUserProfileRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserProfileRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserProfileRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutUserProfileRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.pj.sakuchin.percussion.proto.User.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserProfileRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutUserProfileRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutUserProfileRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.user != null && message.hasOwnProperty("user")) {
                            var error = $root.pj.sakuchin.percussion.proto.User.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        if (message.userProfile != null && message.hasOwnProperty("userProfile")) {
                            var error = $root.pj.sakuchin.percussion.proto.UserProfile.verify(message.userProfile);
                            if (error)
                                return "userProfile." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a PutUserProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutUserProfileRequest} PutUserProfileRequest
                     */
                    PutUserProfileRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutUserProfileRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutUserProfileRequest();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutUserProfileRequest.user: object expected");
                            message.user = $root.pj.sakuchin.percussion.proto.User.fromObject(object.user);
                        }
                        if (object.userProfile != null) {
                            if (typeof object.userProfile !== "object")
                                throw TypeError(".pj.sakuchin.percussion.proto.PutUserProfileRequest.userProfile: object expected");
                            message.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.fromObject(object.userProfile);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutUserProfileRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutUserProfileRequest} message PutUserProfileRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutUserProfileRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.user = null;
                            object.userProfile = null;
                        }
                        if (message.user != null && message.hasOwnProperty("user"))
                            object.user = $root.pj.sakuchin.percussion.proto.User.toObject(message.user, options);
                        if (message.userProfile != null && message.hasOwnProperty("userProfile"))
                            object.userProfile = $root.pj.sakuchin.percussion.proto.UserProfile.toObject(message.userProfile, options);
                        return object;
                    };

                    /**
                     * Converts this PutUserProfileRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutUserProfileRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutUserProfileRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutUserProfileRequest;
                })();

                proto.PutUserCityRequest = (function() {

                    /**
                     * Properties of a PutUserCityRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IPutUserCityRequest
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] PutUserCityRequest cities
                     */

                    /**
                     * Constructs a new PutUserCityRequest.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a PutUserCityRequest.
                     * @implements IPutUserCityRequest
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest=} [properties] Properties to set
                     */
                    function PutUserCityRequest(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PutUserCityRequest cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @instance
                     */
                    PutUserCityRequest.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new PutUserCityRequest instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest instance
                     */
                    PutUserCityRequest.create = function create(properties) {
                        return new PutUserCityRequest(properties);
                    };

                    /**
                     * Encodes the specified PutUserCityRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest} message PutUserCityRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserCityRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PutUserCityRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IPutUserCityRequest} message PutUserCityRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PutUserCityRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserCityRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.PutUserCityRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PutUserCityRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PutUserCityRequest message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PutUserCityRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PutUserCityRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.PutUserCityRequest} PutUserCityRequest
                     */
                    PutUserCityRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.PutUserCityRequest)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.PutUserCityRequest();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.PutUserCityRequest.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.PutUserCityRequest.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PutUserCityRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @static
                     * @param {pj.sakuchin.percussion.proto.PutUserCityRequest} message PutUserCityRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PutUserCityRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PutUserCityRequest to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.PutUserCityRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PutUserCityRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PutUserCityRequest;
                })();

                proto.GetUserCityResponse = (function() {

                    /**
                     * Properties of a GetUserCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @interface IGetUserCityResponse
                     * @property {Array.<pj.sakuchin.percussion.proto.ICity>|null} [cities] GetUserCityResponse cities
                     */

                    /**
                     * Constructs a new GetUserCityResponse.
                     * @memberof pj.sakuchin.percussion.proto
                     * @classdesc Represents a GetUserCityResponse.
                     * @implements IGetUserCityResponse
                     * @constructor
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse=} [properties] Properties to set
                     */
                    function GetUserCityResponse(properties) {
                        this.cities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetUserCityResponse cities.
                     * @member {Array.<pj.sakuchin.percussion.proto.ICity>} cities
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @instance
                     */
                    GetUserCityResponse.prototype.cities = $util.emptyArray;

                    /**
                     * Creates a new GetUserCityResponse instance using the specified properties.
                     * @function create
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse=} [properties] Properties to set
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse instance
                     */
                    GetUserCityResponse.create = function create(properties) {
                        return new GetUserCityResponse(properties);
                    };

                    /**
                     * Encodes the specified GetUserCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @function encode
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse} message GetUserCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserCityResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.cities != null && message.cities.length)
                            for (var i = 0; i < message.cities.length; ++i)
                                $root.pj.sakuchin.percussion.proto.City.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetUserCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.IGetUserCityResponse} message GetUserCityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetUserCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserCityResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pj.sakuchin.percussion.proto.GetUserCityResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.cities && message.cities.length))
                                    message.cities = [];
                                message.cities.push($root.pj.sakuchin.percussion.proto.City.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetUserCityResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetUserCityResponse message.
                     * @function verify
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetUserCityResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.cities != null && message.hasOwnProperty("cities")) {
                            if (!Array.isArray(message.cities))
                                return "cities: array expected";
                            for (var i = 0; i < message.cities.length; ++i) {
                                var error = $root.pj.sakuchin.percussion.proto.City.verify(message.cities[i]);
                                if (error)
                                    return "cities." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a GetUserCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {pj.sakuchin.percussion.proto.GetUserCityResponse} GetUserCityResponse
                     */
                    GetUserCityResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.pj.sakuchin.percussion.proto.GetUserCityResponse)
                            return object;
                        var message = new $root.pj.sakuchin.percussion.proto.GetUserCityResponse();
                        if (object.cities) {
                            if (!Array.isArray(object.cities))
                                throw TypeError(".pj.sakuchin.percussion.proto.GetUserCityResponse.cities: array expected");
                            message.cities = [];
                            for (var i = 0; i < object.cities.length; ++i) {
                                if (typeof object.cities[i] !== "object")
                                    throw TypeError(".pj.sakuchin.percussion.proto.GetUserCityResponse.cities: object expected");
                                message.cities[i] = $root.pj.sakuchin.percussion.proto.City.fromObject(object.cities[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetUserCityResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @static
                     * @param {pj.sakuchin.percussion.proto.GetUserCityResponse} message GetUserCityResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetUserCityResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.cities = [];
                        if (message.cities && message.cities.length) {
                            object.cities = [];
                            for (var j = 0; j < message.cities.length; ++j)
                                object.cities[j] = $root.pj.sakuchin.percussion.proto.City.toObject(message.cities[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this GetUserCityResponse to JSON.
                     * @function toJSON
                     * @memberof pj.sakuchin.percussion.proto.GetUserCityResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetUserCityResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetUserCityResponse;
                })();

                return proto;
            })();

            return percussion;
        })();

        return sakuchin;
    })();

    return pj;
})();

module.exports = $root;
