import * as mysql from "mysql";

const connectionParams = {
    host : process.env.MYSQL_HOST,
    user : process.env.TEST_DB_USER,
    password : process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME
};

export function addUser(
    name: string,
    mail: string,
    onSuccess: (res: object) => void,
    onError: (error: object) => void
) {
    const connection = mysql.createConnection(connectionParams);
    const query = `INSERT INTO test_table_01 VALUES (null, '${name}', '${mail}')`;
    console.log(`query = ${query}`);
    connection.connect();
    connection.query(
        query,
        function (err, rows, fields) {
            if (err) {
                onError(err);
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