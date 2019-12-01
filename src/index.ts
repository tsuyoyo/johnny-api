import * as express from "express";
import * as bodyParser from "body-parser";
import * as mysqlService from "./service/mysqlService";
import * as userRegistrationService from "./service/userRegistrationService";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!!"));

// Example to test
// $ curl -XPOST http://localhost:3000/user -H "Content-Type:application/x-www-form-urlencoded" -d "name=user_c&mail=userc@mail.com"
app.post("/user", (req, res, next) =>
  userRegistrationService.addUser(req, res, next)
);
app.get("/debug/users", (req, res) =>
  mysqlService.getUsers((result: object) => res.send(JSON.stringify(result)))
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
