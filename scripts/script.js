// PART 1
// Select submit button and call it submitButton
let submitButton = document.querySelector("#addHero");
// Select reset button and call it resetButton
let resetButton = document.querySelector("#resetForm");
// Select main content area and call it main
let main = document.querySelector(".main");
// Select how to use element and call it howToUse
let howToUse = document.querySelector("#howTo");
// Create an empty array for all heroes and call it heroes
let heroes = [];
// Create an empty string for all cards of heroes and call it cards
let cards = "";



// PART 3
// Create a function called createHeroesArray that takes in an event object
function createHeroesArray(event) {


    // Prevent the button from doing what it naturally does (redirect to a new page)
    event.preventDefault();

    // Create a Hero constructor that takes in - name, quote, imgURL
    function Hero() {
        this.name = nameInput
        this.quote = quoteInput;
        this.imgURL = imageURLInput;
    }


    // Create a new Hero object that stores the values of each input field (name, quote, imgURL)
    let nameInput = document.querySelector("#name");
    let quoteInput = document.querySelector("#quote");
    let imgURLInput = document.querySelector("#imgURL");

    let hero = {
        name: nameInput.value,
        quote: quoteInput.value,
        imgURL: imgURLInput.value
    };


    // Push the new object into the heroes array
    heroes.push(hero);

    // call the createCard function (you will make this shortly)
    createCard();

    // call the addHero function (you will make this shortly)
    addHero();
}


// PART 4
// Create a function called createCard
function createCard() {
    // create a loop to go through the heroes array
    for (let i = 0; i < heroes.length; i++) {
        // CREATE A CARD
        //create elements for div.card, h3, img, p
        divCardElem = document.createElement("div.card");
        h3Elem = document.createElement("h3");
        imgElem = document.createElement("img");
        pElem = document.createElement("p");

        // add a class called hero-card to div.card element
        divCardElem.className = "hero-card";


        // add a class called heroImg to the img element
        imgElem.className = "heroImg";

        // set attribute src to the img element with the imgURL from the heroes array
        imgElem.src = heroes[i].imgURL;

        // create textnode with the hero's name and append it into the h3 element
        heroNameTxt = document.createTextNode(heroes[i].name);
        h3Input = h3Elem.append(heroNameTxt);

        // create textnode with the hero's quote and append into the p element
        heroQuoteTxt = document.createTextNode(heroes[i].quote);
        pInput = pElem.append(heroQuoteTxt);

        // append h3 to card
        divCardElem.append(h3Elem);

        // apend img to card
        divCardElem.append(imgElem);

        // apend p to card
        divCardElem.append(pElem);

        // append card to main
        main.appendChild(divCardElem);
    }
}


// PART 5
// create a function called addHero
function addHero() {

    // clear the main div of any content
    document.querySelector(".main").innerHTML = "";


    // call the createCard function
    createCard();

}
// PART 7
// create a function called resetForm 
function resetForm() {
    // select the form tag and use the reset method to clear the content
    document.querySelector("form").reset();

}

// PART 8
// create a function called howToUsePopup that takes in an event object
function howToUsePopup() {
    // Prevent the button from doing what it naturally does (redirect to a new page)
    event.preventDefault();

    // make an alert that will provide the following instructions "Fill out the form below to add a new hero onto the main section"
    alert("Fill out the form below to add a new hero onto the main section");
}

// PART 2
//create an event listener to the following:
//submitButton = click, createHeroesArray
// resetButton = click, resetForm
// howToUse = click, howToUsePopup
submitButton.addEventListener("click", createHeroesArray);
resetButton.addEventListener("click", resetForm);
howToUse.addEventListener("click", howToUsePopup);