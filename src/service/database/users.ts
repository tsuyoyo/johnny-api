import { User } from "../../proto/user_pb";
import { runQuery } from "./mysqlWrapper";

const USER_TABLE = "users";

export function addUser(user: User, mail: string): Promise<User> {
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
