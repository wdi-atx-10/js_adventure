//Rules

//Goal: Using what you know about data types, variables, operators, conditional blocks, and accepting user input, create a text-based game
//that allows the user to arrive at different "destinations" based on the inputs they type
//Any path the user goes down must ask them at least 3 questions (there can be more!) before they arrive at the destination
//There must be a minimum of 7 total destinations the user could arrive at based on their responses (there can be more!)
//For at least 3 (there can be more!) of the questions asked, there must be more than 2 possible user responses
//At least 1 (there can be more!) of the questions must accept a range of number values, for example any number between 1-100, etc.
//

var countries = [ "Jamaica" , "Japan", "New Zealand", "Canada", "Brazil", "Germany" , "Switzerland"]
// to call
//3 Minimum Questions to arrive at any destination

console.log (countries[0]);
//This is what you use to call a place from the Array

//Question 1 Series
name = prompt("What is your name?");
console.log(name);

//Question 2 Series
destination = prompt("Ok " + name + ".. Choose your Destination (please select one of the following)...Jamaica, Japan, New Zealand, Canada, Brazil, Germany or Switzerland?");
console.log(destination);

//Question 3 Series (Yes or No *add maybe factor)
followup = prompt(destination + " is a wonderful place to travel. If you answer the next question correctly, we can pay for your entire trip for FREE! All accomodations, travel, hotel and 1,000 dollars spending money." + " Are you in? yes / no");

//correct Answer
if (followup == "yes");
  answerYes = prompt("Awesome.. How many pairs of chromosomes does the human body have?");
if (answerYes == "23");
  prompt("you won! you won!");
// add if answer is anything outside of these paramters iterate answerYes again

//break}


//wrong answer
if (followup =="No");
prompt("better luck next time!");
