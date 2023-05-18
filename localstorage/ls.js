
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}



document.querySelector('button').addEventListener('click', addAnotherOne)


function addAnotherOne(){
    // const choice = document.querySelector('.txt').value
    // console.log(choice)

    var botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)


    
}
