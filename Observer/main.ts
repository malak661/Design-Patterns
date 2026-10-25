import { Product } from "./product";
import { Notification } from "./notification";
import { PriceAlert } from "./priceAlert";
import { UIUpdater } from "./UIUpdater";

const product = new Product(100);
const notification = new Notification();
const priceAlert = new PriceAlert();
const uiUpdater = new UIUpdater();

product.addObserver(notification);
product.addObserver(priceAlert);
product.addObserver(uiUpdater);

product.setPrice(120);
