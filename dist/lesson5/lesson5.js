const questions = [
    {
        id: '3.1_1',
        question: 'Перше питання',
        checkFunction: function () {
            // document.write(`<div>${}</div><div><a href="../components/lesson2.html">Повернутися до уроку</a></div>`)
        },
    },
    {
        id: '3.2_1',
        question: 'Друге питання',
        checkFunction: function () {
            // ...
        },
    },
    {
        id: '3.3_1',
        question: 'Третє питання',
        checkFunction: function () {
            // ...
        },
    },
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
export { showQuestion };
//# sourceMappingURL=lesson5.js.map