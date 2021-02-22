/**
 * Field/Table name definition of database.
 */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace johnnyDb {
  const FIELDS = {
    ID: "id",
    PLAYER_ID: "player_id",
    NAME: "name",
    AUTHOR_ID: "author_id",
    AREA_ID: "city_id",
    INSTRUMENT_ID: "instrument_id",
    STUDIO_ID: "studio_id",
    FOLLOWING_PLAYER_ID: "following_player_id",
    DATE: "date",
  };

  export namespace tables {
    export namespace player {
      export const AREA = {
        TABLE_NAME: "user_cities",
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

      export const FOLLOW = {
        TABLE_NAME: "player_follow",
        ID: FIELDS.ID,
        PLAYER_ID: FIELDS.PLAYER_ID,
        FOLLOWING_PLAYER_ID: FIELDS.FOLLOWING_PLAYER_ID,
        START_FOLLOWING_DATE: FIELDS.DATE,
      }
    }

    export namespace area {}

    export namespace instrument {}

    export namespace studio {}

    export namespace follow {}
  }
}
