import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  totalSum(discount: number): number {
    let bestOffer: number = 0;
    bestOffer = this.sum() * (1 - discount / 100);
    return bestOffer;
  }

  removeItem(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}
