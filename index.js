import fs from "fs";
import {
  DiscountOffer,
  BackMarketDiscountOffer,
  IlekDiscountOffer,
  NaturaliaDiscountOffer,
  VintedDiscountOffer
} from "./discount-offer";
import { Store } from "./store";

const discountOffers = [
  new DiscountOffer("Velib", 20, 30),
  new NaturaliaDiscountOffer(10, 5),
  new VintedDiscountOffer(5, 40),
  new IlekDiscountOffer(15, 40),
  new BackMarketDiscountOffer(3, 29)
];
const store = new Store(discountOffers);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(store.updateDiscounts()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.join("\n"), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
