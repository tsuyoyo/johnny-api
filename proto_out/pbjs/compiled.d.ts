import * as $protobuf from "protobufjs";
/** Namespace pj. */
export namespace pj {

    /** Namespace sakuchin. */
    namespace sakuchin {

        /** Namespace percussion. */
        namespace percussion {

            /** Namespace proto. */
            namespace proto {

                /** Prefecture enum. */
                enum Prefecture {
                    UNKNOWN = 0,
                    HOKKAIDO = 1,
                    AOMORI = 2,
                    IWATE = 3,
                    MIYAGI = 4,
                    AKITA = 5,
                    YAMAGATA = 6,
                    FUKUSHIMA = 7,
                    IBARAKI = 8,
                    TOCHIGI = 9,
                    GUNNMA = 10,
                    SAITAMA = 11,
                    CHIBA = 12,
                    TOKYO = 13,
                    KANAGAWA = 14,
                    NIIGATA = 15,
                    TOYAMA = 16,
                    ISHIKAWA = 17,
                    FUKUI = 18,
                    YAMANASHI = 19,
                    NAGANO = 20,
                    GIFU = 21,
                    SHIZUOKA = 22,
                    AICHI = 23,
                    MIE = 24,
                    SHIGA = 25,
                    KYOTO = 26,
                    OSAKA = 27,
                    HYOGO = 28,
                    NARA = 29,
                    WAKAYAMA = 30,
                    TOTTORI = 31,
                    SHIMANE = 32,
                    OKAYAMA = 33,
                    HIROSHIMA = 34,
                    YAMAGUCHI = 35,
                    TOKUSHIMA = 36,
                    KAGAWA = 37,
                    EHIME = 38,
                    KOCHI = 39,
                    FUKUOKA = 40,
                    SAGA = 41,
                    NAGASAKI = 42,
                    KUMAMOTO = 43,
                    OITA = 44,
                    MIYAZAKI = 45,
                    KAGOSHIMA = 46,
                    OKINAWA = 47
                }

                /** Properties of a City. */
                interface ICity {

                    /** City id */
                    id?: (string|null);

                    /** City name */
                    name?: (string|null);

                    /** City prefecture */
                    prefecture?: (pj.sakuchin.percussion.proto.Prefecture|null);
                }

                /** Represents a City. */
                class City implements ICity {

                    /**
                     * Constructs a new City.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.ICity);

                    /** City id. */
                    public id: string;

                    /** City name. */
                    public name: string;

                    /** City prefecture. */
                    public prefecture: pj.sakuchin.percussion.proto.Prefecture;

                    /**
                     * Creates a new City instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns City instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.ICity): pj.sakuchin.percussion.proto.City;

                    /**
                     * Encodes the specified City message. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @param message City message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified City message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.City.verify|verify} messages.
                     * @param message City message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a City message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.City;

                    /**
                     * Decodes a City message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns City
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.City;

                    /**
                     * Verifies a City message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a City message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns City
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.City;

                    /**
                     * Creates a plain object from a City message. Also converts values to other types if specified.
                     * @param message City
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.City, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this City to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAreaCityResponse. */
                interface IGetAreaCityResponse {

                    /** GetAreaCityResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetAreaCityResponse. */
                class GetAreaCityResponse implements IGetAreaCityResponse {

                    /**
                     * Constructs a new GetAreaCityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetAreaCityResponse);

                    /** GetAreaCityResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetAreaCityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAreaCityResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetAreaCityResponse): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Encodes the specified GetAreaCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @param message GetAreaCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetAreaCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAreaCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetAreaCityResponse.verify|verify} messages.
                     * @param message GetAreaCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetAreaCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Decodes a GetAreaCityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAreaCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Verifies a GetAreaCityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAreaCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAreaCityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetAreaCityResponse;

                    /**
                     * Creates a plain object from a GetAreaCityResponse message. Also converts values to other types if specified.
                     * @param message GetAreaCityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetAreaCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAreaCityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EmptyResponse. */
                interface IEmptyResponse {
                }

                /** Represents an EmptyResponse. */
                class EmptyResponse implements IEmptyResponse {

                    /**
                     * Constructs a new EmptyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IEmptyResponse);

                    /**
                     * Creates a new EmptyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmptyResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IEmptyResponse): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Encodes the specified EmptyResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @param message EmptyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmptyResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.EmptyResponse.verify|verify} messages.
                     * @param message EmptyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IEmptyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Decodes an EmptyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmptyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Verifies an EmptyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmptyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmptyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.EmptyResponse;

                    /**
                     * Creates a plain object from an EmptyResponse message. Also converts values to other types if specified.
                     * @param message EmptyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.EmptyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmptyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PercussionApiError. */
                interface IPercussionApiError {

                    /** PercussionApiError errorCode */
                    errorCode?: (pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode|null);

                    /** PercussionApiError message */
                    message?: (string|null);
                }

                /** Represents a PercussionApiError. */
                class PercussionApiError implements IPercussionApiError {

                    /**
                     * Constructs a new PercussionApiError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPercussionApiError);

                    /** PercussionApiError errorCode. */
                    public errorCode: pj.sakuchin.percussion.proto.PercussionApiError.ErrorCode;

                    /** PercussionApiError message. */
                    public message: string;

                    /**
                     * Creates a new PercussionApiError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PercussionApiError instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPercussionApiError): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Encodes the specified PercussionApiError message. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @param message PercussionApiError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPercussionApiError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PercussionApiError message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PercussionApiError.verify|verify} messages.
                     * @param message PercussionApiError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPercussionApiError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Decodes a PercussionApiError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PercussionApiError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Verifies a PercussionApiError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PercussionApiError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PercussionApiError
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PercussionApiError;

                    /**
                     * Creates a plain object from a PercussionApiError message. Also converts values to other types if specified.
                     * @param message PercussionApiError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PercussionApiError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PercussionApiError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PercussionApiError {

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        UNKNOWN = 0,
                        NO_TOKEN = 1,
                        INVALID_FIREBASE_TOKEN = 2,
                        USER_HAS_BEEN_ALREADY_REGISTERED = 3,
                        DB_ERROR = 4,
                        INVALID_PARAMETER = 5,
                        AUTHENTICATION_ERROR = 6
                    }
                }

                /** Properties of a GetSuggestCityResponse. */
                interface IGetSuggestCityResponse {

                    /** GetSuggestCityResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetSuggestCityResponse. */
                class GetSuggestCityResponse implements IGetSuggestCityResponse {

                    /**
                     * Constructs a new GetSuggestCityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetSuggestCityResponse);

                    /** GetSuggestCityResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetSuggestCityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSuggestCityResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetSuggestCityResponse): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Encodes the specified GetSuggestCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @param message GetSuggestCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetSuggestCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSuggestCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetSuggestCityResponse.verify|verify} messages.
                     * @param message GetSuggestCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetSuggestCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Decodes a GetSuggestCityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSuggestCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Verifies a GetSuggestCityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSuggestCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSuggestCityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetSuggestCityResponse;

                    /**
                     * Creates a plain object from a GetSuggestCityResponse message. Also converts values to other types if specified.
                     * @param message GetSuggestCityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetSuggestCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSuggestCityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a User. */
                interface IUser {

                    /** User id */
                    id?: (string|null);

                    /** User name */
                    name?: (string|null);

                    /** User photo */
                    photo?: (string|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IUser);

                    /** User id. */
                    public id: string;

                    /** User name. */
                    public name: string;

                    /** User photo. */
                    public photo: string;

                    /**
                     * Creates a new User instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns User instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IUser): pj.sakuchin.percussion.proto.User;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.User;

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.User;

                    /**
                     * Verifies a User message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns User
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.User;

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @param message User
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this User to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UserProfile. */
                interface IUserProfile {

                    /** UserProfile activeCities */
                    activeCities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a UserProfile. */
                class UserProfile implements IUserProfile {

                    /**
                     * Constructs a new UserProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IUserProfile);

                    /** UserProfile activeCities. */
                    public activeCities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new UserProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserProfile instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IUserProfile): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Encodes the specified UserProfile message. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @param message UserProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserProfile message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.UserProfile.verify|verify} messages.
                     * @param message UserProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Decodes a UserProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Verifies a UserProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserProfile
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.UserProfile;

                    /**
                     * Creates a plain object from a UserProfile message. Also converts values to other types if specified.
                     * @param message UserProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.UserProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SignupUserRequest. */
                interface ISignupUserRequest {

                    /** SignupUserRequest token */
                    token?: (string|null);
                }

                /** Represents a SignupUserRequest. */
                class SignupUserRequest implements ISignupUserRequest {

                    /**
                     * Constructs a new SignupUserRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.ISignupUserRequest);

                    /** SignupUserRequest token. */
                    public token: string;

                    /**
                     * Creates a new SignupUserRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignupUserRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.ISignupUserRequest): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Encodes the specified SignupUserRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @param message SignupUserRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.ISignupUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignupUserRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserRequest.verify|verify} messages.
                     * @param message SignupUserRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.ISignupUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Decodes a SignupUserRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignupUserRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Verifies a SignupUserRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignupUserRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignupUserRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.SignupUserRequest;

                    /**
                     * Creates a plain object from a SignupUserRequest message. Also converts values to other types if specified.
                     * @param message SignupUserRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.SignupUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignupUserRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SignupUserResponse. */
                interface ISignupUserResponse {

                    /** SignupUserResponse user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);
                }

                /** Represents a SignupUserResponse. */
                class SignupUserResponse implements ISignupUserResponse {

                    /**
                     * Constructs a new SignupUserResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.ISignupUserResponse);

                    /** SignupUserResponse user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /**
                     * Creates a new SignupUserResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignupUserResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.ISignupUserResponse): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Encodes the specified SignupUserResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @param message SignupUserResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.ISignupUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignupUserResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.SignupUserResponse.verify|verify} messages.
                     * @param message SignupUserResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.ISignupUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Decodes a SignupUserResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignupUserResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Verifies a SignupUserResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignupUserResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignupUserResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.SignupUserResponse;

                    /**
                     * Creates a plain object from a SignupUserResponse message. Also converts values to other types if specified.
                     * @param message SignupUserResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.SignupUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignupUserResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostUserLoginRequest. */
                interface IPostUserLoginRequest {

                    /** PostUserLoginRequest token */
                    token?: (string|null);
                }

                /** Represents a PostUserLoginRequest. */
                class PostUserLoginRequest implements IPostUserLoginRequest {

                    /**
                     * Constructs a new PostUserLoginRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostUserLoginRequest);

                    /** PostUserLoginRequest token. */
                    public token: string;

                    /**
                     * Creates a new PostUserLoginRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostUserLoginRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostUserLoginRequest): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Encodes the specified PostUserLoginRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @param message PostUserLoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostUserLoginRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginRequest.verify|verify} messages.
                     * @param message PostUserLoginRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Decodes a PostUserLoginRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostUserLoginRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Verifies a PostUserLoginRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostUserLoginRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostUserLoginRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostUserLoginRequest;

                    /**
                     * Creates a plain object from a PostUserLoginRequest message. Also converts values to other types if specified.
                     * @param message PostUserLoginRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostUserLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostUserLoginRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostUserLoginResponse. */
                interface IPostUserLoginResponse {

                    /** PostUserLoginResponse user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);
                }

                /** Represents a PostUserLoginResponse. */
                class PostUserLoginResponse implements IPostUserLoginResponse {

                    /**
                     * Constructs a new PostUserLoginResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPostUserLoginResponse);

                    /** PostUserLoginResponse user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /**
                     * Creates a new PostUserLoginResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostUserLoginResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPostUserLoginResponse): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Encodes the specified PostUserLoginResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @param message PostUserLoginResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPostUserLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostUserLoginResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PostUserLoginResponse.verify|verify} messages.
                     * @param message PostUserLoginResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPostUserLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Decodes a PostUserLoginResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostUserLoginResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Verifies a PostUserLoginResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostUserLoginResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostUserLoginResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PostUserLoginResponse;

                    /**
                     * Creates a plain object from a PostUserLoginResponse message. Also converts values to other types if specified.
                     * @param message PostUserLoginResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PostUserLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostUserLoginResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetUserProfileResponse. */
                interface IGetUserProfileResponse {

                    /** GetUserProfileResponse user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** GetUserProfileResponse userProfile */
                    userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);
                }

                /** Represents a GetUserProfileResponse. */
                class GetUserProfileResponse implements IGetUserProfileResponse {

                    /**
                     * Constructs a new GetUserProfileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetUserProfileResponse);

                    /** GetUserProfileResponse user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** GetUserProfileResponse userProfile. */
                    public userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);

                    /**
                     * Creates a new GetUserProfileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUserProfileResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetUserProfileResponse): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Encodes the specified GetUserProfileResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @param message GetUserProfileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetUserProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUserProfileResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserProfileResponse.verify|verify} messages.
                     * @param message GetUserProfileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetUserProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Decodes a GetUserProfileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUserProfileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Verifies a GetUserProfileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUserProfileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUserProfileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetUserProfileResponse;

                    /**
                     * Creates a plain object from a GetUserProfileResponse message. Also converts values to other types if specified.
                     * @param message GetUserProfileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetUserProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUserProfileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutUserProfileRequest. */
                interface IPutUserProfileRequest {

                    /** PutUserProfileRequest user */
                    user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** PutUserProfileRequest userProfile */
                    userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);
                }

                /** Represents a PutUserProfileRequest. */
                class PutUserProfileRequest implements IPutUserProfileRequest {

                    /**
                     * Constructs a new PutUserProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutUserProfileRequest);

                    /** PutUserProfileRequest user. */
                    public user?: (pj.sakuchin.percussion.proto.IUser|null);

                    /** PutUserProfileRequest userProfile. */
                    public userProfile?: (pj.sakuchin.percussion.proto.IUserProfile|null);

                    /**
                     * Creates a new PutUserProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutUserProfileRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutUserProfileRequest): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Encodes the specified PutUserProfileRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @param message PutUserProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutUserProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutUserProfileRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserProfileRequest.verify|verify} messages.
                     * @param message PutUserProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutUserProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Decodes a PutUserProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutUserProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Verifies a PutUserProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutUserProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutUserProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutUserProfileRequest;

                    /**
                     * Creates a plain object from a PutUserProfileRequest message. Also converts values to other types if specified.
                     * @param message PutUserProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutUserProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutUserProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PutUserCityRequest. */
                interface IPutUserCityRequest {

                    /** PutUserCityRequest cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a PutUserCityRequest. */
                class PutUserCityRequest implements IPutUserCityRequest {

                    /**
                     * Constructs a new PutUserCityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IPutUserCityRequest);

                    /** PutUserCityRequest cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new PutUserCityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PutUserCityRequest instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IPutUserCityRequest): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Encodes the specified PutUserCityRequest message. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @param message PutUserCityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IPutUserCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PutUserCityRequest message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.PutUserCityRequest.verify|verify} messages.
                     * @param message PutUserCityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IPutUserCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Decodes a PutUserCityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PutUserCityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Verifies a PutUserCityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PutUserCityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PutUserCityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.PutUserCityRequest;

                    /**
                     * Creates a plain object from a PutUserCityRequest message. Also converts values to other types if specified.
                     * @param message PutUserCityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.PutUserCityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PutUserCityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetUserCityResponse. */
                interface IGetUserCityResponse {

                    /** GetUserCityResponse cities */
                    cities?: (pj.sakuchin.percussion.proto.ICity[]|null);
                }

                /** Represents a GetUserCityResponse. */
                class GetUserCityResponse implements IGetUserCityResponse {

                    /**
                     * Constructs a new GetUserCityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: pj.sakuchin.percussion.proto.IGetUserCityResponse);

                    /** GetUserCityResponse cities. */
                    public cities: pj.sakuchin.percussion.proto.ICity[];

                    /**
                     * Creates a new GetUserCityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUserCityResponse instance
                     */
                    public static create(properties?: pj.sakuchin.percussion.proto.IGetUserCityResponse): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Encodes the specified GetUserCityResponse message. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @param message GetUserCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: pj.sakuchin.percussion.proto.IGetUserCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUserCityResponse message, length delimited. Does not implicitly {@link pj.sakuchin.percussion.proto.GetUserCityResponse.verify|verify} messages.
                     * @param message GetUserCityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: pj.sakuchin.percussion.proto.IGetUserCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Decodes a GetUserCityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUserCityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Verifies a GetUserCityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUserCityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUserCityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): pj.sakuchin.percussion.proto.GetUserCityResponse;

                    /**
                     * Creates a plain object from a GetUserCityResponse message. Also converts values to other types if specified.
                     * @param message GetUserCityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: pj.sakuchin.percussion.proto.GetUserCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUserCityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
