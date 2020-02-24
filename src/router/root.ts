import { Router } from "express";
import { provideUserSignupRouter } from "./user/signup";
import { provideUserLoginRouter } from "./user/login";
import { provideUserProfileRouter } from "./user/profile";
import { provideAreaRouter } from "./area";
import admin = require("firebase-admin");

export function provideRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.use("/user/signup", provideUserSignupRouter(defaultAuth));
  router.use("/user/login", provideUserLoginRouter(defaultAuth));
  router.use("/user/profile", provideUserProfileRouter(defaultAuth));
  router.use("/area", provideAreaRouter());
  return router;
}
