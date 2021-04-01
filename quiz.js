//Question bank
// Question Bank
var questionBank=[
    {
       question : 'What currency is used in Turkey?',
       option : ['Turkish Euro','Turkish Lira','Turkish Yuan','Turkish Peso'],
       answer : 'Turkish Lira'
    },
    {
        question : 'How many letters are there in the English alphabet?',
        option : ['27','24','25','26'],
        answer : '26'
     },
     {
        question : 'Which month of the year has the least number of days?',
        option : ['january','March','November','February'],
        answer : 'February'
     },
     {
      question : 'Which is the largest animal in the world?',
      option : ['Camel','Giraffe','Blue Whale','Rich'],
      answer : 'Blue Whale'
   },
   {
      question : ' In which direction does the sunrise?',
      option : ['West','East','North','South'],
      answer : 'East'
   },
   {
      question : ' How many months of the year have 31 days?',
      option : ['6','7','5','8'],
      answer : '7'
   },
   {
      question : 'Which is the smallest continent in the world?',
      option : ['Australia','New Zealand','Canada','Dubai'],
      answer : 'Australia'
   },
   {
      question : 'How many digits are there in Mathematics?',
      option : [' Hundred','Thousand',' Billion',' Infinite'],
      answer : ' Infinite'
   },
   {
      question : ' Who is the first Prime Minister of India?',
      option : ['P.J. Abdul Kalaam',' Jawaharlal Nehru','Narendra Modi','Indira Gandhi'],
      answer : 'Jawaharlal Nehru'
   },
   {
      question : 'Which is the national game of England?',
      option : ['Hockey','Cricket','Football','Golf'],
      answer : 'Cricket'
   },
   {
      question : 'How many players are there in each side of a Basket Ball team?',
      option : ['7','10','5','8'],
      answer : '5'
   },
   {
      question : 'Which country will host Cricket World Cup 2019 –',
      option : ['New Zealand','Africa','England','Australia'],
      answer : 'England'
   },
   {
      question : ' In which year Olympic Games were cancelled because of World War I?',
      option : ['1918','1919','1916','1911'],
      answer : '1916'
   },
   {
      question : 'What is the meaning of Pakistan?',
      option : ['Muslim Land','Land of five rivers','Desert','Holy Land'],
      answer : 'Holy Land'
   },
   {
      question : ' In which year did Pakistan win the Cricket World Cup?',
      option : ['1975','1987','1992','1996'],
      answer : '1992'
   },
   {
      question : 'How is Pakistan’s film industry known?',
      option : [' Bollywood','Lollywood','Mollywood','Tollywood'],
      answer : 'Lollywood'
   },
   {
      question : ' Which player is known as "Street Fighter"?',
      option : ['Wasim Akram','Imran Khan','Saeed Anwar','Javed Miandad'],
      answer : 'Javed Miandad'
   }

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');

var next=document.querySelectorAll('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

// function to display questions

function displayQuestion(){
   for(var a=0;a<span.length;a++){
      span[a].style.background='none';
   }
   question.innerHTML= 'Q.'+(i+1)+''+questionBank[i].question;
   option0.innerHTML= questionBank[i].option[0];
   option0.innerHTML= questionBank[i].option[1];
   option0.innerHTML= questionBank[i].option[2];
   option0.innerHTML= questionBank[i].option[3];
   stat.innerHTML= "Question"+' '+(i+1)+ ' '+'of'+ ''+ questionBank.length;
}
// function to calculate scores 
function calscore(e){
   if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
{
   score= score+1;
   document.getElementById(e.id).style.background='limegreen';
}
else{
   document.getElementById(e.id).style.background='tomato';
}
setTimeout(nextQuestion,300);
}

// function to display next question

function nextQuestion(){
   if(i<questionBank.length-1)
   {
      i=i+1;displayQuestion();
     }
}

displayQuestion();


var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();