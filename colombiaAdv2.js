
//var preferList = ['nature', 'party', 'culture']
//var adventurous = ['1', '2', '3']
//var visit= ['yes','no']
//var party=['salsa','carnaval']
//var climate=['hot', 'cold']
//var beachMtn=['beach', 'mountains']
//var reconsider=['yes', 'no']


var name = prompt("what is your name?");
var visitA = prompt("Hi " + name + " Want to visit Colombia, the happiest country in the world?");

 if (visitA == "no")
    var no = prompt("Sorry you're a grump! Do you want to reconsider?");
    if (no == "yes");
      var pick1 = prompt("Amazing! Which of the following do you prefer (pick 1): nature, party, culture?");
     if (no == "no")
      var no = prompt("Too bad. You're missing out!");
   else if (visitA == "yes")
    var pick1 = prompt("Amazing! Which of the following do you prefer (pick 1): nature, party, culture?");


//WHAT DO YOU PREFER
var pick1 = prompt("Amazing! Which of the following do you prefer (pick 1): nature, party, culture?");
  if (pick1 == "nature")
  var  nature = prompt("Colombia is one of the most biodiverse countries in the world. On a scale of 1-3 how much do you like to rough it? ");
   if (nature == 1)
        var one = prompt("Discover Colombia's beautiful coffee region and the source of its famous coffee");
       if (nature == 2)
        var two = prompt("Take a tour of the Amazon rainforest!");
       if (nature == 3)
        var three = prompt ("Go on a 5 day trek and discover the Lost City");



  if (pick1 == "party")
  var party = prompt ("Time to PARTAY! Choose between salsa dancing or carnaval");
      if (party == "salsa")
        var salsa = prompt ("You're off to Cali the capital of Salsa!");
       else if (party == "carnaval")
        var carnaval = prompt("Let the festivities begin at Barranquilla's one and only carnaval!");

  if (pick1 == "culture")
   var culture = prompt("Let's discover Colombia's cultural gems! Do you prefer hot or cold climate");

   climate = prompt("Do you prefer hot or cold climate?");
    if (climate == "cold")
     var  cold = prompt("Come to Bogota! The grand capital of Colombia full of musuems and restaurants.");
     else if (climate == "hot")
        var hot = prompt("Do you prefer the beach or mountains?");


      var beachA = prompt("Do you prefer the beach or mountains?");
      if (beachA == "beach");
          var beach = prompt("Welcome to the colorful coastal city of Cartagena!");
         if (beachA == "mountains")
          var mountains = prompt("Welcome to Medellin! The most beautiful city in the mountains.");
