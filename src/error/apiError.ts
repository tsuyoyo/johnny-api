export class ApiError {
  errorCode: Number;
  message: string;

  constructor(errorCode: Number, message: string = "") {
      this.errorCode = errorCode;
      this.message = message;
  }
}

export enum ErrorCode {
  NO_TOKEN = 100,
  INVALID_FIREBASE_TOKEN = 101,
  USER_HAS_BEEN_ALREADY_REGISTERED = 102,
}