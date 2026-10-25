import { ShoppingCart } from "./shoppingCart";
import { CreditCardPayment } from "./creditCardPayment";
import { CashPayment } from "./cashPayment";
import { WalletPayment } from "./walletPayment";

const paymentStrategy = new WalletPayment();

const cart = new ShoppingCart(paymentStrategy);

cart.checkout(500);

cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout(1000);

cart.setPaymentStrategy(new CashPayment());
cart.checkout(2000);
