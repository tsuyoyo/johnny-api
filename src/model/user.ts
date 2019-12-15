export class User {
  constructor(id: string, name: string, photoUrl: string) {
    this.id = id;
    this.name = name;
    this.photoUrl = photoUrl;
  }
  readonly id: string;
  readonly name: string;
  readonly photoUrl: string;
}