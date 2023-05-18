//  *****array of 3 movies
var movieArray = ['titanic','wakanda','creed','sistas','friends']
// console.log(movieArray)

// **********lenth of array
var lengthArray = movieArray.length
// console.log(lengthArray)

// ***********first movie
var movie1 = movieArray[0]

var movieLast = movieArray[lengthArray - 1]
// console.log(movieLast)

    movieArray.forEach((x,i,a) => {
        document.querySelector('#head2').innerHTML += x
 //       console.log(x,i)
    })


    /********CREATE ARRAY OF NUMBERS.
     * LOOP THROUGH THE ARRAY AND ADD THREE TO EACH NUMBER 
     * AND REPLACE THE OLDER NUMBER */
var numArray = [33,4,5,6,27]
// console.log(`initial number array = ${numArray}`)
newArray = []

// ********USING FOR LOOP TO INCREMENT THE BY 3
for(i =0 ; i < numArray.length; i=i+1){
    newArray[i] = numArray[i] + 3
}
// console.log(newArray)


//  *****SAME OPERATION AS ABOVE BUT USING THE forEach() function
numArray.forEach((x,i) => {
    newArray[i] = x + 3
    // console.log(newArray)
})

/** Square all numbers in the array */
numArray.forEach((x,i) => {
    newArray[i] = x*x 
})

// console.log(newArray)

// ******* AVERAGE OF ALL THE NUMBERS ABOVE*********
var sum = 0
newArray.forEach((num) => {
    sum += num
})
// console.log(`average is ${sum / newArray.length}`)

// ******create a function that takes in an array .if first number is less than the last number ,alert 'hi'.if the first number is grater than the last number alert 'bye' if equal alert 'we equal'.

function takeArray(t){
    if (t[0] < t[t.length - 1]){
        alert('hi')
    }else if(t[0] > t[t.length - 1]){
        alert('bye')
    }else if (t[0] === t[t.length - 1]){
        alert('we equal')
    }
}
// takeArray(numArray)


// ******create a function that takes in an array of numbers.Multiply each number by 3 and alert the product
function productArray(a){
    product = []
    a.forEach((num,index) => {
        product[index] = num * 3
    })
    // console.log(product)
}
// productArray(numArray)

/*****create a function that takes in an array of numbers.
 * Multiply each number together and alert the product */
function productOfArrayElements(a){
    product = 1
    a.forEach((num) => product*=num)
    // console.log(product)
}
productOfArrayElements(numArray)


/*********create a function that takes i  an array of numbers.
Returns a new array containing every even number from the original 
array */
function returnEvenNumbers(array){
    evenNumber = []
    array.forEach((x,i) => {
        if (x % 2 == 0){
            evenNumber[i] = x
        }
    })
   
    console.log(evenNumber)
}
// returnEvenNumbers([2,3,4,5,6,7])

//***repeat same using PUSH method 
function returnEvenNumbers(array){
    evenNumber = []
    array.forEach((x,i) => {
        if (x % 2 == 0){
            evenNumber.push(x)
        }
    })
   
    console.log(evenNumber)
}
// returnEvenNumbers([2,3,4,5,6,7,334,56,16,13])

// ******repeat using FILTER method

var onlyEvens = (arr) => arr.filter((x) => x % 2 === 0)
// console.log(onlyEvens(numArray))

/*******create a function that takes in an array of numbers.
Alert the sum of the second lowest and the second highest number */
function sumSecondLowestAndSecondHighest(r){
    var sorted = r.sort((a,b) => a-b)
    var secondLowest = sorted[1]
    var secondHighest = sorted[sorted.length - 2]

    var sum = secondHighest + secondLowest
    return sum
}
// console.log(sumSecondLowestAndSecondHighest(numArray))



/* *****create a function that takes in a string and 
prints the reverse of that string
*/
theString = 'today is a special day in the world'
function reverseString(str){
    //  use the split() method to return a new array
    var splitString = str.split("")
    // console.log(splitString)
    //  use the reverse() method to reverse the newly created array
    var reverseArray = splitString.reverse()
    //console.log(reverseArray)

    // use the join() method to join all elements of the array
    var joinArray = reverseArray.join('')
    //console.log(joinArray)

    return str.split("").reverse().join("")
}
reverseString(theString)


/** Create a function that takes in a string.
 * clg if string is a palindrome or not
 */

const palindromeCheck = (str) => console.log(str === str.split('').reverse().join(''))
// palindromeCheck('pop')


/** ===============OR =============== */
const palindromeCheck2 = (str) => console.log(str === reverseString(str))
palindromeCheck2('pop')


/** create an array of numbers and sum all of the numbers
 */
var nums = [23,45,76,89,11]
let sumation = nums.reduce((accumulation, element) => accumulation + element, 0) // zero is initial value of accumulation
//console.log(sumation)