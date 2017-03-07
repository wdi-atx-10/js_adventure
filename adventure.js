
//user inputs name
var name = prompt("What is your name?");
console.log("Hello " + name + "!");

//user chooses a door to enter, there are 3 possible doors
var door = prompt("You see three doors, enter the number of the door you wish to go through (1, 2, or 3).");

if (door) {
  if(door == "1"){
    console.log("You enter the first door");
  } else if (door == "2") {
    console.log("You enter the second door");
  } else if (door == "3") {
    console.log("You enter the third door");
  }  else {
    var door = prompt("Please enter a number between 1 and 3");
  }
} else {
  var door = prompt("Please enter a number between 1 and 3");
}

//door 1, user is in forest, chooses right or left path
if (door == "1") {
  var location1 = prompt("You are in a forest, you see a left path, a center path, and a right path. Which do you go down?");
  if (location1 == "right") {
      console.log("You go down the path to the right.");
      console.log("You find a rabbit and feed it some carrots and it becomes your pet.");
  } else if (location1 == "left") {
      console.log("You go down the path to the left.");
      console.log("You run into a bear and it eats you.");
  } else if (location1 == "center") {
      console.log("You go down the path in the center.");
      console.log("You meet a genie and it grants you three wishes. You wish for more wishes. Forever wishes. Hooray!");
  } else {
      var location1 = prompt("Please choose the right or left path.");
  }
//door 2, user is in clearing, chooses to go toward forest or mountains
} else if (door == "2") {
  var location2 = prompt("You are in a clearing, you see a forest and mountains. Which do you go toward?");
  if (location2 == "forest") {
      console.log("You go toward the forest.");
      console.log("You find buried treasure.")
  } else if (location2 == "mountains") {
      console.log("You go toward the mountains.");
      console.log("You take a hike and see some nature.")
  } else {
      var location2 = prompt("Please choose forest or mountains.");
  }
//door 3, user is in city, chooses to go into shop or keeps walking
} else if (door == "3") {
  var location3 = prompt("You are in a city, you see a shop, do you go in?");
  if (location3 == "yes") {
      console.log("You go into the shop.");
      console.log("It's a coffee shop. You buy a coffee and read your book.")
  } else if (location3 == "no") {
      console.log("You keep walking.");
      console.log("You walk for a long time and watch the sunset. Then you go home and eat pizza.")
  } else {
      var location3 = prompt("Please choose yes or no.");
  }
}
