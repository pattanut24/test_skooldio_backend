let  netChip = 0
let box =[] 
let cardValueArr = ['PADDING','Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
let suits =['Spades','Hearts','Diamonds','Clubs']

const prompt = require('prompt-sync')(); 
function randomCard() { 
    let cardNumber = Math.floor((Math.random() *13)+1)
    let suit = suits[Math.floor((Math.random() * suits.length))]
    return  [cardNumber, suit]  
}
function generateNewCard() {
    isDuplicate = true
    while(isDuplicate) {
        newCard = randomCard()
        isDuplicate = false

        for(idx = 0; idx < box.length; idx++){
            let checkCard = box[idx]
            if (checkCard[0] === newCard[0] && checkCard[1] === newCard[1]) {
                isDuplicate = true
                break
            }
        }

    }
    box.push(newCard)
    return newCard
}

while(true){
    box = [] 
    let bet 

    console.log('Please put your bet')
    bet = prompt(); 

    let myCard1 = generateNewCard()
    let myCard2 = generateNewCard()
    let dealerCard1 = generateNewCard() 
    let dealerCard2 = generateNewCard()

    console.log(`You got ${myCard1[1]}-${cardValueArr[myCard1[0]]}, ${myCard2[1]}-${cardValueArr[myCard2[0]]}`)
    console.log(`The dealer got ${dealerCard1[1]}-${cardValueArr[dealerCard1[0]]}, ${dealerCard2[1]}-${cardValueArr[dealerCard2[0]]}`)

    let myScore = 0
    if(myCard1[0] < 10){
        myScore = myScore + myCard1[0]    
    }
    if(myCard2[0] < 10){
        myScore = myScore + myCard2[0]   
    }

    myScore = myScore % 10

    let dealerScore = 0
    if(dealerCard1[0] < 10){
        dealerScore = dealerScore + dealerCard1[0]    
    }
    if(dealerCard2[0] < 10){
        dealerScore = dealerScore + dealerCard2[0] 
    }

    dealerScore = dealerScore % 10
    
    if (myScore > dealerScore){
        console.log(`You won!!!, received ${bet} chips`)
        netChip = netChip + bet 
    }else if (myScore === dealerScore){
        console.log(`Draw Score`)
    }else{
        console.log(`You lose!!!, lost ${bet} chips`)
        netChip = netChip - bet
    }

    console.log('Wanna play more (Yes/No)?')
    const nextPlay = prompt()
    if (nextPlay.toLowerCase() === 'no'){
        break; 
    }
}
console.log(`You got total ${netChip} chips`)