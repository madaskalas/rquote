// Store quotes and other data
let quotes = {
    "0": [
        {"name": "Oscar Wilde", "quote": "Be yourself; everyone else is already taken.", "birth_date": "1854-10-16", "died_date": "1900-11-30", "image": "./images/oscar-wilde.jpg"}
    ],
    "1": [
        {"name": "Albert Einstein", "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "birth_date": "1879-03-14", "died_date": "1955-04-18", "image": "./images/albert_einstein.jpg"}
    ],
    "2": [
        {"name": "Frank Zappa", "quote": "So many books, so little time.", "birth_date": "1940-12-21", "died_date": "1993-12-04", "image": "../../../portfolio/rquote/images/frank-zappa.jpg"}
    ],
    "3": [
        {"name": "Marcus Tullius Cicero", "quote": "A room without books is like a body without a soul.", "birth_date": "106BC-01-03", "died_date": "43BC-12-07", "image": "./images/Marcus-Tullius-Cicero.jpg"}
    ],
    "4": [
        {"name": "Dr. Seuss", "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "birth_date": "1904-03-02", "died_date": "1991-09-24", "image": "./images/Dr.-Seuss.jpg"}
    ],
    "5": [
        {"name": "Mae West", "quote": "You only live once, but if you do it right, once is enough.", "birth_date": "1893-08-17", "died_date": "1980-11-22", "image": "./images/mae-west.jpg"}
    ],
    "6": [
        {"name": "Mahatma Gandhi", "quote": "Be the change that you wish to see in the world.", "birth_date": "1869-10-02", "died_date": "1948-01-30", "image": "./images/mahatma-gandhi.jpg"}
    ],
    "7": [
        {"name": "Robert Frost", "quote": "In three words I can sum up everything I've learned about life: it goes on.", "birth_date": "1874-03-26", "died_date": "1963-01-29", "image": "./images/robert-frost.jpg"}
    ],
    "8": [
        {"name": "Mark Twain", "quote": "If you tell the truth, you don't have to remember anything.", "birth_date": "1835-11-30", "died_date": "1910-04-21", "image": "./images/mark-twain.jpg"}
    ],
    "9": [
        {"name": "Elbert Hubbard", "quote": "A friend is someone who knows all about you and still loves you.", "birth_date": "1856-06-19", "died_date": "1915-07-07", "image": "./images/elbert-hubbard.jpg"}
    ]
};

// Create array with values from 0 till quotes length
let arr = [];
for (let i = 0; i <= Object.keys(quotes).length - 1; i++) {
    arr.push(i);
}

document.getElementById("reset-button").addEventListener("click", reset);

// Reload page
function reset() {
    location.reload();
}

document.getElementById("start-game-button").addEventListener("click", generateQuotesGame);
let startGameButton = document.getElementById("start-game-button");

// Show how many quotes you saw
let count = 0;
var display = document.getElementById("display");

startGameButton.onclick = function () {
    startGameButton.innerHTML = "Next";
    startGameButton.title = "🍀 Generate Next Quote."
    this.disabled = true;
    document.getElementById("submit-button").disabled = false;
}

document.getElementById("submit-button").addEventListener("click", submitAnswer);
let submitButton = document.getElementById("submit-button");

// Generate random values
let random;
let randomQuote;
let randomName;
let countCorrect = 0;
let countFalse = 0;

function generateQuotesGame() {
    
    random = Math.floor(Math.random() * Object.keys(quotes).length);
	randomQuote = quotes[random][0].quote;
	randomName = quotes[random][0].name;

    // Generate an array containing all possible numbers
    // excluding the correct-quote person index
    let checkDiffNumber = arr.filter((n) => 
    {
        return n != random;
    }
    );
    console.log(`checkDiffNumber: ${checkDiffNumber}`);

    // Pick a number different than the correct-quote person index
    let pickNum = checkDiffNumber[Math.floor(Math.random() * checkDiffNumber.length)];
    console.log(`pickNum: ${pickNum}`);

    // Display values into HTML
    console.log(`General Random Number: ${random}`);
    document.getElementById("quote").innerHTML = "“" + randomQuote + "”";
    // 0 or 1
    let randomButton = Math.floor(Math.random() * 2);
    console.log(`Random Button: ${randomButton}`);
    /*
    Display either on first radio button
    or on second radio button
    the choices
    You do not want the correct answer
    only on first radio or only or second radio
    You need to mix it
    */
    if (randomButton == 0) {
        document.getElementById("person1").value = randomName;
        document.getElementById("person10").innerHTML = randomName;
        console.log(`The name ${randomName} index is ${random}.`);
        document.getElementById("person2").value = quotes[pickNum][0].name;
        document.getElementById("person20").innerHTML = quotes[pickNum][0].name;
    }
    else if (randomButton == 1) {
        document.getElementById("person2").value = randomName;
        document.getElementById("person20").innerHTML = randomName;
        console.log(`The name ${randomName} index is ${random}.`);
        document.getElementById("person1").value = quotes[pickNum][0].name;
        document.getElementById("person10").innerHTML = quotes[pickNum][0].name;
    } 
}

function submitAnswer() {
    this.disabled = true;
    document.getElementById("start-game-button").disabled = false;
    count++;
    display.innerHTML = count;
    // Check correct answer
    // True or False
    let p1 = document.getElementById("person1").checked;
    let cp1 = document.getElementById("person1").value;
    console.log(`Check Radio Person 1: ${p1}`); 
    console.log(`Person 1: ${cp1}`);
    // True or False
    let p2 = document.getElementById("person2").checked;
    let cp2 = document.getElementById("person2").value;
    console.log(`Check Radio Person 2: ${p2}`);
    console.log(`Person 2: ${cp2}`);
    if (p1 == true && cp1 == randomName) {
        console.log("Correct Answer.");
        document.getElementById("correct").innerHTML = "✔️ Correct Answer";
        document.getElementById("false").style.visibility = "hidden";
        document.getElementById("correct").style.visibility = "visible";
        countCorrect++;
    }
    else if (p2 == true && cp2 == randomName) {
        console.log("Correct Answer.");
        document.getElementById("correct").innerHTML = "✔️ Correct Answer"
        document.getElementById("false").style.visibility = "hidden";
        document.getElementById("correct").style.visibility = "visible";
        countCorrect++;
    }   
    else {
        console.log("False Answer.");
        document.getElementById("false").innerHTML = "❌ False Answer.";
        document.getElementById("false").style.visibility = "visible";
        document.getElementById("correct").style.visibility = "hidden";
        countFalse++;
    } 
}
    document.getElementById("results-button").addEventListener("click", showResults);
    let resultsButton = document.getElementById("results-button");

    // Display how many correct/false answers you had
    function showResults() {
        document.getElementById("show-results").style.visibility = "visible";
        console.log(`Correct: ${countCorrect}`);
        console.log(`False: ${countFalse}`);
        correctResults.innerHTML = countCorrect;
        wrongResults.innerHTML = countFalse;
    }