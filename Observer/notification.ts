import { Observer } from "./observer";
export class Notification implements Observer {
  public update(price: number): void {
    console.log(`Notification: Product price is now ${price} EGP`);
  }
}
