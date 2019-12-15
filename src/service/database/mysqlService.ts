import * as mysql from "mysql";
import { User } from "../../model/user";
import { ApiError, ErrorCode } from "../../error/apiError";

const connectionParams = {
    host : process.env.MYSQL_HOST,
    user : process.env.TEST_DB_USER,
    password : process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME
};

export function addUser(
    user: User,
    mail: string,
    onSuccess: (res: object) => void,
    onError: (error: object) => void
) {
    const connection = mysql.createConnection(connectionParams);
    const query = `INSERT INTO test_table_01 VALUES (` +
        `'${user.id}'` +
        `,'${user.name}'` +
        `,'${user.photoUrl}'` +
        `,'${mail}'` +
        `)`;
    console.log(`query = ${query}`);
    connection.connect();
    connection.query(
        query,
        function (err, rows, fields) {
            if (err) {
                // Ref : error codes
                // https://github.com/mysqljs/mysql/blob/ad014c82b2cbaf47acae1cc39e5533d3cb6eb882/lib/protocol/constants/errors.js
                console.log(`errno - ${err.errno}`);
                if (err.errno == 1062) { // ER_DUP_ENTRY
                    onError(
                        new ApiError(
                            ErrorCode.USER_HAS_BEEN_ALREADY_REGISTERED,
                            `The mail address has already been registered`
                        )
                    )
                } else {
                    onError(
                        new ApiError(
                            ErrorCode.INVALID_FIREBASE_TOKEN,
                            `Invalid firebase token`
                        )
                    );
                }
            } else {
                onSuccess(rows);
            }
        }
    );
    connection.end();
}

export function getUsers(onSuccess: (res: object) => void) {
    const connection = mysql.createConnection(connectionParams);
    connection.connect();
    connection.query(
        'select * from test_table_01;',
        function (err, rows, fields) {
            if (err) {
                console.log('err: ' + err); 
            } else {
                onSuccess(rows);
            }
        }
    );
    connection.end();
}