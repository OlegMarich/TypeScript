export default class ButtonController {
    constructor(minVal, maxVal) {
        this.minVal = minVal;
        this.maxVal = maxVal;
    }
    getRandomNumber() {
        console.log(this);
        console.log(this.minVal + Math.floor(Math.random() * (this.maxVal - this.minVal + 1)));
    }
}
//# sourceMappingURL=ButtonController.js.map