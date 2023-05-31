const http =require('http')
const fs = require('fs')
const toss = require('./randomize.js')



http.createServer((req,res) => {
    if (req.url === '/'){
        fs.readFile('index.html',(err, data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'})
                return res.end("404 Not Found")
            }
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        });
    } else if (req.url === '/toss'){
        const result = toss()
        console.log(result)
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end()
    } else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end("404 Not Found")
    }

}).listen(5000, () => console.log('Server running on port 5000'))