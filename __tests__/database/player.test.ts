import * as target from "../../src/database/player";
import * as sqlWrapper from "../../src/database/mysqlWrapper";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;
import dayjs = require("dayjs");
import { johnnyDb } from "../../src/database/fields";
import table = johnnyDb.tables.PLAYER;

describe("insert", () => {
  let runSingleQuery;
  const player = new proto.Player({
    id: "id",
    name: "name",
    icon: "icon",
  });
  const mail = "mail@mail.com";
  const date = new Date();

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(() => 
        new Promise<number>((onResolve) => onResolve(3))
      )
  });
  it("should pass expected query", () => {
    const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT);
    return target.insert(player, mail, date)
      .then(() => {
        expect(runSingleQuery.mock.calls.length).toBe(1)
        expect(runSingleQuery.mock.calls[0][0]).toBe(
          `INSERT INTO ${table.TABLE_NAME} ` +
          `(`+
          `${table.ID},`+
          `${table.NAME},`+
          `${table.ICON},`+
          `${table.MAIL},`+
          `${table.REGISTERED_DATE_TIME},`+
          `${table.UPDATED_DATE_TIME}`+
          `) ` +
          `VALUES ` +
          `(`+
          `'${player.id}',`+
          `'${player.name}',`+
          `'${player.icon}',`+
          `'${mail}',`+
          `'${formatDate},`+
          `'${formatDate}'`+
          `)`
        )
      })
    }
  )
})

describe("selectPlayers", () => {
  let runSelectQuery;
  const typedObjects = [
    new proto.Player({ 
      id: "id_1",
      name: "name_1",
      icon: "icon_1",
    }),
    new proto.Player({ 
      id: "id_2",
      name: "name_2",
      icon: "icon_2",
    }),
    new proto.Player({ 
      id: "id_3",
      name: "name_3",
      icon: "icon_3",
    }),
  ]
  const objects = [
    { 
      id: "id_1",
      name: "name_1",
      icon: "icon_1",
    },
    { 
      id: "id_2",
      name: "name_2",
      icon: "icon_2",
    },
    { 
      id: "id_3",
      name: "name_3",
      icon: "icon_3",
    },
  ]
  beforeEach(() => {
    runSelectQuery = jest
      .spyOn(sqlWrapper, "runSelectQuery")
      .mockImplementation(() => 
        new Promise<Array<object>>((onResolve) => onResolve(objects))
      )
  });
  it("should pass expected query", () => {
    return target.selectPlayers()
      .then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1)
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT * FROM ${table.TABLE_NAME}`
        )
      })
  });
  it("should return typed objects", () => {
    return expect(target.selectPlayers())
      .resolves
      .toMatchObject(typedObjects)
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
})

describe("selectPlayerById", () => {
  const playerId = "id_1"
  let runSelectQuery;

  describe("player is found", () => {
    const typedObjects = [
      new proto.Player({ 
        id: "id_1",
        name: "name_1",
        icon: "icon_1",
      }),
    ]
    const objects = [
      { 
        id: "id_1",
        name: "name_1",
        icon: "icon_1",
      },
    ]
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() => 
          new Promise<Array<object>>((onResolve) => onResolve(objects))
        )
    })
    it("should pass expected query", () => {
      return target.selectPlayerById(playerId).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1)
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}='${playerId}'`
        )
      });
    })
    it("should return typed object", () => {
      return expect(target.selectPlayerById(playerId))
        .resolves
        .toMatchObject(typedObjects[0])
    })
    afterEach(() => {
      jest.clearAllMocks();
    });
  })

  describe("player is NOT found", () => {
    const objects = []
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() => 
          new Promise<Array<object>>((onResolve) => onResolve(objects))
        )
    })
    it("should return error", () => {
      return expect(target.selectPlayerById(playerId))
        .rejects
        .toMatchObject({
          apiError: proto.PercussionApiError.ErrorCode.DB_ERROR,
          statusCode: 404
        });
    })
    afterEach(() => {
      jest.clearAllMocks();
    });
  })

  describe("multiple players are found", () => {
    const objects = [
      { 
        id: "id_1",
        name: "name_1",
        icon: "icon_1",
      },
      { 
        id: "id_1",
        name: "name_2",
        icon: "icon_2",
      },
    ]
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() => 
          new Promise<Array<object>>((onResolve) => onResolve(objects))
        )
    })
    it("should return error", () => {
      return expect(target.selectPlayerById(playerId))
        .rejects
        .toMatchObject({
          apiError: proto.PercussionApiError.ErrorCode.DB_ERROR,
          statusCode: 500
        });
    })
    afterEach(() => {
      jest.clearAllMocks();
    });
  })
})

describe("selectPlayerDetailById", () => {
  const playerId = "id_1"

  describe("player is found", () => {
    let runSelectQuery;
    const typedObjects = [
      new proto.PlayerDetail({ 
        id: "id_1",
        name: "name_1",
        icon: "icon_1",
        introduction: "aaaaa",
      }),
    ]
    const objects = [
      { 
        id: "id_1",
        name: "name_1",
        icon: "icon_1",
        introduction: "aaaaa",
      },
    ]
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() => 
          new Promise<Array<object>>((onResolve) => onResolve(objects))
        );
    })
    it("should pass expected query", () => {
      target.selectPlayerDetailById(playerId).then(() => {
        expect(runSelectQuery.mock.calls.length).toBe(1)
        expect(runSelectQuery.mock.calls[0][0]).toBe(
          `SELECT * FROM ${table.TABLE_NAME} WHERE ${table.ID}='${playerId}'`
        )
      });
    })
    it("should return typed object", () => {
      return expect(target.selectPlayerDetailById(playerId))
        .resolves
        .toMatchObject(typedObjects[0])
    })
    afterEach(() => {
      jest.clearAllMocks();
    });
  })

  describe("player is NOT found", () => {
    let runSelectQuery;
    const objects = []
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() => 
          new Promise<Array<object>>((onResolve) => onResolve(objects))
        )
    })
    it("should return error", () => {
      return expect(target.selectPlayerDetailById(playerId))
        .rejects
        .toMatchObject({
          apiError: proto.PercussionApiError.ErrorCode.DB_ERROR,
          statusCode: 404
        });
    })
    afterEach(() => {
      jest.clearAllMocks();
    });
  })

  describe("multiple players are found", () => {
    let runSelectQuery;
    const objects = [
      { 
        id: "id_1",
        name: "name_1",
        icon: "icon_1",
      },
      { 
        id: "id_1",
        name: "name_2",
        icon: "icon_2",
      },
    ];
    beforeEach(() => {
      runSelectQuery = jest
        .spyOn(sqlWrapper, "runSelectQuery")
        .mockImplementation(() => 
          new Promise<Array<object>>((onResolve) => onResolve(objects))
        )
    })
    it("should return error", () => {
      return expect(target.selectPlayerDetailById(playerId))
        .rejects
        .toMatchObject({
          apiError: proto.PercussionApiError.ErrorCode.DB_ERROR,
          statusCode: 500
        });
    })
    afterEach(() => {
      jest.clearAllMocks();
    });
  })
})

describe("updateEntryByPlayer", () => {
  let runSingleQuery;
  const player = new proto.Player({
    id: "id",
    name: "name",
    icon: "icon",
  });
  const date = new Date()

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(() => 
        new Promise<number>((onResolve) => onResolve(1))
      );
  })
  it("should pass expected query", () => {
    const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT)
    return target.updateEntryByPlayer(player, date).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1)
      expect(runSingleQuery.mock.calls[0][0]).toBe(
        `UPDATE ${table.TABLE_NAME} ` +
        `SET ` +
        `${table.NAME}=${player.name},` +
        `${table.ICON}=${player.icon},` +
        `${table.UPDATED_DATE_TIME}=${formatDate}` +
        ` WHERE ${table.ID}=${player.id}`
      )
    });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
})

describe("updateEntryByPlayerDetail", () => {
  let runSingleQuery;
  const player = new proto.PlayerDetail({
    id: "id",
    name: "name",
    icon: "icon",
    introduction: "aaaaaaaaaaa",
  });
  const date = new Date()

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(() => 
        new Promise<number>((onResolve) => onResolve(1))
      );
  })
  it("should pass expected query", () => {
    const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT)
    return target.updateEntryByPlayerDetail(player, date).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1)
      expect(runSingleQuery.mock.calls[0][0]).toBe(
        `UPDATE ${table.TABLE_NAME} ` +
        `SET ` +
        `${table.NAME}=${player.name},` +
        `${table.ICON}=${player.icon},` +
        `${table.INTRODUCTION}=${player.introduction},` +
        `${table.UPDATED_DATE_TIME}=${formatDate}` +
        ` WHERE ${table.ID}=${player.id}`
      )
    });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
})

describe("updateMailOfEntry", () => {
  let runSingleQuery;
  const playerId = "id";
  const mail = "mail@mail.com";
  const date = new Date();

  beforeEach(() => {
    runSingleQuery = jest
      .spyOn(sqlWrapper, "runSingleQuery")
      .mockImplementation(() => 
        new Promise<number>((onResolve) => onResolve(1))
      );
  })
  it("should pass expected query", () => {
    const formatDate = dayjs(date).format(johnnyDb.DATE_TIME_FORMAT)
    return target.updateMailOfEntry(playerId, mail, date).then(() => {
      expect(runSingleQuery.mock.calls.length).toBe(1)
      expect(runSingleQuery.mock.calls[0][0]).toBe(
        `UPDATE ${table.TABLE_NAME} ` +
        `SET ` +
        `${table.MAIL}=${mail},` +
        `${table.UPDATED_DATE_TIME}=${formatDate}` +
        ` WHERE ${table.ID}=${playerId}`
      )
    });
  })
})