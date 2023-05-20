const fs = require('fs');
const path = require('path');

/** Create folder */

// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if (err) throw err;
//     console.log('folder created');
// });



/**create and write to file */

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', function(err) {
//     if (err) throw err;
//     console.log('file written to...');

    
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' i love node.js', function(err) {
//         if (err) throw err;
//         console.log('file appended ...');
//     });    
    
// });


fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err,data) {
    if (err) throw err;
    console.log(data);
}); 



//Rename file

fs.rename(path.join(__dirname, '/test', 'hello.txt'),
path.join(__dirname, '/test', 'helloworls.txt'), 
 function(err) {
    if (err) throw err;
    console.log('file renamed');
});