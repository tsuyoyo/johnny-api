import { runQuery } from "./mysqlWrapper";
import { ApiException } from "../error/apiException";
import { pj } from "../proto/compiled";
import proto = pj.sakuchin.percussion.proto;
import User = proto.User;

const USER_TABLE = "users";

export function insertUser(user: User, mail: string): Promise<User> {
  return new Promise<User>((onResolve, onReject) => {
    const query =
      `INSERT INTO ${USER_TABLE} VALUES (` +
      `'${user.id}'` +
      `,'${user.name}'` +
      `,'${user.photo}'` +
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
  user.id = userObj["id"];
  user.name = userObj["name"];
  user.photo = userObj["photo_url"];
  return user;
}

function getNotFoundError(userId: string): ApiException {
  return new ApiException(
    proto.PercussionApiError.ErrorCode.DB_ERROR,
    `User id=${userId} is not found`,
    404
  );
}

export function selectUserById(userId: string): Promise<User> {
  return new Promise<User>((onResolve, onReject) => {
    const query = `SELECT * FROM ${USER_TABLE} WHERE id="${userId}"`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runQuery(query, (err, rows, _fields) => {
      console.log(`selectUserById - ${rows.length}`);
      if (err) {
        onReject(err);
      } else if (rows.length > 0) {
        console.log(`selectUserById - onSelectUser`);
        onResolve(getUserFromObj(rows[0]));
      } else {
        onReject(getNotFoundError(userId));
      }
    });
  });
}
