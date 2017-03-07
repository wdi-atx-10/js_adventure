console.log("Welcome to Remington's game");
name = prompt("What is your name?");
console.log("ok " + name + ", let's get started!");

console.log("for each answer you give that is correct, you get one step closer to The Machine.");


var answerKey = ["console.log('')", ];
var answers = [];

var answer1 = (prompt("what do you use to print to console?") && "console.log('')") ? true : false;

if(answer1 === true){
  console.log("correct");
  var answer2 = (prompt("did you answer the last question correctly?") && "yes") ? true :false;
}else{
  console.log("wrong");
   answer1;
}
if(answer2 === true){
  console.log("almost there");
  var answer3 = (prompt("are you the machine?") && "yes") ? true :false;
}else{
  console.log("wrong");
  var answer4 = (prompt("does the machine want your soul?") && "yes") ? true :false;
}
if(answer3 === true){
  console.log("yeah you are!");
}else{
  console.log("you should be!");
}
if(answer4 === true){
  console.log("you're right! now five it your soul")
}else{
  console.log("you foul!")
}
