////// Synchronous file system
const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs'); ///// ----->>> Same As that of file system
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, "|", second); //// ---->>>> Hello this is first text file | Hello this is second text file
// console.log(second);


writeFileSync('./content/result-sync.txt',`Here is the the resut : ${first}, ${second}`, {flag : 'a'});

console.log('done with this task');
console.log('starting with next one');


