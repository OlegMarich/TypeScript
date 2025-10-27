export default class ButtonController {
  constructor(readonly minVal: number, readonly maxVal: number) {}

  public getRandomNumber() {
    console.log(this);
    console.log(
      this.minVal + Math.floor(Math.random() * (this.maxVal - this.minVal + 1))
    );
  }
}
