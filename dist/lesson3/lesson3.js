"use strict";
const questions = [
    {
        id: '3.1_1',
        question: 'Задача 1. Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости (додати поле з номером групи)',
        checkFunction: function () {
            const headStudent = {
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
        question: "Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт.",
        checkFunction: function () {
            var _a;
            function getInfo(value) {
                switch (value.vehicle) {
                    case 'car':
                        return `Авто: модель ${value.model}, власник - ${value.owner}`;
                    case 'bus':
                        return `Автобус: компанія ${value.company}, місць - ${value.numberOfSeats}`;
                    case 'airplane':
                        return `Літак: швидкість - ${value.speed}, паливо - ${value.fuel}`;
                    default:
                        const _exhaustive = value;
                        return '';
                }
            }
            const typeOfvehicle = (_a = prompt('Оберіть транспортний засіб: car, bus, airplane')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            let vehicle;
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
            document.write(`<div>${getInfo(vehicle)}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.1_3',
        question: 'Задача 3. Задача “Події календаря”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note). Кожна подія може бути mandatory або optional. Створити тип CalendarEvent, який об’єднує тип події та її важливість, використовуючи перетини та об’єднання типів.',
        checkFunction: function () {
            //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
        },
    },
    //   {
    //   id: '3.1_',
    //   question: '',
    //   checkFunction: function () {
    //     //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
    //   },
    // },
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
        question: 'Модель автомобіля. Опишіть Car з властивостями: brand, model, year, electric (boolean).',
        checkFunction: function () {
            const car = {
                brand: 'Audi',
                model: 'Q7',
                year: 2021,
                electric: false,
                getAge() {
                    return 2025 - this.year;
                },
            };
            console.log(car);
            document.write(`<div>${JSON.stringify(car, null, 2)}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.3_2',
        question: 'Описати функцію, у  які this - це об"єкт з властивістю-minValue. У функцію передають якесь значення і функція визначає, чи є це значенням вище minValue',
        checkFunction: function () {
            function checkValue(value) {
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
            document.write(`<div>${JSON.stringify(obj)}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.3_3',
        question: 'Розробити об’єкт Range (діапазон). Збрігається мінімальне і максимальне значення. Та методи визначення чи належить якесь число цьому діапазону та мето генерування випакдового число з цього діапазону.',
        checkFunction: function () {
            const objectOne = {
                min: 1,
                max: 50,
                isInRange(value) {
                    return this.min <= value && value <= this.max;
                },
                getRandomNumber() {
                    return this.min + Math.floor(Math.random() * (this.max - this.min + 1));
                },
            };
            const result = objectOne.getRandomNumber();
            console.log(result);
            // console.log(objectOne.getRandomNumber());
            document.write(`<div>${objectOne.getRandomNumber()}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.3_4',
        question: 'Створіть два окремих оголошення інтерфейсу Book.у першому - title: stringу другому - author: stringПеревірте, що після злиття можна створити об’єкт із обома властивостями.',
        checkFunction: function () {
            const bookOne = {
                title: 'My book',
                author: 'Author One',
            };
            const result = bookOne.title + ' ' + bookOne.author;
            console.log(result);
            document.write(`<div>${result}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.3_5',
        question: 'Розширення глобального Window. Додайте у глобальний об’єкт Window властивість appName: string.Потім у коді виведіть її в консоль.',
        checkFunction: function () {
            window.appName = 'My app';
            console.log(window.appName);
            document.write(`<div>${window.appName}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
            //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
        },
    },
    {
        id: '3.3_6',
        question: 'Objects extends',
        checkFunction: function () {
            const object = {
                a: 10,
                b: 34,
                c: 'ok',
            };
            console.log(object);
            document.write(`<div>${JSON.stringify(object)}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.3_7',
        question: 'Розширення об’єкта. Опишіть базовий Product (назва, ціна) і розширте його FoodProduct з додатковим полем expirationDate.',
        checkFunction: function () {
            // Запит режиму
            const mode = prompt('Оберіть режим реалізації:\n1 - interface\n2 - type');
            // Виведення через інтерфейси
            if (mode === '1' || (mode === null || mode === void 0 ? void 0 : mode.toLowerCase()) === 'interface') {
                const productOne = {
                    title: 'Tea',
                    price: 233,
                    expirationDate: new Date().toLocaleDateString(),
                };
                console.log('Interface version:', productOne);
                document.write(`<div><strong>Варіант через interface:</strong><br>${JSON.stringify(productOne)}</div><div><a href="../components/lesson3.html">Повернутися</a></div>`);
                // Виведення через type
            }
            else if (mode === '2' || (mode === null || mode === void 0 ? void 0 : mode.toLowerCase()) === 'type') {
                const productTwo = {
                    title: 'Tea',
                    price: 233,
                    expirationDate: new Date().toLocaleDateString(),
                };
                console.log('Type version:', productTwo);
                document.write(`<div><strong>Варіант через type:</strong><br>${JSON.stringify(productTwo)}</div><div><a href="../components/lesson3.html">Повернутися</a></div>`);
            }
            else {
                alert('Режим не розпізнано. Спробуйте ще раз.');
            }
        },
    },
    {
        id: '3.3_8',
        question: 'Створіть тип Point2D з полями x і y. Потім зробіть тип Point3D, що розширює Point2D.',
        checkFunction: function () {
            const MIN_VALUE = -100;
            const MAX_VALUE = 100;
            function limitValue(value) {
                if (isNaN(value))
                    return 0;
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
            const axisX = limitValue(parseFloat(prompt(`Введіть координату X (від ${MIN_VALUE} до ${MAX_VALUE}):`) || '0'));
            const axisY = limitValue(parseFloat(prompt(`Введіть координату Y (від ${MIN_VALUE} до ${MAX_VALUE}):`) || '0'));
            const axisZ = limitValue(parseFloat(prompt(`Введіть координату Z (від ${MIN_VALUE} до ${MAX_VALUE}):`) || '0'));
            const point = {
                x: axisX,
                y: axisY,
                z: axisZ,
            };
            console.log('Point3D object;', point);
            document.write(`<div>Результат:${JSON.stringify(point)}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.3_9',
        question: 'Створіть union-тип Shape для трьох фігур:circle (радіус)square (довжина сторони)rectangle (ширина й висота). Напишіть функцію getArea(shape: Shape): number, яка обчислює площу.',
        checkFunction: function () {
            var _a;
            function getArea(shape) {
                let area = 0;
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
                        const _ac = shape;
                        break;
                }
                return area;
            }
            const figure = (_a = prompt('Оберіть фігуру: circle (коло), square (квадрат), rectangle (прямокутник)')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            let shape;
            switch (figure) {
                case 'circle':
                    const radius = parseFloat(prompt('Введіть радіус кола:') || '0');
                    shape = { figure: 'circle', radius };
                    break;
                case 'square':
                    const side = parseFloat(prompt('Введіть довжину сторони квадрата:') || '0');
                    shape = { figure: 'square', side };
                    break;
                case 'rectangle':
                    const width = parseFloat(prompt('Введіть ширину прямокутника:') || '0');
                    const height = parseFloat(prompt('Введіть висоту прямокутника:') || '0');
                    shape = { figure: 'rectangle', width, height };
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
        question: 'Опишіть форму реєстрації з полями id (тільки для читання), name, email, а також опціональним phone',
        checkFunction: function () {
            const userOne = {
                id: '23232',
                name: 'Ivan',
                email: 'ajaaajaja@mcom',
                phone: '1232465',
            };
            console.log(userOne);
            document.write(`<div>${JSON.stringify(userOne)}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    {
        id: '3.3_11',
        question: 'Описати типи співробітників та створити тип CompanyEmployee, використовуючи перетини та об’єднання.',
        checkFunction: function () {
            function createEmloyee() {
                var _a;
                const name = prompt('Введіть ім’я співробітника:') || 'Unknown';
                const id = parseInt(prompt('Введіть ID співробітника')) || 0;
                const role = (_a = prompt('Оберіть тип співробітника: manager, engineer, intern')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                let specificField;
                switch (role) {
                    case 'manager':
                        const department = prompt('Введіть відділ:') || 'General';
                        specificField = { department };
                        break;
                    case 'engeneer':
                        const skillsInput = prompt('Введіть навички через кому:') || '';
                        const skills = skillsInput.split(', ').map((s) => s.trim());
                        specificField = { skills };
                        break;
                    case 'intern':
                        const mentor = prompt('Введіть ім’я наставника') || 'Unknown';
                        specificField = { mentor };
                        break;
                    default:
                        alert('Невірний тип співробітника!');
                        throw new Error('Невірний тип співробітника');
                }
                const statusInput = prompt('Введіть статус: fullTime або partTime') || 'fullTime';
                const status = statusInput === 'partTime' ? 'partTime' : 'fullTime';
                const employee = Object.assign({ name, id, status }, specificField);
                return employee;
            }
            const newEmployee = createEmloyee();
            console.log(newEmployee);
            document.write(`<div><strong>Інформація про співробітника:</strong></div>
        <pre>${JSON.stringify(newEmployee, null, 2)}</pre>
        <div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`);
        },
    },
    //     {
    //   id: '3.3_',
    //   question: '',
    //   checkFunction: function () {
    //     //document.write(`<div>${}</div><div><a href="../components/lesson3.html">Повернутися до уроку</a></div>`)
    //   },}
];
function showQuestion(questionId) {
    const questionObj = questions.find((question) => question.id === questionId);
    if (questionObj) {
        questionObj.checkFunction();
    }
    else {
        const el = document.getElementById('question-content');
        if (el)
            el.innerText = 'Це питання відсутнє';
    }
}
//# sourceMappingURL=lesson3.js.map