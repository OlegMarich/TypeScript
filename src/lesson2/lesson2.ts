const questions = [
  {
    id: '2.1_1',
    question:
      'Задача 1. Вводиться перший номер місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.',
    checkFunction: function () {
      function getSeason(month: number): string | never {
        if (month < 1 || month > 12) throw new Error('Місяць повинен бути від 1 до 12');

        switch (month) {
          case 3:
            return 'Весна';
          case 6:
            return 'Літо';
          case 9:
            return 'Осінь';
          case 12:
            return 'Зима';
          default:
            throw new Error('Це не перший місяць пори року');
        }
      }

      const monthInput: string | null = prompt('Введіть перший місяць пори року (3,6,9,12)');
      const month: number = Number(monthInput);
      let season: string = getSeason(month);

      console.log(`Пора року: ${season}`);
      document.write(
        `<div>Пора року: ${season}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.1_2',
    question:
      'Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.',
    checkFunction: function () {
      let inputNumber: number = 1234;
      let inputString: string = 'Hello';

      function getLastTyped(value: number): number;
      function getLastTyped(value: string): string;
      function getLastTyped(value: number | string): number | string {
        const strValue = value.toString();
        const last = strValue[strValue.length - 1];
        return typeof value === 'number' ? Number(last) : last;
      }
      console.log(getLastTyped(inputNumber));
      console.log(getLastTyped(inputString));
      document.write(`
        <div>Остання цифра: ${getLastTyped(inputNumber)}</div>
        <div>Останній символ: "${getLastTyped(inputString)}"</div>
      <div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`);
    },
  },
  {
    id: '2.1_3',
    question:
      'Задача 3. Вводиться номер місяця або назва місяця. Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо число, або назву пори року, якщо було введено назву місяця. Використати перевантаження функцій.',
    checkFunction: function () {
      type MonthInput = number | string;
      const userInput = prompt('Введіть номер місяця (від 1 до 12) або його назву');

      let monthsValue: MonthInput =
        userInput && !isNaN(Number(userInput)) ? Number(userInput) : userInput || '';

      const seasons: string[] = ['Зима', 'Весна', 'Літо', 'Осінь'];
      const months: string[] = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
      ];

      let monthName: string | number = '';

      function getMonthValue(value: number): number;
      function getMonthValue(value: string): string;
      function getMonthValue(value: MonthInput): number | string {
        if (typeof value === 'number') {
          if (value >= 1 && value <= 12) {
            const seasonIndex = Math.floor((value - 1) / 3);
            monthName = months[value - 1];
            return seasons[seasonIndex];
          } else {
            throw new Error('Номер місяця має бути від 1 до 12');
          }
        } else if (typeof value === 'string') {
          const monthIndex = months.findIndex((m) => m.toLowerCase() === value.toLowerCase());

          // if (monthIndex === -1) throw new Error('Некоректна назва місяця');
          monthName = monthsValue;
          return seasons[Math.floor(monthIndex / 3)];
        }
        throw new Error('Невідомий формат даних');
      }
      const result = getMonthValue(monthsValue);
      console.log(getMonthValue(result));
      document.write(
        `<div>Вибраний місяць -  <b>${monthName}</b>, і він відноситься до пори року: <b>${result}</b></div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.1_4',
    question:
      'Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів. Підрахувати чого було більше: святкових чи вихідних.',
    checkFunction: function () {
      const workingDays: string[] = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця"];
      const weekendDays: string[] = ['Субота', 'Неділя'];
      const holidayDays: string[] = [
        'Новий рік',
        'Різдво',
        'Пасха',
        'День Незалежності',
        'День Конституції',
      ];
      const allDays: string[] = [...workingDays, ...weekendDays, ...holidayDays];
      const numberOfGeneratedDays = Math.floor(Math.random() * 50) + 20;
      let generatedDays: string[] = [];

      console.log(allDays);

      function getRandomDay(days: string[]): string {
        const randomIndex = Math.floor(Math.random() * days.length);
        return days[randomIndex];
      }

      for (let i = 0; i < numberOfGeneratedDays; i++) {
        generatedDays.push(getRandomDay(allDays));
      }

      const holidayCount = generatedDays.filter((d) => holidayDays.includes(d)).length;
      const weekendCount = generatedDays.filter((d) => weekendDays.includes(d)).length;

      console.log(`Згенеровані дні: ${generatedDays}`);
      console.log(`Святкових: ${holidayCount}, вихідних: ${weekendCount}`);
      document.write(`
        <div>Згенеровані дні: ${generatedDays.join(', ')}</div>
        <div>Святкових: ${holidayCount}, вихідних: ${weekendCount}</div>
       `);
      if (holidayCount > weekendCount) {
        console.log('Святкових днів більше!');
        document.write(`<div>Святкових днів більше!</div>`);
      } else if (holidayCount > weekendCount) {
        console.log('Вихідних днів більше!');
        document.write(`<div>Вихідних днів більше!</div>`);
      } else {
        console.log('Кількість святкових і вихідних однакова!');
        document.write(`<div>Кількість святкових і вихідних однакова!</div>`);
      }
      document.write(`
        <div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`);
    },
  },
  {
    id: '2.1_5',
    question:
      'Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими',
    checkFunction: function () {
      function getEndabledSettings(settings: string): string[] {
        return Object.entries(settings)
          .filter(([key, value]) => value === 'endabled')
          .map(([key]) => key);
      }
      const settings = {
        darkMode: 'endabled',
        autoSave: 'distabled',
        notification: 'endabled',
        locationAccess: 'distabled',
        sound: 'endabled',
      };

      const endabled = getEndabledSettings(settings);
      console.log('Увімкнені налаштування:', endabled.join(', '));

      document.write(
        `<div>Увімкнені налаштування: ${endabled.join(
          ', ',
        )}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.1_6',
    question:
      'Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). Підрахувати кількість кожної з нагород. Використати enum. Можете і never якось застосувати',
    checkFunction: function () {
      enum Reward {
        Gold = 'Золота медаль',
        Silver = 'Срібна медаль',
        Bronze = 'Бронзова медаль',
        Diploma = 'Грамота',
      }

      function generateRewards(count: number) {
        const rewards = Object.values(Reward);
        const result = {
          [Reward.Gold]: 0,
          [Reward.Silver]: 0,
          [Reward.Bronze]: 0,
          [Reward.Diploma]: 0,
        };

        for (let i = 0; i < count; i++) {
          const randomReward = rewards[Math.floor(Math.random() * rewards.length)] as Reward;
          result[randomReward]++;
        }
        return result;
      }

      function assertNever(value: never): never {
        throw new Error(`Невідомий тип нагороди: ${value}`);
      }

      function handleReward(reward: Reward): string {
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
            return assertNever(reward);
        }
      }

      const input = prompt('Введіть кількість нагород:');
      const count = input ? parseInt(input) : 0;

      if (isNaN(count) || count <= 0) {
        alert('Будь-ласка введіть коректне число більше за 0.');
      } else {
        const rewardsCount = generateRewards(count);
        console.log(rewardsCount);
        document.write('<h3>Результат підрахунку нагород:</h3>');
        for (const key in rewardsCount) {
          document.write(`<div>${key}: ${rewardsCount[key]}</div>`);
        }
      }
      document.write(`<div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`);
    },
  },
  // ========================================================================================================================================
  {
    id: '2.2_1',
    question: '',
    checkFunction: function () {
      //document.write(`<div>${}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`)
    },
  },
  // ========================================================================================================================================
  {
    id: '2.3_1',
    question: 'Створити функцію, яка виводить у консоль поточну дату',
    checkFunction: function () {
      function showCurrentDate() {
        const now: Date = new Date();
        const year: number = now.getFullYear();
        const month: number = now.getMonth() + 1;
        const day: number = now.getDate();
        let formattedDate: string = `${day}-${month}-${year}`;
        console.log(formattedDate);

        document.write(
          `<div>Сьогоднішня дата: ${formattedDate}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
        );
      }
      showCurrentDate();
    },
  },
  {
    id: '2.3_2',
    question:
      'З клавіатури номер робочого дня. Ввисти скільки залишилось до кінця тижня. Передбчати генерування виглючних ситуацій якщо номер дня некоректний і коли номер дня коректний, але це не є робочим днем (використати функцію з never для генерування виключиних ситуацій)',
    checkFunction: function () {
      function throwError(message: string): never {
        throw new Error(message);
      }

      const startWorkingDay = 1;
      const endWorkingDay = 5;
      const daysInWeek = 7;
      let inputDay = prompt('Введіть номер дня тижня (1-7):');
      if (inputDay === null) throwError('Введено скасування');
      const day = parseInt(inputDay);
      if (isNaN(day)) throwError('Введено не число');

      function getLastWorkingDays(day: number): number {
        if (day < startWorkingDay || day > daysInWeek) throwError('Некоректнтий день тижня');
        if (day > endWorkingDay) throwError('Некоректнтий робочий тдень');
        return 6 - day;
      }
      console.log(getLastWorkingDays(day).toString());

      document.write(`
        <div>Працювати залишилось ${getLastWorkingDays(day).toString()} днів </div>
        <div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`);
    },
  },
  {
    id: '2.3_3',
    question: 'З клавіатури вводиться пора року. Вивести рекомендований одяг.',
    checkFunction: function () {
      type Season = 'winter' | 'spring' | 'summer' | 'autumn';

      function getCloth(): string {
        const input = prompt('Введіть пору року (winter, spring, summer, autumn):');
        if (input === null) throw new Error('Введено скасування');
        const seasonInput = input.toLowerCase() as Season;

        let cloth: string;

        switch (seasonInput) {
          case 'winter':
            cloth = 'Шапка, куртка, штани, черевики';
            break;
          case 'spring':
            cloth = 'Куртка, светр, джинси, кеди';
            break;
          case 'summer':
            cloth = 'Футболка, шорти, сандалі';
            break;
          case 'autumn':
            cloth = 'Куртка, светр, джинси, кеди';
            break;

          default:
            const _exCheck: never = seasonInput;
            throw new Error(`Не вірно вказано сезон`);
        }
        return cloth;
      }

      document.write(
        `<div>${getCloth()}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.3_4',
    question:
      'Передається або номер дня, або назву дня на англійькій. Треба сказати чи вихідний чи робочий.',
    checkFunction: function () {
      function isWorkingDay(day: number): boolean;
      function isWorkingDay(day: string): boolean;

      function isWorkingDay(day: number | string): boolean {
        if (typeof day === 'number') return day >= 1 && day <= 7;
        else if (typeof day === 'string')
          return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].includes(day);
        throw new Error('Некоректний день');
      }
      console.log(isWorkingDay(4).toString()); // true
      console.log(isWorkingDay('Sat'));
      document.write(
        `<div>${isWorkingDay(
          3,
        ).toString()}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.3_5',
    question:
      'Передається або номер дня, або назву дня на англійькій. Треба повертати  номер наступного дня (якщо число), або першу літеру (якщо назва)',
    checkFunction: function () {
      function isWorkingDay(day: number): number;
      function isWorkingDay(day: string): string;

      let inputDay = prompt(
        'Введіть номер дня тижня (1-7) або назву дня (Mon, Tue, Wed, Thu, Fri, Sat, Sun):',
      );
      if (inputDay === null) throw new Error('Введено скасування');
      const day = isNaN(Number(inputDay)) ? inputDay : parseInt(inputDay);

      function isWorkingDay(day: number | string): number | string {
        if (typeof day === 'number') return (day % 7) + 1;
        else if (typeof day === 'string') return day[0];
        throw new Error('Некоректний день');
      }

      document.write(
        `<div>${isWorkingDay(
          day,
        ).toString()}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.3_6',
    question:
      'Планувальник відпусток. Дано масив імен водіїв і масив номерів, коли можна йти у відпустку. Потрібно випадково вибрати ім’я водія і випадково вибрати номер місяця для відпустки.',
    checkFunction: function () {
      let drivers: string[] = ['Andrii', 'Olga', 'Viktor'];
      drivers = prompt("Введіть ім'я водія")?.split(', ') ?? [];
      let vacMonths: number[];
      vacMonths =
        prompt('Введіть місяці відпустки')!
          .split(', ')
          .map((m) => Number(m)) ?? [];

      const randDrIndex = Math.floor(Math.random() * drivers.length);
      const drName = drivers[randDrIndex];

      const randMonthIndex = Math.floor(Math.random() * vacMonths.length);
      const vacMonth = vacMonths[randMonthIndex];

      document.write(
        `<div>${drName} - ${vacMonth}</div>
        <div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.3_7',
    question:
      'Сформувати масив значень ігрового барабана. Це або виграшна сума, або «Пауза», «Банкрот», «Супер приз»',
    checkFunction: function () {
      type gameItemType = number | 'Пауза' | 'Банкрот' | 'Супер приз';
      let gameListType: gameItemType[];

      function getGameField(cellCount: number): gameItemType[] {
        const list: gameItemType[] = [];
        for (let i = 0; i < cellCount; i++) {
          const randomChoiceNumber = Math.floor(Math.random() * 5);
          switch (randomChoiceNumber) {
            case 1:
              const randNum = 100 + Math.floor(Math.random() * 5000);
              list.push(randNum);
              break;
            case 2:
              list.push('Пауза');
              break;
            case 3:
              list.push('Банкрот');
              break;
            case 4:
              list.push('Супер приз');
            default:
              break;
          }
        }
        return list;
      }
      const arr: gameItemType[] = getGameField(10);

      console.log(arr);
      document.write(
        `<div>${arr}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.3_8',
    question:
      ' Сформувати двовимірний масив (5*5) ігрового поля. Усі елементи нулі, або 1-корабель (4 штуки), або ‘block’- земля (5 штук)',
    checkFunction: function () {
      type cellType = 0 | 1 | 'block';
      type gameField = cellType[][];

      function getZeroMatrix(rowNum: number, colNumber: number): gameField {
        const matrix: gameField = [];
        for (let i = 0; i < rowNum; i++) {
          matrix.push(new Array(colNumber).fill(0));
        }
        return matrix;
      }

      function setInRandomPosition(val: cellType, valNumber: number, matrix: gameField): void {
        for (let i = 0; i < valNumber; ) {
          const randRowIndex = Math.floor(Math.random() * matrix.length);
          const randColIndex = Math.floor(Math.random() * matrix[randRowIndex].length);
          if (matrix[randRowIndex][randColIndex] === 0) {
            matrix[randRowIndex][randColIndex] = val;
            i++;
          }
        }
      }

      function generateGameField(
        rowNum: number,
        colNumber: number,
        shipNum: number,
        groundNum: number,
      ): gameField {
        const gameFieldMatrix: gameField = getZeroMatrix(rowNum, colNumber);
        setInRandomPosition(1, shipNum, gameFieldMatrix);
        setInRandomPosition('block', groundNum, gameFieldMatrix);
        return gameFieldMatrix;
      }
      const gameField = generateGameField(5, 5, 4, 7);

      console.log(gameField);

      let tableHTML =
        '<table border="1" cellspacing="0" cellpadding="5" style="text-align:center;">';
      for (let row of gameField) {
        tableHTML += '<tr>';
        for (let cell of row) {
          // різні кольори для зручності
          let color = cell === 1 ? '#4caf50' : cell === 'block' ? '#795548' : '#e0e0e0';
          tableHTML += `<td style="width:40px; height:40px; background:${color};">${cell}</td>`;
        }
        tableHTML += '</tr>';
      }
      tableHTML += '</table>';

      document.write(`  
        <div>${tableHTML}</div>  
        <div><a href="../components/lesson2.html">Повернутися до уроку</a></div>
        `);
    },
  },
  {
    id: '2.3_9',
    question:
      'Дано масив маркерів на картів [lat, long, city]. Визначити найближче місто до вказаних координат',
    checkFunction: function () {
      type Marker = [number, number, string]; // [lat, long, city]

      function getMarkersList(markersNumber: number): Marker[] {
        const markersList: Marker[] = [];
        for (let i = 0; i < markersNumber; i++) {
          const city: string = prompt(`Введіть назву міста ${i + 1}`) || '';

          const latInput: string | null = prompt(`Вкажіть координати міста ${city}`);
          const lat: number = Number(latInput);

          const longInput: string | null = prompt(`Введіть довготу міста ${city}`);
          const long: number = Number(longInput);
          if (isNaN(lat) || isNaN(long)) alert('Координати мають бути числами');

          markersList.push([lat, long, city]);
        }
        return markersList;
      }

      function getClosestCity(markerList: Marker[], target: [number, number]): string | null {
        let closestCity: string | null = null;
        let minDistance = Infinity; // Початкова мінімальна відстань

        for (let marker of markerList) {
          const distance = Math.sqrt(
            Math.pow(marker[0] - target[0], 2) + Math.pow(marker[1] - target[1], 2),
          );
          if (distance < minDistance) {
            minDistance = distance;
            closestCity = marker[2];
          }
        }
        return closestCity;
      }
      const numCities: number = Number(prompt('Скільки міст додати?') || '0');
      const markers = getMarkersList(numCities);
      const target: [number, number] = [50, 50];
      const nearestCity = getClosestCity(markers, target);

      console.log('Масив маркерів:', markers);
      console.log('Найближче місто до', target, '-', nearestCity);

      document.write(`
        <div>Масив маркерів: ${JSON.stringify(markers)}</div>
        <div>Найближче місто до ${target[0]}, ${target[1]} - ${nearestCity}</div>

        <div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`);
    },
  },
  {
    id: '2.3_11',
    question:
      'Потрібно ввести стать студента ("male", "female"). У залежносі від цього додати Mr, Ms.',
    checkFunction: function () {
      enum Gender {
        Male = 'male',
        Female = 'female',
      }

      const name: string | null = prompt("Введіть ім'я");
      if (!name) throw new Error("Ім'я не може бути порожнім");

      const genderInput: string | null = prompt('Введіть стать (male / female)');
      if (!genderInput) throw new Error('Стать не може бути порожньою');

      const normalized = genderInput.toLocaleLowerCase();

      let title: string;
      if (normalized === Gender.Male) {
        title = 'Mr.';
      } else if (normalized === Gender.Female) {
        title = 'Ms.';
      } else {
        throw new Error('Некоректне значення статі! Використовуйте "male" або "female".');
      }

      const fullName = `${title} ${name}`;
      console.log(fullName);

      document.write(
        `<div>${fullName}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '2.3_12',
    question:
      'Вводиться сума грошей і позначення валюти. Потрібно перевести кількість гривень у кількість обраної валюти ("USD" ,  "EUR" , "UAH")',
    checkFunction: function () {
      function convertToCurrency(): void {
        enum Currency {
          USD = 'usd',
          EUR = 'eur',
          UAH = 'uah',
        }

        const USD_RATE = 42;
        const EUR_RATE = 48;

        const moneyInput: string | null = prompt('Вкажіть кількість гривень');
        if (!moneyInput) throw new Error('Ввід скасовано');
        const moneyGrn: number = Number(moneyInput);
        if (isNaN(moneyGrn) || moneyGrn <= 0) throw new Error('Некоректна сума');

        const currencyInput: string | null = prompt('Введіть валюту (usd / eur / uah):');
        if (!currencyInput) throw new Error('Ввід скасовано');

        const currency = currencyInput.toLowerCase();

        let converted: number;

        switch (currency) {
          case Currency.USD:
            converted = moneyGrn / USD_RATE;
            break;
          case Currency.EUR:
            converted = moneyGrn / EUR_RATE;
            break;
          case Currency.UAH:
            converted = moneyGrn;
            break;
          default:
            throw new Error('Некоректна валюта! Використовуйте usd, eur або uah.');
        }

        const result = `${moneyGrn} грн = ${converted.toFixed(2)} ${currency.toUpperCase()}`;

        console.log(result);
        document.write(
          `<div>${result}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`,
        );
      }
      convertToCurrency();
    },
  },
];

function showQuestion(questionId: any) {
  const questionObj = questions.find((question) => question.id === questionId);
  if (questionObj) {
    questionObj.checkFunction();
  } else {
    document.getElementById('question-content')!.innerText = 'Це питання відсутнє';
  }
}
