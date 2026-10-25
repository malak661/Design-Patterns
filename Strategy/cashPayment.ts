import { PaymentStrategy } from "./paymentStrategy";

export class CashPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} EGP using Cash`);
  }
}
