import Product from './_1_intro/Product.js'; // (5.1_1)
import Roulette from './_private/Roulette.js'; //(5.1_2)
import Client from './_private/Client.js'; //(5.1_3)
import ButtonController from './_this/ButtonController.js'; //(5.1_4)
import TestClass from './_static/TestClass.js'; // (5.1_6)

type Question = {
  id: string;
  question: string;
  checkFunction: () => void;
};

const questions: Question[] = [
  {
    id: '5.1_1',
    question:
      'Приклад. Створити товар. Для товару зберігаються назва товару,  ціна, кількість та вартість зберігання в день. Передбачити можливість знаходження загальної вартості наявної кількості одиниць, визначення вартості зберігання для заданої кількості днів, зменшення ціни на вказану кількість відсотків та збільшення ціни на вказану кількість відсотків',
    checkFunction: function (): void {
      const productOne = new Product('Tea', 100, 34, 7);

      console.log(productOne.getTotalPrice());
      console.log(productOne.TotalPrice);
      console.log(productOne.getTotalStorePrice(7));
      console.log(productOne.reducePrice(20));
      console.log(productOne.increasePrice(10));
      console.log(String(productOne) + ' Ok');

      document.write(
        `<div>${productOne}</div><div><a href="../components/lesson5.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '5.1_2',
    question: 'Гра «Рулетка»',
    checkFunction: function (): void {
      const roulette = new Roulette(5, 1, 100);
      roulette.printScoresList();
      const results = roulette.printScoresList();
      const average = roulette.getAverage();
      const randomIndex = roulette.rotatteRoulette();
      console.log('Отримані результати:', roulette.printScoresList());
      console.log('Середнє занчення:', average);
      console.log('Випадковий номер (крутити рулетку):', randomIndex);

      document.write(`
        <div>Отримані результати: ${results.join(', ')}</div>
        <div>Середнє значення: ${average}</div>
        <div>Випадковий номер (крутити рулетку): ${randomIndex}</div>
        
        <div><a href="../components/lesson5.html">Повернутися до уроку</a></div>`);
    },
  },
  {
    id: '5.1_3',
    question: 'Створити клас «Клієнт»',
    checkFunction: function (): void {
      const clientOne = new Client('Ivan', '015168');
      const valueInput = parseFloat(prompt('Введіть суму для додавання:') || '0');
      try {
        clientOne.addMoney(valueInput);
      } catch (error) {
        console.error(error);
      }

      const withdrawInput = parseFloat(prompt('Введіть суму для зняття:') || '0');
      try {
        clientOne.withdrawMoney(withdrawInput);
      } catch (error) {
        console.error(error);
      }
      console.log(clientOne.Balance);
      // console.log(clientOne.Balance);

      document.write(
        `<div>${clientOne.Balance}</div><div><a href="../components/lesson5.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  {
    id: '5.1_4',
    question:
      'Задача. Розробити клас, який має метод для генерування випадкового числа у деякому діапазоні. Прив’язати цей метод до кнопки.',
    checkFunction: function (): void {
      const buttonController = new ButtonController(1, 100);
      const btn = document.createElement('button');
      btn.innerText = 'Go';
      btn.onclick = buttonController.getRandomNumber.bind(buttonController);
      document.body.append(btn);

      // document.write(
      //   `<div>${buttonController}</div><div><a href="../components/lesson5.html">Повернутися до уроку</a></div>`,
      // );
    },
  },
  {
    id: '5.1_5',
    question:
      '// Лічильник створених екземплярів класу. Використовується для відстеження кількості створених об’єктів певного типу.',
    checkFunction: function (): void {
      const objectNumber1 = new TestClass(
        prompt('Введіть перше число:') || 0,
        prompt('Введіть друге число:') || 0,
      );
      const objectNumber2 = new TestClass(
        prompt('Введіть друге число:') || 0,
        prompt('Введіть друге число:') || 0,
      );
      const objectNumber3 = new TestClass(
        prompt('Введіть третє число:') || 0,
        prompt('Введіть третє число:') || 0,
      );

      console.log('Кількість створених об’єктів:', TestClass.objectNumber);
      // Виведе: 3

      document.write(
        `<div>Кількість створених об’єктів: ${TestClass.objectNumber}</div><div><a href="../components/lesson5.html">Повернутися до уроку</a></div>`,
      );
    },
  },
  //==================================================================
  {
    id: '5.2_1 ',
    question: '',
    checkFunction: function (): void {
      // document.write(`<div>${}</div><div><a href="../components/lesson5.html">Повернутися до уроку</a></div>`)
    },
  },
  //==================================================================
  {
    id: '6.3_1',
    question: '',
    checkFunction: function (): void {
      // document.write(`<div>${}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`)
    },
  },
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

window.showQuestion = showQuestion;
export {showQuestion};
