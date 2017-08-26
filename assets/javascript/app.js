var questions = [{
    question: "Who is considered the father of national parks'?",
    choices: ['John Muir', 'James Muir', 'George Washington', 'Ronald Wilkerson'],
    correctAnswer: 1
}, {
    question: "How much land does the national park system cover?",
    choices: ["84 Million Acres", "70 Thousand acres", "84 Miles", "800 Thousand Acres"],
    correctAnswer: 2
}, {
    question: "What was the first national park?",
    choices: ['Yellowstone', 'Moab', 'Yosemite', 'The Grand Canyon'],
    correctAnswer: 1
}, {
    question: "When was the first national park created?",
    choices: ["1028 CE", "1877 CE", "1772 CE", "1292 CE"],
    correctAnswer: 1
}, {
    question: "What river runs through the Grand Canyon?",
    choices: ["The Colorado River", "The Rio Grande", "The Canyon River", "The LA River"],
    correctAnswer: 3
}, {
    question: "What park has the deepest lake in The United States?",
    choices: ["Glacier Natioanl Park", "Lake Clark Natioanl Park", "Great Lake Natioanl Park", "Crater Lake Natioanl Park"],
    correctAnswer: 4
}, {
    question: "What national park has the largest tree in the world?",
    choices: ["Redwood Natioanl Park", "Grand Tetons Natioanl Park", "Sequoia Natioanl Park", "Joshua Tree Natioanl Park"],
    correctAnswer: 0
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








