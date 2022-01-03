//Array with various jokes

let jokeArray = new Array();
jokeArray[0] = "What time did the man go to the dentist? Tooth hurt-y."
jokeArray[1] = "Which U.S. state is famous for its extra-small soft drinks? Minnesota!"
jokeArray[2] = "I’m so good at sleeping I can do it with my eyes closed!"
jokeArray[3] = "If two vegans get in a fight, is it still considered a beef?"
jokeArray[4] = "What do you call a fake noodle? An Impasta."
jokeArray[5] = "Why don’t skeletons ever go trick or treating? Because they have nobody to go with."
jokeArray[6] = "I got so angry the other day when I couldn’t find my stress ball."
jokeArray[7] = "I went to buy some camouflage trousers the other day, but I couldn’t find any."
jokeArray[8] = "What do you call a belt with a watch on it? A waist of time."
jokeArray[9] = "Don't trust atoms. They make up everything!"
jokeArray[10] = "Did you hear about the man who stole a calendar? He got 12 months."
jokeArray[11] = "I am terrified of elevators. I’m going to start taking steps to avoid them."
jokeArray[12] = "Why was the big cat disqualified from the race? Because it was a cheetah."
jokeArray[13] = "“Doctor, I’ve broken my arm in several places” Doctor: “Well don’t go to those places.”"
jokeArray[14] = "What is Mario's favorite play? Mamma Mia!"

//the randomDisplay function which takes a random joke from the array writes it into the "joke" element
//play sound when user clicks joke button
function randomDisplay() {
    let randomquote = jokeArray[Math.floor(Math.random() * jokeArray.length)]
    document.getElementById("joke").innerHTML = randomquote;
    let sound = document.getElementById("joke-sound");
    sound.play();
}

setTimeout("randomDisplay()", 100)

// Scripting for joke submission form. form appears 

let jokeForm = document.getElementById("joke-form-container");
let newJoke = document.getElementById("joke-textbox");

function displayJokeForm() {

    let op = 0.1; 
    jokeForm.style.display = "block";
    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        jokeForm.style.opacity = op;
        jokeForm.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.5;
    }, 10);
}

// push new joke to array and close form

function submitJoke() {

    // check if input is empty, if not empty than pushes joke to array
    if (newJoke.value === '') {
        alert("Invalid input, please enter a joke!");
    } else {
        jokeArray.push(newJoke.value);
        
        let op = 1;
        let timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                jokeForm.style.display = 'none';
            }
            jokeForm.style.opacity = op;
            jokeForm.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.5;
        }, 50);
    }
}

// Cancel button is pressed and form closes

function cancelSubmission(){
    let op = 1;
        let timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                jokeForm.style.display = 'none';
            }
            jokeForm.style.opacity = op;
            jokeForm.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.5;
        }, 50);
}