// Choose your own travel adventure

alert("It's summer after your College Graduation. You've been wanting to take a vacation but you've been stuck in school. You finally have a chance to go somewhere!");
var name = prompt("Who would you rather go with? Your family or your girlfriend?");
while (name!='family' && name!='girlfriend') {
  var name = prompt("Sorry that is an invalid answer. Would you rather go with your family or your girlfriend?");
} if (name=='family') {
    alert("You have decided to go with your family.");
    var whoIsPaying = prompt("Who will be paying for the trip? Your family or yourself?");
    while (whoIsPaying!='family' && whoIsPaying!='yourself') {
      var name = prompt("Sorry that is an invalid answer. Who will be paying for the trip? Your family or yourself?");
      } if (whoIsPaying=='yourself') {
          alert("You are now broke. You decide to go to Vegas and win your money back!");
          var bet = prompt("You decide to gamble all your money in a game of roulette. Are you betting on black or red?")
          while (bet!='red' && bet!='black') {
            var bet = prompt("Sorry that is an invalid answer. Do you want to bet on black or red?");
          } if (bet=='black') {
              alert("You lost all your money and your parents are being held hostage by loan sharks!");
          } else if (bet=='red') {
              alert("WOW! You are the luckiest man alive. You just won over $25,000!!");
          }
        } else if (whoIsPaying=='family') {
            alert("Sweet! Free trip!");
            var destination = prompt("Your family wants to know if you would rather go to Europe or Asia. Which country will it be?");
            while (destination!='Europe' && destination!="europe" && destination!="Asia" && destination!="asia") {
            var destination = prompt("Sorry that is an invalid response. Would you rather go to Europe or Asia?")
          } if (destination=='Europe' || destination=='europe') {
              alert("You decide to go to Europe! Your travels have brought you to run with the bulls! Unfortunately you were wearing red and targeted by a stampede of bulls. You did not survive.")
            } else if (destination=='Asia' || destination=='asia') {
              alert("You decide to go to Asia! Your travels have brought you to the Himalayan Mountains. You meet a monastery of Monks who convert you to their ways. You have finally acheived inner peace.")
            }
        }
  } else if (name=='girlfriend') {
    alert("This will be a good time to spend some quality time with your girlfriend. She will love it!");
    var budget = prompt("It's time to budget for your vacation with your girlfriend! How much are you willing to spend? Please enter a dollar amount between 0 and 1200.");
    while(budget<0 || budget>1200) {
      var budget = prompt("Sorry that is an invalid response. Please enter a dollar amount between 0 and 1200.");
    } if (budget<=200) {
      alert("You are the cheapest guy I know.");
      alert("You are a terrible boyfriend. You take her on a trip to South Congress to visit the I Love You So Much Wall. Your girlfriend is so disappointed in your poor taste that she breaks up with you on the spot!");
    } else if (budget>200 && budget<=1000) {
      var travel = prompt("Do you want to fly, drive, or sail?");
      while (travel!='fly' && travel!='drive' && travel!='sail') {
        var name = prompt("Sorry that is an invalid response. Would you rather fly, drive, or sail?");
      } if (travel=='drive') {
        alert("You and your girlfriend decide to go glamping in the mountains. Your friends find out that you have been glamping and you have been forever judged.");
      } else if (travel=='fly') {
        alert("Your flight to New York is completely overbooked. However the airline is offering you a free roundtrip for you and your girlfriend but you have no choice in the destination. The agent tells you to pick a letter corresponding to the first letter of a possible city destination. You have a choice between 'A', 'B', or 'C'.")
        var randomFlight = prompt("What is your choice? 'A', 'B', or 'C'?");
        while (randomFlight!='A' && randomFlight!='a' && randomFlight!='B' && randomFlight!='b' && randomFlight!='C' && randomFlight!='c' ) {
            var randomFlight = prompt("Please enter a valid answer. Do you choose 'A', 'B', or 'C'?");
        } if (randomFlight=='A' || randomFlight=='a') {
          alert("Congratulations! You won an amazing trip to the city of Amarillo, TX. You can finally check that off your bucket list!");
        } else if (randomFlight=='B' || randomFlight=='b') {
          alert("Congratulations! You and your girlfriend will be heading to Boise, Idaho. While traveling there, you and your girlfriend eat too many potatoes and die of potato poisoning.");
        } else if (randomFlight=='C' || randomFlight=='c') {
          alert("Congratulations! A trip to Chicago is in your immediate future. While there you and your girlfriend decide to go to a Cubs game. Unfortunately, you try to catch a fly ball and becoming Steve Bartman Jr.");
        }
      } else if (travel=='sail') {
        alert("You and your girlfriend wear your favorite matching Sperry's. Unfortunately for you guys the boat hits a mini iceberg. A major film was later made about your tragic story. Never let go.");
      }
    } else if (budget>1000 && budget<=1200) {
      alert("Wow look at you Mr. Baller!")
      alert("You and your girlfriend fly first class to Australia. You guys love it so much there that you decide to become a member of the show 'Thunder from Down Under'. Your girlfriend was not as lucky as she was paralyzed in a bout during a stint in the Professional Kangaroo Boxing League.");
    }
  }
alert("GAME OVER. TRY AGAIN TO LIVE ANOTHER LIFE.");
