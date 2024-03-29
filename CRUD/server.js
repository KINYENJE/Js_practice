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

        app.listen(3030, () => {
            console.log('running on port 3030')
        });
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


            // /** teach server to be able to read JSON */   FOR THE PUT method
            app.use(bodyParser.json())

            // /** Then, we have to tell Express to make this public folder accessible to the public by using a built-in middleware called express.static */  FOR THE PUT method
            app.use(express.static('public'));

            app.get('/', (req,res) => {

                /** get collections from the database */
                db.collection('quotes')
                    .find()
                    .toArray()
                    .then(results => {
                        console.log(results)
                        /** put the quotes into index.ejs. To do this, we need to pass the quotes into the render method. */
                        res.render('index.ejs', {quotes:results})
                    })
                    .catch(error => console.error(error))

            });

            app.post('/quotes', (req,res) => {
                /** send quotes from form to collection in database */
                quotesCollection
                    .insertOne(req.body)
                    .then(result => {
                        /** to stop browser from infinite loading after submit */
                        res.redirect('/')
                    })
                    
            });

            /** updating a collection */
            app.put('/quotes', (req,res) => {
               /** ongoDB Collections come with a method called findOneAndUpdate. This method lets us find and change one item in the database
                * .findOneAndUpdate(query, update, options)
                */
                quotesCollection
                    .findOneAndUpdate({name: 'Kinyenje'}, {
                        $set:{
                            name: req.body.name,
                            quote: req.body.quote,
                        },
                    }, 
                    { 
                        upsert: true
                    })
                    .then(result => {
                        console.log(result)
                        res.json('Success')
                    })
                    .catch(error => console.error(error))
            });

        /** delete event (method) being handled in the server side */
        app.delete('/quotes', (req, res) => {
            console.log(req.body) 
            /** deleteOne. It lets us remove a document from the database. It takes in two parameters: query and options. 
             * .deleteOne(query, options)
            */
            quotesCollection.deleteOne({name: req.body.name} )
            .then(result => {
                /** if there are no more Kinyenje quotes, result.deletedCount will be 0.  */
                if (result.deletedCount ===0){
                    return res.json('No quote to be deleted')
                }
                res.json(`Deleted Kinyenje`)
            })
            .catch(error => console.error(error))
        })
            

    })
    .catch(error => console.error(error))