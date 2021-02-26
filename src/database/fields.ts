/**
 * Field/Table name definition of database.
 */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace johnnyDb {
  const FIELDS = {
    ID: "id",
    PLAYER_ID: "player_id",
    NAME: "name",
    URL: "url",
    ICON: "icon",
    MAIL: "mail",
    RATING: "rating",
    COMMENT: "comment",
    INTRODUCTION: "introduction",
    PREFECTURE: "prefecture",
    AUTHOR_ID: "author_id",
    AREA_ID: "area_id",
    INSTRUMENT_ID: "instrument_id",
    STUDIO_ID: "studio_id",
    FOLLOWING_PLAYER_ID: "following_player_id",
    REGISTERED_DATE_TIME: "registered_date_time",
    POSTED_DATE_TIME: "posted_date_time",
    UPDATED_DATE_TIME: "updated_date_time",
    FOLLOW_SINCE_DATE_TIME: "follow_since_date_time",
    CITY_ID: "city_id",
    CITY_NAME: "city_name",
    ZIP_CODE: "zip_code",
    ADDRESS_ID: "address_id",
  };

  export const DATE_TIME_FORMAT = "YYYY-MM-DD HH:MM:ss"
  export namespace tables {

    export const PLAYER ={
      TABLE_NAME: "player",
      ID: FIELDS.ID,
      NAME: FIELDS.NAME,
      ICON: FIELDS.ICON,
      MAIL: FIELDS.MAIL,
      INTRODUCTION: FIELDS.INTRODUCTION,
      REGISTERED_DATE_TIME: FIELDS.REGISTERED_DATE_TIME,
      UPDATED_DATE_TIME: FIELDS.UPDATED_DATE_TIME,
    }
    export namespace player {
      export const AREA = {
        TABLE_NAME: "player_area",
        ID: FIELDS.ID,
        PLAYER_ID: FIELDS.PLAYER_ID,
        AREA_ID: FIELDS.AREA_ID,
      };

      export const INSTRUMENT = {
        TABLE_NAME: "player_instrument",
        ID: FIELDS.ID,
        PLAYER_ID: FIELDS.PLAYER_ID,
        INSTRUMENT_ID: FIELDS.INSTRUMENT_ID,
      };

      export const STUDIO = {
        TABLE_NAME: "player_studio",
        ID: FIELDS.ID,
        PLAYER_ID: FIELDS.PLAYER_ID,
        STUDIO_ID: FIELDS.STUDIO_ID,
      };
    }

    export const ADDRESS = {
      TABLE_NAME: "address",
      CITY_ID: FIELDS.CITY_ID,
      CITY_NAME: FIELDS.CITY_NAME,
      PREFECTURE: FIELDS.PREFECTURE,
      ZIP_CODE: FIELDS.ZIP_CODE,
      ADDRESS_ID: FIELDS.ADDRESS_ID,
    }

    export const AREA = {
      TABLE_NAME: "area",
      ID: FIELDS.ID,
      NAME: FIELDS.NAME,
      PREFECTURE: FIELDS.PREFECTURE,
      REGISTERED_DATE_TIME: FIELDS.REGISTERED_DATE_TIME,
    }

    export const INSTRUMENT = {
      TABLE_NAME: "instrument",
      ID: FIELDS.ID,
      NAME: FIELDS.NAME,
      REGISTERED_DATE_TIME: FIELDS.REGISTERED_DATE_TIME,
    }

    export namespace instrument {
      export const IMAGE = {
        TABLE_NAME: "instrument_image",
        ID: FIELDS.ID,
        INSTRUMENT_ID: FIELDS.INSTRUMENT_ID,
        URL: FIELDS.URL,
        POSTED_DATE_TIME: FIELDS.POSTED_DATE_TIME,
      }
    }

    export const STUDIO = {
      TABLE_NAME: "studio",
      ID: FIELDS.ID,
      NAME: FIELDS.NAME,
      AREA_ID: FIELDS.AREA_ID,
      REGISTERED_DATE_TIME: FIELDS.REGISTERED_DATE_TIME,
    }

    export namespace studio {
      export const IMAGE = {
        TABLE_NAME: "studio_image",
        ID: FIELDS.ID,
        STUDIO_ID: FIELDS.STUDIO_ID,
        URL: FIELDS.URL,
        POSTED_DATE_TIME: FIELDS.POSTED_DATE_TIME,
      }

      export const RATING = {
        TABLE_NAME: "studio_rating",
        ID: FIELDS.ID,
        STUDIO_ID: FIELDS.STUDIO_ID,
        RATING: FIELDS.RATING,
        COMMENT: FIELDS.COMMENT,
        PLAYER_ID: FIELDS.PLAYER_ID,
        POSTED_DATE_TIME: FIELDS.POSTED_DATE_TIME,
      }
    }

    export const FOLLOW = {
      TABLE_NAME: "follow",
      ID: FIELDS.ID,
      PLAYER_ID: FIELDS.PLAYER_ID,
      FOLLOWING_PLAYER_ID: FIELDS.FOLLOWING_PLAYER_ID,
      FOLLOW_SINCE_DATE_TIME: FIELDS.FOLLOW_SINCE_DATE_TIME,
    }
  }
}
