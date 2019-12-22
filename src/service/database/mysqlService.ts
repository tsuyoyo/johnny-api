import * as mysql from "mysql";
import { User } from "../../proto/user_pb";
import { PercussionApiError } from "../../proto/error_pb";

const connectionParams = {
  host: process.env.MYSQL_HOST,
  user: process.env.TEST_DB_USER,
  password: process.env.TEST_DB_PASSWORD,
  database: process.env.TEST_DB_NAME
};

// TABLES
const USER_TABLE = "test_table_01";

function makeApiError(
  code: PercussionApiError.ErrorCodeMap[keyof PercussionApiError.ErrorCodeMap],
  message: string
): PercussionApiError {
  const apiError = new PercussionApiError();
  apiError.setMessage(message);
  apiError.setErrorcode(code);
  return apiError;
}

function runQuery(
  query: string,
  onQueryDone: (err, rows, fields) => void
): void {
  const connection = mysql.createConnection(connectionParams);
  connection.connect();

  console.log(`query - ${query}`);

  connection.query(query, onQueryDone);
  connection.end();
}

export function addUser(
  user: User,
  mail: string,
  onSuccess: (res: object) => void,
  onError: (error: PercussionApiError) => void
): void {
  const query =
    `INSERT INTO ${USER_TABLE} VALUES (` +
    `'${user.getId()}'` +
    `,'${user.getName()}'` +
    `,'${user.getPhoto()}'` +
    `,'${mail}'` +
    `)`;

  runQuery(query, (err, rows, fields) => {
    if (err) {
      // Ref : error codes
      // https://github.com/mysqljs/mysql/blob/ad014c82b2cbaf47acae1cc39e5533d3cb6eb882/lib/protocol/constants/errors.js
      console.log(`errno - ${err.errno}`);
      if (err.errno == 1062) {
        // ER_DUP_ENTRY
        onError(
          makeApiError(
            PercussionApiError.ErrorCode.USER_HAS_BEEN_ALREADY_REGISTERED,
            `The mail address has already been registered`
          )
        );
      } else {
        onError(
          makeApiError(
            PercussionApiError.ErrorCode.INVALID_FIREBASE_TOKEN,
            `Invalid firebase token`
          )
        );
      }
    } else {
      onSuccess(rows);
    }
  });
}

export function getUsers(onSuccess: (res: object) => void): void {
  runQuery("select * from test_table_01;", (err, rows, fields) => {
    if (err) {
      console.log("err: " + err);
    } else {
      onSuccess(rows);
    }
  });
}
