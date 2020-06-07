import { Router } from "express";
import { provideUserSignupRouter } from "./user/signup";
import { provideUserLoginRouter } from "./user/login";
import { provideUserProfileRouter } from "./user/profile/profile";
import { provideUserCityRouter } from "./user/profile/city";
import { provideAreaCityRouter } from "./area/prefecture/city";
import { provideSuggetionRouter } from "./suggestion/city";
import admin = require("firebase-admin");

export function provideRouter(defaultAuth: admin.auth.Auth): Router {
  const router = Router();
  router.use("/user/signup", provideUserSignupRouter(defaultAuth));
  router.use("/user/login", provideUserLoginRouter(defaultAuth));
  router.use("/user", provideUserProfileRouter(defaultAuth));
  router.use("/user", provideUserCityRouter(defaultAuth));
  router.use("/area/prefecture", provideAreaCityRouter());
  router.use("/suggestion/city", provideSuggetionRouter());
  return router;
}
