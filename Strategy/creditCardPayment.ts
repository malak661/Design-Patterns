import { PaymentStrategy } from "./paymentStrategy";
export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} EGP using Credit Card`);
  }
}
