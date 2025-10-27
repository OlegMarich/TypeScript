export default class Product {
  title: string;
  price: number;
  quantity: number;
  storePricePerDay: number;

  constructor(title: string, price: number, quantity: number, storePricePerDay: number) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.storePricePerDay = storePricePerDay;
  }
  getTotalPrice() {
    return this.price * this.quantity;
  }
  get TotalPrice() {
    return this.price * this.quantity;
  }
  // визначити вартість зберігання для заданої кількості днів
  getTotalStorePrice(daysNumber: number) {
    return this.storePricePerDay * daysNumber;
  }
  // зменшення ціни на вказану кількість відсотків
  reducePrice(percentageDiscount: number) {
    return (this.price *= 1 - percentageDiscount / 100);
  }

  // збільшення ціни на вказану кількість відсотків
  increasePrice(percentageIncrease: number) {
    return (this.price *= 1 + percentageIncrease / 100);
  }
  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case 'string':
        return `Product: ${this.title} - price:${this.price}`;
      case 'number':
        return this.price;
      default:
        return this.price;
    }
  }
  // toString() {
  //   return `Product: ${this.title} - price:${this.price}`;
  // }
}
