import * as mysql from "mysql";
import { ApiException } from "../error/apiException";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

const connectionParams = {
  host: process.env.MYSQL_HOST,
  user: process.env.TEST_DB_USER,
  password: process.env.TEST_DB_PASSWORD,
  database: process.env.TEST_DB_NAME,
  charset: "utf8_general_ci",
};

// Ref : error codes from sqlite.
// https://github.com/mysqljs/mysql/blob/ad014c82b2cbaf47acae1cc39e5533d3cb6eb882/lib/protocol/constants/errors.js
const ER_DUP_ENTRY = 1062;

function mapApiErrorCodeWithDbError(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any
): proto.PercussionApiError.ErrorCode {
  let errorCode: proto.PercussionApiError.ErrorCode;
  if (err.errno == ER_DUP_ENTRY) {
    errorCode =
      proto.PercussionApiError.ErrorCode.USER_HAS_BEEN_ALREADY_REGISTERED;
  } else {
    errorCode = proto.PercussionApiError.ErrorCode.DB_ERROR;
  }
  return errorCode;
}

function getErrorMessage(
  errorCode: proto.PercussionApiError.ErrorCode
): string {
  switch (errorCode) {
    case proto.PercussionApiError.ErrorCode.USER_HAS_BEEN_ALREADY_REGISTERED:
      return "このアカウントは登録済みです。Loginしてください。";
    default:
      return "データベースエラーが発生しました。再度時間を置いて試してください。";
  }
}

function getApiExceptionForDbError(error: any): ApiException {
  const errorCode = mapApiErrorCodeWithDbError(error);
  const errorMessage = getErrorMessage(errorCode);
  return new ApiException(errorCode, errorMessage, 403);
}

// TODO : https://stackoverflow.com/a/25130835 Escape!!
export function runQuery(
  query: string,
  values: any,
  connection: mysql.Connection,
  onQueryDone: (apiException: ApiException, rows, fields) => void
): void {
  // console.log(`query - ${query}`);
  connection.query(query, values, (err, rows, fields) => {
    if (err) {
      console.log(`Database error - ${JSON.stringify(err)}`);
      onQueryDone(getApiExceptionForDbError(err), rows, fields);
    } else {
      onQueryDone(null, rows, fields);
    }
  });
}

function doRunSingleQuery(
  query: string,
  values: any,
  connection: mysql.Connection,
  onSuccess,
  onError
) {
  runQuery(query, values, connection, (err, rows) => {
    if (err) {
      onError(err);
    } else {
      onSuccess(rows.length);
    }
  });
}

function doRunSelectQuery(
  query: string,
  values: any,
  connection: mysql.Connection,
  onSuccess,
  onError
) {
  runQuery(query, values, connection, (err, rows) => {
    if (err) {
      onError(err);
    } else {
      onSuccess(rows);
    }
  });
}

export function runSingleQuery(query: string, values: any): Promise<number> {
  const connection = mysql.createConnection(connectionParams);
  return new Promise<number>((onResolve, onReject) => {
    connection.connect();
    doRunSingleQuery(query, values, connection, onResolve, onReject);
  }).finally(() => connection.end());
}

export function runSingleQueryOnConnection(
  query: string,
  values: any,
  connection: mysql.Connection
): Promise<number> {
  return new Promise<number>((onResolve, onReject) =>
    doRunSingleQuery(query, values, connection, onResolve, onReject)
  );
}

export function runSelectQuery(query: string, values: any): Promise<Array<object>> {
  const connection = mysql.createConnection(connectionParams);
  return new Promise<Array<object>>((onResolve, onReject) => {
    connection.connect();
    doRunSingleQuery(query, values, connection, onResolve, onReject);
  }).finally(() => connection.end());
}

export function runSelectQueryOnConnection(
  query: string,
  values: any,
  connection: mysql.Connection
): Promise<Array<object>> {
  return new Promise<Array<object>>((onResolve, onReject) =>
    doRunSelectQuery(query, values, connection, onResolve, onReject)
  );
}

export function queryInTransaction(proceed: (connection) => Promise<void>) {
  const connection = mysql.createConnection(connectionParams);
  return new Promise<void>((onResolve, onReject) => {
    connection.connect();
    connection.beginTransaction((err) => {
      if (err) {
        onReject(err);
      } else {
        proceed(connection).then(() => onResolve());
      }
    });
  }).finally(() => connection.end());
}

export function commitTransaction(connection: mysql.Connection): Promise<void> {
  return new Promise<void>((onResolve, onReject) => {
    connection.commit((err) => {
      if (err) {
        onReject(err);
      } else {
        onResolve();
      }
    });
  });
}

export function rollbackTransaction(
  connection: mysql.Connection
): Promise<void> {
  return new Promise<void>((onResolve, onReject) => {
    connection.rollback((err) => {
      if (err) {
        onReject(err);
      } else {
        onResolve();
      }
    });
  });
}
