/**
 * Field/Table name definition of database.
 */
export namespace johnnyDb {

  const FIELDS = {
    ID: 'id',
    PLAYER_ID: 'player_id',
    NAME: 'name',
    AUTHOR_ID: 'author_id',
    INSTRUMENT_ID: 'instrument_id',
    AREA_ID: 'city_id',
  }

  export namespace tables {

    export namespace player {

      export const AREA = {
        TABLE_NAME: "user_cities",
        ID: FIELDS.ID,
        PLAYER_ID: FIELDS.PLAYER_ID,
        AREA_ID: FIELDS.AREA_ID,
      }

      export const INSTRUMENT = {
        TABLE_NAME: "player_instrument",
        ID: FIELDS.ID,
        NAME: FIELDS.NAME,
        PLAYER_ID: FIELDS.PLAYER_ID,
        INSTRUMENT_ID: FIELDS.INSTRUMENT_ID,
        AUTHOR_ID: FIELDS.AUTHOR_ID,
      }
    }

    export namespace area {
    }

    export namespace instrument {
    }

    export namespace studio {
    }

    export namespace follow {
    }
  }

}
