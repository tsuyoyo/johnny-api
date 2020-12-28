import { Router } from "express";
import { provideUserSignupRouter } from "./user/signup";
import { provideUserLoginRouter } from "./user/login";
import { provideUserProfileRouter } from "./user/profile/profile";
import { provideUserCityRouter } from "./user/profile/city";
import { provideAreaCityRouter } from "./area/prefecture/city";
import { provideSuggetionRouter } from "./suggestion/city";
import { FirebaseUser } from "../firebase/verify";

export function provideRouter(
  verifyToken: (token: string) => Promise<FirebaseUser>,
  authenticate: (Request, Response, NextFunction) => void
): Router {
  const router = Router();
  router.use("/user/signup", provideUserSignupRouter(verifyToken));
  router.use("/user/login", provideUserLoginRouter(verifyToken));
  router.use("/user", provideUserProfileRouter(authenticate));
  router.use("/user", provideUserCityRouter(authenticate));
  router.use("/area/prefecture", provideAreaCityRouter());
  router.use("/suggestion/city", provideSuggetionRouter());
  return router;
}
