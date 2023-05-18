// create a variable string and remove white spaces
let myIntro = "  my name is jim  "
// trim  method
myIntro = myIntro.trim()
// console.log(myIntro)

//  **************declare a variable , assign it a string of multiple words, and check to see if one of the words is apple
let str = 'jim is eating an apple?'
// console.log(str.search('apple'))  /// outputs 17
// console.log(str.search('mango'))  // outputs -1 since mango is not in the string
if (str.search('apple') !== -1){
    //console.log(`yes apple is in the string`)
}else{
    console.log('no apple is not in the string')
}


//** =========check if the string is a question ======== */
if(str.endsWith('?')){
    console.log('This is a question')
}else {
    console.log(`This is not a question `)
}


/**  Declare a variable , assign it a string of multiple words,replace every
  "jr.dev " with "software engineer", and print to console */
  let strReplace = 'I am looking for a jr. dev position.'
  console.log(strReplace.replace('jr. dev','software engineer'))


// FUNCTIONS
// *******create a function that returns rock,paper or scissors as randomly as possible
function rockPaperScissors(){
    // math.random returns a random number between o - 1
    let random = Math.random() 
    if (random < .33){
        return 'rock'
    }else if (random < .66){
        return 'paper'
    }else if(random < .99){
        return 'scissors'
    }
}
// console.log(rockPaperScissors())

// create a function that takes users choice
function checkWinner(user){
    let botChoice = rockPaperScissors()
    console.log(botChoice)
    if ( (user === 'rock' && botChoice === 'paper') ||
    (user === 'paper' && botChoice === 'scissors') ||
    (user === 'scissors' && botChoice === 'rock')){
        console.log('pc wins')
    }else if( (user === botChoice ) ){
        console.log('you tied')
    }else {
        console.log('i win')
    }
}
// checkWinner('rock')


// LOOPS
/* create a function that takes in an array of choices.play the 
game x times where x is the number of choices in the array.print 
the results of each game to the console */
function playGame(array){
    array.forEach((x,i) => {
        game = checkWinner(x)
    });
}
// playGame(['rock','paper', 'scissors'])


/*    **create a function that takes in a string 
Alert if the string is a palindrome or not */


/** create an array of numbers and sum all of the numbers in the array
 * and output total sum  */
var nums = [23,45,76,89,11]
let sum = nums.reduce((accumulation, element) => accumulation + element, 0) // zero is initial value of accumulation
// console.log(sum)

let sum1 =0
let sum2 =nums.forEach((x) => {
   // console.log(sum1 += x) 
})
