// P L A Y E R - N A M E - I N P U T

var pName = prompt("What is your characters name?");

// C H O O S E - P R E F E R R E D - P R O N O U N S

var pronoun = prompt("What is your preferred pronoun?\n\n[ 1 ] She\n\n[ 2 ] He\n\n[ 3 ] N/A");

if (pronoun == 1) {
  var playerPronoun = "she";
  var playerPronounTwo = "she";
  var playerPronounPossessive = "her";
  var playerPronounReference = "her";
} else if (pronoun == 2) {
  var playerPronoun = "he";
  var playerPronounTwo = "he";
  var playerPronounPossessive = "his";
  var playerPronounReference = "him";
} else if (pronoun == 3) {
  var playerPronoun = pName;
  var playerPronounTwo = "they";
  var playerPronounPossessive = "their";
  var playerPronounReference = "them";
}

// G A M E - S T A R T - P R O M P T

var openingPrompt = prompt(pName + "'s" + " eyes flutter open.\n\nIt is very dark and " + playerPronounTwo + " can only make out the corners of a room.\n\nAs " + playerPronoun + " looks around, " + pName + " realizes there are four objects in front of " + playerPronounReference + "\n\n" + playerPronoun + " reaches out and grabs...\n\n[ 1 ] An old kitchen knife\n\n[ 2 ] A solar-powered flashlight\n\n[ 3 ] A ten-foot length of rope\n\n[ 4 ] Two cans of food");

// O P T I O N 1 > K N I F E > ~ ~ ~ ~ ~ ~

if (openingPrompt == 1) {
  var outcomeOne = prompt(pName + " grabs [ knife ].\n\nAs " + playerPronoun + " picks up the [ knife ], " + playerPronounTwo + " hears a loud scuttling behind " + playerPronounReference + ".\n\n" + pName + "...\n\n[ 1 ] Attacks with [ knife ]\n\n[ 2 ] Runs out of the [ left exit ] \n\n[ 3 ] Runs out of the [ right exit ]\n\n[ 4 ] Tries to reason with it");

  // ! S T A R T ! O P T I O N 1 . 1 • • • • • • • • • • 

// O P T I O N 1 . 1 > K N I F E > A T T A C K > ~ ~ ~ ~ ~ ~

  if (outcomeOne == 1) {
    var outcomeOneOne = prompt("As " + pName +" turns to face " + playerPronounPossessive + " attacker, " + playerPronounTwo + " swipes with the [ knife ].\n\nThe creature falls to the floor and gives out a last gurgle before going limp.\n\n" + pName + " recovers from the shock of the encounter.\n\n" + pName + " walks out of the [ left exit ].\n\nLooking around, " + pName + " decides to head towards...\n\n[ 1 ] the main road, out of town\n\n[ 2 ] an alleyway\n\n[ 3 ] the grocery store\n\n[ 4 ] the building " + playerPronounTwo + " just left");

// O P T I O N 1 . 1 . 1 > K N I F E > A T T A C K > M A I N - R O A D > ~ ~ ~ ~ ~ ~

   if (outcomeOneOne == 1) {
    var outcomeOneOneOne = console.log("1.1.1 \n\nTHE END");

// O P T I O N 1 . 1 . 2 > K N I F E > A T T A C K > A L L E Y W A Y # # # # # #

  } else if (outcomeOneOne == 2) {
    var outcomeOneOneTwo = prompt("1.1.2 \n\n" + pName + " heads towards a nearby alleyway. Unfortunately the alleyway is actually made of lava and burns you to death.\n\nTHE END");

// O P T I O N 1 . 1 . 3 > K N I F E > A T T A C K > G R O C E R Y - S T O R E > ~ ~ ~ ~ ~ ~ ~

  } else if (outcomeOneOne == 3) {
    var outcomeOneOneThree = prompt(pName + " heads towards a nearby grocery store. The sliding glass doors are shattered, but someone has boarded the entrance with wooden planks.\n\n" + pName + " looks around for another entrance.\n\n" + playerPronounTwo + " decide to...\n\n[ 1 ] inspect the front door more closely\n\n[ 2 ] head around the back of the building\n\n[ 3 ] head back");

// O P T I O N 1 . 1 . 4 > K N I F E > A T T A C K > S T A R T > # # # # # #

  } else if (outcomeOneOne == 4) {
    var outcomeOneOneFour = alert("1.1.4 \n\nTHE END");
  }

  // ! S T A R T ! O P T I O N 1 . 2 • • • • • • • • • • 

  // O P T I O N 1 . 2 > K N I F E > L E F T - E X I T > ~ ~ ~ ~ ~ ~

}  else if (outcomeOne == 2) {
    var outcomeOneTwo = prompt(pName + " sprints toward the [ left exit ].\n\n" + playerPronounTwo + " feels something scrape " + playerPronounPossessive + " back, but is able to outrun whatever is chasing " + playerPronounReference + ".\n\nAs " + pName + " looks around, " + playerPronounTwo + " heads towards...\n\n[ 1 ] the main road, out of town\n\n[ 2 ] an alleyway\n\n[ 3 ] the grocery store\n\n[ 4 ] the building " + playerPronounTwo + " just left");

  // O P T I O N 1 . 2. 1 > K N I F E > L E F T > M A I N - R O A D ~ ~ ~ ~ ~ ~ ~

    if (outcomeOneTwo == 1) {
      var outcomeOneOneOne = prompt(pName + " heads down the main road, out of town. Who knows what awaits " + playerPronounReference + " in this strange new reality...\n\nT H E ~ E N D");
      console.log("MAIN ROAD ENDING");

  // O P T I O N 1 . 2 . 2 > K N I F E > L E F T > A L L E Y W A Y # # # # # #

} else if (outcomeOneTwo == 2) {
    var outcomeOneTwoTwo = prompt(pName + " heads towards a nearby alleyway. Unfortunately the alleyway is actually made of lava and burns you to death.\n\nTHE END");
      console.log("ALLEYWAY ENDING\n\n1.2.2");

  // O P T I O N 1 . 2 . 3 > K N I F E > L E F T > G R O C E R Y - S T O R E ~ ~ ~ ~ ~ ~

} else if (outcomeOneThree == 3) {
  console.log("GROCERY STORY ENDING\n\n1.2.3");

  // O P T I O N 1 . 2 . 4 > K N I F E > L E F T > S T A R T # # # # # #

} else if (outcomeOneFour == 4) {
  console.log("BAD ENDING\n\n1.2.4");

  }
}

// ! S T A R T ! O P T I O N 1 . 3 • • • • • • • • • • 

  // O P T I O N 1 . 3 > R O P E - > ~ ~ ~ ~ ~ ~

    else if (outcomeOne == 3) {
      var outcomeOneThree = prompt(pName + " grabs [ rope ].\n\nAs " + playerPronoun + " picks up the [ rope ], " + playerPronounTwo + " hears a loud scuttling behind " + playerPronounReference + ".\n\n" + pName + "...\n\n[ 1 ] Tries to tie it up with [ rope ]\n\n[ 2 ] Runs out of the [ left exit ] \n\n[ 3 ] Runs out of the [ right exit ]\n\n[ 4 ] Tries to reason with it");

  // O P T I O N 1 . 3 . 1 > R O P E - > T I E - U P - > ~ ~ ~ ~ ~ ~

    } if (outcomeOneThree == 1) {
      var outcomeOneOneThree = prompt("1.3.1 \n\nTHE END");

  // O P T I O N 1 . 3 . 2 > R O P E - > L E F T - E X I T - > ~ ~ ~ ~ ~ ~

    } else if (outcomeOneThree == 2) {
      var outcomeOneOneTwo = prompt("1.3.2 \n\nTHE END");

  // O P T I O N 1 . 3 . 3 > R O P E - > R I G H T - E X I T - > # # # # # #

    } else if (outcomeOneThree == 3) {
      var outcomeOneOneThree = prompt("1.3.3 \n\nTHE END");

  // O P T I O N 1 . 3 . 4 > R O P E - > R E A S O N - > # # # # # #

    } else if (outcomeOneThree == 4) {
      var outcomeOneOneFour = prompt("1.3.4 \n\nTHE END");
    }
}
    else if (outcomeOne == 4) {
      var outcomeOneFour = prompt("[ 1 ]\n\n[ 2 ]\n\n[ 3 ]\n\n[ 4 ]");
    } if (outcomeOneFour == 1) {
      var outcomeOneOneFour = prompt("1.4.1 \n\nTHE END");
    } else if (outcomeOneFour == 2) {
      var outcomeOneOneFour = prompt("1.4.2 \n\nTHE END");
    } else if (outcomeOneFour == 3) {
      var outcomeOneOneThree = prompt("1.4.3 \n\nTHE END");
    } else if (outcomeOneFour == 4) {
      var outcomeOneOneFour = prompt("1.4.4 \n\nTHE END");
    }


// O P T I O N 2 > F L A S H L I G H T

    else if (openingPrompt == 2) {
    var outcomeTwo = prompt(pName + " grabs [ flashlight ].\n\nAs " + playerPronoun + " picks up the [ flashlight ], " + playerPronounTwo + " hears a loud scuttling behind " + playerPronounReference + ".\n\n" + pName + "...\n\n[ 1 ] Attacks with [ flashlight ]\n\n[ 2 ] Runs out of the [ left exit ] \n\n[ 3 ] Runs out of the [ right exit ]\n\n[ 4 ] Points the flashlight at the unknown entity");

// O P T I O N 2 . 1 . 1 X X X X X

    if (outcomeTwo == 1) {
      var outcomeTwoOne = console.log(pName + " attempts to fight off what appears to be a decaying human, but the [ flashlight ] is ineffective.\n\nThe last thing " + pName + " sees is the creatures teeth sinking into " + playerPronounPossessive + " face.\n\nThe creature rips into " + playerPronounPossessive + " stomach and " + playerPronounTwo + " gurgles " + playerPronounPossessive + " last breath");

// O P T I O N 2 . 1 . 2
    } else if (outcomeTwo == 2) {
      var outcomeTwoTwo = prompt(pName + " makes a break for the [ left exit ].\n\n" + playerPronounTwo + " feel something scrape " + playerPronounPossessive + " back, but outruns whatever is chasing " + playerPronounReference + "\n\nTaking a look around, " + pName + " decides to head toward...\n\n[ 1 ] the main road out of town\n\n[ 2 ] an alleyway\n\n[ 3 ] the grocery store\n\n[ 4 ] the building " + playerPronounTwo + " just left");
        if (outcomeTwoTwo == 1) {
          console.log("YOU DIE CHOOSING THE MAIN ROAD !!!");
        } else if (outcomeTwoTwo == 2) {
          //FINISH THIS LINE!!!!
        }
      }
    }

// O P T I O N 2 . 2

      else if (outcomeTwo == 2) {
      var outcomeTwoTwo = prompt(pName + " makes a break for the [ left exit ].\n\n" + playerPronounTwo + " feel something scrape " + playerPronounPossessive + " back, but outruns whatever is chasing " + playerPronounReference + "\n\nTaking a look around, " + pName + " decides to head toward...\n\n[ 1 ] the main road out of town\n\n[ 2 ] an alleyway\n\n[ 3 ] the grocery store\n\n[ 4 ] the building " + playerPronounTwo + " just left");
     if (outcomeTwoTwo == 1) {
       prompt("Sorry, this path hasn't been completed yet...")
      console.log("E N D I N G 2.2.1")
    } else if (outcomeTwoTwo == 2) {
      console.log("E N D I N G 2.2.2")
    } else if (outcomeTwoTwo == 3) {
      console.log("E N D I N G 2.2.3")
    } else if (outcomeTwoTwo == 4) {
      console.log("E N D I N G 2.2.4")
    }
  }

// O P T I O N 2 . 3

      else if (outcomeTwo == 3) {
      console.log("2.3 DAS IT!!!")
    }

// O P T I O N 2 . 4

      else if (outcomeTwo == 4) {
      console.log("2.4 DAS IT!!!")
    }


// O P T I O N 3 > R O P E

    else if (openingPrompt == 3) {
    var outcomeThree = prompt(pName + " grabs [ rope ].\n\nAs " + playerPronoun + " picks up the [ rope ], " + playerPronounTwo + " hears a loud scuttling behind " + playerPronounReference + ".\n\n" + pName + "...\n\n[ 1 ] Tries to tie [ Unknown ] with [ rope ]\n\n[ 2 ] Runs out of the [ left exit ] \n\n[ 3 ] Runs out of the [ right exit ]\n\n[ 4 ] Tries to reason with it");
    if (outcomeThree == 1) {
      console.log("3.1 THE END")
    } else if (outcomeThree == 2) {
      console.log("3.2 THE END")
    } else if (outcomeThree == 3) {
      console.log("3.3 THE END")
    } else if (outcomeThree == 4) {
      console.log("3.4 THE END")
    }
  }


// O P T I O N 4 > F O O D

    else if (openingPrompt == 4) {
    var outcomeThree = prompt("You chose item 4\n\n[ 1 ] Option 1\n\n[ 2 ] Option 2\n\n[ 3 ] Option 3\n\n[ 4 ] Option 4");
    if (outcomeFour == 1) {
      console.log("4.1 THE END")
    } else if (outcomeFour == 2) {
      console.log("4.2 THE END")
    } else if (outcomeFour == 3) {
      console.log("4.3 THE END")
    } else if (outcomeFour == 4) {
      console.log("4.4 THE END")
    }
}
