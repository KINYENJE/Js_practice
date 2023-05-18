/** given 2 integer arrays a, b, both of length >= 1,create a program
 * that returns true if the sum of the squares in A is greater than 
 * the sum of the cubes of each element in B
 */

a=[2,5,7]
b=[3,6]
square = []
cubed =[]

a.forEach((element, index) => {
    square [index] = element*element
    
    
});
// console.log(square)

b.forEach((element,index) => {
    cubed [index] = element*element*element
    
})
// console.log(cubed)

sumSquare= 0
sumCubed = 0

square.forEach(element => {
    sumSquare += element  
})
// console.log(sumSquare)

cubed.forEach(element => {
    sumCubed += element
})
// console.log(sumCubed)

if(sumSquare > sumCubed){
    // console.log(true) 
}

/**    ============OR ============== */

function compareSquareAndCube(){
    return a.reduce((acc, element) => acc+ element**2, 0) > b.reduce((acc, element) => acc+ element**3, 0)
}
// console.log(compareSquareAndCube())



/** Return a new array consisting of elements which are multiple of their own index in input array (length > 1). */
// some examples:
//[22,-6,32, 82, 9,25] => [-6, 32,25]

function multipleIndexes(x){
    return x.filter((element, index) => element%index===0)
}
// console.log(multipleIndexes(b))

/**given an array of integers as strings ad numbers, return the sum of the array values as if all were numbers.Return your answer as a number */

function convertToNum(){
    d = ['3',7,'15',45]
    console.log(d)
    e = []
    d.forEach((ele,i) => {
        e[i] = parseInt(ele)

    })
    console.log(e)

    console.log(e.reduce((acc,x) => acc + x, 0)) 

}
convertToNum()

/**  ========OR ======= */
const s =r => r.reduce((a,c) =>+a+ +c)

console.log(s(['5',3,'2',1]))
