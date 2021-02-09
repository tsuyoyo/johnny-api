import { FirebaseUser } from "../firebase/verify";
import * as loginService from "../service/login";
import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export function login(
  request: proto.IPostLoginRequest,
  verifyToken: (token: string) => Promise<FirebaseUser>
): Promise<proto.IPostLoginResponse> {
  return loginService.login(request, verifyToken);
}
