document.addEventListener("DOMContentLoaded", () => {


//card options and images name
const cardArray = [ 
    {
        name: "1",
        img: "images/1.png"
    },
    {
        name: "1",
        img: "images/1.png"
    },
    {
        name: "2",
        img: "images/2.png"
    },
    {
        name: "2",
        img: "images/2.png"
    },
    {
        name: "3",
        img: "images/3.png"
    },
    {
        name: "3",
        img: "images/3.png"
    },
    {
        name: "4",
        img: "images/4.png"
    },
    {
        name: "4",
        img: "images/4.png"
    },
    {
        name: "5",
        img: "images/5.png"
    },
    {
        name: "5",
        img: "images/5.png"
    },
    {
        name: "6",
        img: "images/6.png"
    },
    {
        name: "6",
        img: "images/6.png"
    },
]

cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("#result")
var cardsChosen = []
var cardsChosenId = []
const cardsWon = []

//board creation
function createBoard() {
    for(let i=0; i < cardArray.length; i++){
        var card = document.createElement ("img")
        card.setAttribute("src", "images/0.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        grid.appendChild(card)
    }
}


//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll("img")

    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) { //this avoids to click the same image
        cards[optionOneId].setAttribute('src', 'images/0.png')
        cards[optionTwoId].setAttribute('src', 'images/0.png')
        
    } else if (cardsChosen[0] === cardsChosen[1]){ //match made
        alert("Bien hecho! Sumaste un punto")
        cards[optionOneId].setAttribute("src", "images/7.png")
        cards[optionTwoId].setAttribute("src", "images/7.png")
        cards[optionOneId].removeEventListener("click", flipcard)
        cards[optionTwoId].removeEventListener("click", flipcard)
        cardsWon.push(cardsChosen)
    }else{//no match made
        cards[optionOneId].setAttribute("src", "images/0.png")
        cards[optionTwoId].setAttribute("src", "images/0.png")
        
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.lenght === cardArray.length/2){
        resultDisplay.textContent = "Felicitaciones!"
    }
}


//flip your card
function flipcard(){
    var cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}


createBoard()

})