import * as express from "express";
import * as mysql from "mysql";

const connectionParams = {
    host : process.env.MYSQL_HOST,
    user : process.env.TEST_DB_USER,
    password : process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME
};
const connection = mysql.createConnection(connectionParams);
console.log('connect with ' + JSON.stringify(connectionParams));
connection.connect();
connection.query(
    'select * from test_table_01;',
    function (err, rows, fields) {
        if (err) { console.log('err: ' + err); }
        console.log('count ' + JSON.stringify(rows));
    }
);
connection.end();

const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("Hello World!!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
