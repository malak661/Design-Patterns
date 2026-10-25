import { PaymentStrategy } from "./paymentStrategy";

export class WalletPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} EGP using Wallet`);
  }
}
