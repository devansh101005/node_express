//EVERY FILE IN NODE IS ITSELF A MODULE OR IS OIN MODULE

//modules-encapsulated code (only share minimum)

//spliiting code in module is good

//lets try accessing module1.js

// const names=require('./module1')
// const sayHi =require('./module2')
// console.log(names)
// const data =require('./6-alterway')
// console.log(data)
// require('./7-app')

// const secret='SUPER SECRET'
// const john= 'john'
// const peter ='peter'

// const sayHi = (name) => {
//     console.log(`Hello thesere ${name} `)
// }

//  sayHi('susan')
//  sayHi(names.john)
//  sayHi(names.peter)

//osmodules
// const os =require('os')  //its a built in module so we dont need to write ./
// //info about current user
// const user =os.userInfo()
// //console.log(user)

// //this method return s system uptime in seconds 
// console.log(`The system is uptime ${os.uptime} seconds`)

// const currentOS ={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),

// }
// console.log(currentOS)

//while using vanilla in  browser we cant interact withfile system but yahan delho yahan interact kar paa rhe hain


// //path module
// const path =require('path')

// console.log(path.sep)

// const filepath =path.join('/content','subfolder','test.txt')
// console.log(filepath)

// //if we want to access only last part
// const base =path.basename(filepath)
// console.log(base)

// //returnds an absolute path 
// const absolute =path.resolve(__dirname,'content','subfolder','test.txt')

// console.log(absolute)




// //sync fs module 

// const {readFileSync,writeFileSync} =require('fs')
// const first =readFileSync('./content/first.txt','utf8')
// const second =readFileSync('./content/second.txt','utf8')

// console.log(first,second)

// //imagibe if we are wriying something 
// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first},${second}`
// )  //isser ek file ban jyegi



// //async fs 
// const {readFile,writeFile} =require('fs')

// readFile('./content/first.txt','utf8',(err,result)=> {
//     if(err) {
//         console.log(err)
//         return
//     }
//    // console.log(result)
//    const first =result;
//    readFile('./content/second.txt','utf8',(err,result)=> {
//     if(err) {
//         console.log(err)
//         return
//     }
//     const second =result
//     writeFile('./content/result-async.txt',
//         `Here is the result: ${first},${second}`
//     ,(err,result)=> {
//         if(err) {
//             console.log(err)
//             return;
//         }
//         console.log(result)
//     })
//    })
// })


// //http  module

// const http =require('http');

// const server =http.createServer((req,res)=> {
//     if(req.url==='/') {
//         res.end('Welcome to our home page nigga ')
//     }
//     if(req.url==='/about') {
//         res.end('ts pmo');
//     }
//     //we can also send directly html
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can seem to find that </p>
//     <a href="/">back home</a>
//     `);
//     //console.log(req)
// //res.write("Hello welcome to our home page ")
// //res.end()
// });

//server.listen(5000);

//npm 

// const _ =require('lodash')  //testing lodash

// const items =[1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log("hello")


//event loop

// const {readFile} =require('fs')

// console.log('started a first task')

// //check file path
// //while running in 1-read-file.js iska path change kar dena 
// readFile('./content/first.txt','utf8',(err,result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('completerd first task')
// })
// console.log('starting new task')

//started os process

// console.log('first')
//     setTimeout(() => {
   
//     console.log('second')

//     })
//     console.log('third')

//     //completed n exited

// //interval


// setInterval(()=>  {
//     console.log('hello world')
// },2000)
// console.log("i wil run first")
// //process stays alive untill killed


// const http =require('http')

// const server =http.createServer((req,res) => {
//     console.log('request event')
//     res.end ('Hello')
// })

// server.listen(5000,() => {
//     console.log('Server listing on port :5000')
// })

// const http=require('http')

// const server =http.createServer((req,res)=> {
// if(req.url==='/') {
//     res.end('Home page')
// }
// if(req.url==='/about') {
//     //BLOCKING CODE !!!
//     for(i=0;i<1000;i++){
//         for(j=0;j<1000;j++){
//             console.log(`${i}  ${j}`)
//         }
//     }
//     res.end('About page ')
// }
// res.end('error page')


// })
// server.listen(5000,()=> {
//     console.log('server is listening on port 5000...')
// })


//async pattern setup promise
const {readFile} =require('fs')

const getText =(path) => {
    return new Promise((resolve,reject)=> {
    
readFile(path,'utf8',(err,data)=> {
    if(err) {
        reject(err) 
    } else {
        console.log(data)
    }
})
    
    })
}
getText('./content/first.txt')
.then((result)=> console.log(result))
.catch((err)=> console.log(err))

const start =async() => {
    const first =await getText
}

























