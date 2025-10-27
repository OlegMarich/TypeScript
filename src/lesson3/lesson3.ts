type Question = {
  id: string;
  question: string;
  checkFunction: () => void;
};

const questions: Question[] = [
  {
    id: '3.1_1',
    question:
      'Задача 1. Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)',
    checkFunction: function () {
      interface IStudent {
        fullName: string;
        course: number;
        faculty: string;
      }
      interface IHeadStudent extends IStudent {
        groupNumber: number;
      }

      const headStudent: IHeadStudent = {
        fullName: prompt('Введіть ПІБ студента:') || 'Невідомо',
        course: Number(prompt('Введіть курс (1-6)')) || 1,
        faculty: prompt('Введіть факультет') || 'Невідомо',
        groupNumber: prompt('Введіть номер групи:') || 'Без групи',
      };
      console.log(headStudent);
      document.write(`
        <div><b>Староста групи: ${headStudent.fullName}</b></div>
        <div><b>Курс: ${headStudent.course}</b></div>
        <div><b>Факультет: ${headStudent.faculty}</b></div>
        <div><b>Номер групи: ${headStudent.groupNumber}</b></div>
        <div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
    },
  },
  {
    id: '3.1_2',
    question:
      "Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.",
    checkFunction: function () {
      type Vehicle =
        | {vehicle: 'car'; model: string; owner: string}
        | {vehicle: 'bus'; company: string; numberOfSeats: number}
        | {vehicle: 'airplane'; speed: number; fuel: string};

      function getInfo(value: Vehicle): string {
        switch (value.vehicle) {
          case 'car':
            return `Авто: модель ${value.model}, власник - ${value.owner}`;
          case 'bus':
            return `Автобус: компанія ${value.company}, місць - ${value.numberOfSeats}`;
          case 'airplane':
            return `Літак: швидкість - ${value.speed}, паливо - ${value.fuel}`;
          default:
            const _exhaustive: never = value;
            return '';
        }
      }

      const typeOfvehicle = prompt('Оберіть транспортний засіб: car, bus, airplane')?.toLowerCase();
      let vehicle: Vehicle;

      switch (typeOfvehicle) {
        case 'car':
          vehicle = {
            vehicle: 'car',
            model: prompt('Введіть модель авто:') || 'Невідомо',
            owner: prompt('Введіть власника авто:') || 'Невідомо',
          };
          break;
        case 'bus':
          vehicle = {
            vehicle: 'bus',
            company: prompt('Введіть компанію автобуса:') || 'Невідомо',
            numberOfSeats: parseInt(prompt('Введіть кількість місць:') || '0', 10),
          };
          break;
        case 'airplane':
          vehicle = {
            vehicle: 'airplane',
            speed: Number(prompt('Введіть швидкість літака:')) || 0,
            fuel: prompt('Введіть тип пального:') || 'Невідомо',
          };
          break;
        default:
          alert('Невідомий тип транспортного засобу');
      }
      console.log(getInfo(vehicle));

      document.write(
        `<div>${getInfo(
          vehicle,
        )}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '3.1_3',
    question:
      'Задача 3. Задача “Calendar events”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note). Кожна подія може бути mandatory або optional. Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.',
    checkFunction: function () {
      type EventType = 'meeting' | 'deadline' | 'reminder';
      type EventImportance = 'mandatory' | 'optional';

      type CalendarEvent =
        | {eventType: 'meeting'; participants: string; importance: EventImportance}
        | {eventType: 'deadline'; dueDate: string; importance: EventImportance}
        | {eventType: 'reminder'; note: string; importance: EventImportance};

      function showEventInfo(event: CalendarEvent): void {
        switch (event.eventType) {
          case 'meeting':
            console.log(`Meeting with ${event.participants}. Importance: ${event.importance}`);
            break;
          case 'deadline':
            console.log(`Deadline: ${event.dueDate}. Importance: ${event.importance}`);
            break;
          case 'reminder':
            console.log(`Reminder: ${event.note}. Importance: ${event.importance}`);
            break;
          default:
            const exhaustive: never = event;
            throw new Error(`Unhandled event type: ${exhaustive}`);
        }
      }

      function checkFunction() {
        const events: CalendarEvent[] = [
          {eventType: 'meeting', participants: 'Team A', importance: 'mandatory'},
          {eventType: 'deadline', dueDate: '2025-10-30', importance: 'optional'},
          {eventType: 'reminder', note: 'Submit report', importance: 'mandatory'},
        ];
        events.forEach(showEventInfo);
      }

      checkFunction();

      let output = `<h3>Створено подію:</h3>`;
      if ('participants' in calendarEvent)
        output += `<p><b>Тип:</b> Meeting<br><b>Учасники:</b> ${calendarEvent.participants}</p>`;
      else if ('dueDate' in calendarEvent)
        output += `<p><b>Тип:</b> Deadline<br><b>Термін:</b> ${calendarEvent.dueDate}</p>`;
      else if ('note' in calendarEvent)
        output += `<p><b>Тип:</b> Reminder<br><b>Нотатка:</b> ${calendarEvent.note}</p>`;

      output += `<p><b>Важливість:</b> ${
        calendarEvent.mandatory ? 'Обов’язкова' : 'Необов’язкова'
      }</p>`;

      document.write(`
      <div class="event-card">
        ${output}
        <div><a href="../components/lesson3.html">Повернутися до уроку</a></div>
      </div>
    `);
    },
  },
  {
    id: '3.1_4',
    question:
      'Задача 4. Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). Продукти можуть бути onSale або regularPrice. Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.',
    checkFunction: function () {
      type BasePice = {price: number};
      type Book = BasePice & {author: string};
      type Electronics = BasePice & {warranty: string};
      type Clothes = BasePice & {size: number | string};

      type ProductPriceStatus = {onSale: boolean};
      type ProductType = Book | Electronics | Clothes;
      type ShopProduct = ProductType &
        ProductPriceStatus & {
          basePrice: number;
          finalPrice: number;
        };

      const typeChoice = prompt(
        'Оберіть тип продукту: book / electronics / clothes',
      )?.toLowerCase();
      let productData: ProductType;

      if (typeChoice === 'book') {
        const author = prompt('Введіть автора книги:') || 'Невідомий автор';
        productData = {author, price: parseFloat(prompt('Введіть ціну книги:') || '0')};
      } else if (typeChoice === 'electronics') {
        const warranty = prompt('Введіть гарантію:') || 'Без гарантії';
        productData = {warranty, price: parseFloat(prompt('Введіть ціну електроніки:') || '0')};
      } else if (typeChoice === 'clothes') {
        const size = prompt('Введіть розмір одягу:') || 'One Size';
        productData = {size, price: parseFloat(prompt('Введіть ціну одягу:') || '0')};
      } else {
        alert('Невідомий тип продукту. Спробуйте ще раз.');
        return;
      }

      const basePrice = parseFloat(prompt('Введіть базову ціну продукту:') || '0');
      if (isNaN(basePrice) || basePrice <= 0) {
        alert('Базова ціна невірна.');
        return;
      }

      const saleChoice = prompt('Вкажіть чи є знижка на товар (yes / no)')?.toLowerCase();
      const status: ProductPriceStatus = {onSale: saleChoice === 'yes'};

      const discountRate = 0.2;
      const finalPrice = status.onSale ? basePrice * (1 - discountRate) : basePrice;

      const shopProduct: ShopProduct = {
        ...productData,
        ...status,
        basePrice,
        finalPrice,
      };

      let output = `<h3>Інформація про продукт:</h3>`;
      if ('author' in shopProduct)
        output += `<p><b>Тип:</b> Book<br><b>Автор:</b> ${shopProduct.author}</p>`;
      else if ('warranty' in shopProduct)
        output += `<p><b>Тип:</b> Electronics<br><b>Гарантія:</b> ${shopProduct.warranty}</p>`;
      else if ('size' in shopProduct)
        output += `<p><b>Тип:</b> Clothes<br><b>Розмір:</b> ${shopProduct.size}</p>`;

      output += `
      <p><b>Статус:</b> ${shopProduct.onSale ? 'On Sale (зі знижкою)' : 'Regular Price'}</p>
      <p><b>Базова ціна:</b> ${shopProduct.basePrice.toFixed(2)} грн</p>
      ${
        shopProduct.onSale
          ? `<p><b>Ціна зі знижкою:</b> ${shopProduct.finalPrice.toFixed(2)} грн (-20%)</p>`
          : ''
      }
    `;

      document.write(`
      <div>
        ${output}
        <div><a href="../components/lesson3.html">Повернутися до уроку</a></div>
      </div>
    `);
      //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
    },
  },
  {
    id: '3.1_5',
    question:
      'Задача 5.  У localStorage зберігається об’єкт у форматі JSON. Проаналізувати чи є цей об’єкт  типу Product{     title:string,     price:number }',
    checkFunction: function () {
      type Product = {title: string; price: number};

      const titles = ['Ноутбук', 'Книга', 'Миша', 'Рюкзак', 'Планшет'];
      const products: Product[] = titles.map((title) => ({
        title,
        price: Math.floor(Math.random() * 5000) + 100,
      }));
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      localStorage.setItem('data', JSON.stringify(randomProduct));

      const raw = localStorage.getItem('data');
      const parsed = raw ? JSON.parse(raw) : null;

      function isProduct(object: any): object is Product {
        return object && typeof object.title === 'string' && typeof object.price === 'number';
      }

      let message: string = '';
      if (isProduct(parsed)) {
        message = `Об’єкт відповідає типу Product:
        Назва: ${parsed.title}, Ціна ${parsed.price}`;
      } else {
        message = 'Об’єкт не відповідає типу Product.';
      }
      console.log(message);

      document.write(`
      <div>
        <h3>Перевірка об’єкта з localStorage</h3>
        <pre>${JSON.stringify(parsed, null, 2)}</pre>
        <p>${message}</p>
        <a href="../components/lesson3.html">Повернутися до уроку</a>
      </div>
    `);
      //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
    },
  },
  {
    id: '3.1_6',
    question:
      'Задача 6. Описати тип квиток (куди, ціна, ПІБ пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert) з інтерактивним введенням даних користувачем.',
    checkFunction: function () {
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
          typeof (obj as any).destination === 'string' &&
          'price' in obj &&
          typeof (obj as any).price === 'number' &&
          'passengerName' in obj &&
          typeof (obj as any).passengerName === 'string' &&
          'date' in obj &&
          typeof (obj as any).date === 'string'
        );
      }

      function assertTicket(obj: unknown): asserts obj is Ticket {
        if (!isTicket(obj)) {
          throw new Error('Об’єкт не є дійсним квитком!');
        }
      }

      const destination = prompt('Введіть пункт призначення:') || 'Невідомо';
      const passengerName = prompt('Введіть ПІБ пасажира:') || 'Анонім';
      const priceInput = prompt('Введіть ціну квитка:');
      const date = prompt('Введіть дату (у форматі YYYY-MM-DD):') || 'Невказано';

      const price = priceInput ? parseFloat(priceInput) : NaN;

      const userTicket = {
        destination,
        passengerName,
        price,
        date,
      };

      localStorage.setItem('ticketData', JSON.stringify(userTicket));

      const stored = localStorage.getItem('ticketData');
      const parsed: unknown = stored ? JSON.parse(stored) : null;

      let output = '<h3>Результат перевірки квитка</h3>';

      if (isTicket(parsed)) {
        console.log('Це дійсний квиток:', parsed);
        output += `<p>Об’єкт є дійсним квитком.</p>`;
      } else {
        console.log('Це не квиток');
        output += `<p>Об’єкт не є дійсним квитком.</p>`;
      }

      try {
        assertTicket(parsed);
        output += `
        <p><b>Пункт призначення:</b> ${parsed.destination}</p>
        <p><b>Пасажир:</b> ${parsed.passengerName}</p>
        <p><b>Дата:</b> ${parsed.date}</p>
        <p><b>Ціна:</b> ${parsed.price} грн</p>
      `;
      } catch (err) {
        console.error((err as Error).message);
        output += `<p style="color:red;">${(err as Error).message}</p>`;
      }

      document.write(`
      <div class="ticket-card">
        ${output}
        <div><a href="../components/lesson3.html">Повернутися до уроку</a></div>
      </div>
    `);
    },
  },
  {
    id: '3.1_7',
    question:
      'Задача 7. Описати тип «student journal» (3 поля-масиви з оцінки ). Потім на основі цього типу створити тип «менеджер оцінок» (додати методи знаходження середньої оцінки і найбільшої оцінки)',
    checkFunction: function () {
      type StudentJournal = {
        math: number[];
        physics: number[];
        chemistry: number[];
      };

      type GradeManager = StudentJournal & {
        getAverage: () => number;
        getMax: () => number;
      };

      function inputGrades(subject: string): number[] {
        const input = prompt(`Введіть оцінки для ${subject} через кому (наприклад 5, 4, 3):`) || '';
        return input
          .split(', ')
          .map((s) => parseFloat(s.trim()))
          .filter((n) => !isNaN(n));
      }

      const journal: GradeManager = {
        math: inputGrades('математика'),
        physics: inputGrades('фізики'),
        chemistry: inputGrades('хімія'),

        getAverage() {
          const allGrades = [...this.math, ...this.physics, ...this.chemistry];
          const sum = allGrades.reduce((acc, val) => acc + val, 0);
          return allGrades.length > 0 ? sum / allGrades.length : 0;
        },

        getMax() {
          const allGrades = [...this.math, ...this.physics, ...this.chemistry];
          return allGrades.length > 0 ? Math.max(...allGrades) : 0;
        },
      };
      let output = `<h3>Результати журналу</h3>
      <p><b>Математика:</b> ${journal.math.join(', ')}</p>
      <p><b>Фізика:</b> ${journal.physics.join(', ')}</p>
      <p><b>Хімія:</b> ${journal.chemistry.join(', ')}</p>
      <p><b>Середня оцінка:</b> ${journal.getAverage().toFixed(2)}</p>
      <p><b>Найвища оцінка:</b> ${journal.getMax()}</p>
    `;

      console.log('Журнал:', journal);
      document.write(
        `<div>${output}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  // ========================================================================================================================================
  {
    id: '3.2_1',
    question: '',
    checkFunction: function () {
      //document.write(`<div>${}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`)
    },
  },
  // ========================================================================================================================================
  {
    id: '3.3_1',
    question:
      'Модель автомобіля. Опишіть Car з властивостями: brand, model, year, electric (boolean).',
    checkFunction: function () {
      interface ICar {
        brand: string;
        model: string;
        year: number;
        electric: boolean;
        getAge(): number;
      }

      const car: ICar = {
        brand: 'Audi',
        model: 'Q7',
        year: 2021,
        electric: false,
        getAge() {
          return 2025 - this.year;
        },
      };
      console.log(car);

      document.write(
        `<div>${JSON.stringify(
          car,
          null,
          2,
        )}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '3.3_2',
    question:
      'Описати функцію, у  які this - це об"єкт з властивістю-minValue. У функцію передають якесь значення і функція визначає, чи є це значенням вище minValue',
    checkFunction: function () {
      function checkValue(this: {minValue: number}, value: number) {
        return this.minValue <= value;
      }

      //1
      // const result = checkValue.call({minValue: 10}, 1)
      // console.log(result);

      //2
      const obj = {
        minValue: 7,
        checkValue,
      };

      console.log(obj.checkValue(111));

      document.write(
        `<div>${JSON.stringify(
          obj,
        )}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },

  {
    id: '3.3_3',
    question:
      'Розробити об’єкт Range (діапазон). Збрігається мінімальне і максимальне значення. Та методи визначення чи належить якесь число цьому діапазону та мето генерування випакдового число з цього діапазону.',
    checkFunction: function () {
      type Range = {
        min: number;
        max: number;
        isInRange(this: Range, value: number): boolean;
        getRandomNumber(this: Range): number;
      };

      const objectOne: Range = {
        min: 1,
        max: 50,
        isInRange(value: number) {
          return this.min <= value && value <= this.max;
        },
        getRandomNumber() {
          return this.min + Math.floor(Math.random() * (this.max - this.min + 1));
        },
      };

      const result = objectOne.getRandomNumber();
      console.log(result);

      // console.log(objectOne.getRandomNumber());

      document.write(
        `<div>${objectOne.getRandomNumber()}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '3.3_4',
    question:
      'Створіть два окремих оголошення інтерфейсу Book.у першому - title: stringу другому - author: stringПеревірте, що після злиття можна створити об’єкт із обома властивостями.',
    checkFunction: function () {
      interface IBook {
        title: string;
      }
      interface IBook {
        author: string;
      }

      const bookOne = {
        title: 'My book',
        author: 'Author One',
      };
      const result = bookOne.title + ' ' + bookOne.author;
      console.log(result);
      document.write(
        `<div>${result}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '3.3_5',
    question:
      'Розширення глобального Window. Додайте у глобальний об’єкт Window властивість appName: string.Потім у коді виведіть її в консоль.',
    checkFunction: function () {
      interface Window {
        appName: string;
      }
      window.appName = 'My app';

      console.log(window.appName);

      document.write(
        `<div>${window.appName}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
      //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
    },
  },
  {
    id: '3.3_6',
    question: 'Objects extends',
    checkFunction: function () {
      interface IA {
        a: number;
      }
      interface IB {
        b: number;
      }
      interface IC extends IA, IB {
        c: string;
      }
      const object: IC = {
        a: 10,
        b: 34,
        c: 'ok',
      };
      console.log(object);
      document.write(
        `<div>${JSON.stringify(
          object,
        )}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '3.3_7',
    question:
      'Розширення об’єкта. Опишіть базовий Product (назва, ціна) і розширте його FoodProduct з додатковим полем expirationDate.',
    checkFunction: function () {
      // Запит режиму
      const mode = prompt('Оберіть режим реалізації:\n1 - interface\n2 - type');

      // Виведення через інтерфейси
      if (mode === '1' || mode?.toLowerCase() === 'interface') {
        interface IProduct {
          title: string;
          price: number;
        }

        interface IFoodProduct extends IProduct {
          expirationDate: string;
        }

        const productOne: IFoodProduct = {
          title: 'Tea',
          price: 233,
          expirationDate: new Date().toLocaleDateString(),
        };

        console.log('Interface version:', productOne);
        document.write(
          `<div><strong>Варіант через interface:</strong><br>${JSON.stringify(
            productOne,
          )}</div><div><a href="../components/lesson3.html">Повернутися</a></div>`,
        );

        // Виведення через type
      } else if (mode === '2' || mode?.toLowerCase() === 'type') {
        type Product = {
          title: string;
          price: number;
        };

        type ExpirationDate = {
          expirationDate: string;
        };

        type FoodProduct = Product & ExpirationDate;

        const productTwo: FoodProduct = {
          title: 'Tea',
          price: 233,
          expirationDate: new Date().toLocaleDateString(),
        };

        console.log('Type version:', productTwo);
        document.write(
          `<div><strong>Варіант через type:</strong><br>${JSON.stringify(
            productTwo,
          )}</div><div><a href="../components/lesson3.html">Повернутися</a></div>`,
        );
      } else {
        alert('Режим не розпізнано. Спробуйте ще раз.');
      }
    },
  },
  {
    id: '3.3_8',
    question:
      'Створіть тип Point2D з полями x і y. Потім зробіть тип Point3D, що розширює Point2D.',
    checkFunction: function () {
      const MIN_VALUE = -100;
      const MAX_VALUE = 100;

      function limitValue(value: number): number {
        if (isNaN(value)) return 0;
        if (value < MIN_VALUE) {
          alert(`Значення менше за ${MIN_VALUE} Автоматично вставлено ${MIN_VALUE}`);
          return MIN_VALUE;
        }
        if (value > MAX_VALUE) {
          alert(`Значення менше за ${MAX_VALUE} Автоматично вставлено ${MAX_VALUE}`);
          return MAX_VALUE;
        }
        return value;
      }

      const axisX = limitValue(
        parseFloat(prompt(`Введіть координату X (від ${MIN_VALUE} до ${MAX_VALUE}):`) || '0'),
      );
      const axisY = limitValue(
        parseFloat(prompt(`Введіть координату Y (від ${MIN_VALUE} до ${MAX_VALUE}):`) || '0'),
      );
      const axisZ = limitValue(
        parseFloat(prompt(`Введіть координату Z (від ${MIN_VALUE} до ${MAX_VALUE}):`) || '0'),
      );

      interface IPoint2D {
        x: number;
        y: number;
      }
      interface IPoint3D extends IPoint2D {
        z: number;
      }

      const point: IPoint3D = {
        x: axisX,
        y: axisY,
        z: axisZ,
      };

      console.log('Point3D object;', point);
      document.write(
        `<div>Результат:${JSON.stringify(
          point,
        )}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '3.3_9',
    question:
      'Створіть union-тип Shape для трьох фігур:circle (радіус)square (довжина сторони)rectangle (ширина й висота). Напишіть функцію getArea(shape: Shape): number, яка обчислює площу.',
    checkFunction: function () {
      type Shape =
        | {figure: 'circle'; radius: number}
        | {figure: 'square'; side: number}
        | {figure: 'rectangle'; width: number; height: number};

      function getArea(shape: Shape): number {
        let area: number = 0;
        switch (shape.figure) {
          case 'circle':
            area = Math.PI * Math.pow(shape.radius, 2);
            break;

          case 'square':
            area = Math.pow(shape.side, 2);
            break;

          case 'rectangle':
            area = shape.width * shape.height;
            break;

          default:
            const _ac: never = shape;
            break;
        }
        return area;
      }

      const figure = prompt(
        'Оберіть фігуру: circle (коло), square (квадрат), rectangle (прямокутник)',
      )?.toLowerCase();

      let shape: Shape;

      switch (figure) {
        case 'circle':
          const radius = parseFloat(prompt('Введіть радіус кола:') || '0');
          shape = {figure: 'circle', radius};
          break;

        case 'square':
          const side = parseFloat(prompt('Введіть довжину сторони квадрата:') || '0');
          shape = {figure: 'square', side};
          break;

        case 'rectangle':
          const width = parseFloat(prompt('Введіть ширину прямокутника:') || '0');
          const height = parseFloat(prompt('Введіть висоту прямокутника:') || '0');
          shape = {figure: 'rectangle', width, height};
          break;

        default:
          alert('Такої фігури немає');
          throw new Error('Невірно вказаний тип фігури');
      }
      const area = getArea(shape);
      console.log(`Площа фігури ${shape.figure}: ${area.toFixed(2)}`);

      document.write(`
        <div><strong>Тип фігури: ${shape.figure}</strong></div>
        <div><strong>Площа: ${area.toFixed(2)}</strong></div>
        <div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
    },
  },
  {
    id: '3.3_10',
    question:
      'Опишіть форму реєстрації з полями id (тільки для читання), name, email, а також опціональним phone',
    checkFunction: function () {
      interface IUser {
        readonly id: string;
        name: string;
        email: string;
        phone?: string;
      }
      const userOne: IUser = {
        id: '23232',
        name: 'Ivan',
        email: 'ajaaajaja@mcom',
        phone: '1232465',
      };
      console.log(userOne);

      document.write(
        `<div>${JSON.stringify(
          userOne,
        )}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '3.3_11',
    question:
      'Описати типи співробітників та створити тип CompanyEmployee, використовуючи перетини та об’єднання.',
    checkFunction: function () {
      type Person = {name: string; id: number};
      type Manager = {department: string};
      type Engineer = {skills: string[]};
      type Intern = {mentor: string};
      type WorkType = {status: 'fullTime' | 'partTime'};
      type CompanyEmployee = (Manager | Engineer | Intern) & Person & WorkType;

      function createEmloyee(): CompanyEmployee {
        const name = prompt('Введіть ім’я співробітника:') || 'Unknown';
        const id = parseInt(prompt('Введіть ID співробітника')) || 0;

        const role = prompt('Оберіть тип співробітника: manager, engineer, intern')?.toLowerCase();

        let specificField: Manager | Engineer | Intern;

        switch (role) {
          case 'manager':
            const department = prompt('Введіть відділ:') || 'General';
            specificField = {department};
            break;

          case 'engeneer':
            const skillsInput = prompt('Введіть навички через кому:') || '';
            const skills = skillsInput.split(', ').map((s) => s.trim());
            specificField = {skills};
            break;

          case 'intern':
            const mentor = prompt('Введіть ім’я наставника') || 'Unknown';
            specificField = {mentor};
            break;

          default:
            alert('Невірний тип співробітника!');
            throw new Error('Невірний тип співробітника');
        }

        const statusInput = prompt('Введіть статус: fullTime або partTime') || 'fullTime';
        const status: WorkType['status'] = statusInput === 'partTime' ? 'partTime' : 'fullTime';

        const employee: CompanyEmployee = {name, id, status, ...specificField};
        return employee;
      }
      const newEmployee = createEmloyee();
      console.log(newEmployee);
      document.write(
        `<div><strong>Інформація про співробітника:</strong></div>
        <pre>${JSON.stringify(newEmployee, null, 2)}</pre>
        <div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`,
      );
    },
  },

  //     {
  //   id: '3.3_',
  //   question: '',
  //   checkFunction: function () {
  //     //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
  //   },}
];

function showQuestion(questionId: string): void {
  const questionObj = questions.find((question) => question.id === questionId);

  if (questionObj) {
    questionObj.checkFunction();
  } else {
    const el = document.getElementById('question-content');
    if (el) el.innerText = 'Це питання відсутнє';
  }
}
