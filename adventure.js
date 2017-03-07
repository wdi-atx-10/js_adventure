
var animal = prompt("What kind of animal are you? Lion, Duck, Bear or Pig").toUpperCase();
switch (animal) {
  case 'LION':
      alert("We will call you Simba");
      animal = "Simba";
    break;
  case 'DUCK':
      alert("You are now know as Howard the Duck");
      animal = "Howard the Duck";
    break;
  case 'BEAR':
      alert("Winnie the Pooh is your name");
      animal = "Winnie the Pooh";
    break;
  case 'PIG':
    alert("You shall be known as Porky the Pig");
    animal = "Porky the Pig";
  break;
  default:
    alert("Guess you don't want to play along!");
}

var userAge = prompt("How many years have you lived " + animal + "?");
if (animal === "Simba"){
  alert("Your are " + ((userAge * 2.29).toFixed()) + " in Lion years!");
} else {
  if (animal === "Howard the Duck"){
    alert("You are " + ((userAge * 4.21).toFixed()) + " in Duck years!");
  }else {
    if (animal === "Winnie the Pooh"){
      alert("You are " + ((userAge * 2).toFixed()) + " in Bear years!");
    } else {
      if (animal === "Porky the Pig"){
        alert("You are " + ((userAge * 3.2).toFixed()) + " in Pig years!");
      }
    }
  }
}
