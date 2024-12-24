export interface Product {
  id: string;
  price: number;
}

export class UniqueProduct implements Product {
  constructor(public id: string, public price: number) {}
}

export class MultipleProduct implements Product {
  constructor(
    public id: string,
    public price: number,
    public quantity: number = 1
  ) {}

  public increaseQuantity(amount: number): void {
    this.quantity += amount;
  }

  public decreaseQuantity(amount: number): void {
    this.quantity = Math.max(0, this.quantity - amount);
  }
}
