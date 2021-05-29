//// CommonJs , every file is module (by default)
//  Modules - Encapsulated Code (Only share minimum)
const names = require('./3.2-names-module');
const sayHi = require('./3.3-utils');
const data = require('./4.alternative-module');

console.log(data); //// ---->>> // { items: [ 'items1', 'items2' ], singlePerson: { name: 'bob' } }
sayHi('Vrushabh');
sayHi(names.john);
sayHi(names.peter);
// sayHi(peter);

//// output is 
// { items: [ 'items1', 'items2' ], singlePerson: { name: 'bob' } }
// Hello there Vrushabh
// Hello there John    
// Hello there Peter   

