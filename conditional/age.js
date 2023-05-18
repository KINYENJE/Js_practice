

const check =document.querySelector('#check').addEventListener('click', checks)

function checks() {
    const age = document.querySelector('#age').value

    if(age <= 16){
        alert('You cant drive')
    }else if(age > 16 && age < 18){
        alert('you can hate from outside the club')
    }else if(age >= 18 && age <= 21){
        alert('you can not drink')
    }else if(age >= 21 && age <= 25){
        alert('cannot rent car')
    }else if(age >= 25 && age <= 30){
        alert('cannot rent fancy care')
    }else{
        alert('we ni mzee')
    }
}

function addRemainder(n1,n2,n3,n4){
    var product = n1 * n2
    if(product > 100){
        console.log(product + (n3+n4))
    }else if(product < 100){
        console.log(product - (n3 - n4))
    }else if(product == 100){
        alert((n1 * n2 * n3) % n4 )
    }
}
// addRemainder(100,1,6,7)


function loop(word, number){

    for(i = 0 ; i < number ; i++){
        console.log(word,i)
        // document.getElementById('miaka').innerHTML += ' 21'
    }
}

// function call
// loop("jimbo", 3)


//    ***********FIZZBUZZ****************

function loop2(number){
    for(i=1 ; i <= number ; i++ ){
        if(i % 3 == 0 && i %5 ==0){
            console.log('fizzbuzz')
        }else if(i%5==0){
            console.log('buzz')
        }else if(i%3==0){
            console.log('fizz')
        }else{
            console.log(i)
        }
    }
}

//  function call
// loop2(19)



count = 1

const loop3 =(num) => {
    while(count <= num){
        if(count % 3 == 0 && count %5 ==0){
            console.log('fizzbuzz')
        }else if(count%5==0){
            console.log('buzz')
        }else if(count%3==0){
            console.log('fizz')
        }else{
            console.log(count)
        }
        count+=1
    }
}

loop3(31)