var userName = prompt("Whats you name?");
console.log(userName);
var year = prompt ("what year would you like to go to?");

if (year >= 2015) {
   var userValue = prompt("would you deal with biff or griff?"); // B/G
      if (userValue ==="B") {
        var answer = prompt("Do you want to stand and fight or run away like a coward?"); //S/R
        if (answer === "S") {
         console.log("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.");
        } else {
         console.log ("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.");
        }
      } else {
        var userValue = prompt ("What do you say, are u In or Out?");
        if (userValue === "I") {
          console.log("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you");
        }
        else {
          console.log("");
        }
      }


      } else if (year >= 1985 && year <= 2015) {
        var userName = prompt("what name would you like untill then?");
        console.log(userName);

      } else if (year >= 1955 && year <= 1984) {
        var userValue = prompt("I see you're a fan of Back to the Future 1. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)");
        if (userValue === "Y") {
          console.log("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.");
        } else if (userValue === "N") {
          console.log("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.");
        } else {
          console.log("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.");
        }

      } else if(year < 1955) {
        var userValue = prompt("I see you're a fan of Back to the Future 3. You've run out of nitroglycerin to get back to your own time. How do you power the Time Machine? (H/M/T)");
        if (userValue === "H") {
          console.log("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.");
        } else if (userValue === "M") {
          console.log("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.");
        } else {
          var userValue = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)");
          if (userValue === "T") {
            console.log("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with he.");
          } else {
            console.log("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.");
          }
        }

      }
