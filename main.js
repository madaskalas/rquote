// Store quotes and other data
let quotes = {
    "0": [
        {"name": "Oscar Wilde", "quote": "Be yourself; everyone else is already taken.", "birth_date": "1854-10-16", "died_date": "1900-11-30", "image": "/images/oscar-wilde.jpg"}
    ],
    "1": [
        {"name": "Albert Einstein", "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "birth_date": "1879-03-14", "died_date": "1955-04-18", "image": "/images/albert_einstein.jpg"}
    ],
    "2": [
        {"name": "Frank Zappa", "quote": "So many books, so little time.", "birth_date": "1940-12-21", "died_date": "1993-12-04", "image": "/images/frank-zappa.jpg"}
    ],
    "3": [
        {"name": "Marcus Tullius Cicero", "quote": "A room without books is like a body without a soul.", "birth_date": "106BC-01-03", "died_date": "43BC-12-07", "image": "/images/Marcus-Tullius-Cicero.jpg"}
    ],
    "4": [
        {"name": "Dr. Seuss", "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "birth_date": "1904-03-02", "died_date": "1991-09-24", "image": "/images/Dr.-Seuss.jpg"}
    ],
    "5": [
        {"name": "Mae West", "quote": "You only live once, but if you do it right, once is enough.", "birth_date": "1893-08-17", "died_date": "1980-11-22", "image": "/images/mae-west.jpg"}
    ],
    "6": [
        {"name": "Mahatma Gandhi", "quote": "Be the change that you wish to see in the world.", "birth_date": "1869-10-02", "died_date": "1948-01-30", "image": "/images/mahatma-gandhi.jpg"}
    ],
    "7": [
        {"name": "Robert Frost", "quote": "In three words I can sum up everything I've learned about life: it goes on.", "birth_date": "1874-03-26", "died_date": "1963-01-29", "image": "/images/robert-frost.jpg"}
    ],
    "8": [
        {"name": "Mark Twain", "quote": "If you tell the truth, you don't have to remember anything.", "birth_date": "1835-11-30", "died_date": "1910-04-21", "image": "/images/mark-twain.jpg"}
    ],
    "9": [
        {"name": "Elbert Hubbard", "quote": "A friend is someone who knows all about you and still loves you.", "birth_date": "1856-06-19", "died_date": "1915-07-07", "image": "/images/elbert-hubbard.jpg"}
    ]
};

let quotesUnknown  = {
    "0": [
        {"name": "Unknown", "quote": "Sometimes your friend circle decreases in size, but increases in value.", "birth_date": "Unknown", "died_date": "Unknown", "image": "/images/mystery-person.jpg"}
    ]
};

document.getElementById("generate-button").addEventListener("click", generateQuotes);

function generateQuotes() {
// Generate random values
let random = Math.floor(Math.random() * Object.keys(quotes).length);
let randomQuote = quotes[random][0].quote;
let randomName = quotes[random][0].name;
let randomBirthDate = quotes[random][0].birth_date;
let randomDiedDate = quotes[random][0].died_date;
let randomImage = quotes[random][0].image;

// Display values into HTML
document.getElementById("quote").innerHTML = "“" + randomQuote + "”";
document.getElementById("person").innerHTML = "- " + randomName;
document.getElementById("birthdate").innerHTML = "Birth Date: " + randomBirthDate;
document.getElementById("dieddate").innerHTML = "Died: " + randomDiedDate;
document.getElementById("img").src = randomImage; 
}

// Record counter
let count = 0;
let generatebtn = document.getElementById("generate-button");
var display = document.getElementById("display");

generatebtn.onclick = function () {
    count++;
    display.innerHTML = count;
    this.title = "🍀 Generate a random Quote!";
    if (count >= 10) {
        let recordMessage = " 👏 Wow! You clicked more than 10 times.";
        record.innerHTML = recordMessage;
    }
}

document.getElementById("reset-button").addEventListener("click", reset);

// Reload page
function reset() {
    location.reload();
}

document.getElementById("mystery-button").addEventListener("click", mysteryQuote);

// Set mystery person
function mysteryQuote() {
let mysteryQuote = quotesUnknown[0][0].quote;
let mysteryName = quotesUnknown[0][0].name;
let mysteryBirthDate = quotesUnknown[0][0].birth_date;
let mysteryiedDate = quotesUnknown[0][0].died_date;
let mysteryImage = quotesUnknown[0][0].image;

// Display values into HTML
document.getElementById("quote").innerHTML = "“" + mysteryQuote + "”";
document.getElementById("person").innerHTML = "- " + mysteryName;
document.getElementById("birthdate").innerHTML = "Birth Date: " + mysteryBirthDate;
document.getElementById("dieddate").innerHTML = "Died: " + mysteryiedDate;
document.getElementById("img").src = mysteryImage; 
}

let mysterycount = 0;
let mysterybtn = document.getElementById("mystery-button");
var display = document.getElementById("display");

mysterybtn.onclick = function () {
    this.disabled = true;
    this.title = "🚫 Disabled! You can only press it once!";
    mysterycount++;
    display.innerHTML = mysterycount;
    record.innerHTML = "";
}
