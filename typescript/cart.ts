// cart.ts
import { UniqueProduct, MultipleProduct } from "./product";

export class Cart {
  private items: (UniqueProduct | MultipleProduct)[] = [];

  public addItem(item: UniqueProduct | MultipleProduct): void {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem instanceof MultipleProduct) {
      // Если продукт уже существует и это MultipleProduct, увеличиваем количество
      existingItem.increaseQuantity(1);
    } else if (existingItem instanceof UniqueProduct) {
      // Если продукт уже существует и это UniqueProduct, ничего не делаем
      console.warn(`Item with id ${item.id} already exists in the cart.`);
    } else {
      // Если продукт новый, добавляем его в корзину
      this.items.push(item);
    }
  }

  public removeItem(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  public getItems(): (UniqueProduct | MultipleProduct)[] {
    return this.items;
  }

  public getTotalPrice(): number {
    return this.items.reduce((total, item) => {
      if (item instanceof MultipleProduct) {
        return total + item.price * item.quantity; // Учитываем количество для MultipleProduct
      }
      return total + item.price; // Уникальные продукты
    }, 0);
  }

  public getTotalPriceWithDiscount(discount: number): number {
    const total = this.getTotalPrice();
    return total - (total * discount) / 100;
  }
}
