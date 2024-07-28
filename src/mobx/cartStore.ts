// stores/CartStore.ts

import { Product } from "@/api/product/interfaces";
import { autorun, makeAutoObservable, toJS } from "mobx";

class CartStore {
  items: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  isItemExists(item: Product) {
    return this.items.find((i) => i.id === item.id) != null;
  }
  addItem(newItem: Product) {
    this.items = [...this.items, newItem];
  }
  removeItem(itemId: string) {
    this.items = [...this.items.filter((item) => item.id !== itemId)];
  }
  updateItem(item: Product) {
    this.items = [...this.items.map((i) => (i.id === item.id ? item : i))];
  }
}

autorun(() => {
  // console.log(toJS(CartStore.items));
});
const cartStore = new CartStore();
export default cartStore;
