// Get user's name
name = prompt("What is your name?");
// Get birth year from user
year = prompt("Hello, there " + name + "! What year what you born?");

// Check what Generation they fall into

if ((year >= 1925) && (year <= 1945)) {
  var builder = prompt("You are part of the Builder's Generation, do you like Music or Movies?");
  // Ask user if they like Music or Movies, display text depending on choice or return value entered as an error
  switch(builder){
  case 'Music':
    console.log("You must enjoy Jazz!")
    break;
  case 'Movies':
    console.log('You have to watch "Gone with the Wind!"');
    break;
  default:
    console.log("Unfortuanelty, " + choice + " is not an option. Good Bye! ");
}
 } else if ((year >= 1946) && (year <= 1964)) {
  var boomer = prompt("You are part of the Baby Boomers generation, do you like Music or Movies?");
  switch(boomer){
  case 'Music':
    console.log("Elvis Lives!")
    break;
  case 'Movies':
    console.log('"Easy Rider" was one of the first films to make extensive use of previously released musical tracks rather than a specially written film score. Who knew!!!');
    break;
  default:
    console.log("This ends now, " + boomer + " is not an option.");
  }
 }
 else if ((year >= 1965) && (year <= 1979)) {
  var genx = prompt("You are part of the Generation X crowd, do you like Music or Movies?");
  switch(genx){
  case 'Music':
    console.log("INXS is an Australian rock band, formed as The Farriss Brothers in 1977 in Sydney, New South Wales. Very popular for Gen X folks!")
    break;
  case 'Movies':
    console.log('A troubled child summons the courage to help a friendly alien escape Earth and return to his home world. The movie was "E.T." Go stream it!!');
    break;
  default:
    console.log("Nope! " + genx + " is not an option.");
  }
 }
  else if ((year >= 1980) && (year <= 1994)) {
  var geny = prompt("You are part of the Generation X crowd, do you like Music or Movies?");
  switch(geny){
  case 'Music':
    console.log("Marshall Bruce Mathers III (born October 17, 1972),[1] known professionally as Eminem (often stylized as EMINƎM), is an American rapper, record producer, and actor. Gen Y people love him.")
    break;
  case 'Movies':
    console.log("I'm the king of the world! is Jack's famous quote from the movie 'Titanic'");
    break;
  default:
    console.log("Oh, you broke it! " + geny + " is not an option.");
  }
 }
 // check if birth year is prior to 1924
  else if (year <= 1924) {
    console.log("Apologies, even though " + year + " was a historical year, we have no data to share.");
  }
  // user is too young to play because they are part of Gen Z.
  else {
  console.log("You are too young to play.  Come back when you are 21 or over.");
}
