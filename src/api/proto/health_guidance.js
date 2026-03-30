/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.api = (function () {
  /**
   * Namespace api.
   * @exports api
   * @namespace
   */
  var api = $root.api || {};

  api.health_guidance = (function () {
    /**
     * Namespace health_guidance.
     * @memberof api
     * @namespace
     */
    var health_guidance = {};

    health_guidance.HealthGuideType = (function () {
      /**
       * Properties of a HealthGuideType.
       * @memberof api.health_guidance
       * @interface IHealthGuideType
       * @property {number|null} [id] HealthGuideType id
       * @property {string|null} [typeName] HealthGuideType typeName
       * @property {number|null} [icon] HealthGuideType icon
       * @property {number|null} [typeSum] HealthGuideType typeSum
       * @property {string|null} [typeTwo] HealthGuideType typeTwo
       * @property {string|null} [description] HealthGuideType description
       */

      /**
       * Constructs a new HealthGuideType.
       * @memberof api.health_guidance
       * @classdesc Represents a HealthGuideType.
       * @implements IHealthGuideType
       * @constructor
       * @param {api.health_guidance.IHealthGuideType=} [properties] Properties to set
       */
      function HealthGuideType(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * HealthGuideType id.
       * @member {number} id
       * @memberof api.health_guidance.HealthGuideType
       * @instance
       */
      HealthGuideType.prototype.id = 0;

      /**
       * HealthGuideType typeName.
       * @member {string} typeName
       * @memberof api.health_guidance.HealthGuideType
       * @instance
       */
      HealthGuideType.prototype.typeName = "";

      /**
       * HealthGuideType icon.
       * @member {number} icon
       * @memberof api.health_guidance.HealthGuideType
       * @instance
       */
      HealthGuideType.prototype.icon = 0;

      /**
       * HealthGuideType typeSum.
       * @member {number} typeSum
       * @memberof api.health_guidance.HealthGuideType
       * @instance
       */
      HealthGuideType.prototype.typeSum = 0;

      /**
       * HealthGuideType typeTwo.
       * @member {string} typeTwo
       * @memberof api.health_guidance.HealthGuideType
       * @instance
       */
      HealthGuideType.prototype.typeTwo = "";

      /**
       * HealthGuideType description.
       * @member {string} description
       * @memberof api.health_guidance.HealthGuideType
       * @instance
       */
      HealthGuideType.prototype.description = "";

      /**
       * Creates a new HealthGuideType instance using the specified properties.
       * @function create
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {api.health_guidance.IHealthGuideType=} [properties] Properties to set
       * @returns {api.health_guidance.HealthGuideType} HealthGuideType instance
       */
      HealthGuideType.create = function create(properties) {
        return new HealthGuideType(properties);
      };

      /**
       * Encodes the specified HealthGuideType message. Does not implicitly {@link api.health_guidance.HealthGuideType.verify|verify} messages.
       * @function encode
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {api.health_guidance.IHealthGuideType} message HealthGuideType message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (
          message.typeName != null &&
          Object.hasOwnProperty.call(message, "typeName")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.typeName);
        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.icon);
        if (
          message.typeSum != null &&
          Object.hasOwnProperty.call(message, "typeSum")
        )
          writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.typeSum);
        if (
          message.typeTwo != null &&
          Object.hasOwnProperty.call(message, "typeTwo")
        )
          writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.typeTwo);
        if (
          message.description != null &&
          Object.hasOwnProperty.call(message, "description")
        )
          writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.description);
        return writer;
      };

      /**
       * Encodes the specified HealthGuideType message, length delimited. Does not implicitly {@link api.health_guidance.HealthGuideType.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {api.health_guidance.IHealthGuideType} message HealthGuideType message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideType.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HealthGuideType message from the specified reader or buffer.
       * @function decode
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.health_guidance.HealthGuideType} HealthGuideType
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideType.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.health_guidance.HealthGuideType();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              message.id = reader.int32();
              break;
            }
            case 2: {
              message.typeName = reader.string();
              break;
            }
            case 3: {
              message.icon = reader.int32();
              break;
            }
            case 4: {
              message.typeSum = reader.int32();
              break;
            }
            case 5: {
              message.typeTwo = reader.string();
              break;
            }
            case 6: {
              message.description = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HealthGuideType message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.health_guidance.HealthGuideType} HealthGuideType
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HealthGuideType message.
       * @function verify
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HealthGuideType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
          if (!$util.isInteger(message.id)) return "id: integer expected";
        if (message.typeName != null && message.hasOwnProperty("typeName"))
          if (!$util.isString(message.typeName))
            return "typeName: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
          if (!$util.isInteger(message.icon)) return "icon: integer expected";
        if (message.typeSum != null && message.hasOwnProperty("typeSum"))
          if (!$util.isInteger(message.typeSum))
            return "typeSum: integer expected";
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          if (!$util.isString(message.typeTwo))
            return "typeTwo: string expected";
        if (
          message.description != null &&
          message.hasOwnProperty("description")
        )
          if (!$util.isString(message.description))
            return "description: string expected";
        return null;
      };

      /**
       * Creates a HealthGuideType message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.health_guidance.HealthGuideType} HealthGuideType
       */
      HealthGuideType.fromObject = function fromObject(object) {
        if (object instanceof $root.api.health_guidance.HealthGuideType)
          return object;
        var message = new $root.api.health_guidance.HealthGuideType();
        if (object.id != null) message.id = object.id | 0;
        if (object.typeName != null) message.typeName = String(object.typeName);
        if (object.icon != null) message.icon = object.icon | 0;
        if (object.typeSum != null) message.typeSum = object.typeSum | 0;
        if (object.typeTwo != null) message.typeTwo = String(object.typeTwo);
        if (object.description != null)
          message.description = String(object.description);
        return message;
      };

      /**
       * Creates a plain object from a HealthGuideType message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {api.health_guidance.HealthGuideType} message HealthGuideType
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HealthGuideType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.id = 0;
          object.typeName = "";
          object.icon = 0;
          object.typeSum = 0;
          object.typeTwo = "";
          object.description = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
          object.id = message.id;
        if (message.typeName != null && message.hasOwnProperty("typeName"))
          object.typeName = message.typeName;
        if (message.icon != null && message.hasOwnProperty("icon"))
          object.icon = message.icon;
        if (message.typeSum != null && message.hasOwnProperty("typeSum"))
          object.typeSum = message.typeSum;
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          object.typeTwo = message.typeTwo;
        if (
          message.description != null &&
          message.hasOwnProperty("description")
        )
          object.description = message.description;
        return object;
      };

      /**
       * Converts this HealthGuideType to JSON.
       * @function toJSON
       * @memberof api.health_guidance.HealthGuideType
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HealthGuideType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HealthGuideType
       * @function getTypeUrl
       * @memberof api.health_guidance.HealthGuideType
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HealthGuideType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.health_guidance.HealthGuideType";
      };

      return HealthGuideType;
    })();

    health_guidance.HealthGuideTypeRequest = (function () {
      /**
       * Properties of a HealthGuideTypeRequest.
       * @memberof api.health_guidance
       * @interface IHealthGuideTypeRequest
       * @property {string|null} [typeName] HealthGuideTypeRequest typeName
       * @property {number|null} [icon] HealthGuideTypeRequest icon
       * @property {number|null} [typeSum] HealthGuideTypeRequest typeSum
       * @property {string|null} [typeTwo] HealthGuideTypeRequest typeTwo
       * @property {string|null} [description] HealthGuideTypeRequest description
       */

      /**
       * Constructs a new HealthGuideTypeRequest.
       * @memberof api.health_guidance
       * @classdesc Represents a HealthGuideTypeRequest.
       * @implements IHealthGuideTypeRequest
       * @constructor
       * @param {api.health_guidance.IHealthGuideTypeRequest=} [properties] Properties to set
       */
      function HealthGuideTypeRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * HealthGuideTypeRequest typeName.
       * @member {string} typeName
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @instance
       */
      HealthGuideTypeRequest.prototype.typeName = "";

      /**
       * HealthGuideTypeRequest icon.
       * @member {number} icon
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @instance
       */
      HealthGuideTypeRequest.prototype.icon = 0;

      /**
       * HealthGuideTypeRequest typeSum.
       * @member {number} typeSum
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @instance
       */
      HealthGuideTypeRequest.prototype.typeSum = 0;

      /**
       * HealthGuideTypeRequest typeTwo.
       * @member {string} typeTwo
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @instance
       */
      HealthGuideTypeRequest.prototype.typeTwo = "";

      /**
       * HealthGuideTypeRequest description.
       * @member {string} description
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @instance
       */
      HealthGuideTypeRequest.prototype.description = "";

      /**
       * Creates a new HealthGuideTypeRequest instance using the specified properties.
       * @function create
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {api.health_guidance.IHealthGuideTypeRequest=} [properties] Properties to set
       * @returns {api.health_guidance.HealthGuideTypeRequest} HealthGuideTypeRequest instance
       */
      HealthGuideTypeRequest.create = function create(properties) {
        return new HealthGuideTypeRequest(properties);
      };

      /**
       * Encodes the specified HealthGuideTypeRequest message. Does not implicitly {@link api.health_guidance.HealthGuideTypeRequest.verify|verify} messages.
       * @function encode
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {api.health_guidance.IHealthGuideTypeRequest} message HealthGuideTypeRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideTypeRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.typeName != null &&
          Object.hasOwnProperty.call(message, "typeName")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.typeName);
        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.icon);
        if (
          message.typeSum != null &&
          Object.hasOwnProperty.call(message, "typeSum")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.typeSum);
        if (
          message.typeTwo != null &&
          Object.hasOwnProperty.call(message, "typeTwo")
        )
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.typeTwo);
        if (
          message.description != null &&
          Object.hasOwnProperty.call(message, "description")
        )
          writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.description);
        return writer;
      };

      /**
       * Encodes the specified HealthGuideTypeRequest message, length delimited. Does not implicitly {@link api.health_guidance.HealthGuideTypeRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {api.health_guidance.IHealthGuideTypeRequest} message HealthGuideTypeRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideTypeRequest.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HealthGuideTypeRequest message from the specified reader or buffer.
       * @function decode
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.health_guidance.HealthGuideTypeRequest} HealthGuideTypeRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideTypeRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.health_guidance.HealthGuideTypeRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              message.typeName = reader.string();
              break;
            }
            case 2: {
              message.icon = reader.int32();
              break;
            }
            case 3: {
              message.typeSum = reader.int32();
              break;
            }
            case 4: {
              message.typeTwo = reader.string();
              break;
            }
            case 5: {
              message.description = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HealthGuideTypeRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.health_guidance.HealthGuideTypeRequest} HealthGuideTypeRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideTypeRequest.decodeDelimited = function decodeDelimited(
        reader,
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HealthGuideTypeRequest message.
       * @function verify
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HealthGuideTypeRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.typeName != null && message.hasOwnProperty("typeName"))
          if (!$util.isString(message.typeName))
            return "typeName: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
          if (!$util.isInteger(message.icon)) return "icon: integer expected";
        if (message.typeSum != null && message.hasOwnProperty("typeSum"))
          if (!$util.isInteger(message.typeSum))
            return "typeSum: integer expected";
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          if (!$util.isString(message.typeTwo))
            return "typeTwo: string expected";
        if (
          message.description != null &&
          message.hasOwnProperty("description")
        )
          if (!$util.isString(message.description))
            return "description: string expected";
        return null;
      };

      /**
       * Creates a HealthGuideTypeRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.health_guidance.HealthGuideTypeRequest} HealthGuideTypeRequest
       */
      HealthGuideTypeRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.api.health_guidance.HealthGuideTypeRequest)
          return object;
        var message = new $root.api.health_guidance.HealthGuideTypeRequest();
        if (object.typeName != null) message.typeName = String(object.typeName);
        if (object.icon != null) message.icon = object.icon | 0;
        if (object.typeSum != null) message.typeSum = object.typeSum | 0;
        if (object.typeTwo != null) message.typeTwo = String(object.typeTwo);
        if (object.description != null)
          message.description = String(object.description);
        return message;
      };

      /**
       * Creates a plain object from a HealthGuideTypeRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {api.health_guidance.HealthGuideTypeRequest} message HealthGuideTypeRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HealthGuideTypeRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.typeName = "";
          object.icon = 0;
          object.typeSum = 0;
          object.typeTwo = "";
          object.description = "";
        }
        if (message.typeName != null && message.hasOwnProperty("typeName"))
          object.typeName = message.typeName;
        if (message.icon != null && message.hasOwnProperty("icon"))
          object.icon = message.icon;
        if (message.typeSum != null && message.hasOwnProperty("typeSum"))
          object.typeSum = message.typeSum;
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          object.typeTwo = message.typeTwo;
        if (
          message.description != null &&
          message.hasOwnProperty("description")
        )
          object.description = message.description;
        return object;
      };

      /**
       * Converts this HealthGuideTypeRequest to JSON.
       * @function toJSON
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HealthGuideTypeRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HealthGuideTypeRequest
       * @function getTypeUrl
       * @memberof api.health_guidance.HealthGuideTypeRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HealthGuideTypeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.health_guidance.HealthGuideTypeRequest";
      };

      return HealthGuideTypeRequest;
    })();

    health_guidance.HealthGuideTypeResponse = (function () {
      /**
       * Properties of a HealthGuideTypeResponse.
       * @memberof api.health_guidance
       * @interface IHealthGuideTypeResponse
       * @property {Array.<api.health_guidance.IHealthGuideType>|null} [healthGuideTypes] HealthGuideTypeResponse healthGuideTypes
       * @property {number|null} [code] HealthGuideTypeResponse code
       * @property {string|null} [message] HealthGuideTypeResponse message
       */

      /**
       * Constructs a new HealthGuideTypeResponse.
       * @memberof api.health_guidance
       * @classdesc Represents a HealthGuideTypeResponse.
       * @implements IHealthGuideTypeResponse
       * @constructor
       * @param {api.health_guidance.IHealthGuideTypeResponse=} [properties] Properties to set
       */
      function HealthGuideTypeResponse(properties) {
        this.healthGuideTypes = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * HealthGuideTypeResponse healthGuideTypes.
       * @member {Array.<api.health_guidance.IHealthGuideType>} healthGuideTypes
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @instance
       */
      HealthGuideTypeResponse.prototype.healthGuideTypes = $util.emptyArray;

      /**
       * HealthGuideTypeResponse code.
       * @member {number} code
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @instance
       */
      HealthGuideTypeResponse.prototype.code = 0;

      /**
       * HealthGuideTypeResponse message.
       * @member {string} message
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @instance
       */
      HealthGuideTypeResponse.prototype.message = "";

      /**
       * Creates a new HealthGuideTypeResponse instance using the specified properties.
       * @function create
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {api.health_guidance.IHealthGuideTypeResponse=} [properties] Properties to set
       * @returns {api.health_guidance.HealthGuideTypeResponse} HealthGuideTypeResponse instance
       */
      HealthGuideTypeResponse.create = function create(properties) {
        return new HealthGuideTypeResponse(properties);
      };

      /**
       * Encodes the specified HealthGuideTypeResponse message. Does not implicitly {@link api.health_guidance.HealthGuideTypeResponse.verify|verify} messages.
       * @function encode
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {api.health_guidance.IHealthGuideTypeResponse} message HealthGuideTypeResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideTypeResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.healthGuideTypes != null && message.healthGuideTypes.length)
          for (var i = 0; i < message.healthGuideTypes.length; ++i)
            $root.api.health_guidance.HealthGuideType.encode(
              message.healthGuideTypes[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
            ).ldelim();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        if (
          message.message != null &&
          Object.hasOwnProperty.call(message, "message")
        )
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.message);
        return writer;
      };

      /**
       * Encodes the specified HealthGuideTypeResponse message, length delimited. Does not implicitly {@link api.health_guidance.HealthGuideTypeResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {api.health_guidance.IHealthGuideTypeResponse} message HealthGuideTypeResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideTypeResponse.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HealthGuideTypeResponse message from the specified reader or buffer.
       * @function decode
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.health_guidance.HealthGuideTypeResponse} HealthGuideTypeResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideTypeResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.health_guidance.HealthGuideTypeResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              if (
                !(message.healthGuideTypes && message.healthGuideTypes.length)
              )
                message.healthGuideTypes = [];
              message.healthGuideTypes.push(
                $root.api.health_guidance.HealthGuideType.decode(
                  reader,
                  reader.uint32(),
                ),
              );
              break;
            }
            case 2: {
              message.code = reader.int32();
              break;
            }
            case 3: {
              message.message = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HealthGuideTypeResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.health_guidance.HealthGuideTypeResponse} HealthGuideTypeResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideTypeResponse.decodeDelimited = function decodeDelimited(
        reader,
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HealthGuideTypeResponse message.
       * @function verify
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HealthGuideTypeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (
          message.healthGuideTypes != null &&
          message.hasOwnProperty("healthGuideTypes")
        ) {
          if (!Array.isArray(message.healthGuideTypes))
            return "healthGuideTypes: array expected";
          for (var i = 0; i < message.healthGuideTypes.length; ++i) {
            var error = $root.api.health_guidance.HealthGuideType.verify(
              message.healthGuideTypes[i],
            );
            if (error) return "healthGuideTypes." + error;
          }
        }
        if (message.code != null && message.hasOwnProperty("code"))
          if (!$util.isInteger(message.code)) return "code: integer expected";
        if (message.message != null && message.hasOwnProperty("message"))
          if (!$util.isString(message.message))
            return "message: string expected";
        return null;
      };

      /**
       * Creates a HealthGuideTypeResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.health_guidance.HealthGuideTypeResponse} HealthGuideTypeResponse
       */
      HealthGuideTypeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.api.health_guidance.HealthGuideTypeResponse)
          return object;
        var message = new $root.api.health_guidance.HealthGuideTypeResponse();
        if (object.healthGuideTypes) {
          if (!Array.isArray(object.healthGuideTypes))
            throw TypeError(
              ".api.health_guidance.HealthGuideTypeResponse.healthGuideTypes: array expected",
            );
          message.healthGuideTypes = [];
          for (var i = 0; i < object.healthGuideTypes.length; ++i) {
            if (typeof object.healthGuideTypes[i] !== "object")
              throw TypeError(
                ".api.health_guidance.HealthGuideTypeResponse.healthGuideTypes: object expected",
              );
            message.healthGuideTypes[i] =
              $root.api.health_guidance.HealthGuideType.fromObject(
                object.healthGuideTypes[i],
              );
          }
        }
        if (object.code != null) message.code = object.code | 0;
        if (object.message != null) message.message = String(object.message);
        return message;
      };

      /**
       * Creates a plain object from a HealthGuideTypeResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {api.health_guidance.HealthGuideTypeResponse} message HealthGuideTypeResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HealthGuideTypeResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.healthGuideTypes = [];
        if (options.defaults) {
          object.code = 0;
          object.message = "";
        }
        if (message.healthGuideTypes && message.healthGuideTypes.length) {
          object.healthGuideTypes = [];
          for (var j = 0; j < message.healthGuideTypes.length; ++j)
            object.healthGuideTypes[j] =
              $root.api.health_guidance.HealthGuideType.toObject(
                message.healthGuideTypes[j],
                options,
              );
        }
        if (message.code != null && message.hasOwnProperty("code"))
          object.code = message.code;
        if (message.message != null && message.hasOwnProperty("message"))
          object.message = message.message;
        return object;
      };

      /**
       * Converts this HealthGuideTypeResponse to JSON.
       * @function toJSON
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HealthGuideTypeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HealthGuideTypeResponse
       * @function getTypeUrl
       * @memberof api.health_guidance.HealthGuideTypeResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HealthGuideTypeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.health_guidance.HealthGuideTypeResponse";
      };

      return HealthGuideTypeResponse;
    })();

    health_guidance.HealthGuideContent = (function () {
      /**
       * Properties of a HealthGuideContent.
       * @memberof api.health_guidance
       * @interface IHealthGuideContent
       * @property {number|null} [id] HealthGuideContent id
       * @property {number|null} [typeOne] HealthGuideContent typeOne
       * @property {string|null} [typeTwo] HealthGuideContent typeTwo
       * @property {string|null} [content] HealthGuideContent content
       */

      /**
       * Constructs a new HealthGuideContent.
       * @memberof api.health_guidance
       * @classdesc Represents a HealthGuideContent.
       * @implements IHealthGuideContent
       * @constructor
       * @param {api.health_guidance.IHealthGuideContent=} [properties] Properties to set
       */
      function HealthGuideContent(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * HealthGuideContent id.
       * @member {number} id
       * @memberof api.health_guidance.HealthGuideContent
       * @instance
       */
      HealthGuideContent.prototype.id = 0;

      /**
       * HealthGuideContent typeOne.
       * @member {number} typeOne
       * @memberof api.health_guidance.HealthGuideContent
       * @instance
       */
      HealthGuideContent.prototype.typeOne = 0;

      /**
       * HealthGuideContent typeTwo.
       * @member {string} typeTwo
       * @memberof api.health_guidance.HealthGuideContent
       * @instance
       */
      HealthGuideContent.prototype.typeTwo = "";

      /**
       * HealthGuideContent content.
       * @member {string} content
       * @memberof api.health_guidance.HealthGuideContent
       * @instance
       */
      HealthGuideContent.prototype.content = "";

      /**
       * Creates a new HealthGuideContent instance using the specified properties.
       * @function create
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {api.health_guidance.IHealthGuideContent=} [properties] Properties to set
       * @returns {api.health_guidance.HealthGuideContent} HealthGuideContent instance
       */
      HealthGuideContent.create = function create(properties) {
        return new HealthGuideContent(properties);
      };

      /**
       * Encodes the specified HealthGuideContent message. Does not implicitly {@link api.health_guidance.HealthGuideContent.verify|verify} messages.
       * @function encode
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {api.health_guidance.IHealthGuideContent} message HealthGuideContent message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideContent.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (
          message.typeOne != null &&
          Object.hasOwnProperty.call(message, "typeOne")
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.typeOne);
        if (
          message.typeTwo != null &&
          Object.hasOwnProperty.call(message, "typeTwo")
        )
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.typeTwo);
        if (
          message.content != null &&
          Object.hasOwnProperty.call(message, "content")
        )
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.content);
        return writer;
      };

      /**
       * Encodes the specified HealthGuideContent message, length delimited. Does not implicitly {@link api.health_guidance.HealthGuideContent.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {api.health_guidance.IHealthGuideContent} message HealthGuideContent message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideContent.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HealthGuideContent message from the specified reader or buffer.
       * @function decode
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.health_guidance.HealthGuideContent} HealthGuideContent
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideContent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.health_guidance.HealthGuideContent();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              message.id = reader.int32();
              break;
            }
            case 2: {
              message.typeOne = reader.int32();
              break;
            }
            case 3: {
              message.typeTwo = reader.string();
              break;
            }
            case 4: {
              message.content = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HealthGuideContent message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.health_guidance.HealthGuideContent} HealthGuideContent
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HealthGuideContent message.
       * @function verify
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HealthGuideContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
          if (!$util.isInteger(message.id)) return "id: integer expected";
        if (message.typeOne != null && message.hasOwnProperty("typeOne"))
          if (!$util.isInteger(message.typeOne))
            return "typeOne: integer expected";
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          if (!$util.isString(message.typeTwo))
            return "typeTwo: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
          if (!$util.isString(message.content))
            return "content: string expected";
        return null;
      };

      /**
       * Creates a HealthGuideContent message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.health_guidance.HealthGuideContent} HealthGuideContent
       */
      HealthGuideContent.fromObject = function fromObject(object) {
        if (object instanceof $root.api.health_guidance.HealthGuideContent)
          return object;
        var message = new $root.api.health_guidance.HealthGuideContent();
        if (object.id != null) message.id = object.id | 0;
        if (object.typeOne != null) message.typeOne = object.typeOne | 0;
        if (object.typeTwo != null) message.typeTwo = String(object.typeTwo);
        if (object.content != null) message.content = String(object.content);
        return message;
      };

      /**
       * Creates a plain object from a HealthGuideContent message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {api.health_guidance.HealthGuideContent} message HealthGuideContent
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HealthGuideContent.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.id = 0;
          object.typeOne = 0;
          object.typeTwo = "";
          object.content = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
          object.id = message.id;
        if (message.typeOne != null && message.hasOwnProperty("typeOne"))
          object.typeOne = message.typeOne;
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          object.typeTwo = message.typeTwo;
        if (message.content != null && message.hasOwnProperty("content"))
          object.content = message.content;
        return object;
      };

      /**
       * Converts this HealthGuideContent to JSON.
       * @function toJSON
       * @memberof api.health_guidance.HealthGuideContent
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HealthGuideContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HealthGuideContent
       * @function getTypeUrl
       * @memberof api.health_guidance.HealthGuideContent
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HealthGuideContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.health_guidance.HealthGuideContent";
      };

      return HealthGuideContent;
    })();

    health_guidance.HealthGuideContentRequest = (function () {
      /**
       * Properties of a HealthGuideContentRequest.
       * @memberof api.health_guidance
       * @interface IHealthGuideContentRequest
       * @property {number|null} [typeOne] HealthGuideContentRequest typeOne
       * @property {string|null} [typeTwo] HealthGuideContentRequest typeTwo
       * @property {string|null} [content] HealthGuideContentRequest content
       */

      /**
       * Constructs a new HealthGuideContentRequest.
       * @memberof api.health_guidance
       * @classdesc Represents a HealthGuideContentRequest.
       * @implements IHealthGuideContentRequest
       * @constructor
       * @param {api.health_guidance.IHealthGuideContentRequest=} [properties] Properties to set
       */
      function HealthGuideContentRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * HealthGuideContentRequest typeOne.
       * @member {number} typeOne
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @instance
       */
      HealthGuideContentRequest.prototype.typeOne = 0;

      /**
       * HealthGuideContentRequest typeTwo.
       * @member {string} typeTwo
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @instance
       */
      HealthGuideContentRequest.prototype.typeTwo = "";

      /**
       * HealthGuideContentRequest content.
       * @member {string} content
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @instance
       */
      HealthGuideContentRequest.prototype.content = "";

      /**
       * Creates a new HealthGuideContentRequest instance using the specified properties.
       * @function create
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {api.health_guidance.IHealthGuideContentRequest=} [properties] Properties to set
       * @returns {api.health_guidance.HealthGuideContentRequest} HealthGuideContentRequest instance
       */
      HealthGuideContentRequest.create = function create(properties) {
        return new HealthGuideContentRequest(properties);
      };

      /**
       * Encodes the specified HealthGuideContentRequest message. Does not implicitly {@link api.health_guidance.HealthGuideContentRequest.verify|verify} messages.
       * @function encode
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {api.health_guidance.IHealthGuideContentRequest} message HealthGuideContentRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideContentRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.typeOne != null &&
          Object.hasOwnProperty.call(message, "typeOne")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.typeOne);
        if (
          message.typeTwo != null &&
          Object.hasOwnProperty.call(message, "typeTwo")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.typeTwo);
        if (
          message.content != null &&
          Object.hasOwnProperty.call(message, "content")
        )
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.content);
        return writer;
      };

      /**
       * Encodes the specified HealthGuideContentRequest message, length delimited. Does not implicitly {@link api.health_guidance.HealthGuideContentRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {api.health_guidance.IHealthGuideContentRequest} message HealthGuideContentRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideContentRequest.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HealthGuideContentRequest message from the specified reader or buffer.
       * @function decode
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.health_guidance.HealthGuideContentRequest} HealthGuideContentRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideContentRequest.decode = function decode(
        reader,
        length,
        error,
      ) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.health_guidance.HealthGuideContentRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              message.typeOne = reader.int32();
              break;
            }
            case 2: {
              message.typeTwo = reader.string();
              break;
            }
            case 3: {
              message.content = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HealthGuideContentRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.health_guidance.HealthGuideContentRequest} HealthGuideContentRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideContentRequest.decodeDelimited = function decodeDelimited(
        reader,
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HealthGuideContentRequest message.
       * @function verify
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HealthGuideContentRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.typeOne != null && message.hasOwnProperty("typeOne"))
          if (!$util.isInteger(message.typeOne))
            return "typeOne: integer expected";
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          if (!$util.isString(message.typeTwo))
            return "typeTwo: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
          if (!$util.isString(message.content))
            return "content: string expected";
        return null;
      };

      /**
       * Creates a HealthGuideContentRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.health_guidance.HealthGuideContentRequest} HealthGuideContentRequest
       */
      HealthGuideContentRequest.fromObject = function fromObject(object) {
        if (
          object instanceof $root.api.health_guidance.HealthGuideContentRequest
        )
          return object;
        var message = new $root.api.health_guidance.HealthGuideContentRequest();
        if (object.typeOne != null) message.typeOne = object.typeOne | 0;
        if (object.typeTwo != null) message.typeTwo = String(object.typeTwo);
        if (object.content != null) message.content = String(object.content);
        return message;
      };

      /**
       * Creates a plain object from a HealthGuideContentRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {api.health_guidance.HealthGuideContentRequest} message HealthGuideContentRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HealthGuideContentRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.typeOne = 0;
          object.typeTwo = "";
          object.content = "";
        }
        if (message.typeOne != null && message.hasOwnProperty("typeOne"))
          object.typeOne = message.typeOne;
        if (message.typeTwo != null && message.hasOwnProperty("typeTwo"))
          object.typeTwo = message.typeTwo;
        if (message.content != null && message.hasOwnProperty("content"))
          object.content = message.content;
        return object;
      };

      /**
       * Converts this HealthGuideContentRequest to JSON.
       * @function toJSON
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HealthGuideContentRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HealthGuideContentRequest
       * @function getTypeUrl
       * @memberof api.health_guidance.HealthGuideContentRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HealthGuideContentRequest.getTypeUrl = function getTypeUrl(
        typeUrlPrefix,
      ) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.health_guidance.HealthGuideContentRequest";
      };

      return HealthGuideContentRequest;
    })();

    health_guidance.HealthGuideContentResponse = (function () {
      /**
       * Properties of a HealthGuideContentResponse.
       * @memberof api.health_guidance
       * @interface IHealthGuideContentResponse
       * @property {Array.<api.health_guidance.IHealthGuideContent>|null} [healthGuideContents] HealthGuideContentResponse healthGuideContents
       * @property {number|null} [code] HealthGuideContentResponse code
       * @property {string|null} [message] HealthGuideContentResponse message
       */

      /**
       * Constructs a new HealthGuideContentResponse.
       * @memberof api.health_guidance
       * @classdesc Represents a HealthGuideContentResponse.
       * @implements IHealthGuideContentResponse
       * @constructor
       * @param {api.health_guidance.IHealthGuideContentResponse=} [properties] Properties to set
       */
      function HealthGuideContentResponse(properties) {
        this.healthGuideContents = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * HealthGuideContentResponse healthGuideContents.
       * @member {Array.<api.health_guidance.IHealthGuideContent>} healthGuideContents
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @instance
       */
      HealthGuideContentResponse.prototype.healthGuideContents =
        $util.emptyArray;

      /**
       * HealthGuideContentResponse code.
       * @member {number} code
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @instance
       */
      HealthGuideContentResponse.prototype.code = 0;

      /**
       * HealthGuideContentResponse message.
       * @member {string} message
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @instance
       */
      HealthGuideContentResponse.prototype.message = "";

      /**
       * Creates a new HealthGuideContentResponse instance using the specified properties.
       * @function create
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {api.health_guidance.IHealthGuideContentResponse=} [properties] Properties to set
       * @returns {api.health_guidance.HealthGuideContentResponse} HealthGuideContentResponse instance
       */
      HealthGuideContentResponse.create = function create(properties) {
        return new HealthGuideContentResponse(properties);
      };

      /**
       * Encodes the specified HealthGuideContentResponse message. Does not implicitly {@link api.health_guidance.HealthGuideContentResponse.verify|verify} messages.
       * @function encode
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {api.health_guidance.IHealthGuideContentResponse} message HealthGuideContentResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideContentResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.healthGuideContents != null &&
          message.healthGuideContents.length
        )
          for (var i = 0; i < message.healthGuideContents.length; ++i)
            $root.api.health_guidance.HealthGuideContent.encode(
              message.healthGuideContents[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork(),
            ).ldelim();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        if (
          message.message != null &&
          Object.hasOwnProperty.call(message, "message")
        )
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.message);
        return writer;
      };

      /**
       * Encodes the specified HealthGuideContentResponse message, length delimited. Does not implicitly {@link api.health_guidance.HealthGuideContentResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {api.health_guidance.IHealthGuideContentResponse} message HealthGuideContentResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HealthGuideContentResponse.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HealthGuideContentResponse message from the specified reader or buffer.
       * @function decode
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.health_guidance.HealthGuideContentResponse} HealthGuideContentResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideContentResponse.decode = function decode(
        reader,
        length,
        error,
      ) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.health_guidance.HealthGuideContentResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              if (
                !(
                  message.healthGuideContents &&
                  message.healthGuideContents.length
                )
              )
                message.healthGuideContents = [];
              message.healthGuideContents.push(
                $root.api.health_guidance.HealthGuideContent.decode(
                  reader,
                  reader.uint32(),
                ),
              );
              break;
            }
            case 2: {
              message.code = reader.int32();
              break;
            }
            case 3: {
              message.message = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HealthGuideContentResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.health_guidance.HealthGuideContentResponse} HealthGuideContentResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HealthGuideContentResponse.decodeDelimited = function decodeDelimited(
        reader,
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HealthGuideContentResponse message.
       * @function verify
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HealthGuideContentResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (
          message.healthGuideContents != null &&
          message.hasOwnProperty("healthGuideContents")
        ) {
          if (!Array.isArray(message.healthGuideContents))
            return "healthGuideContents: array expected";
          for (var i = 0; i < message.healthGuideContents.length; ++i) {
            var error = $root.api.health_guidance.HealthGuideContent.verify(
              message.healthGuideContents[i],
            );
            if (error) return "healthGuideContents." + error;
          }
        }
        if (message.code != null && message.hasOwnProperty("code"))
          if (!$util.isInteger(message.code)) return "code: integer expected";
        if (message.message != null && message.hasOwnProperty("message"))
          if (!$util.isString(message.message))
            return "message: string expected";
        return null;
      };

      /**
       * Creates a HealthGuideContentResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.health_guidance.HealthGuideContentResponse} HealthGuideContentResponse
       */
      HealthGuideContentResponse.fromObject = function fromObject(object) {
        if (
          object instanceof $root.api.health_guidance.HealthGuideContentResponse
        )
          return object;
        var message =
          new $root.api.health_guidance.HealthGuideContentResponse();
        if (object.healthGuideContents) {
          if (!Array.isArray(object.healthGuideContents))
            throw TypeError(
              ".api.health_guidance.HealthGuideContentResponse.healthGuideContents: array expected",
            );
          message.healthGuideContents = [];
          for (var i = 0; i < object.healthGuideContents.length; ++i) {
            if (typeof object.healthGuideContents[i] !== "object")
              throw TypeError(
                ".api.health_guidance.HealthGuideContentResponse.healthGuideContents: object expected",
              );
            message.healthGuideContents[i] =
              $root.api.health_guidance.HealthGuideContent.fromObject(
                object.healthGuideContents[i],
              );
          }
        }
        if (object.code != null) message.code = object.code | 0;
        if (object.message != null) message.message = String(object.message);
        return message;
      };

      /**
       * Creates a plain object from a HealthGuideContentResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {api.health_guidance.HealthGuideContentResponse} message HealthGuideContentResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HealthGuideContentResponse.toObject = function toObject(
        message,
        options,
      ) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.healthGuideContents = [];
        if (options.defaults) {
          object.code = 0;
          object.message = "";
        }
        if (message.healthGuideContents && message.healthGuideContents.length) {
          object.healthGuideContents = [];
          for (var j = 0; j < message.healthGuideContents.length; ++j)
            object.healthGuideContents[j] =
              $root.api.health_guidance.HealthGuideContent.toObject(
                message.healthGuideContents[j],
                options,
              );
        }
        if (message.code != null && message.hasOwnProperty("code"))
          object.code = message.code;
        if (message.message != null && message.hasOwnProperty("message"))
          object.message = message.message;
        return object;
      };

      /**
       * Converts this HealthGuideContentResponse to JSON.
       * @function toJSON
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HealthGuideContentResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HealthGuideContentResponse
       * @function getTypeUrl
       * @memberof api.health_guidance.HealthGuideContentResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HealthGuideContentResponse.getTypeUrl = function getTypeUrl(
        typeUrlPrefix,
      ) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return (
          typeUrlPrefix + "/api.health_guidance.HealthGuideContentResponse"
        );
      };

      return HealthGuideContentResponse;
    })();

    return health_guidance;
  })();

  return api;
})();

module.exports = $root;
