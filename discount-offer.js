const MIN_DISCOUNT_IN_PERCENT = 0;
const MAX_DISCOUNT_IN_PERCENT = 50;

export class DiscountOffer {
  constructor(partnerName, expiresIn, discountRateInPercent) {
    this.partnerName = partnerName;
    this.expiresIn = expiresIn;
    this.discountInPercent = discountRateInPercent;
  }

  applyDiscount() {
    if (this.canDecreaseDiscountInPercent()) {
      this.decreaseDiscountInPercent();
    }
    this.decreaseExpireIn();

    if (this.hasExpired() && this.canDecreaseDiscountInPercent()) {
      this.decreaseDiscountInPercent();
    }
  }

  canDecreaseDiscountInPercent() {
    return this.discountInPercent > MIN_DISCOUNT_IN_PERCENT;
  }

  decreaseDiscountInPercent(decrementValue = 1) {
    this.discountInPercent = Math.max(
      this.discountInPercent - decrementValue,
      MIN_DISCOUNT_IN_PERCENT
    );
  }

  canIncreaseDiscountInPercent() {
    return this.discountInPercent < MAX_DISCOUNT_IN_PERCENT;
  }

  increaseDiscountInPercent(incrementValue = 1) {
    this.discountInPercent = Math.min(
      this.discountInPercent + incrementValue,
      MAX_DISCOUNT_IN_PERCENT
    );
  }

  decreaseExpireIn() {
    this.expiresIn = this.expiresIn - 1;
  }

  hasExpired() {
    return this.expiresIn < 0;
  }
}

export class NaturaliaDiscountOffer extends DiscountOffer {
  constructor(expiresIn, discountRateInPercent) {
    super("Naturalia", expiresIn, discountRateInPercent);
  }

  applyDiscount() {
    if (this.canIncreaseDiscountInPercent()) {
      this.increaseDiscountInPercent();
    }
    this.decreaseExpireIn();
    if (this.hasExpired() && this.canIncreaseDiscountInPercent()) {
      this.increaseDiscountInPercent();
    }
  }
}

export class VintedDiscountOffer extends DiscountOffer {
  constructor(expiresIn, discountRateInPercent) {
    super("Vinted", expiresIn, discountRateInPercent);
  }

  applyDiscount() {
    if (this.canIncreaseDiscountInPercent()) {
      this.increaseDiscountInPercent();
    }
    this.decreaseExpireIn();
    if (this.expiresIn < 11 && this.canIncreaseDiscountInPercent()) {
      this.increaseDiscountInPercent();
    }
    if (this.expiresIn < 6 && this.canIncreaseDiscountInPercent()) {
      this.increaseDiscountInPercent();
    }
    if (this.hasExpired()) {
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

export class BackMarketDiscountOffer extends DiscountOffer {
  constructor(expiresIn, discountRateInPercent) {
    super("BackMarket", expiresIn, discountRateInPercent);
  }

  applyDiscount() {
    if (this.canDecreaseDiscountInPercent()) {
      this.decreaseDiscountInPercent(2);
    }
    this.decreaseExpireIn();
    if (this.hasExpired() && this.canDecreaseDiscountInPercent()) {
      this.decreaseDiscountInPercent(2);
    }
  }
}
