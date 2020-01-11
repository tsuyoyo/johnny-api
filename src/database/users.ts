import { User } from "../proto/user_pb";
import { runQuery } from "./mysqlWrapper";
import { ApiException } from "../error/apiException";
import { PercussionApiError } from "../proto/error_pb";

const USER_TABLE = "users";

export function insertUser(user: User, mail: string): Promise<User> {
  return new Promise<User>((onResolve, onReject) => {
    const query =
      `INSERT INTO ${USER_TABLE} VALUES (` +
      `'${user.getId()}'` +
      `,'${user.getName()}'` +
      `,'${user.getPhoto()}'` +
      `,'${mail}'` +
      `)`;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, _rows, _fields) => {
      if (err) {
        onReject(err);
      } else {
        onResolve(user);
      }
    });
  });
}

function getUserFromObj(userObj: object): User {
  const user = new User();
  user.setId(userObj["id"]);
  user.setName(userObj["name"]);
  user.setPhoto(userObj["photo"]);
  return user;
}

function getNotFoundError(userId: string): ApiException {
  return new ApiException(
    PercussionApiError.ErrorCode.DB_ERROR,
    `User id=${userId} is not found`,
    404
  );
}

export function selectUserById(userId: string): Promise<User> {
  return new Promise<User>((onResolve, onReject) => {
    const query = `SELECT * FROM ${USER_TABLE} WHERE id="${userId}"`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      if (err) {
        onReject(err);
      } else if (rows.length > 0) {
        onResolve(getUserFromObj(rows[0]));
      } else {
        onReject(getNotFoundError(userId));
      }
    });
  });
}
