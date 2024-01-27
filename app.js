const cardArray = [

    {
        name: 'cheeseburger',
        img: 'images/unnamed.webp'
    },
    {
        name: 'ice-cream',
        img: 'images/download (1).jpg'
    },
    {
        name: 'pizza',
        img: 'images/download.jpg'
    },
    {
        name:'fries',
        img:'images/download (3).jpg'
    },
    {
        name:'milkshake',
        img:'images/download (2).jpg'
    },
    {
        name:'hotdog',
        img:'images/images (2).jpg'
    },
    {
        name: 'cheeseburger',
        img: 'images/unnamed.webp'
    },
    {
        name: 'ice-cream',
        img: 'images/download (1).jpg'
    },
    {
        name: 'pizza',
        img: 'images/download.jpg'
    },
    {
        name:'fries',
        img:'images/download (3).jpg'
    },
    {
        name:'milkshake',
        img:'images/download (2).jpg'
    },
    {
        name:'hotdog',
        img:'images/images (2).jpg'
    }

];  

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardChosen =[]
let cardsChosenIds = []
const cardsWon =[]

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src","images/blank.jpg")
        card.setAttribute("data-id", i) 
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)  
    }
}

createBoard()
function checkMatch(){
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId){
        alert("You have clicked the same image!")
        cards[optionOneId].setAttribute("src","images/blank.jpg" )
        cards[optionTwoId].setAttribute("src","images/blank.jpg" )

    }

   if  (cardChosen[0] == cardChosen[1]){
        alert("You found a match")
        cards[optionOneId].setAttribute("src","images/white.jpg" )
        cards[optionTwoId].setAttribute("src","images/white.jpg" )
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardChosen)
   }
   else{
    cards[optionOneId].setAttribute("src","images/blank.jpg" )
    cards[optionTwoId].setAttribute("src","images/blank.jpg" )

   }
   resultDisplay.textContent = cardsWon.length
   cardChosen =[]
   cardsChosenIds =[]

   if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You have found them all"
   }

}

function flipCard(){
    const cardId = this.getAttribute("data-id")
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}