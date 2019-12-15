import * as express from "express";
import * as bodyParser from "body-parser";
import * as mysqlService from "./service/database/mysqlService";
import { validateRegisterUserRequest } from "./service/register/registrationValidator";
import { registerUser } from "./service/register/registrationService";
import { signupUser } from "./service/user/signupUserService";
import { logApiRequest } from "./middleware/logger";
import * as admin from 'firebase-admin';

var serviceAccount = require("/tmp/johnny/johnny-app-dev-firebase-adminsdk-8q1im-6b2b072cc2.json");

// Initialize the default app
var defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://johnny-app-dev.firebaseio.com"
});
var defaultAuth = admin.auth();

const app = express();
var router = express.Router();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use(logApiRequest);

router.get("/", (req, res) => res.send("Hello World!!"));
// Example to test
// $ curl -XPOST http://localhost:3000/user -H "Content-Type:application/x-www-form-urlencoded" -d "name=user_c&mail=userc@mail.com" -w '%{http_code}\n'
router.post("/user", validateRegisterUserRequest, registerUser);

router.post("/user/signup", (req, res, next) => signupUser(defaultAuth, req, res, next));


// NOTE : validationのmiddlewareを作って、parameterチェックもmiddlewareでやるといいかも
router.get("/debug/users", (req, res) =>
  mysqlService.getUsers((result: object) => res.send(JSON.stringify(result)))
);

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
