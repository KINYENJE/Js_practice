let toss = () => {
    let random =  parseInt(Math.random() * 10);
    console.log(random)

    if (random % 2 === 0){
        return 'heads';
        
    }else if (random === 0){
        return 'tails';
        
    }else{
        return 'tails';


    }
    
     
}

module.exports = toss;