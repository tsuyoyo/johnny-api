/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
import * as express from "express";
import * as bodyParser from "body-parser";
import * as admin from "firebase-admin";
import { provideRouter } from "./router/root";
import { verifyToken } from "./firebase/verify";
import { authenticate } from "./middleware/authentication";

import * as morgan from "morgan";

const serviceAccount = require("/tmp/johnny/johnny-app-dev-firebase-adminsdk-8q1im-6b2b072cc2.json");

// Initialize the default app
const defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://johnny-app-dev.firebaseio.com",
});
const defaultAuth = admin.auth();

const app = express();
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
app.use(
  "/",
  provideRouter(
    verifyToken(defaultAuth),
    authenticate(verifyToken(defaultAuth))
  )
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Example to test
// $ curl -XPOST http://localhost:3000/user -H "Content-Type:application/x-www-form-urlencoded" -d "name=user_c&mail=userc@mail.com" -w '%{http_code}\n'
// router.get("/", (req, res) => res.send("Hello World!!"));
