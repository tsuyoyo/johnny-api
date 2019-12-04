export class JohnnyApiException {
  errorCode: Number;
  message: string;

  constructor(errorCode: Number, message: string) {
      this.errorCode = errorCode;
      this.message = message;
  }
}