function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(choices);

var content =
[
  {question: 'Which is the third month?', choices: ['September', 'April', 'March', 'August'], correct: 3},
  {question: 'COVID-19 originated in?', choices: ['China', 'Italy', 'Iran', 'Dubai'], correct: 1},
  {question: 'What is the capital of Karnataka?', choices: ['Bangalore', 'Mumbai', 'Delhi', 'Mysore'], correct: 0},
  {question: 'Solve this equation using an algebraic method: (x + 4)( x - 4) = 9', choices: ['x = 5', 'x = 5 and x = -5', 'x = 9', 'x = 4 and x= -4'], correct: 1},
  {question: 'Who is the founder of Facebook ', choices: ['Sundar Pichai', 'Satya Nadella', 'Elon Musk', 'Mark Zuckerberg'], correct: 3},
];

var x = 0;
var y = 1;
var score = 0;

function choices() {
  if (content[x] === undefined) {
    document.querySelector('.score').textContent = 'Score: ' + score + '/5';
    document.form1.style.visibility = 'hidden';
    document.querySelector('.header').style.visibility = 'hidden';

  } else {
    var questionNumber = document.querySelector('.questionNumber');
    questionNumber.textContent = 'Question#' + y;

    var question = document.querySelector('.question');
    question.textContent = content[x]['question'];

    var choices = document.querySelectorAll('label');
    for (var i = 0; i < choices.length; i++) {
      choices[i].textContent = content[x]['choices'][i];
    }
  }
}

function next() {
  var inputs = document.querySelectorAll('input');

  if (content[x] === undefined) {
    return false;
  }

  else if (inputs[0].checked !== true && inputs[1].checked !== true && inputs[2].checked !== true && inputs[3].checked !== true) {
    alert('Please select an answer');

  } else {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true && i === content[x]['correct']) {
        score++;
      }
    inputs[i].checked = false;
  }

  x++;
  y++;
  choices();
  }
}

function back() {
  var inputs = document.querySelectorAll('input');

  if (x === 0) {
    return false;

  } else {
    x--;
    y--;
    choices();
  }
}