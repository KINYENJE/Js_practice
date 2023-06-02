const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//* create a server that browsers can connect to. We do this by using the Express’s listen method.*/

// app.listen(3000, () => {
//     console.log('running on port 3000')
// })


/* Make sure you place body-parser before your CRUD handlers!========
The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
*/

// app.use(bodyParser.urlencoded({extended:true }))

//* write Hello World back to the browser. */
// app.get('/', function (req, res) {
//     res.send('Hello world')
// })

//* let’s change server.js so we serve up an index.html page back to the browser.*/

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/index.html')
// })


/** handle this POST request with a post method in server.js. The path path should be the value you placed in the action attribute in the Html.  */
/** enter something into the <form> element and submit the form. Next, look at your command line. You should see Hellooooooooooooooooo! in your command line. */

// app.post('/quotes', (req,res) => {
//     console.log(req.body)
// })


/** ===========MONGODB ================ */

/**connect to MongoDB through the MongoClient’s connect method */
const MongoClient = require('mongodb').MongoClient

/** we get this connection string from mongodb atlas */
const connectionString = 'mongodb+srv://kinyenje:trustworthiness01@cluster0.xztgpsn.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, {useUnifiedTopology: true,})
    .then(client => {
        console.log('Connected to Database')
        /** Naming the db as crud test */
        const db = client.db('crud-test')

        /** where the quotes will be stored */
        const quotesCollection = db.collection('quotes')


            /** tells Express we’re using EJS as the template engine. You need to place it before any app.use, app.get or app.post methods. */
            app.set('view engine', 'ejs')

            /** we need the db variable to access MongoDB
             * we need to put our express request handlers into the MongoClient’s then call.
             */
            app.use(bodyParser.urlencoded({extended:true }))

            app.get('/', (req,res) => {

                /** get collections from the database */
                const cursor = db.collection('quotes')
                    .find()
                    .toArray()
                    .then(results => {
                        console.log(results)
                        /** put the quotes into index.ejs. To do this, we need to pass the quotes into the render method. */
                        res.render('index.ejs', {quotes:results})
                    })
                    .catch(error => console.error(error))


            })

            app.post('/quotes', (req,res) => {
                /** send quotes from form to collection in database */
                quotesCollection
                    .insertOne(req.body)
                    .then(result => {
                        /** to stop browser from infinite loading after submit */
                        res.redirect('/')
                    })
                    
                })

            app.listen(3000, () => {
                console.log('running on port 3000')
            })

    })
    .catch(error => console.error(error))