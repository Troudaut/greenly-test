export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }
  updateDiscounts() {
    this.discountOffers.forEach(discountOffer => discountOffer.applyDiscount());

    return this.discountOffers;
  }
}
