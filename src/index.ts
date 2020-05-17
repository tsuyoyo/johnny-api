import * as express from "express";
import * as bodyParser from "body-parser";
import * as mysqlWrapper from "./database/mysqlWrapper";
import * as admin from "firebase-admin";
import { provideRouter } from "./router/root";

import * as morgan from "morgan";

const serviceAccount = require("/tmp/johnny/johnny-app-dev-firebase-adminsdk-8q1im-6b2b072cc2.json");

// Initialize the default app
const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://johnny-app-dev.firebaseio.com",
});
const defaultAuth = admin.auth();

const app = express();
const router = express.Router();
const port = 3000;

// Logger.
// https://qiita.com/mt_middle/items/543f83393c357ad3ab12
// https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  bodyParser.raw({
    inflate: true,
    limit: "100kb",
    type: "application/protobuf",
  })
);

// Example to test
// $ curl -XPOST http://localhost:3000/user -H "Content-Type:application/x-www-form-urlencoded" -d "name=user_c&mail=userc@mail.com" -w '%{http_code}\n'
// router.get("/", (req, res) => res.send("Hello World!!"));

app.use("/", provideRouter(defaultAuth));

// app.use("/", router);
// app.use("/user", provideUserRouter(defaultAuth));
// app.use("/area", provideAreaRouter());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
