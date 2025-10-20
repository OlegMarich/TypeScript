// ======================= 2. Методи та властивості, які застосовуються у всіх задачах ======================
// Метод /            Властивість	Опис	Приклад
// getFullYear()	    повертає рік	now.getFullYear()
// getMonth()	        повертає місяць (0–11)	now.getMonth() + 1
// getDate()	        день місяця	now.getDate()
// Math.random()	    випадкове число (0–1)	Math.floor(Math.random()*10)
// Array.push()	      додати елемент	arr.push(val)
// Array.includes()	  перевірити наявність	days.includes(day)
// Array.filter()	    фільтрація	arr.filter(x => x > 0)
// Array.map()	      трансформація	arr.map(x => x*2)
// Object.entries()	  перетворення об’єкта у пари [key,value]	Object.entries(obj)
// Date()	            створення дати	new Date()
// forEach()	        ітерація по масиву	arr.forEach(d => ...)

// ======================= Lesson 2 — TypeScript Utility / Reference =======================

// ======================= 1. Never / Виключення =======================
export function throwError(message: string): never {
  // Функція ніколи не повертає значення
  throw new Error(message);
}

// ======================= 2. Overloading / Перевантаження =======================
export function getLastTyped(value: number): number;
export function getLastTyped(value: string): string;
export function getLastTyped(value: number | string): number | string {
  const strValue = value.toString();
  const last = strValue[strValue.length - 1];
  return typeof value === 'number' ? Number(last) : last;
}

// ======================= 3. Enum =======================
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

// ======================= 4. Array & Random =======================
export function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomDays(count: number): string[] {
  const workingDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця"];
  const weekendDays = ['Субота', 'Неділя'];
  const holidayDays = ['Новий рік', 'Різдво', 'Пасха', 'День Незалежності', 'День Конституції'];
  const allDays = [...workingDays, ...weekendDays, ...holidayDays];

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(getRandomElement(allDays));
  }
  return result;
}

// ======================= 5. Tuple =======================
export type Marker = [number, number, string]; // [lat, long, city]

export function getClosestCity(markerList: Marker[], target: [number, number]): string | null {
  let closestCity: string | null = null;
  let minDistance = Infinity;

  for (const [lat, long, city] of markerList) {
    const distance = Math.sqrt(Math.pow(lat - target[0], 2) + Math.pow(long - target[1], 2));
    if (distance < minDistance) {
      minDistance = distance;
      closestCity = city;
    }
  }
  return closestCity;
}

// ======================= 6. Date =======================
export function getCurrentDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return `${day}-${month}-${year}`;
}

// ======================= 7. Reward Handling =======================
export function generateRewards(count: number) {
  const rewards = Object.values(Reward);
  const result = {
    [Reward.Gold]: 0,
    [Reward.Silver]: 0,
    [Reward.Bronze]: 0,
    [Reward.Diploma]: 0,
  };

  for (let i = 0; i < count; i++) {
    const reward = getRandomElement(rewards) as Reward;
    result[reward]++;
  }
  return result;
}

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
      const _ex: never = reward;
      throwError(`Невідомий тип нагороди: ${_ex}`);
  }
}

// ======================= 8. Currency Conversion =======================
export function convertCurrency(amountUAH: number, currency: Currency): number {
  const USD_RATE = 42;
  const EUR_RATE = 48;

  switch (currency) {
    case Currency.USD:
      return amountUAH / USD_RATE;
    case Currency.EUR:
      return amountUAH / EUR_RATE;
    case Currency.UAH:
      return amountUAH;
    default:
      const _ex: never = currency;
      throwError('Некоректна валюта!');
  }
}

// ======================= 9. Helper Functions =======================
export function parseNumber(input: string | null, fieldName = 'Значення'): number {
  if (!input) throwError(`${fieldName} не введене`);
  const num = Number(input);
  if (isNaN(num)) throwError(`${fieldName} має бути числом`);
  return num;
}

export function isWorkingDay(day: number | string): boolean {
  if (typeof day === 'number') return day >= 1 && day <= 5;
  if (typeof day === 'string') return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day);
  throwError('Некоректний день');
}

// ======================= 10. 2D Game Field =======================
export type CellType = 0 | 1 | 'block';
export type GameField = CellType[][];

export function getZeroMatrix(rows: number, cols: number): GameField {
  const matrix: GameField = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(new Array(cols).fill(0));
  }
  return matrix;
}

export function setRandomCells(val: CellType, count: number, matrix: GameField): void {
  for (let i = 0; i < count; ) {
    const r = Math.floor(Math.random() * matrix.length);
    const c = Math.floor(Math.random() * matrix[r].length);
    if (matrix[r][c] === 0) {
      matrix[r][c] = val;
      i++;
    }
  }
}

export function generateGameField(rows: number, cols: number, shipCount: number, groundCount: number): GameField {
  const matrix = getZeroMatrix(rows, cols);
  setRandomCells(1, shipCount, matrix);
  setRandomCells('block', groundCount, matrix);
  return matrix;
}
