//getting name
var name=prompt("Hello there. I'm in command here, what's your name?");
//what kind of soldier
var attackType=prompt("Glad you're here "+name+", the attack on Endor is about to begin. Are you a pilot, infintry, or Jedi? (p/i/j)");
//attack as a pilot
if (attackType==='p') {
   var strategy=prompt("Good to hear, we are short on pilots. You'll be with red squadron! Now get out there and fight! It looks like the Death Star is about to fire! Should you attack the Death Star's core or run away and abandon the rebellion? (a/r)");
   if (strategy==='a') {
     console.log("You've destroyed the Death Star!!! The rebellion has won!!!")
   } else if (strategy==='r') {
     console.log("The rebellion is lost because of you...")
   } else {
     console.log("Get back in the fight pilot!")
   }
//attack as infintry
} else if (attackType==='i') {
  var battles=prompt("Oo-raw soldier! We are outnumberd and outgunned, but we have the element of surprise on our side. We are looking for commanders, how many battles have you fought?(#)");
  if (battles<=2) {
    console.log("You still seem a little green, how about following Han and Chewi to destroy the shield generators.");
  } else if (battles<=9) {
    console.log("Sir, we will have you lead the Ewoks against the Empire's heavy infintry, Sir!");
  } else if (battles>14) {
    console.log("You must have been fighting since the clone wars! We'll have you assist command.")
  } else {
    console.log("Not sure we need your help. Stay out of the way.")
  }
//attack as a jedi
} else if (attackType==='j') {
  console.log("You know what you need to do. May the Force be with you.");
} else {
  console.log("Not sure we need your help. Stay out of the way.");
}
