const question = [
    {
        question: 'Какой из этих языков программирования является языком разметки?',
        answers: ["js", "html", "css", "java"],
        correct: "html",
    },
    {
        question: 'Какой из этих языков программирования является языком стилей?',
        answers: ["js", "html", "css", "java"],
        correct: "css",
    },
    {
        question: 'Какой из этих языков программирования является языком программирования? [WEB]',
        answers: ["js", "html", "css", "java"],
        correct: "js",
    }
]

let indexQuestion = 0;
let indexAnswer = 0;
let score = 0;

$(document).ready(function(){
    $('#test-start').click(function(){
        console.log('тест')
        $(".modal-test").fadeIn(800);
    })

    $('.test__btn-close').click(function(){
        $(".modal-test").fadeOut(800);
    })

    $('.test__btn').click(function(){
        if ($('.test__btn>.test__link').text() === 'Начать тест'){
            $(".test__title").css('display', 'none'); // В оригинале двойные кавычки
            $(".test__text").css('display', 'none');  // В оригинале двойные кавычки
            showQuestion(indexQuestion);

        }
        else if ($('.test__btn>.test__link').text() === 'Следующий вопрос'){
            let selectAnswer = $('.variant:checked').next('span').text();
            console.log(selectAnswer);
            let correctAnswer = question[indexQuestion].correct;
            console.log(correctAnswer);

            if(selectAnswer === correctAnswer){
                score++;
            }

            indexQuestion++;
            if(indexQuestion < question.length){
                showQuestion(indexQuestion);
            }
            else{
                $('.test__question').text(`Вы набрали ${score} из ${question.length}`);
                $('.test__answers').hide();
                $('.test__btn').hide();
                $('.test__btn-close').show();
                $('.test__btn>.test__link').text('Завершить тест');
                indexQuestion = 0;
                score = 0;
            }
        }
        else{
            $(".modal-test").fadeOut(800);
            $(".test__title").css('display', 'block'); // В оригинале двойные кавычки
            $(".test__text").css('display', 'block');  // В оригинале двойные кавычки
            indexQuestion = 0;
            score = 0;
        }
    })
})

function showQuestion(index){
    const questionObj = question[index];
    $('.test__question').show().text(questionObj.question);
    $('.test__answers').show();
    console.log(questionObj.answers)
    questionObj.answers.forEach((answerText, index) => {
    $(`.test_variant${index + 1}+span`).text(answerText)
    })
    $('.test__btn>.test__link').text('Следующий вопрос');
    $('.variant').prop('checked', false);
}