export default class Roulette {
    constructor(_rouletteCellNumber, _minScoreValue, _maxScoreValue) {
        this._rouletteCellNumber = _rouletteCellNumber;
        this._minScoreValue = _minScoreValue;
        this._maxScoreValue = _maxScoreValue;
        this.scoresList = [];
        this.generateScoresList();
    }
    getRandomScore() {
        return (this._minScoreValue +
            Math.floor(Math.random() * (this._maxScoreValue - this._minScoreValue + 1)));
    }
    generateScoresList() {
        this.scoresList = [];
        for (let i = 0; i < this._rouletteCellNumber; i++) {
            this.scoresList.push(this.getRandomScore());
        }
    }
    printScoresList() {
        return this.scoresList;
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'string':
                return this.scoresList.join(', ');
            case 'number':
                return this._rouletteCellNumber;
            default:
                return this._rouletteCellNumber;
        }
    }
    getAverage() {
        const sum = this.scoresList.reduce((prevSum, el) => prevSum + el, 0);
        return Math.floor(sum / this.scoresList.length);
    }
    rotatteRoulette() {
        const randomIndex = Math.floor(Math.random() * this.scoresList.length);
        return this.scoresList[randomIndex];
    }
}
//# sourceMappingURL=Roulette.js.map