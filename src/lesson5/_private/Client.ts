// Приклад. Створити клас «Клієнт»
// (ім’я – довільний доступ (відкрите поле),
// номер рахунку – тільки для читання,
// кількість грошей – контрольований доступ (і читання і запис))
export default class Client {
  #balance = 0;
  constructor(public name: string, readonly accountNumber: string) {}

  get Balance() {
    return this.#balance;
  }

  public addMoney(value: number) {
    if (value < 0) throw new Error('Сума має бути додатньою');
    this.#balance += value
  }

  public withdrawMoney(value: number) {
    if (value < 0) throw new Error('Сума має бути додатньою');
    if (value > this.#balance) throw new Error('Недостатньо коштів на рахунку');
    this.#balance -= value
  }
}
