var name = prompt('What is your name?');

prompt("How are you " + name +"?");
var choiceOne = prompt("Whoa whoa whoa I didn't ask for your life story " + name + ". Anyway... let's run some chores, what's first " + name + ": bank, dmv, or laundry" + " ?");

switch (choiceOne){
  case 'bank':
    var choiceBank = prompt('You proudly stroll into the bank walk right up to the guard and loudly announce, "My name is ' + name +  ' and I am here to do normal banking and certainly not to rob this bank." He looks puzzled and suspicious but goes about his business. How much do you want to withdraw?');
      if (choiceBank <= 10){
        alert("You take your $" + choiceBank + " and end up next door at Burger King, where you gloriously spend what's left of your pathetic savings on 4 or 5 of the new Burger King Hot-Dogs. Everyone in Burger King begins to laugh at you and you are never quite sure if you imagined it or not.");
      } else if (choiceBank > 10 && choiceBank <=100){
        alert("The bank teller hits the panic button because she doesn't understand how to deal with how dumb you are " + name + ". The cops show up and arrest you for being 'broke-as-a-joke' and you live out the rest of your life in forced labor, which isn't as bad as it sounds because the forced labor is starting the 'New N'Sync'.");
      } else {
        alert("You somehow wind up accidently robbing the bank even though you expressly stated the opposite. Everyone forgives you though and they decide to be cool and give you the " + choiceBank + " you asked for. You decide to run for president because rich people do that, and now we all have to complain about President " + name + ".");
      }
    break;
     
  case 'dmv':
    var choiceDMV = prompt("Well you've found it " + name + " ...Hell on Earth, Abbadon, Torment's Kingdom, A Mighty Palace of Agony, The Halls of Anguish, Your Parent's House During the Holidays But Worse, you get the point. You take your number and wait amongst the wretched. Knowing you'll never leave, you mutter one last condemnation:");
    alert("You look around wildly, froth and foam pour from your maw. You stare directly at the god who has abandoned you and scream: " + choiceDMV + "!!!");
    break;
    
    case 'laundry':
      var choiceLaundry = prompt("You drag your overstuffed hamper 35 blocks during a brand new weather-event, Meteorologists can only call 'Mud Rain.' You're not feeling positive about the way this is starting out " + name + ". As you pull open the broken automatic doors to the laundrymat and let out an audible sigh, you notice that this isn't a laundrymat at all and is actually a wormhole to a way cooler dimension where shit is dope. As you reach the other end of the portal you are greeted by a Party-Alien and he says 'Sup dude?' How do you respond?");
      if (choiceLaundry.length <= 5) {
      alert("You put on your sunglasses snap your fingers, throw your dirty laundry in the air, and walk over to the jukebox. You jump on top and truimphantly scream: " + choiceLaundry + "!!!! Everyone at the inter-dimensional party gives you a high-five and you never go back to Earth cause it sucks.");
      } else {
        alert("The Party-Alien throws you a beer and you shotgun it. No Alien has ever seen that before and they think it's sick. Congrats " + name + " you've extended an otherwordly olive-branch and now you are declared Party-Ruler of the Multiverse. You lose in the next election cycle.")
      }
      break;
      
      default:
        var choiceDefault = prompt("Wow dude you totally didn't choose anything right and missed out on what I know because I'm writing this as the default which comes last, would have been a sick adventure. What do you have to say for yourself??");
        var choiceSorry = prompt("Oh that's it huh " + name + "??? All you have to say is " + choiceDefault + "?");
          if(choiceSorry.length <=6){
            alert("Look " + name + " I forgive you but I'm not restarting this adventure for you. You'll have to figure that out on your own.")
          } else{
            alert("That sure is a lot of talk for someone who should be saying 'Sorry I broke the adventure dude!' Come on " + name + " you're better than that...")
          }
        break;
}



