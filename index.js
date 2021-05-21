var readLineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var gameName= chalk.yellow.bold(" \"Do you know Sandee quiz\"");

var userName = readLineSync.question(chalk.yellow.bold("What is your name? "));
console.log("welcome " + userName + " to" + gameName);

var highscore = [
  {
    name: "saptarshi",
    score: 5
  },
  {
    name: "sandee",
    score: 5
  }]



var quiz = [{
  question: "What is Sandee's age? ",
  answer: "22",
  answer2: "twenty two"
},
{
  question: "what is Sandee's favourite food?\n a) Chicken\n b) Dosa\n c) Egg-rice\n",
  answer: "a",
  answer2: "Chicken"
},
{
  question: "which movies Sandee liked the most?\n a) Romantic\n b) Horror\n c) Comedy\n",
  answer: "b",
  answer2: "Horror"
},
{
  question: "what is Sandee's favourite color?\n a) Red\n b) Blue\n c) Black\n",
  answer: "c",
  answer2: "Black"
},
{
  question: "what is Sandee's favourite fruit?\n a) Mango\n b) Banana\n c) Grapes\n",
  answer: "b",
  answer2: "Banana"
}];



function quizFunction(quizQuestion, answer, answer2){
  var userAnswer = readLineSync.question(quizQuestion);

  if(userAnswer === answer || userAnswer === answer2){
    console.log("correct answer");
    score = score + 1
    console.log("current score: " + score);
  }else{
    console.log("incorrect answer");
    console.log("current score: " + score);
  }
  console.log("----------");
}

function game(){
  for(var i=0; i < quiz.length; i++){
    var currentQuestion = quiz[i];
  quizFunction(currentQuestion.question, currentQuestion.answer, currentQuestion.answer2);
}
}

function showScores() {
  console.log("Your total score is : ", score);
  console.log("\n")
  console.log("Highscore are ")
  for(var i = 0; i < highscore.length; i++){
    var curentHighscore = highscore[i];
    console.log(curentHighscore.name + " : " + curentHighscore.score);
  }
  
}

game();
showScores();






