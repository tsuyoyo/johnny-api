import * as express from "express";
import * as bodyParser from "body-parser";
import * as mysqlService from "./service/database/mysqlService";
import { logApiRequest } from "./middleware/logger";
import * as admin from "firebase-admin";
import { provideUserRouter } from "./router/user";

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

// Investigate logger.
// https://qiita.com/mt_middle/items/543f83393c357ad3ab12

app.use(bodyParser.urlencoded({ extended: false }));
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

// NOTE : validationのmiddlewareを作って、parameterチェックもmiddlewareでやるといいかも
router.get("/debug/users", (req, res) =>
  mysqlService.getUsers((result: object) => res.send(JSON.stringify(result)))
);

// Routers
app.use("/", router);
app.use("/user", provideUserRouter(defaultAuth));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
