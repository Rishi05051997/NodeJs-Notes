//////Asynchronous file system --->> here file system is working asynchrously 
const {readFile, writeFile} = require('fs');
// const fs = require('fs'); ///// ----->>> Same As that of file system
console.log('start');

//// below is one type of callback hell which is bad practice from coding point of view 
readFile('./content/first.txt', 'utf-8',(err, firstResult)=> {
    if( err){
        return console.log(err);
    } else {
       const first = firstResult;
       console.log(first); //// --->>> // Hello this is first text file
       readFile('./content/second.txt', 'utf-8', (err, secondResult)=> {
        if( err){
            return console.log(err);
        } else{
            const second = secondResult;
            console.log(second); //// --->>> // Hello this is second text file
            writeFile('./content/result-async.txt',`Here is the the resut : ${first}, ${second}`, (err, result)=> {
                if(err){
                    return console.log(err);
                }
                 console.log(result);
                 console.log('done with task');
            } )
        }
       })
    }
})

console.log('start with next task');

////// ouput is below
// start
// start with next task
// Hello this is first text file
// Hello this is second text file
// undefined
// done with tast

