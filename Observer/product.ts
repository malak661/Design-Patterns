import { Observable } from "./observable";
import { Observer } from "./observer";
export class Product implements Observable {
  private price: number;
  private observers: Observer[] = [];
  constructor(price: number) {
    this.price = price;
  }
  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(
      (observeritem) => observeritem !== observer,
    );
  }
  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.price);
    }
  }
  public setPrice(price: number): void {
    this.price = price;
    this.notifyObservers();
  }
}
