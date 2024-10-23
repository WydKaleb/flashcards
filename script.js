const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const cardContent = document.getElementById("card-content")
    const currentCard = flashcards[currentIndex]

    if (showingTerm) {
        cardContent.innerText = currentCard.term
    } else {
        cardContent.innerText = currentCard.definition
    }
}

// Event listener to flip card
document.getElementById("flashcard").addEventListener("click", function(){
    showingTerm = !showingTerm
    displayCard()
})

// Event listener for next button
document.getElementById("next-btn").addEventListener("click", function(){
    currentIndex = (currentIndex + 1) % flashcards.length
    showingTerm = true 
    displayCard()
})

// Event listener for previous button
document.getElementById("prev-btn").addEventListener("click", function(){
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length
    showingTerm = true 
    displayCard()
})

// Event listener for add button
document.getElementById("add-card-btn").addEventListener("click", function(){
    const addTerm = document.getElementById("new-term").value
    const addDef = document.getElementById("new-definition").value

    flashcards.push({
        term: addTerm,
        definition: addDef
    })
    //Clearing input fields
    document.getElementById("new-term").value = ""
    document.getElementById("new-definition").value = ""

})

// This line will display the card when the page is refreshed
window.onload = displayCard;