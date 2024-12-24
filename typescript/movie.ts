export class Movie {
  constructor(
    public id: string,
    public title: string,
    public director: string,
    public year: number,
    public price: number
  ) {}

  public getInfo(): string {
    return `${this.title} (${this.year}), directed by ${this.director}, Price: $${this.price}`;
  }
}
