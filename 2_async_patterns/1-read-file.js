const http=require('http')

const server =http.createServer((req,res)=> {
if(req.url==='/') {
    res.end('Home page')
}
if(req.url==='/about') {
    //BLOCKING CODE !!!
    for(i=0;i<1000;i++){
        for(j=0;j<1000;j++){
            console.log(`${i}  ${j}`)
        }
    }
    res.end('About page ')
}
res.end('error page')


})
server.listen(5000,()=> {
    console.log('server is listening on port 5000...')
})