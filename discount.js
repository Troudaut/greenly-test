import { DiscountOffer } from "./store";

export class NaturaliaDiscountOffer extends DiscountOffer {

  constructor(expiresIn, discountRateInPercent) {
    super("Naturalia", expiresIn, discountRateInPercent);
  }

}

export class VintedDiscountOffer extends DiscountOffer {

  constructor(expiresIn, discountRateInPercent) {
    super("Vinted", expiresIn, discountRateInPercent);
  }

}

export class IlekDiscountOffer extends DiscountOffer {

  constructor(expiresIn, discountRateInPercent) {
    super("Ilek", expiresIn, discountRateInPercent);
  }

}