var name = prompt("W H A T\nI S\nY O U R\nN A M E ?");

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
  var playerPronoun = name;
  var playerPronounTwo = "they";
  var playerPronounPossessive = "their";
  var playerPronounReference = "them";
}


var openingPrompt = prompt(name + "'s" + " eyes flutter open.\n\nIt is very dark and " + playerPronounTwo + " can only make out the corners of a room.\n\nAs " + playerPronoun + " looks around, " + name + " realizes there are four objects in front of " + playerPronounReference + "\n\n" + playerPronoun + " reaches out and grabs...\n\n[ 1 ] An old kitchen knife\n\n[ 2 ] A solar-powered flashlight\n\n[ 3 ] A ten-foot length of rope\n\n[ 4 ] Two cans of food");

// O P T I O N 1

if (openingPrompt == 1) {
  outcomeOne = prompt(name + " grabs [ knife ].\n\nAs " + playerPronoun + " picks up the [ knife ], " + playerPronounTwo + " hears a loud scuttling behind " + playerPronounReference + ".\n\n" + name + "...\n\n[ 1 ] Attacks with [ knife ]\n\n[ 2 ] Runs out of the [ left exit ] \n\n[ 3 ] Runs out of the [ right exit ]\n\n[ 4 ] Tries to reason with it");

// O P T I O N 1 . 1
  if (outcomeOne == 1) {
    outcomeOneOne = prompt("As " + name +" turns to face " + playerPronounPossessive + " attacker, " + playerPronounTwo + " swipes with the [ knife ].\n\nThe creature falls to the floor and gives out a last gurgle before going limp.\n\n[ 1 ]\n\n[ 2 ]\n\n[ 3 ]\n\n[ 4 ]");
   if (outcomeOneOne == 1) {
    outcomeOneOneOne = prompt("1.1.1 \n\nTHE END");
  } else if (outcomeOneOne == 2) {
    outcomeOneOneTwo = prompt("1.1.2 \n\nTHE END");
  } else if (outcomeOneOne == 3) {
    outcomeOneOneThree = prompt("1.1.3 \n\nTHE END");
  } else if (outcomeOneOne == 4) {
    outcomeOneOneFour = prompt("1.1.4 \n\nTHE END");
  }

  // O P T I O N 1 . 2
}  else if (outcomeOne == 2) {
    outcomeOneOne = prompt(name + " sprints toward the [ left exit ].\n\n" + playerPronounTwo + " feels something scrape " + playerPronounPossessive + " back, but is able to outrun whatever is chasing " + playerPronounReference + ".\n\nAs " + name + " looks around, " + playerPronounTwo + " heads towards...\n\n[ 1 ] the main road, out of town\n\n[ 2 ] an alleyway\n\n[ 3 ] the grocery store\n\n[ 4 ] the building " + playerPronounTwo + " just left");
  // O P T I O N 1 . 2. 1
    if (outcomeOneTwo == 1) {
      console.log("ENDING\n\n1.2.1");

  // O P T I O N 1 . 2 . 2
} else if (outcomeOneTwo == 2) {
      console.log("ENDING\n\n1.2.2");

  // O P T I O N 1 . 2 . 3
} else if (outcomeOneThree == 3) {
  console.log("ENDING\n\n1.2.3");

  // O P T I O N 1 . 2 . 4
} else if (outcomeOneFour == 4) {
  console.log("ENDING\n\n1.2.4");
}

  // O P T I O N 1 . 3
    else if (outcomeOne == 3) {
      outcomeOneThree = prompt("[ 1 ]\n\n[ 2 ]\n\n[ 3 ]\n\n[ 4 ]");
    } if (outcomeOneThree == 1) {
      outcomeOneOneThree = prompt("1.3.1 \n\nTHE END");
    } else if (outcomeOneOne == 2) {
      outcomeOneOneTwo = prompt("1.3.2 \n\nTHE END");
    } else if (outcomeOneOne == 3) {
      outcomeOneOneThree = prompt("1.3.3 \n\nTHE END");
    } else if (outcomeOneOne == 4) {
      outcomeOneOneFour = prompt("1.3.4 \n\nTHE END");
    }

    else if (outcomeOne == 4) {
      outcomeOneFour = prompt("[ 1 ]\n\n[ 2 ]\n\n[ 3 ]\n\n[ 4 ]");
    } if (outcomeOneFour == 1) {
      outcomeOneOneFour = prompt("1.4.1 \n\nTHE END");
    } else if (outcomeOneFour == 2) {
      outcomeOneOneFour = prompt("1.4.2 \n\nTHE END");
    } else if (outcomeOneFour == 3) {
      outcomeOneOneThree = prompt("1.4.3 \n\nTHE END");
    } else if (outcomeOneFour == 4) {
      outcomeOneOneFour = prompt("1.4.4 \n\nTHE END");
    }
  }

// O P T I O N 2 . 1
}
    else if (openingPrompt == 2) {
    outcomeTwo = console.log(name + " grabs [ flashlight ].\n\nAs " + playerPronoun + " picks up the [ flashlight ], " + playerPronounTwo + " hears a loud scuttling behind " + playerPronounReference + ".\n\n" + name + "...\n\n[ 1 ] Attacks with [ flashlight ]\n\n[ 2 ] Runs out of the [ left exit ] \n\n[ 3 ] Runs out of the [ right exit ]\n\n[ 4 ] Points the flashlight at the unknown entity");

    if (outcomeTwo == 1) {
      outcomeTwoOne = prompt(name + " attempts to fight off what appears to be a decaying human, but the [ flashlight ] is ineffective.\n\nThe last thing " + name + " sees is the creatures teeth sinking into " + playerPronounPossessive + " face.\n\nThe creature rips into her stomach and " + playerPronounTwo + " gurgle " + playerPronounPossessive + " last breath");
    }
// O P T I O N 2 . 2
      else if (outcomeTwo == 2) {
      outcomeTwoTwo = prompt("[1]\n[2]\n[3]\n[4]");
    } if (outcomeTwoTwo == 1) {
      console.log("E N D I N G 2.2.1")
    } else if (outcomeTwoTwo == 2) {
      console.log("E N D I N G 2.2.2")
    } else if (outcomeTwoTwo == 3) {
      console.log("E N D I N G 2.2.3")
    } else if (outcomeTwoTwo == 4) {
      console.log("E N D I N G 2.2.4")
    }
// O P T I O N 2 . 3
      else if (outcomeTwo == 3) {
      console.log("2.3 DAS IT!!!")
    }
// O P T I O N 2 . 4
      else if (outcomeTwo == 4) {
      console.log("2.4 DAS IT!!!")
    }


// O P T I O N 3 . 1

    else if (openingPrompt == 3) {
    outcomeThree = prompt("You chose item 3\n\n[ 1 ] Option 1\n\n[ 2 ] Option 2\n\n[ 3 ] Option 3\n\n[ 4 ] Option 4");
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


// O P T I O N 4

    else if (openingPrompt == 4) {
    outcomeThree = prompt("You chose item 4\n\n[ 1 ] Option 1\n\n[ 2 ] Option 2\n\n[ 3 ] Option 3\n\n[ 4 ] Option 4");
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
}
