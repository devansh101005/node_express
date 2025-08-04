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




//sync fs module 























