/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

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

  api.policy = (function () {
    /**
     * Namespace policy.
     * @memberof api
     * @namespace
     */
    var policy = {};

    policy.PolicyType = (function () {
      /**
       * Properties of a PolicyType.
       * @memberof api.policy
       * @interface IPolicyType
       * @property {number|null} [id] PolicyType id
       * @property {string|null} [type] PolicyType type
       */

      /**
       * Constructs a new PolicyType.
       * @memberof api.policy
       * @classdesc Represents a PolicyType.
       * @implements IPolicyType
       * @constructor
       * @param {api.policy.IPolicyType=} [properties] Properties to set
       */
      function PolicyType(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * PolicyType id.
       * @member {number} id
       * @memberof api.policy.PolicyType
       * @instance
       */
      PolicyType.prototype.id = 0;

      /**
       * PolicyType type.
       * @member {string} type
       * @memberof api.policy.PolicyType
       * @instance
       */
      PolicyType.prototype.type = "";

      /**
       * Creates a new PolicyType instance using the specified properties.
       * @function create
       * @memberof api.policy.PolicyType
       * @static
       * @param {api.policy.IPolicyType=} [properties] Properties to set
       * @returns {api.policy.PolicyType} PolicyType instance
       */
      PolicyType.create = function create(properties) {
        return new PolicyType(properties);
      };

      /**
       * Encodes the specified PolicyType message. Does not implicitly {@link api.policy.PolicyType.verify|verify} messages.
       * @function encode
       * @memberof api.policy.PolicyType
       * @static
       * @param {api.policy.IPolicyType} message PolicyType message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyType.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.type);
        return writer;
      };

      /**
       * Encodes the specified PolicyType message, length delimited. Does not implicitly {@link api.policy.PolicyType.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.policy.PolicyType
       * @static
       * @param {api.policy.IPolicyType} message PolicyType message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PolicyType message from the specified reader or buffer.
       * @function decode
       * @memberof api.policy.PolicyType
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.policy.PolicyType} PolicyType
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyType.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.policy.PolicyType();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              message.id = reader.int32();
              break;
            }
            case 2: {
              message.type = reader.string();
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
       * Decodes a PolicyType message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.policy.PolicyType
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.policy.PolicyType} PolicyType
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PolicyType message.
       * @function verify
       * @memberof api.policy.PolicyType
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PolicyType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
          if (!$util.isInteger(message.id)) return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
          if (!$util.isString(message.type)) return "type: string expected";
        return null;
      };

      /**
       * Creates a PolicyType message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.policy.PolicyType
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.policy.PolicyType} PolicyType
       */
      PolicyType.fromObject = function fromObject(object) {
        if (object instanceof $root.api.policy.PolicyType) return object;
        var message = new $root.api.policy.PolicyType();
        if (object.id != null) message.id = object.id | 0;
        if (object.type != null) message.type = String(object.type);
        return message;
      };

      /**
       * Creates a plain object from a PolicyType message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.policy.PolicyType
       * @static
       * @param {api.policy.PolicyType} message PolicyType
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PolicyType.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.id = 0;
          object.type = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
          object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
          object.type = message.type;
        return object;
      };

      /**
       * Converts this PolicyType to JSON.
       * @function toJSON
       * @memberof api.policy.PolicyType
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PolicyType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for PolicyType
       * @function getTypeUrl
       * @memberof api.policy.PolicyType
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      PolicyType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.policy.PolicyType";
      };

      return PolicyType;
    })();

    policy.PolicyTypeResponse = (function () {
      /**
       * Properties of a PolicyTypeResponse.
       * @memberof api.policy
       * @interface IPolicyTypeResponse
       * @property {Array.<api.policy.IPolicyType>|null} [policyTypes] PolicyTypeResponse policyTypes
       * @property {number|null} [code] PolicyTypeResponse code
       * @property {string|null} [message] PolicyTypeResponse message
       */

      /**
       * Constructs a new PolicyTypeResponse.
       * @memberof api.policy
       * @classdesc Represents a PolicyTypeResponse.
       * @implements IPolicyTypeResponse
       * @constructor
       * @param {api.policy.IPolicyTypeResponse=} [properties] Properties to set
       */
      function PolicyTypeResponse(properties) {
        this.policyTypes = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * PolicyTypeResponse policyTypes.
       * @member {Array.<api.policy.IPolicyType>} policyTypes
       * @memberof api.policy.PolicyTypeResponse
       * @instance
       */
      PolicyTypeResponse.prototype.policyTypes = $util.emptyArray;

      /**
       * PolicyTypeResponse code.
       * @member {number} code
       * @memberof api.policy.PolicyTypeResponse
       * @instance
       */
      PolicyTypeResponse.prototype.code = 0;

      /**
       * PolicyTypeResponse message.
       * @member {string} message
       * @memberof api.policy.PolicyTypeResponse
       * @instance
       */
      PolicyTypeResponse.prototype.message = "";

      /**
       * Creates a new PolicyTypeResponse instance using the specified properties.
       * @function create
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {api.policy.IPolicyTypeResponse=} [properties] Properties to set
       * @returns {api.policy.PolicyTypeResponse} PolicyTypeResponse instance
       */
      PolicyTypeResponse.create = function create(properties) {
        return new PolicyTypeResponse(properties);
      };

      /**
       * Encodes the specified PolicyTypeResponse message. Does not implicitly {@link api.policy.PolicyTypeResponse.verify|verify} messages.
       * @function encode
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {api.policy.IPolicyTypeResponse} message PolicyTypeResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyTypeResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.policyTypes != null && message.policyTypes.length)
          for (var i = 0; i < message.policyTypes.length; ++i)
            $root.api.policy.PolicyType.encode(
              message.policyTypes[i],
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
       * Encodes the specified PolicyTypeResponse message, length delimited. Does not implicitly {@link api.policy.PolicyTypeResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {api.policy.IPolicyTypeResponse} message PolicyTypeResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyTypeResponse.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PolicyTypeResponse message from the specified reader or buffer.
       * @function decode
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.policy.PolicyTypeResponse} PolicyTypeResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyTypeResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.policy.PolicyTypeResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              if (!(message.policyTypes && message.policyTypes.length))
                message.policyTypes = [];
              message.policyTypes.push(
                $root.api.policy.PolicyType.decode(reader, reader.uint32()),
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
       * Decodes a PolicyTypeResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.policy.PolicyTypeResponse} PolicyTypeResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyTypeResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PolicyTypeResponse message.
       * @function verify
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PolicyTypeResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (
          message.policyTypes != null &&
          message.hasOwnProperty("policyTypes")
        ) {
          if (!Array.isArray(message.policyTypes))
            return "policyTypes: array expected";
          for (var i = 0; i < message.policyTypes.length; ++i) {
            var error = $root.api.policy.PolicyType.verify(
              message.policyTypes[i],
            );
            if (error) return "policyTypes." + error;
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
       * Creates a PolicyTypeResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.policy.PolicyTypeResponse} PolicyTypeResponse
       */
      PolicyTypeResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.api.policy.PolicyTypeResponse)
          return object;
        var message = new $root.api.policy.PolicyTypeResponse();
        if (object.policyTypes) {
          if (!Array.isArray(object.policyTypes))
            throw TypeError(
              ".api.policy.PolicyTypeResponse.policyTypes: array expected",
            );
          message.policyTypes = [];
          for (var i = 0; i < object.policyTypes.length; ++i) {
            if (typeof object.policyTypes[i] !== "object")
              throw TypeError(
                ".api.policy.PolicyTypeResponse.policyTypes: object expected",
              );
            message.policyTypes[i] = $root.api.policy.PolicyType.fromObject(
              object.policyTypes[i],
            );
          }
        }
        if (object.code != null) message.code = object.code | 0;
        if (object.message != null) message.message = String(object.message);
        return message;
      };

      /**
       * Creates a plain object from a PolicyTypeResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {api.policy.PolicyTypeResponse} message PolicyTypeResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PolicyTypeResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.policyTypes = [];
        if (options.defaults) {
          object.code = 0;
          object.message = "";
        }
        if (message.policyTypes && message.policyTypes.length) {
          object.policyTypes = [];
          for (var j = 0; j < message.policyTypes.length; ++j)
            object.policyTypes[j] = $root.api.policy.PolicyType.toObject(
              message.policyTypes[j],
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
       * Converts this PolicyTypeResponse to JSON.
       * @function toJSON
       * @memberof api.policy.PolicyTypeResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PolicyTypeResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for PolicyTypeResponse
       * @function getTypeUrl
       * @memberof api.policy.PolicyTypeResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      PolicyTypeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.policy.PolicyTypeResponse";
      };

      return PolicyTypeResponse;
    })();

    policy.PolicyFile = (function () {
      /**
       * Properties of a PolicyFile.
       * @memberof api.policy
       * @interface IPolicyFile
       * @property {number|null} [id] PolicyFile id
       * @property {string|null} [title] PolicyFile title
       * @property {string|null} [type] PolicyFile type
       * @property {string|null} [index] PolicyFile index
       * @property {number|null} [createTime] PolicyFile createTime
       */

      /**
       * Constructs a new PolicyFile.
       * @memberof api.policy
       * @classdesc Represents a PolicyFile.
       * @implements IPolicyFile
       * @constructor
       * @param {api.policy.IPolicyFile=} [properties] Properties to set
       */
      function PolicyFile(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * PolicyFile id.
       * @member {number} id
       * @memberof api.policy.PolicyFile
       * @instance
       */
      PolicyFile.prototype.id = 0;

      /**
       * PolicyFile title.
       * @member {string} title
       * @memberof api.policy.PolicyFile
       * @instance
       */
      PolicyFile.prototype.title = "";

      /**
       * PolicyFile type.
       * @member {string} type
       * @memberof api.policy.PolicyFile
       * @instance
       */
      PolicyFile.prototype.type = "";

      /**
       * PolicyFile index.
       * @member {string} index
       * @memberof api.policy.PolicyFile
       * @instance
       */
      PolicyFile.prototype.index = "";

      /**
       * PolicyFile createTime.
       * @member {number} createTime
       * @memberof api.policy.PolicyFile
       * @instance
       */
      PolicyFile.prototype.createTime = 0;

      /**
       * Creates a new PolicyFile instance using the specified properties.
       * @function create
       * @memberof api.policy.PolicyFile
       * @static
       * @param {api.policy.IPolicyFile=} [properties] Properties to set
       * @returns {api.policy.PolicyFile} PolicyFile instance
       */
      PolicyFile.create = function create(properties) {
        return new PolicyFile(properties);
      };

      /**
       * Encodes the specified PolicyFile message. Does not implicitly {@link api.policy.PolicyFile.verify|verify} messages.
       * @function encode
       * @memberof api.policy.PolicyFile
       * @static
       * @param {api.policy.IPolicyFile} message PolicyFile message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyFile.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (
          message.title != null &&
          Object.hasOwnProperty.call(message, "title")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.title);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.type);
        if (
          message.index != null &&
          Object.hasOwnProperty.call(message, "index")
        )
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.index);
        if (
          message.createTime != null &&
          Object.hasOwnProperty.call(message, "createTime")
        )
          writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.createTime);
        return writer;
      };

      /**
       * Encodes the specified PolicyFile message, length delimited. Does not implicitly {@link api.policy.PolicyFile.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.policy.PolicyFile
       * @static
       * @param {api.policy.IPolicyFile} message PolicyFile message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyFile.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PolicyFile message from the specified reader or buffer.
       * @function decode
       * @memberof api.policy.PolicyFile
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.policy.PolicyFile} PolicyFile
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyFile.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.policy.PolicyFile();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              message.id = reader.int32();
              break;
            }
            case 2: {
              message.title = reader.string();
              break;
            }
            case 3: {
              message.type = reader.string();
              break;
            }
            case 4: {
              message.index = reader.string();
              break;
            }
            case 5: {
              message.createTime = reader.int32();
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
       * Decodes a PolicyFile message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.policy.PolicyFile
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.policy.PolicyFile} PolicyFile
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyFile.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PolicyFile message.
       * @function verify
       * @memberof api.policy.PolicyFile
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PolicyFile.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
          if (!$util.isInteger(message.id)) return "id: integer expected";
        if (message.title != null && message.hasOwnProperty("title"))
          if (!$util.isString(message.title)) return "title: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
          if (!$util.isString(message.type)) return "type: string expected";
        if (message.index != null && message.hasOwnProperty("index"))
          if (!$util.isString(message.index)) return "index: string expected";
        if (message.createTime != null && message.hasOwnProperty("createTime"))
          if (!$util.isInteger(message.createTime))
            return "createTime: integer expected";
        return null;
      };

      /**
       * Creates a PolicyFile message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.policy.PolicyFile
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.policy.PolicyFile} PolicyFile
       */
      PolicyFile.fromObject = function fromObject(object) {
        if (object instanceof $root.api.policy.PolicyFile) return object;
        var message = new $root.api.policy.PolicyFile();
        if (object.id != null) message.id = object.id | 0;
        if (object.title != null) message.title = String(object.title);
        if (object.type != null) message.type = String(object.type);
        if (object.index != null) message.index = String(object.index);
        if (object.createTime != null)
          message.createTime = object.createTime | 0;
        return message;
      };

      /**
       * Creates a plain object from a PolicyFile message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.policy.PolicyFile
       * @static
       * @param {api.policy.PolicyFile} message PolicyFile
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PolicyFile.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.id = 0;
          object.title = "";
          object.type = "";
          object.index = "";
          object.createTime = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
          object.id = message.id;
        if (message.title != null && message.hasOwnProperty("title"))
          object.title = message.title;
        if (message.type != null && message.hasOwnProperty("type"))
          object.type = message.type;
        if (message.index != null && message.hasOwnProperty("index"))
          object.index = message.index;
        if (message.createTime != null && message.hasOwnProperty("createTime"))
          object.createTime = message.createTime;
        return object;
      };

      /**
       * Converts this PolicyFile to JSON.
       * @function toJSON
       * @memberof api.policy.PolicyFile
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PolicyFile.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for PolicyFile
       * @function getTypeUrl
       * @memberof api.policy.PolicyFile
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      PolicyFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.policy.PolicyFile";
      };

      return PolicyFile;
    })();

    policy.PolicyFileResponse = (function () {
      /**
       * Properties of a PolicyFileResponse.
       * @memberof api.policy
       * @interface IPolicyFileResponse
       * @property {Array.<api.policy.IPolicyFile>|null} [policyFiles] PolicyFileResponse policyFiles
       * @property {number|null} [code] PolicyFileResponse code
       * @property {string|null} [message] PolicyFileResponse message
       */

      /**
       * Constructs a new PolicyFileResponse.
       * @memberof api.policy
       * @classdesc Represents a PolicyFileResponse.
       * @implements IPolicyFileResponse
       * @constructor
       * @param {api.policy.IPolicyFileResponse=} [properties] Properties to set
       */
      function PolicyFileResponse(properties) {
        this.policyFiles = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * PolicyFileResponse policyFiles.
       * @member {Array.<api.policy.IPolicyFile>} policyFiles
       * @memberof api.policy.PolicyFileResponse
       * @instance
       */
      PolicyFileResponse.prototype.policyFiles = $util.emptyArray;

      /**
       * PolicyFileResponse code.
       * @member {number} code
       * @memberof api.policy.PolicyFileResponse
       * @instance
       */
      PolicyFileResponse.prototype.code = 0;

      /**
       * PolicyFileResponse message.
       * @member {string} message
       * @memberof api.policy.PolicyFileResponse
       * @instance
       */
      PolicyFileResponse.prototype.message = "";

      /**
       * Creates a new PolicyFileResponse instance using the specified properties.
       * @function create
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {api.policy.IPolicyFileResponse=} [properties] Properties to set
       * @returns {api.policy.PolicyFileResponse} PolicyFileResponse instance
       */
      PolicyFileResponse.create = function create(properties) {
        return new PolicyFileResponse(properties);
      };

      /**
       * Encodes the specified PolicyFileResponse message. Does not implicitly {@link api.policy.PolicyFileResponse.verify|verify} messages.
       * @function encode
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {api.policy.IPolicyFileResponse} message PolicyFileResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyFileResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.policyFiles != null && message.policyFiles.length)
          for (var i = 0; i < message.policyFiles.length; ++i)
            $root.api.policy.PolicyFile.encode(
              message.policyFiles[i],
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
       * Encodes the specified PolicyFileResponse message, length delimited. Does not implicitly {@link api.policy.PolicyFileResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {api.policy.IPolicyFileResponse} message PolicyFileResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PolicyFileResponse.encodeDelimited = function encodeDelimited(
        message,
        writer,
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PolicyFileResponse message from the specified reader or buffer.
       * @function decode
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {api.policy.PolicyFileResponse} PolicyFileResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyFileResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.api.policy.PolicyFileResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          if (tag === error) break;
          switch (tag >>> 3) {
            case 1: {
              if (!(message.policyFiles && message.policyFiles.length))
                message.policyFiles = [];
              message.policyFiles.push(
                $root.api.policy.PolicyFile.decode(reader, reader.uint32()),
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
       * Decodes a PolicyFileResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {api.policy.PolicyFileResponse} PolicyFileResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PolicyFileResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PolicyFileResponse message.
       * @function verify
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PolicyFileResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (
          message.policyFiles != null &&
          message.hasOwnProperty("policyFiles")
        ) {
          if (!Array.isArray(message.policyFiles))
            return "policyFiles: array expected";
          for (var i = 0; i < message.policyFiles.length; ++i) {
            var error = $root.api.policy.PolicyFile.verify(
              message.policyFiles[i],
            );
            if (error) return "policyFiles." + error;
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
       * Creates a PolicyFileResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {api.policy.PolicyFileResponse} PolicyFileResponse
       */
      PolicyFileResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.api.policy.PolicyFileResponse)
          return object;
        var message = new $root.api.policy.PolicyFileResponse();
        if (object.policyFiles) {
          if (!Array.isArray(object.policyFiles))
            throw TypeError(
              ".api.policy.PolicyFileResponse.policyFiles: array expected",
            );
          message.policyFiles = [];
          for (var i = 0; i < object.policyFiles.length; ++i) {
            if (typeof object.policyFiles[i] !== "object")
              throw TypeError(
                ".api.policy.PolicyFileResponse.policyFiles: object expected",
              );
            message.policyFiles[i] = $root.api.policy.PolicyFile.fromObject(
              object.policyFiles[i],
            );
          }
        }
        if (object.code != null) message.code = object.code | 0;
        if (object.message != null) message.message = String(object.message);
        return message;
      };

      /**
       * Creates a plain object from a PolicyFileResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {api.policy.PolicyFileResponse} message PolicyFileResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PolicyFileResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.policyFiles = [];
        if (options.defaults) {
          object.code = 0;
          object.message = "";
        }
        if (message.policyFiles && message.policyFiles.length) {
          object.policyFiles = [];
          for (var j = 0; j < message.policyFiles.length; ++j)
            object.policyFiles[j] = $root.api.policy.PolicyFile.toObject(
              message.policyFiles[j],
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
       * Converts this PolicyFileResponse to JSON.
       * @function toJSON
       * @memberof api.policy.PolicyFileResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PolicyFileResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for PolicyFileResponse
       * @function getTypeUrl
       * @memberof api.policy.PolicyFileResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      PolicyFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/api.policy.PolicyFileResponse";
      };

      return PolicyFileResponse;
    })();

    return policy;
  })();

  return api;
})();

module.exports = $root;
