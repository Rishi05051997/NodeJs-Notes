//////Asynchronous file system
const {readFile, writeFile} = require('fs');
// const fs = require('fs'); ///// ----->>> Same As that of file system
console.log('start first task');

//// below is one type of callback hell which bad from coding point of view 
readFile('./content/first.txt', 'utf-8',(err, result)=> {
    if( err){
        return console.log(err);
    } else {
       console.log(result);
       console.log('first task is completed')
    }
})

console.log('start with next task');

////// ouput is below
// start first task
// start with next task
// Hello this is first text file
// first task is completed

