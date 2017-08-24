var questions = [{
    question: "Who is considered the father of national parks'?",
    choices: ['John Muir', 'James Muir', 'George Washington', 'Ronald Wilkerson'],
    correctAnswer: 1
}, {
    question: "What is the capital of Australia?",
    choices: ["Melbourne", "Sydney", "Canberra", "Queensland", "Christchurch"],
    correctAnswer: 2
}, {
    question: "Who is the prime minister of the U.K.?",
    choices: ['Tony Blair', 'David Cameron', 'Nicolas Sarkozy', 'Gordon Brown', 'Sir John Major'],
    correctAnswer: 1
}, {
    question: "What is the first perfect number?",
    choices: [38, 6, 0, 256, 28],
    correctAnswer: 1
}, {
    question: "What colors are on the flag of Norway?",
    choices: ["red and blue", "red and white", "red, white, and silver", "red, white, and blue", "blue and gold"],
    correctAnswer: 3
}, {
    question: "When did the Soviet Union collapse?",
    choices: ["14 February 1989", "1 January 1988", "31 October 1993", "26 April 1986", "26 December 1991"],
    correctAnswer: 4
}, {
    question: "What is the currency of Switzerland?",
    choices: ["franc", "Euro", "rupee", "won", "dollar"],
    correctAnswer: 0
}, {
    question: "What is the square root of 256?",
    choices: [24, 25, 30, 26, 22],
    correctAnswer: 0
}, {
    question: "What are the three main types of rocks?",
    choices: ['igneous, volcanic, quartz', 'sedimentary, igneous, metamorphic', 'feldspar, metamorphic, sedimentary', 'gargantuan, feldspar, quartz', 'None of the above'],
    correctAnswer: 1
}, {
    question: "What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    choices: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
}
];


var interval;


var currentQuestion = 0;
var score = 0; //track correct answer
var totalQuestions = questions.length;
var container = $('#content'); //Quiz div object
var questions1 = $('#questions');
var opt1 = $('#answer1');
var opt2 = $('#answer2');
var opt3 = $('#answer3');
var opt4 = $('#answer4');
var submit = $('#submit')
var retultCont = ('#score');

function countdown() {
    clearInterval(interval);
    interval = setInterval( function() {
        var timer = $('#timer').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('#timer').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
}

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questions1.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.choices[0];
    opt2.textContent = q.choices[1];
    opt3.textContent = q.choices[2];
    opt4.textContent = q.choices[3];
}

function loadNextQuestion (){
    var selecteOption = document.querySelector('input[tyep=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!')
        return;
    }
    var answer = selectedOption.value;
    if(question[currentQuestion].answer == answer){
        score ++ ;
    }
    selecteOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions -1){
        submit.textContent = 'Finish';
    }

    if(currentQuestion == totalQuestions){
        container.style.display = 'none'
        reulteCon.syle.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion)
}

$('#timer').click(function () {
    $('#timer').text("2:00");
    countdown();




});








