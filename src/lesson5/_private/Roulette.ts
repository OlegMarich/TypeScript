export default class Roulette {
  public scoresList: number[] = [];

  constructor(
    private _rouletteCellNumber: number,
    private _minScoreValue: number,
    private _maxScoreValue: number,
  ) {
    this.generateScoresList();
  }
  private getRandomScore() {
    return (
      this._minScoreValue +
      Math.floor(Math.random() * (this._maxScoreValue - this._minScoreValue + 1))
    );
  }
  private generateScoresList() {
    this.scoresList = [];
    for (let i = 0; i < this._rouletteCellNumber; i++) {
      this.scoresList.push(this.getRandomScore());
    }
  }
  public printScoresList() {
    return this.scoresList;
  }

  public [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case 'string':
        return this.scoresList.join(', ');
      case 'number':
        return this._rouletteCellNumber;
      default:
        return this._rouletteCellNumber;
    }
  }

  public getAverage() {
    const sum = this.scoresList.reduce((prevSum, el) => prevSum + el, 0);
    return Math.floor(sum / this.scoresList.length);
  }

  public rotatteRoulette() {
    const randomIndex = Math.floor(Math.random() * this.scoresList.length);
    return this.scoresList[randomIndex];
  }
}
