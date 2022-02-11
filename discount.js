import { DiscountOffer } from "./store";

export class NaturaliaDiscountOffer extends DiscountOffer {
  constructor(expiresIn, discountRateInPercent) {
    super("Naturalia", expiresIn, discountRateInPercent);
  }

  applyDiscount() {
    if (this.discountInPercent < 50) {
      this.discountInPercent = this.discountInPercent + 1;
    }
    this.expiresIn = this.expiresIn - 1;
    if (this.expiresIn < 0 && this.discountInPercent < 50) {
      this.discountInPercent = this.discountInPercent + 1;
    }
  }
}

export class VintedDiscountOffer extends DiscountOffer {
  constructor(expiresIn, discountRateInPercent) {
    super("Vinted", expiresIn, discountRateInPercent);
  }

  applyDiscount() {
    if (this.discountInPercent < 50) {
      this.discountInPercent = this.discountInPercent + 1;
    }
    this.expiresIn = this.expiresIn - 1;
    if (this.expiresIn < 11 && this.discountInPercent < 50) {
      this.discountInPercent = this.discountInPercent + 1;
    }
    if (this.expiresIn < 6 && this.discountInPercent < 50) {
      this.discountInPercent = this.discountInPercent + 1;
    }
    if (this.expiresIn < 0) {
      this.discountInPercent = 0;
    }
  }
}

export class IlekDiscountOffer extends DiscountOffer {
  constructor(expiresIn, discountRateInPercent) {
    super("Ilek", expiresIn, discountRateInPercent);
  }

  applyDiscount() {
    // Do nothing
  }
}
