import { Router } from "express";

export function provideAreaCityRouter(): Router {
  const router = Router();
  // GET /suggestion/city?zipCode={zipCode}
  // router.get("/", (request, response) => );
  return router;
}
