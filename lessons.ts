// ======================= 2. Методи та властивості, які застосовуються у всіх задачах ======================
// Метод / Властивість    Опис	Приклад
// getFullYear()	        повертає рік	now.getFullYear()
// getMonth()	            повертає місяць (0–11)	now.getMonth() + 1
// getDate()	            день місяця	now.getDate()
// Math.random()	        випадкове число (0–1)	Math.floor(Math.random()*10)
// Math.pow(x,y)           піднесення до степеня	Math.pow(2,3) → 8
// Math.PI                 константа π (3.14159)	Math.PI * r**2
// Array.push()	          додати елемент	arr.push(val)
// Array.includes()	      перевірити наявність	days.includes(day)
// Array.filter()	        фільтрація	arr.filter(x => x > 0)
// Array.map()	          трансформація	arr.map(x => x*2)
// Array.forEach()	        ітерація по масиву	arr.forEach(d => ...)
// Object.entries()	      перетворення об’єкта у пари [key,value]	Object.entries(obj)
// Date()	                створення дати	new Date()

// ==================== Урок 1: TypeScript — Шпаргалка ====================

// ---------- 1. Змінні та базові типи ----------
const userName: string = prompt('User name') ?? 'Гість';
document.write(`Hello ${userName}`);

const age: number = parseInt(prompt('Age = ') ?? '0');
const minAge = 17;
if (age > minAge) document.write(`Hello ${userName}`);
else document.write('Denied!');

// Приклади типів
let title: string;
let pages: number;
let isPublished: boolean;

let isAdmin: boolean = false;
let empty: null = null;
let notAssigned: undefined = undefined;
let id: symbol = Symbol('uniqueId');
let bigNumber: bigint = 9007199254740993n;

// ---------- 2. Обчислення ----------
let a = parseFloat(prompt('a=')!);
let b = parseFloat(prompt('b=')!);
let c = parseFloat(prompt('c=')!);
let perimeter = a + b + c;
document.write(perimeter.toString());

// ---------- 3. Масиви ----------
let values: (string | number | object)[] = [];
values.push('Hello', 5, {name: 'Anna'});
console.log(`Довжина масиву: ${values.length}`);

// ---------- 4. try..catch ----------
try {
  throw 'Помилка'; // або throw 404
} catch (err) {
  if (typeof err === 'string') console.log(`Помилка: ${err}`);
  else if (typeof err === 'number') console.log(`Код помилки: ${err}`);
}

// ---------- 5. Union типи ----------
const nameInput: string | null = prompt('User name');
if (nameInput) document.write(`Привіт! У твоєму імені ${nameInput.length} букв`);
else document.write('Bye!');

let stringCount = 0,
  numberCount = 0;
let val2: number | string;
for (let i = 0; i < 10; i++) {
  val2 = Math.random() > 0.5 ? 7 : 'ok';
  if (typeof val2 === 'string') stringCount++;
  else numberCount++;
}
document.write(`stringCount=${stringCount}, numberCount=${numberCount}, last value=${val2}`);

// ---------- 6. Literal типи ----------
let gender: 'male' | 'female';
let prefix: 'Mr' | 'Ms';
const userAns = prompt('Gender (m/f)')!;
gender = userAns === 'm' ? 'male' : 'female';
prefix = gender === 'male' ? 'Mr' : 'Ms';
document.write(`Hello ${prefix} ${userName}`);

let statusTitle: 'success' | 'error';
let statusNum = parseInt(prompt('Status')!);
statusTitle = statusNum >= 200 && statusNum <= 299 ? 'success' : 'error';
document.write(statusTitle);

// ---------- 7. Валюти та конвертація ----------
let amountUAH = parseFloat(prompt('Введіть суму в UAH')!);
let currency: 'USD' | 'EUR' | 'UAH' = prompt('Введіть валюту (USD/EUR/UAH)') as any;
const USD_RATE = 42,
  EUR_RATE = 48;
let result =
  currency === 'USD' ? amountUAH / USD_RATE : currency === 'EUR' ? amountUAH / EUR_RATE : amountUAH;
document.write(result);

// ---------- 8. void ----------
function sayHello(): void {
  alert('Hello');
}
function printDate(): void {
  console.log(new Date());
}
function add(val1: number, val2: number): number {
  return val1 + val2;
}

// ---------- 9. Unknown ----------
let val: unknown;
const randNum = Math.floor(Math.random() * 4);
switch (randNum) {
  case 1:
    val = 'Hello';
    break;
  case 2:
    val = 7;
    break;
  case 3:
    val = {p1: 11, p2: 22};
    break;
}
if (typeof val === 'string') console.log(`Довжина рядка: ${val.length}`);
else if (typeof val === 'number') console.log(`Квадрат числа: ${val * val}`);
else if (typeof val === 'object' && val !== null && 'name' in val)
  console.log(`Привіт, ${(val as any).name}`);
else console.log('Невідомий тип даних');

// ======================= Lesson 2 — TypeScript Utility / Reference =======================

// ---------- 1. Never / Виключення ----------
export function throwError(message: string): never {
  throw new Error(message);
}

// ---------- 2. Overloading / Перевантаження ----------
export function getLastTyped(value: number): number;
export function getLastTyped(value: string): string;
export function getLastTyped(value: number | string): number | string {
  const strValue = value.toString();
  const last = strValue[strValue.length - 1];
  return typeof value === 'number' ? Number(last) : last;
}

// ---------- 3. Enum ----------
export enum Gender {
  Male = 'male',
  Female = 'female',
}
export enum Reward {
  Gold = 'Золота медаль',
  Silver = 'Срібна медаль',
  Bronze = 'Бронзова медаль',
  Diploma = 'Грамота',
}
export enum Currency {
  USD = 'usd',
  EUR = 'eur',
  UAH = 'uah',
}

// ---------- 4. Array & Random ----------
export function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---------- 5. Tuple ----------
export type Marker = [number, number, string]; // [lat, long, city]

// ---------- 6. Date ----------
export function getCurrentDateString(): string {
  const now = new Date();
  return `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
}

// ---------- 7. Reward Handling ----------
export function handleReward(reward: Reward): string {
  switch (reward) {
    case Reward.Gold:
      return 'Вітаємо! Ви отримали золоту медаль!';
    case Reward.Silver:
      return 'Чудово! Ви отримали срібну медаль!';
    case Reward.Bronze:
      return 'Добре! Ви отримали бронзову медаль!';
    case Reward.Diploma:
      return 'Вітаємо! Ви отримали грамоту!';
    default:
      const _exhaustive: never = reward;
      throwError(`Невідомий тип нагороди: ${_exhaustive}`);
  }
}

// ---------- 8. Currency Conversion ----------
export function convertCurrency(amountUAH: number, currency: Currency): number {
  const USD_RATE = 42,
    EUR_RATE = 48;
  switch (currency) {
    case Currency.USD:
      return amountUAH / USD_RATE;
    case Currency.EUR:
      return amountUAH / EUR_RATE;
    case Currency.UAH:
      return amountUAH;
    default:
      const _exhaustive: never = currency;
      throwError('Некоректна валюта!');
  }
}

// ---------- 9. Helper Functions ----------
export function parseNumber(input: string | null, fieldName = 'Значення'): number {
  if (!input) throwError(`${fieldName} не введене`);
  const num = Number(input);
  if (isNaN(num)) throwError(`${fieldName} має бути числом`);
  return num;
}

// ---------- 10. 2D Game Field ----------
export type CellType = 0 | 1 | 'block';
export type GameField = CellType[][];

// ==================== Урок 3: Objects / Розширений конспект ====================

// ---------- 1. Типи та інтерфейси ----------
type ExampleType = {id: number; name: string};
interface ExampleInterface {
  id: number;
  name: string;
}

// ---------- 2. Розширення інтерфейсів ----------
interface IPoint2D {
  x: number;
  y: number;
}
interface IPoint3D extends IPoint2D {
  z: number;
}

// ---------- 3. Інтерактивне створення Point3D ----------
function getPoint3D(min = -10, max = 10): IPoint3D {
  const axisX = parseNumber(prompt(`Введіть X (${min}…${max})`), 'X');
  const axisY = parseNumber(prompt(`Введіть Y (${min}…${max})`), 'Y');
  const axisZ = parseNumber(prompt(`Введіть Z (${min}…${max})`), 'Z');
  return {x: axisX, y: axisY, z: axisZ};
}

// ---------- 4. Функції з this ----------
function checkValue(this: {minValue: number}, value: number): boolean {
  return this.minValue <= value;
}

// ---------- 5. Declaration Merging ----------
interface IBook {
  title: string;
}
interface IBook {
  author: string;
}

// ---------- 6. Augmentation ----------
interface Window {
  appName: string;
}
window.appName = 'My App';

// ---------- 7. Розширення об’єктів ----------
interface Product {
  title: string;
  price: number;
}
interface FoodProduct extends Product {
  expirationDate: Date;
}

// ---------- 8. Optional & Readonly ----------
interface IUser {
  readonly id: string;
  name: string;
  email: string;
  phone?: string;
}

// ---------- 9. Discriminated Union ----------
type Shape =
  | {figure: 'circle'; radius: number}
  | {figure: 'square'; side: number}
  | {figure: 'rectangle'; width: number; height: number};

function getArea(shape: Shape): number {
  switch (shape.figure) {
    case 'circle':
      return Math.PI * Math.pow(shape.radius, 2);
    case 'square':
      return Math.pow(shape.side, 2);
    case 'rectangle':
      return shape.width * shape.height;
    default:
      const _ac: never = shape;
      throwError(`Невідомий тип фігури: ${_ac}`);
  }
}

// ---------- 10. User-defined Type Guards ----------
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isProduct(value: unknown): value is Product {
  return !!value && typeof value === 'object' && 'title' in value && 'price' in value;
}

// ---------- 11. Satisfies ----------
const products = [
  {id: 1, name: 'Book', price: 100},
  {id: 2, name: 'Pen', price: 10},
] satisfies Product[];

// ---------- 12. Складні типи (Перетини та об’єднання) ----------
type Person = {name: string; id: number};
type Manager = {department: string};
type Engineer = {skills: string[]};
type Intern = {mentor: string};
type WorkType = {status: 'fullTime' | 'partTime'};

type CompanyEmployee = (Manager | Engineer | Intern) & Person & WorkType;

// Інтерактивне створення співробітника:
function createEmployee(): CompanyEmployee {
  const name = prompt('Ім’я співробітника') ?? 'Невідомо';
  const id = parseNumber(prompt('ID'));
  const status =
    (prompt('Тип роботи (fullTime/partTime)') as 'fullTime' | 'partTime') ?? 'fullTime';
  const role = prompt('Категорія (manager/engineer/intern)')?.toLowerCase();

  switch (role) {
    case 'manager':
      return {name, id, status, department: prompt('Вкажіть відділ') ?? 'IT'};
    case 'engineer':
      return {name, id, status, skills: (prompt('Вкажіть навички через кому') ?? '').split(',')};
    case 'intern':
      return {name, id, status, mentor: prompt('Ім’я ментора') ?? 'Mentor'};
    default:
      const _err: never = role as never;
      throwError(`Невідома роль: ${_err}`);
  }
}

// ==================== Додаткові типи та функції з уроку 3 ====================

// ---------- 13. Calendar Event (Задача 3.1_3) ----------
type Meeting = {participants: string};
type Deadline = {dueDate: string};
type Reminder = {note: string};
type EventImportance = {mandatory: boolean; optional: boolean};

type CalendarEvent = (Meeting | Deadline | Reminder) & EventImportance;

// ---------- 14. Shop Product (Задача 3.1_4) ----------
type BookProduct = {author: string; price: number};
type ElectronicsProduct = {warranty: string; price: number};
type ClothesProduct = {size: number | string; price: number};

type ProductType = BookProduct | ElectronicsProduct | ClothesProduct;
type ProductPriceStatus =
  | {onSale: true; regularPrice?: false}
  | {onSale?: false; regularPrice: true};

type ShopProduct = ProductType & ProductPriceStatus & {basePrice: number; finalPrice: number};

// ---------- 15. LocalStorage Type Guard (Задача 3.1_5) ----------
type ProductFromStorage = {title: string; price: number};

function isStoredProduct(obj: unknown): obj is ProductFromStorage {
  return !!obj && typeof obj === 'object' && 'title' in obj && 'price' in obj;
}

// ---------- 16. Ticket Type & Type Guards (Задача 3.1_6) ----------
type Ticket = {
  destination: string;
  price: number;
  passengerName: string;
  date: string;
};

function isTicket(obj: unknown): obj is Ticket {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'destination' in obj &&
    'price' in obj &&
    'passengerName' in obj &&
    'date' in obj
  );
}

function assertTicket(obj: unknown): asserts obj is Ticket {
  if (!isTicket(obj)) throw new Error('Об’єкт не є дійсним квитком!');
}

// ---------- 17. Student Journal & Grade Manager (Задача 3.1_7) ----------
type StudentJournal = {math: number[]; physics: number[]; chemistry: number[]};

type GradeManager = StudentJournal & {
  getAverage: () => number;
  getMax: () => number;
};

function createGradeManager(): GradeManager {
  const math = (prompt('Введіть оцінки з математики через кому') ?? '')
    .split(',')
    .map((s) => parseFloat(s.trim()))
    .filter((n) => !isNaN(n));
  const physics = (prompt('Введіть оцінки з фізики через кому') ?? '')
    .split(',')
    .map((s) => parseFloat(s.trim()))
    .filter((n) => !isNaN(n));
  const chemistry = (prompt('Введіть оцінки з хімії через кому') ?? '')
    .split(',')
    .map((s) => parseFloat(s.trim()))
    .filter((n) => !isNaN(n));

  return {
    math,
    physics,
    chemistry,
    getAverage() {
      const all = [...this.math, ...this.physics, ...this.chemistry];
      return all.length > 0 ? all.reduce((a, b) => a + b, 0) / all.length : 0;
    },
    getMax() {
      const all = [...this.math, ...this.physics, ...this.chemistry];
      return all.length > 0 ? Math.max(...all) : 0;
    },
  };
}

/* ================================================================
   УРОК 5.1 — ТЕОРІЯ НА ОСНОВІ ПРИКЛАДІВ
   ================================================================

   Еталонні класи:
   - Product
   - Client
   - Roulette
   - ButtonController

   Тема: Об’єктно-орієнтоване програмування в TypeScript.
   ================================================================
*/

/* ================================================================
   1. Поняття класу в TypeScript
   ---------------------------------------------------------------
   Клас — це шаблон для створення об’єктів з однаковими властивостями
   та методами. Описує структуру даних і поведінку об’єкта.
=================================================================== */

class Example {
  property: string;
  constructor(property: string) {
    this.property = property;
  }
  show(): void {
    console.log(this.property);
  }
}

/* ================================================================
   2. Модифікатори доступу
   ---------------------------------------------------------------
   - public — властивість або метод доступні звідусіль.
   - private — доступ лише всередині класу.
   - protected — доступ у класі та його нащадках.
   - readonly — змінна доступна лише для читання.
   - #private — сучасний синтаксис приватного поля (ES2022+).
=================================================================== */

class AccessExample {
  public name: string;
  private id: number;
  readonly createdAt: Date;
  #secretCode: string;

  constructor(name: string, id: number, secretCode: string) {
    this.name = name;
    this.id = id;
    this.createdAt = new Date();
    this.#secretCode = secretCode;
  }

  public getSecretCode(): string {
    return this.#secretCode;
  }
}

/* ================================================================
   3. Робота конструктора
   ---------------------------------------------------------------
   Конструктор викликається автоматично при створенні нового об’єкта.
   Призначений для ініціалізації властивостей.
=================================================================== */

class Product {
  constructor(
    public title: string,
    public price: number,
    public quantity: number,
    public storePricePerDay: number,
    public daysNumber: number,
    public percentageDiscount: number
  ) {}

  getTotalPrice(): number {
    const base = this.price * this.quantity;
    const discount = (base * this.percentageDiscount) / 100;
    return base - discount;
  }
}

/* ================================================================
   4. Типи методів
   ---------------------------------------------------------------
   - Розрахункові (return результат)
   - Модифікаційні (змінюють стан об’єкта)
   - Сервісні (допоміжні для логіки)
   - Гетери/Сетери (контроль доступу до властивостей)
=================================================================== */

class Client {
  private _balance: number;
  constructor(public name: string, balance: number) {
    this._balance = balance;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value >= 0) this._balance = value;
  }

  public deposit(amount: number): void {
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= this._balance) this._balance -= amount;
  }
}

/* ================================================================
   5. Принцип інкапсуляції
   ---------------------------------------------------------------
   Інкапсуляція — приховування внутрішньої реалізації класу
   та надання контрольованого доступу через методи.
=================================================================== */

class Roulette {
  private _rouletteCellNumber: number;
  private _minScoreValue: number;
  private _maxScoreValue: number;
  public scoresList: number[] = [];

  constructor(
    rouletteCellNumber: number,
    minScoreValue: number,
    maxScoreValue: number
  ) {
    this._rouletteCellNumber = rouletteCellNumber;
    this._minScoreValue = minScoreValue;
    this._maxScoreValue = maxScoreValue;
  }

  public spin(): number {
    const score =
      Math.floor(
        Math.random() * (this._maxScoreValue - this._minScoreValue + 1)
      ) + this._minScoreValue;
    this.scoresList.push(score);
    return score;
  }

  public getAverageScore(): number {
    const total = this.scoresList.reduce((acc, el) => acc + el, 0);
    return Math.round(total / this.scoresList.length);
  }
}

/* ================================================================
   6. Використання Symbol.toPrimitive
   ---------------------------------------------------------------
   Дозволяє контролювати перетворення об’єкта до примітивів (string, number)
=================================================================== */

class ButtonController {
  private _pressCount = 0;

  press(): void {
    this._pressCount++;
  }

  [Symbol.toPrimitive](hint: string): string | number {
    if (hint === "number") return this._pressCount;
    return `Button pressed ${this._pressCount} times`;
  }
}

/* ================================================================
   7. Модульність і структура export/import
   ---------------------------------------------------------------
   - Кожен клас має бути в окремому файлі.
   - Використовується ключове слово export / import.
=================================================================== */

// export default Product;
// export { Client, Roulette, ButtonController };

/* ================================================================
   8. Узагальнення принципів ООП
   ---------------------------------------------------------------
   1. Інкапсуляція — приховує деталі реалізації.
   2. Наслідування — дозволяє створювати класи-нащадки.
   3. Поліморфізм — здатність методів мати різну поведінку.
   4. Абстракція — виділення суттєвих властивостей об’єкта.
=================================================================== */

