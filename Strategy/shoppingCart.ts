import { PaymentStrategy } from "./paymentStrategy";

export class ShoppingCart {
  private payment: PaymentStrategy;
  constructor(payment: PaymentStrategy) {
    this.payment = payment;
  }
  setPaymentStrategy(payment: PaymentStrategy): void {
    this.payment = payment;
  }
  public checkout(amount: number): void {
    this.payment.pay(amount);
  }
}
