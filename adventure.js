function adventure() {
  var name = prompt("What is your name?");
  var money = prompt("Well met, " + name + ". How much gold have you? [1 - 1000] gold pieces.");
  if (money > 1000) { money = 1000; }
  if (money <= 50) {
    alert("Afraid I can't help you. Good day.");
  } else {
    var choice = prompt("Do you need to stock up on [W]eapons, [P]otions, or [F]ood?");
    switch(choice) {
      case 'W':
      case 'w':
        var weapon = prompt("Looking to deal some damage, eh? We have a wide selection of Great Swords, Long Bows, and Battle Axes. What can I interest you in? \n" +
          "[G]reat sword for me!\n" +
          "[L]ong bows are more my style.\n" +
          "[B]attle Axe is my middle name.");

        switch(weapon) {
          case 'G':
          case 'g':
            alert("Ah, I thought you looked heroic! Here is a beautiflly hand crafted great sword. It deals double damage against undead. That’ll be " + money + " gold.");
            break;
          case 'L':
          case 'l':
            alert("You’re a Ranger, then! I have this nice Cherry Wood bow, strung up and ready to go! " + money + " gold for the beauty.");
            break;
          case 'B':
          case 'b':
            alert("Like a true Nord! I have a great Steel Battle Axe for you. Forged by a world renowned blacksmith at the Iron Forge two towns over. For you, " + money + " gold. ");
            break;
        }
        break;

      case 'P':
      case 'p':
        var potion = prompt("Looking for a [C]ure, a [D]raught, or a [P]oison? \n" +
        "[C]ure me. I’m not feeling so hot.\n" +
        "[D]raught\n" +
        "[P]oison for a…special someone.");

        switch(potion) {
          case 'C':
          case 'c':
            alert("You poor thing. Here is a special potion of Cure Illness. My own family recipe! That’s " + money + " gold -- per cure, my dear.");
            break;
          case 'D':
          case 'd':
            alert("You look pretty weak. How’s this Draught of Strength do ya? It’s only " + money +" gold for the dose!");
            break;
          case 'P':
          case 'p':
            alert("Oh, my dear. You’ve come to the right shop. This poison is generally made only by the Drow, and only in a place sheltered from the light of the sun. So, for you, I’ll take " + money + " gold.");
            break;
        }
        break;

      case 'F':
      case 'f':
        var food = prompt("Excellent! Can I get you something [H]ot, [C]old, or [S]omething simple? \n" +
        "[H]ot meals are best for this weather.\n" +
        "[C]old food is better.\n" +
        "[S]omething simple is all I need. ");
        switch(food) {
          case 'H':
          case 'h':
            alert("Let me fix you up a nice bowl of beef stew! Warm yer bones right up, it will! That’ll be " + money + " gold.");
            break;
          case 'C':
          case 'c':
            alert("One pint of ale, comin’ up. " + money + " gold.");
            break;
          case 'S':
          case 's':
            alert("I have a nice bread and cheese platter for you. Served with a mug of mead, on the house.");
            break;
        }
        break;

    }
  }
}
