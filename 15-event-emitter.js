const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=> {
    console.log(`data is received user  ${name} with id ${id} `);
});

customEmitter.on('response', ()=> {
    console.log(`some other logic here`);
});

customEmitter.emit('response', 'john', 123);
/// ouput is ---->>>
// data is received user  john with id 123 
// some other logic here

//// in case of event emitter the .on() ---> .emit() shuold be in a suquence otherwise it will not emit when place before .on() method

