import { Observer } from "./observer";

export class PriceAlert implements Observer {
  public update(price: number): void {
    console.log(`Price Alert: The price has changed to ${price}`);
  }
}
