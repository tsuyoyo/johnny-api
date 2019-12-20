export function logApiRequest(req, res, next) {
  console.log("Time:", Date.now());
  next();
}
