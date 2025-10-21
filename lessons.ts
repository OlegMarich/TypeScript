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
    case Reward.Gold: return 'Вітаємо! Ви отримали золоту медаль!';
    case Reward.Silver: return 'Чудово! Ви отримали срібну медаль!';
    case Reward.Bronze: return 'Добре! Ви отримали бронзову медаль!';
    case Reward.Diploma: return 'Вітаємо! Ви отримали грамоту!';
    default:
      const _exhaustive: never = reward;
      throwError(`Невідомий тип нагороди: ${_exhaustive}`);
  }
}

// ---------- 8. Currency Conversion ----------
export function convertCurrency(amountUAH: number, currency: Currency): number {
  const USD_RATE = 42, EUR_RATE = 48;
  switch (currency) {
    case Currency.USD: return amountUAH / USD_RATE;
    case Currency.EUR: return amountUAH / EUR_RATE;
    case Currency.UAH: return amountUAH;
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

// ==================== Урок 3: Objects ====================

// ---------- 1. Типи та інтерфейси ----------
type ExampleType = { id: number; name: string; };
interface ExampleInterface { id: number; name: string; }

// ---------- 2. Розширення інтерфейсів ----------
interface IPoint2D { x: number; y: number; }
interface IPoint3D extends IPoint2D { z: number; }

// Інтерактивне створення Point3D із заданим діапазоном:
function getPoint3D(min = -10, max = 10): IPoint3D {
  const axisX = parseNumber(prompt(`Введіть X (${min}…${max})`), 'X');
  const axisY = parseNumber(prompt(`Введіть Y (${min}…${max})`), 'Y');
  const axisZ = parseNumber(prompt(`Введіть Z (${min}…${max})`), 'Z');
  return { x: axisX, y: axisY, z: axisZ };
}

// ---------- 3. Функції з this ----------
function checkValue(this: { minValue: number }, value: number): boolean {
  return this.minValue <= value;
}

// ---------- 4. Declaration Merging ----------
interface IBook { title: string }
interface IBook { author: string }

// ---------- 5. Augmentation ----------
interface Window { appName: string }
window.appName = 'My App';

// ---------- 6. Розширення об’єктів ----------
interface Product { title: string; price: number }
interface FoodProduct extends Product { expirationDate: Date }

// ---------- 7. Optional & Readonly ----------
interface IUser {
  readonly id: string;
  name: string;
  email: string;
  phone?: string;
}

// ---------- 8. Discriminated Union ----------
type Shape =
  | { figure: 'circle'; radius: number }
  | { figure: 'square'; side: number }
  | { figure: 'rectangle'; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.figure) {
    case 'circle': return Math.PI * Math.pow(shape.radius, 2);
    case 'square': return Math.pow(shape.side, 2);
    case 'rectangle': return shape.width * shape.height;
    default:
      const _ac: never = shape; // контроль вичерпності
      throwError(`Невідомий тип фігури: ${_ac}`);
  }
}

// ---------- 9. User-defined Type Guards ----------
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isProduct(value: unknown): value is Product {
  return !!value && typeof value === 'object' && 'title' in value && 'price' in value;
}

// ---------- 10. Satisfies ----------
const products = [
  { id: 1, name: 'Book', price: 100 },
  { id: 2, name: 'Pen', price: 10 }
] satisfies Product[];

// ---------- 11. Складні типи (Перетини та об’єднання) ----------
type Person = { name: string; id: number };
type Manager = { department: string };
type Engineer = { skills: string[] };
type Intern = { mentor: string };
type WorkType = { status: 'fullTime' | 'partTime' };

type CompanyEmployee = (Manager | Engineer | Intern) & Person & WorkType;

// Інтерактивне створення співробітника:
function createEmployee(): CompanyEmployee {
  const name = prompt('Ім’я співробітника') ?? 'Невідомо';
  const id = parseNumber(prompt('ID'));
  const status = (prompt('Тип роботи (fullTime/partTime)') as 'fullTime' | 'partTime') ?? 'fullTime';
  const role = prompt('Категорія (manager/engineer/intern)')?.toLowerCase();

  switch (role) {
    case 'manager': return { name, id, status, department: prompt('Вкажіть відділ') ?? 'IT' };
    case 'engineer': return { name, id, status, skills: (prompt('Вкажіть навички через кому') ?? '').split(',') };
    case 'intern': return { name, id, status, mentor: prompt('Ім’я ментора') ?? 'Mentor' };
    default:
      const _err: never = role as never;
      throwError(`Невідома роль: ${_err}`);
  }
}
