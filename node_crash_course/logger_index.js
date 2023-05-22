// console.log('Hello from node.js...')
const fs = require('fs');
const path = require('path');

// const Person = require('./person')
// const person1 = new Person('Jamie', 22)
// person1.greeting()



const Logger = require('./logger')

const logger = new Logger();

logger.on('message', data => {
    console.log('Called Listener', data)

    /**Create file directory */

    // fs.mkdir(path.join(__dirname, '/idfile'), {}, function(err) {
    //     if (err) throw err;
    //     console.log('folder created');
    // });

        /** Create and write file directory */
    fs.writeFile(path.join(__dirname, '/idfile', 'hello.txt'), `${data.id}`, function(err) {
        if (err) throw err;
        console.log('file written to...');

    });
        


});

logger.log('Hello World')