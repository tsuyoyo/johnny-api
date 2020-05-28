import { Router } from "express";


export function provideAreaCityRouter(): Router {
  const router = Router();
  // GET /area/city?zipCode=xxxxxxx
  // router.get("/", (request, response) => {
  //   const zipCode = request.query.zipCode;
  //   if (!zipCode) {
  //   }
  // });
  return router;
}
