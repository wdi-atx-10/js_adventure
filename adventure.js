hollywood();

function hollywood(){
  var name = prompt('Welcome to Hollywood: City of Dreams. Before we begin, what is your name??');

alert('Hello, ' + name + '. Welcome to Hollywood; where you can make any dream come true.');

var dream = prompt("What is your dream job in Hollywood? (actor, screenwriter, or director)");

if (dream === "actor"){
  var actChoice = prompt("Do you TAKE acting lessons? Or START a Youtube channel??");
    if (actChoice === "take"){
      var actingClassPrice = prompt("How much do you spend on acting lessons?? ($xxxx)");
        var ending_1 = prompt("lol. " + name ", you wasted $" + actingClassPrice + " on acting lessons. You lost Hollywood. Play again?? (y/n)");
      if (ending_1 === 'y'){
        hollywood();
        } else{
          alert('kbai');
        }
    } else if (actChoice === 'start'){
      var actingYoutube = prompt("How much time do you spend on your Youtube channel?? (xxx hours)");
      var ending_2 = prompt("lol. " + name ", you wasted " + actingYoutube + "hours on your youtube channel. You lost Hollywood. Play again?? (y/n)");
      if (ending_2 === 'y'){
        hollywood();
        } else{
          alert('kbai');
        }
    }

} else if (dream === 'screenwriter'){
  var writeGenre = prompt("What genre of script do you want to write??");
  alert("Don't bother, " + name + ". " + writeGenre " is a shitty, oversaturated genre.");
  var ending_3 = prompt("You lost Hollywood. Play again?? (y/n)");
  if (ending_3 === 'y'){
        hollywood();
        } else{
          alert('kbai');
        }
} else if( dream === "director"){
  var richDirector = prompt("Do you come from a well-connected and/or rich family?? (y/n)");
  if (richDirector === 'n'){
    var ending_4 = prompt("lol. " + name " you're a nobody. You lost Hollywood. Play again?? (y/n)");
      if (ending_4 === 'y'){
        hollywood();
        } else{
          alert('kbai');
        }
  } else if (richDirector === 'y'){
    var ending_5 = prompt("Congrats, " + name + ". You win Hollwood. Play again?? (y/n)");
    if (ending_5 === 'y'){
        hollywood();
        } else{
          alert('kbai');
        } else{
          restart();
        }
  } else {
    restart();
  }

  function restart(){
    alert("You already fucked up. Let's restart.");
    hollywood();
  }
