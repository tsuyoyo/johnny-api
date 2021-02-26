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

export function runQuery(
  query: string,
  onQueryDone: (apiException: ApiException, rows, fields) => void
): void {
  console.log(`query - ${query}`);
  const connection = mysql.createConnection(connectionParams);
  connection.connect();
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log(`Database error - ${JSON.stringify(err)}`);
      onQueryDone(getApiExceptionForDbError(err), rows, fields);
    } else {
      onQueryDone(err, rows, fields);
    }
  });
  connection.end();
}

export function runSingleQuery(query: string): Promise<number> {
  return new Promise<number>((onResolve, onReject) => {
    runQuery(query, (err, rows) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(rows.length);
      }
    });
  });
}

export function runSelectQuery<T>(
  query: string,
  deserialize: (objects) => Array<T>
): Promise<Array<T>> {
  return new Promise<Array<T>>((onResolve, onReject) => {
    runQuery(query, (err, rows) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(deserialize(rows));
      }
    });
  });
}

// TODO : Support transaction
// https://tech.chakapoko.com/nodejs/mysql/promise.html
