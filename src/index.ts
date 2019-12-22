import * as express from "express";
import * as bodyParser from "body-parser";
import * as mysqlService from "./service/database/mysqlService";
import { getRequestType } from "./service/common/requestDataType";
import { logApiRequest } from "./middleware/logger";
import { signupUser } from "./service/user/signupUserService";
import * as admin from "firebase-admin";
import { RequestWrapper } from "./service/common/requestWrapper";
import { ResponseWrapper } from "./service/common/responseWrapper";
import { User } from "./proto/user_pb";
import { SignupUserRequest, SignupUserResponse } from "./proto/userService_pb";

const serviceAccount = require("/tmp/johnny/johnny-app-dev-firebase-adminsdk-8q1im-6b2b072cc2.json");

// Initialize the default app
const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://johnny-app-dev.firebaseio.com"
});
const defaultAuth = admin.auth();

const app = express();
const router = express.Router();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.raw({
    inflate: true,
    limit: "100kb",
    type: "application/protobuf"
  })
); // For protobuf

router.use(logApiRequest);

// Example to test
// $ curl -XPOST http://localhost:3000/user -H "Content-Type:application/x-www-form-urlencoded" -d "name=user_c&mail=userc@mail.com" -w '%{http_code}\n'
router.get("/", (req, res) => res.send("Hello World!!"));

router.post("/user/signup", (req, res) => {
  signupUser(
    defaultAuth,
    new RequestWrapper<SignupUserRequest>(
      req,
      getRequestType(req),
      SignupUserRequest.deserializeBinary,
      (json: object) => {
        // TODO : ちゃんとする
        const userRequest = new SignupUserRequest();
        return userRequest;
        // const user = new User();
        // user.setId(json["aa"]);
        // return user;
      }
    ),
    new ResponseWrapper<SignupUserResponse>(res, getRequestType(req))
  );
});

// NOTE : validationのmiddlewareを作って、parameterチェックもmiddlewareでやるといいかも
router.get("/debug/users", (req, res) =>
  mysqlService.getUsers((result: object) => res.send(JSON.stringify(result)))
);

app.use("/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
