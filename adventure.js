/*still a lot more to do - but this it the beginning - would like to change some stuff around and practice more with 
different types of loops */


alert("Welcome to Choose-Your-Adventure Game! In today's game, you'll be saving your kingdom, which is currently being controlled by the Evil Lord Trumpbuttson! You must pick your animal companion, pick your weapons and with some luck, you should defeat the king.");

var firstName = prompt("What is your name?");

console.log("Hello " + firstName + "!");

var firstQuestion = prompt("Are you ready for this journey, " +firstName + "?");
  if (firstQuestion == "yes"){
    console.log("Great!");
}else { 
  (firstQuestion =="no"); 
  console.log("OH, so you are a minion of Lord Trumpbuttson! You are a traitor! Your game ends here.");
}

var animalBuddy =prompt("Since you are fully ready for this task, what animal would you like to assist you on your journey? A radioactive spider named Sebastian, a meth-addicted panda named Johann, or an albino black bear named Quinn."); 
switch(animalBuddy) {
  case 'Sebastian': 
  console.log("Great choice! He loves spinning webs during the night and during the day he loves spin class!")
  break;
  case 'Johann':
  console.log("He has the instinct of a killer but the looks of a precious, cute giant panda. Don't let him near your wallet, tho.")
  break;
  case 'Quinn':
  console.log("She is moody and really hates people named Stephen. Apparently, she's had some pretty nasty ex-boyfriends.");
  break;
default: 
alert("Sorry, you can only pick one.")
}

var weaponChoice =prompt("What type of weapon would you like, " + firstName + "? A vial of Ebola or a pink-feathered boa?");

  if (weaponChoice === "Ebola"){
    console.log ("You are on your way to the castle!");
  } else if (weaponChoice === "boa") {
    console.log("Wait, what? Are you trying to use seduction as a way to dethrone the evil king? Interesting choice, we'll see how it goes.")
  }

  
var luckinessFactor = prompt("Because this task requires a lot of prayers and animal-sacrifices to Pazuzu, we need you to pick a lucky number.");
 if (luckinessFactor <= 10){
   console.log("Good choice.");
 } else  if (luckinessFactor == 666) {
     console.log("Pazuzu approves");
  } else {
     console.log("Awesome sauce");
 }


alert("You and your animal companion, the trusted " + animalBuddy + ", have made your way to the castle. You walk in and see Lord Trumpbuttson. You go into attack with your weapon of choice: " + weaponChoice +".");
 

if (luckinessFactor >=10 && weaponChoice =="Ebola"){
  console.log("You have put the vial in his coffee without him noticing");
} else if (luckinessFactor === 666 || weaponChoice === "boa"){
  console.log("You are ready to seduce the evil Lord");
} else {
  console.log("Your animal companion has betrayed you!");
}
  

