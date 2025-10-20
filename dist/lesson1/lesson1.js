"use strict";
const questions = [
    {
        id: '1.1_1',
        question: 'Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.',
        checkFunction: function () {
            function saveData() {
                const obj = {
                    data: [
                        {
                            id: 1,
                            name: 'Олег',
                            grade: 9,
                            attendance: 95,
                            date: '2025-10-03',
                        },
                        {
                            id: 2,
                            name: 'Марія',
                            grade: 7,
                            attendance: 88,
                            date: '2025-10-03',
                        },
                        {
                            id: 3,
                            name: 'Андрій',
                            grade: 10,
                            attendance: 100,
                            date: '2025-10-03',
                        },
                        {
                            id: 4,
                            name: 'Ірина',
                            grade: 8,
                            attendance: 90,
                            date: '2025-10-03',
                        },
                        {
                            id: 5,
                            name: 'Владислав',
                            grade: 6,
                            attendance: 75,
                            date: '2025-10-03',
                        },
                    ],
                };
                localStorage.setItem('data', JSON.stringify(obj));
                console.log('Данні збережено');
                alert('Данні збережено');
            }
            function loadRaw() {
                const raw = localStorage.getItem('data');
                if (!raw) {
                    console.log('Данні відсутні');
                    return null;
                }
                return raw;
            }
            function parseJson(raw) {
                let saved;
                try {
                    saved = JSON.parse(raw);
                }
                catch (error) {
                    console.error('Помилка парсингу JSON:', error);
                    return null;
                }
                return saved;
            }
            function validateStructure(obj) {
                return !!obj && typeof obj === 'object' && 'data' in obj;
            }
            function getSecondValue(wrapper) {
                wrapper.data.map((student) => {
                    const keys = Object.keys(student);
                    const secondKey = keys[1];
                    const value = student[secondKey];
                    if (typeof value === 'string') {
                        console.log(`Рядок: ${value}, довжина рядка: ${value.length}`);
                        document.write(`<div>${`Рядок 2: ${value}, довжина рядка: ${value.length}`}</div>`);
                    }
                    else if (typeof value === 'number') {
                        console.log(`Число: ${value}, парність: ${value % 2 === 0}`);
                        document.write(`<div>${`Число: ${value}, парність: ${value % 2 === 0}`}</div>`);
                    }
                    return value;
                });
                document.write(`<div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
            }
            saveData();
            const raw = loadRaw();
            if (raw !== null) {
                const dataObj = parseJson(raw);
                console.log('Збережені данні:', dataObj);
                alert('Подивись консоль (F12), там дані з localStorage');
                if (validateStructure(dataObj)) {
                    getSecondValue(dataObj);
                }
                else {
                    console.error('Структура даних не відповідає очікуваній DataWrapper');
                }
            }
        },
    },
    {
        id: '1.1_2',
        question: 'Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Вивести на екран усі поля та їх значення.',
        checkFunction: function () {
            function saveData() {
                const obj = {
                    data: [
                        { id: 1, name: 'Анна', age: 23, score: 87, active: true },
                        { id: 2, name: 'Петро', age: 29, score: 91, active: false },
                        { id: 3, name: 'Ігор', age: 31, score: 76, active: true },
                        { id: 4, name: 'Марія', age: 27, score: 84, active: true },
                        { id: 5, name: 'Олена', age: 25, score: 95, active: false },
                    ],
                };
                localStorage.setItem('data', JSON.stringify(obj));
                console.log('Данні збережено');
                alert('Данні збережено');
            }
            saveData();
            let raw = localStorage.getItem('data');
            if (!raw) {
                console.log('Данні відсутні');
                return;
            }
            let parsed;
            try {
                parsed = JSON.parse(raw);
            }
            catch (error) {
                console.log('Помилка парсингу JSON', error);
                return;
            }
            const items = parsed.data;
            if (!Array.isArray(items)) {
                console.log('Ключ "data" не містить масив');
                return;
            }
            items.forEach((obj) => {
                console.log(`Відомості про ${obj.name}:`);
                console.log(JSON.stringify(obj, null, 2));
                document.write(`<div>Відомості про ${obj.name}: ${JSON.stringify(obj, null, 2)}</div>`);
            });
            document.write(`<div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '1.1_3',
        question: 'Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.',
        checkFunction: function () {
            var _a, _b, _c, _d, _e, _f;
            const productOne = ((_a = prompt('Введіть назву першого продукту')) !== null && _a !== void 0 ? _a : 'Продукт 1').trim();
            const priceOne = parseFloat((_b = prompt('Вкажіть ціну продукту')) !== null && _b !== void 0 ? _b : '');
            const qtyOne = parseFloat((_c = prompt('Вкажіть кількість')) !== null && _c !== void 0 ? _c : '');
            const productTwo = ((_d = prompt('Введіть назву другого продукту')) !== null && _d !== void 0 ? _d : 'Продукт 2').trim();
            const priceTwo = parseFloat((_e = prompt('Вкажіть ціну продукту')) !== null && _e !== void 0 ? _e : '');
            const qtyTwo = parseFloat((_f = prompt('Вкажіть кількість')) !== null && _f !== void 0 ? _f : '');
            const totalOne = priceOne * qtyOne;
            const totalTwo = priceTwo * qtyTwo;
            const total = totalOne + totalTwo;
            console.log('Чек на покупку:');
            console.log(`${productOne} — ${qtyOne} шт × ${priceOne} = ${totalOne.toFixed(2)}`);
            console.log(`${productTwo} — ${qtyTwo} шт × ${priceTwo} = ${totalTwo.toFixed(2)}`);
            console.log(`Загальна сума: ${total.toFixed(2)}`);
            document.write(`
      <div>Чек на покупку:</div>
      <div>${productOne} — ${qtyOne} шт × ${priceOne} = ${totalOne.toFixed(2)}</div>
      <div>${productTwo} — ${qtyTwo} шт × ${priceTwo} = ${totalTwo.toFixed(2)}</div>
      <div><b>Загальна сума: ${total.toFixed(2)}</b></div>
      <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>
    `);
        },
    },
    {
        id: '1.1_4',
        question: 'Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.',
        checkFunction: function () {
            const days = [
                'Понеділок',
                'Вівторок',
                'Середа',
                'Четвер',
                "П'ятниця",
                'Субота',
                'Неділя',
            ];
            const raw = prompt('Вкажіть день (назву або числове значення)');
            function isWorkingDay(input) {
                if (input === null)
                    return 'Ввід скасовано';
                const value = input === null || input === void 0 ? void 0 : input.trim();
                if (value === '')
                    return 'Порожній ввід';
                const num = Number(value);
                let dayName;
                let dayType;
                if (!Number.isNaN(num) && Number.isFinite(num) && Number.isInteger(num)) {
                    const i = num - 1;
                    if (i < 0 || i > 6)
                        return 'Невідомий день (число поза діапазоном 1–7)';
                    dayName = days[i];
                    dayType = i >= 0 && i <= 4 ? 'Робочий день' : 'Вихідний день';
                    return `${dayName} - ${dayType}`;
                }
                const lower = value === null || value === void 0 ? void 0 : value.toLowerCase();
                const index = days.findIndex((d) => d.toLowerCase() === lower);
                if (index === -1)
                    return 'Невідомий день (назва не розпізнана)';
                dayType = index >= 0 && index <= 4 ? 'Робочий день' : 'Вихідний день';
                return index >= 0 && index <= 4 ? 'Робочий день' : 'Вихідний день';
            }
            const result = isWorkingDay(raw);
            console.log(isWorkingDay(raw));
            console.log(`Користувач вибрав: ${raw} і це ${result}`);
            document.write(`
        <div>Користувач вибрав: ${raw} і це ${result}</div>
        <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>
      `);
        },
    },
    {
        id: '1.1_5',
        question: 'Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок».  Пірахувати чого було більше чисел чи рядків і вивести останнє значення',
        checkFunction: function () {
            let numberCount = 0;
            let stringCount = 0;
            let lastValue = '';
            const randNumber = [];
            for (let i = 0; i < 10; i++) {
                const isString = Math.random() < 0.5;
                if (isString) {
                    lastValue = 'Ok';
                    stringCount++;
                }
                else {
                    const num = Math.floor(Math.random() * 100);
                    lastValue = num;
                    numberCount++;
                }
                randNumber.push(lastValue);
            }
            const more = numberCount > stringCount
                ? 'Було більше чисел'
                : numberCount < stringCount
                    ? 'Більше було рядків'
                    : 'Однакова кількість чисел і рядків';
            console.log('Згенеровані значення:', randNumber);
            console.log(`Кількість рядків: ${stringCount}, кількість чисел: ${numberCount}`);
            console.log(`Останнє значення: ${lastValue}`);
            console.log(more);
            document.write(`

      <div>Згенеровані значення: ${randNumber.join(', ')}</div>
      <div>Кількість рядків: ${stringCount}, кількість чисел: ${numberCount}</div>
      <div>Останнє значення: ${lastValue}</div>
      <div> ${more}</div>

      <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>
      `);
        },
    },
    {
        id: '1.1_6',
        question: 'Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH"). Тобто якщо вводять гривні, то перевести у долари і євро. А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи. ',
        checkFunction: function () {
            var _a, _b;
            //const UAH: number = 1;
            const USD = 41.55;
            const EUR = 48.65;
            let amount = parseFloat((_a = prompt('Введіть суму грошей')) !== null && _a !== void 0 ? _a : '0');
            let currency = ((_b = prompt('Введіть валюту (UAH, USD, EUR)')) !== null && _b !== void 0 ? _b : '').trim().toUpperCase();
            let resultUs = '';
            let resultEur = '';
            switch (currency) {
                case 'UAH':
                    resultUs = `${(amount / USD).toFixed(2)} USD`;
                    resultEur = `${(amount / EUR).toFixed(2)} EUR`;
                    break;
                case 'USD':
                    const uahFromUsd = amount * USD;
                    resultUs = `${uahFromUsd.toFixed(2)} UAH`;
                    resultEur = `${(uahFromUsd / EUR).toFixed(2)} EUR`;
                    break;
                case 'EUR':
                    const uahFromEur = amount * EUR;
                    resultUs = `${uahFromEur.toFixed(2)} UAH`;
                    resultEur = `${(uahFromEur / USD).toFixed(2)} USD`;
                    break;
                default:
                    document.write(`
            <div>Невірна валюта. Введіть UAH, USD або EUR</div> 
            <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>
            `);
                    return;
            }
            document.write(`
       <div>Ви ввели: ${amount} ${currency}</div>
       <div>Це дорівнює:</div>
       <div>${resultUs}</div>
       <div>${resultEur}</div>
       <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
        },
    },
    // ========================================================================================================================================
    {
        id: '1.2_1',
        question: '',
        checkFunction: function () {
            //document.write(`<div>${}</div><div><a href="../components/lesson9.html">Повернутися до уроку</a></div>`)
        },
    },
    // ========================================================================================================================================
    {
        id: '1.3_1',
        question: '',
        checkFunction: function () {
            let input = 'test';
            if (typeof input === 'string') {
                console.log(`String input: ${input.trim()}`);
            }
            else if (typeof input === 'number') {
                console.log(`String input: ${input * 2}`);
            }
            // document.write(`
            //   <div>${userName} </div>
            //   <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`)
        },
    },
    {
        id: '1.3_2',
        question: "Вводиться ім'я користувача. (Гість якщо не введе). Привітати користувача",
        checkFunction: function () {
            var _a, _b;
            const userName = (_a = prompt('Введіть ім*я користувача')) !== null && _a !== void 0 ? _a : 'Гість';
            const userAge = parseInt((_b = prompt('Вік користувача')) !== null && _b !== void 0 ? _b : '0');
            const minAge = 17;
            if (userAge > minAge) {
                console.log(`Hello, ${userName} your age are: ${userAge}`);
                document.write(`<div><p>Hello, ${userName} your age are: ${userAge}</p></div>
        <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
            }
            else {
                console.log(`Hello, ${userName} your age are: ${userAge}`);
                document.write(`<div><p>Hello, ${userName} your age are: ${userAge}, acsess denied!</p></div>
        <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
            }
        },
    },
    {
        id: '1.3_3',
        question: 'Створити змінні для збереження інформації про книгу: title (рядок), pages (число), isPublished (булеве).',
        checkFunction: function () {
            var _a, _b;
            let title;
            let pages;
            let isPublished;
            const book = (_a = prompt('Введіть назву книги')) !== null && _a !== void 0 ? _a : 'Без назви';
            const bookPages = (_b = prompt('Введіть кількість сторінок')) !== null && _b !== void 0 ? _b : '0';
            title = book;
            pages = bookPages ? parseInt(bookPages) : 0;
            isPublished = true;
            console.log(`${title}, ${pages}, ${isPublished}`);
            document.write(`
        <div>${title}, ${pages}, ${isPublished}</div>
        <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '1.3_4',
        question: 'Додайте типи даних',
        checkFunction: function () {
            let userName = 'Oleg';
            let userAge = 37;
            let isAdmin = false;
            let empty = null;
            let notAssigned = undefined;
            let id = Symbol('undefined');
            let bigNumber = `9007199254740993n`;
            // console.log(typeof(userName));
            // document.write(`<div>${}</div><div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`)
        },
    },
    {
        id: '1.3_5',
        question: 'Обчисти периметр трикутника',
        checkFunction: function () {
            let a = parseFloat(prompt('Введіть сторону a трикутника'));
            let b = parseFloat(prompt('Введіть сторону b трикутника'));
            let c = parseFloat(prompt('Введіть сторону c трикутника'));
            let p = a + b + c;
            console.log(`Периметр трикутника: ${p}`);
            document.write(`
        <div>Периметр трикутника: ${p}</div>
        <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '1.3_6',
        question: 'Величина випадковим чином може отримувати значенян рядка, або числа, або об’єкта',
        checkFunction: function () {
            let val;
            const randNum = Math.floor(Math.random() * 4);
            switch (randNum) {
                case 1:
                    val = 'Hello';
                    break;
                case 2:
                    val = 7;
                    break;
                case 3:
                    val = { p1: 11, p2: 22 };
                    break;
            }
            if (typeof val === 'string')
                console.log(val.length);
            else if (typeof val === 'number')
                console.log(val * val);
            else if (typeof val === 'object')
                console.log('name' in val);
            document.write(`
        <div>Рядок довжиною:${val}</div>
        <div>Квадрат числа:${val}</div>
        <div>Привіт, ${val}</div>
        <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '1.3_7',
        question: 'Користувач вводить ім’я. Якщо відмовиться, то заборонити доступ',
        checkFunction: function () {
            const userName = prompt('Вкажіть імя користувача');
            let r = userName === null || userName === void 0 ? void 0 : userName.length;
            if (userName)
                document.write(`
         <div>Привіт ${userName}. У твоєму імені ${r} букв.</div>
         <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
            else
                document.write(`
         <div>Bye!</div>
         <div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`);
        },
    },
    // {
    //   id: 1.3_1,
    //   question: '',
    //   checkFunction: function () {
    //     //document.write(`<div>${}</div><div><a href="../components/lesson1.html">Повернутися до уроку</a></div>`)
    //   },
    // },
];
function showQuestion(questionId) {
    const questionObj = questions.find((question) => question.id === questionId);
    if (questionObj) {
        questionObj.checkFunction();
    }
    else {
        document.getElementById('question-content').innerText = 'Це питання відсутнє';
    }
}
//# sourceMappingURL=lesson1.js.map