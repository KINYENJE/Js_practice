//Code 01
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

/*Code 02  USING SETTIMEOUT function*/

function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(){
    setTimeout(() => console.log('Paper delivered to house 2'), 4000)
}
function houseThree(){
    setTimeout(() => console.log('Paper delivered to house 3'), 2000)
    console.log('Paper delivered to house 4')
}
houseOne()
houseTwo()
houseThree()

/*Code 03 USING SETTIMEOUT AND A CALLBACK FUNCTION*/

// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(callback){
//     setTimeout(() => {
//         console.log('Paper delivered to house 2')
//         callback()
//     }, 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree)

/*Code 04 NESTING SETTIMEOUT */
// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne()

/*Code 05 use PROMISE*/

// const promise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error){
//         resolve('Promise has been fullfilled')
//     }else{
//         reject('Error: Operation has failed')
//     }
// })
// console.log(promise)
// promise
// /** THEN is a promise object method that runs after the promise resolves */
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Code 06
//function houseOne(){
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve('Paper delivered to house 1')
//        }, 1000)
//    })
//}
//function houseTwo(){
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve('Paper delivered to house 2')
//        }, 5000)
//    })
//}
//function houseThree(){
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve('Paper delivered to house 3')
//        }, 2000)
//    })
//}
//houseOne()
//    .then(data => console.log(data))
//    .then(houseTwo)
//    .then(data => console.log(data))
//    .then(houseThree)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

//Code 07 AYNC AWAT

// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }
// async function getPaid(){
//     try {
//         const houseOneWait = await houseOne()
//         const houseTwoWait = await houseTwo()
//         const houseThreeWait = await houseThree()
//         console.log(houseOneWait)
//         console.log(houseTwoWait)
//         console.log(houseThreeWait)
//     } catch (error) {
//         console.log('iko error')
        
//     }
// }

// getPaid()

//Code 08
// async function getACuteDogPhoto(){
//     try {
//         const res = await fetch('https://dog.ceo/api/breeds/image/random')
//         const data =await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log('maajabu' + error)
//     }
// }
// getACuteDogPhoto()

