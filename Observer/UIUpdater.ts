import { Observer } from "./observer";
export class UIUpdater implements Observer {
  public update(price: number): void {
    console.log(`UI Updater: Displaying new price: ${price} EGP`);
  }
}
