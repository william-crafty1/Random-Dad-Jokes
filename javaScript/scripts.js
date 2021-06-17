//Array with various jokes

let quotes = new Array();
quotes[0]="What time did the man go to the dentist? Tooth hurt-y."
quotes[1]="Which U.S. state is famous for its extra-small soft drinks? Minnesota!"
quotes[2]="I’m so good at sleeping I can do it with my eyes closed!"
quotes[3]="If two vegans get in a fight, is it still considered a beef?"
quotes[4]="What do you call a fake noodle? An Impasta."
quotes[5]="Why don’t skeletons ever go trick or treating? Because they have nobody to go with."
quotes[6]="I got so angry the other day when I couldn’t find my stress ball."
quotes[7]="I went to buy some camouflage trousers the other day, but I couldn’t find any."
quotes[8]="What do you call a belt with a watch on it? A waist of time."
quotes[9]="Don't trust atoms. They make up everything!"
quotes[10]="Did you hear about the man who stole a calendar? He got 12 months."
quotes[11]="I am terrified of elevators. I’m going to start taking steps to avoid them."
quotes[12]="Why was the big cat disqualified from the race? Because it was a cheetah."
quotes[13]="Breaking news! Energizer Bunny arrested – charged with battery"
quotes[14]="“Doctor, I’ve broken my arm in several places” Doctor: “Well don’t go to those places.”"
quotes[15]="What is Mario's favourite play? Mamma Mia!"
quotes[16]="I’m reading a book on the history of gravity – can’t put it down."
quotes[17]="Why are skeletons so calm? Because nothing gets under their skin."
quotes[18]="Have you ever heard of a music group called Cellophane? They mostly wrap."
quotes[19]="What kind of magic do cows believe in? MOODOO."
quotes[20]="Why does Superman gets invited to dinners? Because he is a Supperhero."
quotes[21]="My boss told me to have a good day. So I went home!"
quotes[22]="Why did the picture go to jail? Because it was framed."
quotes[23]="Why did the cookie cry? Because his father was a wafer so long!"
quotes[24]="This graveyard looks overcrowded. People must be dying to get in there."
quotes[25]="How do you make a tissue dance?  You put a little boogie in it!"
quotes[26]="Bicycles can’t stand on their own, they’re two tired."
quotes[27]="The rotation of earth really makes my day."
quotes[28]="Without geometry life is pointless."
quotes[29]="I don’t trust stairs. They’re always up to something."
quotes[30]="If a child refuses to sleep during nap time, are they guilty of resisting a rest?"
quotes[31]="What do you call someone with no body and no nose? Nobody knows."
quotes[32]="What is the least spoken language in the world? Sign language"
quotes[33]="Justice is a dish best served cold, if it were served warm it would be justwater."
quotes[34]="Why can't you hear a pterodactyl go to the bathroom? Because the pee is silent."
quotes[35]="If you see a robbery at an Apple Store does that make you an iWitness?"

//the randomDisplay function which takes a random joke from the list writes it into the "joke" element
// play sound when user clicks joke button
function randomDisplay(){
let randomquote = quotes[Math.floor(Math.random()*quotes.length)]
document.getElementById("joke").innerHTML= randomquote;
let sound = document.getElementById("joke-sound");
sound.play();
}

setTimeout("randomDisplay()",100)

// play sound when user clicks joke button