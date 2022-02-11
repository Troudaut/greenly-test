export class DiscountOffer {
  constructor(partnerName, expiresIn, discountRateInPercent) {
    this.partnerName = partnerName;
    this.expiresIn = expiresIn;
    this.discountInPercent = discountRateInPercent;
  }

  applyDiscount() {
    if (this.discountInPercent > 0) {
      this.discountInPercent = this.discountInPercent - 1;
    }
    this.expiresIn = this.expiresIn - 1;
    if (this.expiresIn < 0 && this.discountInPercent > 0) {
      this.discountInPercent = this.discountInPercent - 1;
    }
  }
}

export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }
  updateDiscounts() {
    this.discountOffers.forEach(discountOffer => discountOffer.applyDiscount());

    return this.discountOffers;
  }
}
