export default class TestClass {
  static objectNumber: number;
  static {
    this.objectNumber = 0;
  }
  constructor(public valueOne: number, public valTwo: number) {
    TestClass.objectNumber++;
  }
  static showObjectNumber() {
    console.log(this.objectNumber);
  }
}
