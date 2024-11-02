const hint1 = document.querySelector(".hint1");
const hint2 = document.querySelector(".hint2");
const hint3 = document.querySelector(".hint3");
const word = document.getElementById("word");
const przycisk = document.getElementById("check");
const przycisk2 = document.getElementById("play-again")
const wordguess = document.getElementById("word-guess");
const solved = document.getElementById("solved");
const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");




const words = [
["apple", "A type of fruit often associated with autumn", "Grows on trees and comes in various colors", "A popular healthy snack option"],
["computer", "An electronic device used for processing information", "Has a keyboard and mouse interface", "Can connect to the internet and perform various tasks"],
["car", "A vehicle for personal or commercial transportation", "Usually has four wheels and an engine :D", "Comes in various models and brands"],
["book", "A bound collection of pages containing printed or written content", "Often used for educational purposes", "Can be fiction or non-fiction"],
["dog", "A common household pet known for loyalty", "Comes in many breeds and sizes", "Common Animal"],
["tree", "A perennial plant with leaves", "Provides shade and oxygen", "Can grow very tall and live for centuries"],
["phone", "A portable device used for communication", "Often carried in pockets or bags", "Can access the internet and perform various functions"],
["house", "A building where people typically live", "Usually has walls, windows, and doors", "May have multiple rooms for different purposes"],
["bird", "Has feathers and wings, capable of flight", "Often sings songs", "Comes in many species and colors"],
["school", "An educational institution for children", "Usually has classrooms and teachers", "Students attend daily for learning"],
["fish", "Lives in water environments", "Often served as food", "Comes in many species and colors"],
["bike", "Two-wheeled vehicle powered by human pedaling", "Popular for exercise and commuting", "Requires balance and coordination to operate"],
["cat", "Common household pet known for grooming habits", "Often sleeps during the day", "Known for its agility and playfulness"],
["sun", "Bright star in our solar system", "Provides light and warmth to Earth", "Causes day and night cycles"],
["pen", "Writing instrument that uses ink", "Comes in various styles and sizes", "Used for everyday writing tasks"],
["flower", "Part of a plant that blooms and produces fragrance", "Often colorful and fragrant", "Used in bouquets and arrangements"],
["table", "Flat surface supported by legs", "Used for eating meals and holding objects", "Common furniture piece found in homes and offices"],
["hat", "Headwear item worn for various purposes", "Protects from sun or cold weather", "Comes in many styles and materials"],
["chair", "Furniture piece designed for sitting", "Often found in homes and offices", "Comes in various shapes and sizes"],
["carrot", "Root vegetable often orange in color", "Good for eyesight and nutrition", "Often eaten raw or cooked"],
["guitar", "Musical instrument played by hands", "Produces sound through strings", "Popular in various music genres"],
["javascript","It's commonly abbreviated as 'JS'","It allows you to manipulate HTML and CSS dynamically.","It's a programming language used for web development"],
["umbrella","Portable rain shelter","Protects from raindrops and wind","Often colorful and stylish"],
["pillow","Cushion for supporting the head","Soft and comfortable to sleep on","Comes in various materials sizes, and shapes"],
["pizza","Popular Italian-orginated dish","Usually topped witch cheese, sauce and toppings","Comes in many flavours and crust styles"],
["cloud","Forms in the sky and made of tiny water droplets","Can be white and fluffy or dark and stormy","Can bring rain or snow when it accumulates"],
["ocean","A large body of saltwater","Covers most of the Earth's surface","Contains diverse marine life and ecosystems"],
["moon","Visible in the night sky","Reflects light from the sun","Orbits Earth and affects tides"],
["train","A form of transportation that moves on tracks","Often used for long-distance travel","Can carry passengers or freight"],
["sock","Garment worn on the feet","Often comes in pairs","Provides warmth and absorbs sweat"],
["piano","Musical instrument with keys","Used in many musical genres","Produces sound through striking strings with hammers"],
["camera","Device for capturing images","Used for photography or videography","Has a lens and can be digital or analog"],
["bridge","Structure built over water or land","Allows for easier transportation","Can be made of various materials like metal or stone"],
["river","A natural flowing watercourse","Often leads to an ocean, sea, or lake","Can carve out valleys and impact landscapes"],

]


let randomNum = Math.floor(Math.random() * words.length);
let randomWord = words[randomNum]
hint1.innerText = "1. " + randomWord[3];



let clicks = 0;

przycisk.addEventListener("click", function() {

    clicks++;

    let wordconverted = word.value.toString().trim().toLowerCase();

    if (wordconverted != randomWord[0]) {
        hint2.innerText = "2. " + randomWord[2];
    } 
    

    if (wordconverted != randomWord[0] && clicks == 2) {
        hint3.innerText = "3. " + randomWord[1];
    }

    if (wordconverted == randomWord[0])  {
        wordguess.style = "filter: blur(10px);"
        word.style = "display: none;"
        przycisk.style = "display: none;"
        solved.style.animation="HoverFromTop 1.5s ease";
        solved.innerText = "YOU WON! \n The mystery word is: " + randomWord[0];
        przycisk2.style = "display: inline;";
        przycisk2.style.animation = "HoverFromDown 1.5s ease";

    } 

    if (wordconverted == randomWord[0] && clicks == 1) {
        star1.style = "display: inline;"
        star2.style = "display: inline;"
        star3.style = "display: inline;"
        star1.style.animation="HoverFromTop 1.5s ease";
        star2.style.animation="HoverFromTop 1.5s ease";
        star3.style.animation="HoverFromTop 1.5s ease";
    } else if (wordconverted == randomWord[0] && clicks == 2) {
        star1.style = "display: inline;"
        star2.style = "display: inline;"
        star1.style.animation="HoverFromTop 1.5s ease";
        star2.style.animation="HoverFromTop 1.5s ease";

    } else if (wordconverted == randomWord[0] && clicks == 3) {
        star1.style = "display: inline;"
        star1.style.animation="HoverFromTop 1.5s ease";

    }


    if (wordconverted != randomWord[0] && clicks > 2) {
        wordguess.style = "filter: blur(10px);"
        word.style = "display: none;"
        przycisk.style = "display: none;"
        solved.style.animation="HoverFromTop 1.5s ease";
        solved.innerText = "YOU LOST :( \n The mystery word was: " + randomWord[0];
        przycisk2.style = "display: inline;";
        przycisk2.style.animation = "HoverFromDown 1.5s ease";
    }

});







