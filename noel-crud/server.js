const express = require('express')
const app = express()

const PORT = 8000


const rappers = {
    '21 savage' : {
    name: '21 Savage',
    age: 28,
    occupation: 'rapper',
    netWorth: 12000000
    },
    'chance the rapper' : {
    name: 'Chance The Rapper',
    age: 27,
    occupation: 'rapper',
    netWorth: 5000000
    },
    'kodak black' : {
    name: 'Kodak Black',
    age: 23,
    occupation: 'rapper',
    netWorth: 1500000    
    },
    'Kinyenje' : {
        name: 'Kinyenje',
        age: 23,
        occupation: 'software developer',
        netWorth: 1500000000000
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(rappers)
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) 
})