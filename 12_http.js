//http  module

const http =require('http');

const server =http.createServer((req,res)=> {
    if(req.url==='/') {
        res.end('Welcome to our home page nigga ')
    }
    if(req.url==='/about') {
        res.end('ts pmo');
    }
    //we can also send directly html
    res.end(`
    <h1>Oops!</h1>
    <p>We can seem to find that </p>
    <a href="/">back home</a>
    `);
    //console.log(req)
//res.write("Hello welcome to our home page ")
//res.end()
});

server.listen(5000);