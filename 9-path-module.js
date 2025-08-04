//path module
const path =require('path')

console.log(path.sep)

const filepath =path.join('/content','subfolder','test.txt')
console.log(filepath)

//if we want to access only last part
const base =path.basename(filepath)
console.log(base)

//returnds an absolute path 
const absolute =path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute)

