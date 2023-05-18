/** ====get dog photo from dog ceo api */
fetch("https://dog.ceo/api/breeds/image/random")
    .then(req => req.json())
    .then(data => {
        document.querySelector('.dog').src = data.message
    })

    .catch(err => {
        // console.log(`error occurred ${err}`)
    })


    /** ==Fetch cocktails =============== */
// document.querySelector('#submit').addEventListener('click', getCocktailIngredients)
document.querySelector('#submit').addEventListener('click', getNasa)

function getCocktailIngredients(){
    const choice = document.querySelector('.txt').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
    .then(res => res.json())
    .then(data => { console.log(data.drinks)
       data.drinks.forEach((x,i) => {
            document.querySelector('h2').innerHTML = data.drinks[i].strDrink
            document.querySelector('.cockImg').src = data.drinks[i].strDrinkThumb
            document.querySelector('p').innerHTML = data.drinks[i].strInstructions
       })
    
    })
    
}

function getNasa(){
    const choice = document.querySelector('.txt').value
    console.log(choice)

    const url = `https://api.nasa.gov/planetary/apod?api_key=4sWdvfj2UpHocNXdYOAXtDvML9Fo1ggabNwXhzUH&date=${choice}`
    
    fetch(url)
    .then(res => res.json())   //parse response as JSON
    .then(data => {
        console.log(data)
/*
        if(data.media_type ==='image'){
            document.querySelector('.cockImg').src = data.url

        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url

        }
        document.querySelector('p').innerHTML = data.explanation
*/        
    })

    .catch(error => {
        console.log(`limeumana ${error}`)
    })
}
getNasa()

/** ======create a netflix tv show class with a constructor that makes 
 * netflix tv shows with 4 properties and 3 methods */
class Netflix{
    constructor(name,duration,genre){
        this.name = name
        this.duration = duration
        this.genre = genre

    }
    pause(){
        console.log(this.name+' paused')
    }
    play(){
        console.log(this.name+' is playing')
    }
}

let titans = new Netflix('Titans',30,'action')
Netflix.prototype.eighteen_plus = true



