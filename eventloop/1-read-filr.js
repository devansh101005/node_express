
const {readFile} =require('fs')

console.log('started a first task')

//check file path
//while running in 1-read-file.js iska path change kar dena 
readFile('./content/first.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completerd first task')
})
console.log('starting new task')

