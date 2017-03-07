name = prompt("What is your name?");

money = prompt("Nice to meet you "+ name + "! But listen we gotta hurry...The cops are on your back. How much money did you steal? (choose anywhere between 1-10,000)");


if (money<=2000) {
  var high = prompt("Alright. You run out the door but gosh darn the museum is full of people. do you a) Hide behind a statue? or b) Find the closest Exit? choose a or b");

} else if (money<=7000) {
  var medium = prompt("Lock the door! You demand the Queen of England to come with you. Yall c) hide underneath the bed? or d) Ask her where the secret passage way is? choose c or d");
} else {
  var low = prompt("Quick!!!!!! Jump out the window.....Whew. you made it to the ground safe. Do you e) Hide in the bushes? or f)hop on your motorcycle? choose e or f");
}

if (high === "a") {
  alert("You sneezed you knucklehead. You blew your cover. Now you're going to jail");
} else if (high === "b") {
  var higher = prompt("You make it outside and see one of those tourist sightseeing buses. It slows down enough for you to jump on. Do you g) sit by a stranger or h) beat up the driver and take control of the bus? choose g or h");
    if (higher === "g") {
      alert("you just got away with the first potato chip ever made in the whole universe");
    } else {
      alert("Way to go numb skull! The cops just caught up to you and now you are in jail");
  }
} else if (medium === "c") {
  var mediumone = prompt("Dang! The cops just burst in. What the heck are we gonna do now, " + name + "? You look around and there are just two possibilities. Do y'all i) stay silent? or j) Does the queen end up farting and alert the cops of your whereabouts. choose i or j ");
      if(mediumone === "i"){
        alert("the cops go away. You end up falling madly in love with the queen and end up getting hitched in Vegas")
      } else {
        alert("The cops arrest the queen because it is illegal to fart in front of the queen even if you are the queen yourself");
      }
} else if (medium === "d") {
  var medium2 = prompt(name + ", You made it to the end of the passageway. But you are not safe yet. You hear some people on their way. Do you k) ditch the queen and take her private jet? or l) take the queen with you and escape on her majesty's private scooter? choose k or l ");
    if (medium2 === "k"){
      alert(name + ", you just got away with King Arthur's sword but all you were really look for was the bathroom and this was a mixup the whole time");
     } else {
        alert("you scoot on over to the closest pub and dink the finest beer and watch a game of snooker on the tele with the Queen");
      }

} else if (low === "e") {
  var lower = prompt("Damn. You have no luck today, huh. Its way to busy. Do you m) take a nap? or n) wait till it clears up and try to get away later? choose m or n ");
    if (lower === "m") {
      alert("It clears up by the time you wake up and you think to yourself... 'you know what " + name + ", this is the luckiest day in your life. You just made it out of jail like a boss'");
    } else {
      alert("Shoot! You got caught by Officer Mike, Dirk, Britney Jo, and Kollin trying to leave the scene of your crime");
    }
} else if (low === "f") {
  alert("You made it out safe and sound. Nobody will ever beleive that you just stole some peanut butter from Steve Guttenberg's house");
}
