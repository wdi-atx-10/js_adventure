name = prompt("What is your rapper name?");

yesOrNo = prompt("What’s up " + name + " Are you ready to lay down some bars? yes or nah?");

if (yesOrNo=='yes') {
  kindOfMusic = prompt("What kind of music do you want to rap over? jazz, r&b, or trap?");
} else {
  console.log('Whatever you poser!')
}

function jazz() {
if (kindOfMusic=='jazz') {
  whatSpeed = prompt("Ok " + name + " jazz is a tough genre to rap over now a days as its heyday was in the 90’s. But you can make it work. You just have to get the right sound and the right speed. How fast do you want your songs to be in beats per minute (average is 100bpm)?");
} if (whatSpeed>=100) {
  alert("The fast jazz samples in your songs put with your bars sound transcendent. The combination of Jazz and Rap are back with your name " + name + " on the cover.");
} else if (whatSpeed>70) {
  alert("Your songs sound as slick as Slick Rick and as smooth as C.L. Smooth. But… its boring these millennials. The only record deal you can land is with Don B. the failure cousin of Jo. the manager of Def Jam records");
} else {
  alert('Woah, those tracks are way too slow, you should have chose r&b!');
}}

function b() {
if (kindOfMusic=='r&b') {
  firstLine = prompt("Ok, R&B is in these days, but it is completely dominated by Drake these days. You’ll have to make some pretty fire tracks in order to distinguish yourself. What should your first line be?");
} if (firstLine.length>50) {
  alert("that’s some good stuff you have a great rap career ahead of you, but that was a little wordy.");
} else if (firstLine.length>30) {
  alert("I like those words my man! You’re track is about to pop off");
} else {
  alert("YYeeeeeeee boooiii that’s fire your track just hit no. 1");
}}

function trap() {
if (kindOfMusic=='trap') {
  takePill = prompt("This is a genre where you have to go HARD! Want to take this pill it will make you a better Trap rapper. yes or no?");
} if (takePill=='yes') {
  alert("You have become cripplingly addicted to pain killers and your rap career never makes it out of the studio.");
} else {
  alert("Good call, say no to drugs. But you have nothing to rap about.");
}}

if (kindOfMusic=='jazz') {
  jazz();
} else if (kindOfMusic=='r&b') {
  b();
} else {
  trap();
}
