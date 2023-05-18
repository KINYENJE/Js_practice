/** ====get deck id from api */
let deckId = ''

if (!localStorage.getItem("Id_deck")){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(req => req.json())
        .then(data => {
            console.log(data)
            console.log(data.success)
            deckId = data.deck_id
            localStorage.setItem('Id_deck', deckId)
            console.log(deckId)
        })

        .catch(err => {
            console.log(`error occurred ${err}`)
        })
}

 
deckId = localStorage.getItem("Id_deck")
console.log(!deckId)
  



document.querySelector('.btn').addEventListener('click', getCards)

    
function getCards(){
 

    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data2 => {
        if (data2.remaining = 0){
            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
            .then(res => res.json())
            .then(data3 => {
                console.log(data3)
            })
        }
        console.log(data2)
        cardArray = data2.cards
        player1Val = convertToNum(cardArray[0].value)
        player2Val = convertToNum(cardArray[1].value)

        document.querySelector('#player1').src = cardArray[0].images.png
        document.querySelector('#player2').src = cardArray[1].images.png
        
        if (player1Val > player2Val){
            console.log('player1 wins')
        }else if (player1Val < player2Val){
            console.log('player 2 wins')
        }else{
            console.log('this is war')
        }


        

    })

    .catch(err => {
        console.log(`iko error ${err}`)
    })
    
}

function convertToNum(val){
    if (val === 'ACE'){
        return 14
    }else if(val === 'KING'){
        return 13
    }else if(val === 'QUEEN'){
        return 12
    }else if(val === 'JACK'){
        return 11
    }else{
        return Number(val)
    }
}




