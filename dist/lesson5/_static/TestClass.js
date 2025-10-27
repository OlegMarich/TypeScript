var _a;
class TestClass {
    constructor(valueOne, valTwo) {
        this.valueOne = valueOne;
        this.valTwo = valTwo;
        _a.objectNumber++;
    }
    static showObjectNumber() {
        console.log(this.objectNumber);
    }
}
_a = TestClass;
(() => {
    _a.objectNumber = 0;
})();
export default TestClass;
//# sourceMappingURL=TestClass.js.map