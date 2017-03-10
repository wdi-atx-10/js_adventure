var name=prompt('what is your name');
 if (name === "Ragnar"){
  console.log("hello Ragnar, are you raiding east or west?")
 } else if(name ==="Rollo"){
  console.log("hello Rollo")
 } else {
  console.log("are you a viking?")
 }

 var raidWest=prompt('will you raid east or west');
 if (raidWest === "west"){
   console.log("to England we Go!")
} else if(raidWest === "east"){
  console.log("back to the Baltics")
} else {
  console.log("then where do you want to go?")
}

var sackMonestary=prompt('will you attack the villages');
if (sackMonestary === "yes"){
  console.log("may you die gloriously in battle and feast in Valhalla!")
} else if(sackMonestary === "no"){
  console.log("being a farmer would be fun too")
}

var priestFriend=prompt('did you take a Christian as a slave')
if (priestFriend === "yes"){
  console.log("he will become your best friend but shunned by the others")
} else if(priestFriend === "no"){
  console.log("no i don't take prisoners")
} var howManyKills=prompt('how many men have you had to kill because they challenged you')
if (howManyKills > 2){
  console.log("you truly are ragnar lothbrok")
} else if(howManyKills < 2){
  console.log("you likey are not the legendary ragnar")
}

var returnHome=prompt('when you return home what will you do')
if (returnHome === "rule justly"){
  console.log("you will gain the loyalty of your men and raid again")
} else if(returnHome === "rule like a tyrant"){
  console.log("you will have a rebellion and likely be killed")
}
  var toParis=prompt("will you attack Paris")
  if (toParis === "yes"){
    console.log("you will lose the battle and return home")
  } else if(toParis === "no")
  console.log("you will not lose a great battle and will stay in Paris")

  var backToEngland=prompt("are you returning to England")
  if (backToEngland === "yes" && toParis === "yes"){
    console.log("this eventually will be the end of you")
  } else if (backToEngland === "no" && toParis === "no"){
    console.log("you will likely live longer")
  } else if(toParis === "no" && backToEngland === "yes"){
    console.log("you will be killed there")
  } else if(toParis === "no" && backToEngland === "no"){
    console.log("you probably are not ragnar lothbrok as he would never had said no to either of these things")
  } else if(toParis === "yes" && backToEngland === "no"){
    console.log("you will die peacefully in your homeland")
  }




  
