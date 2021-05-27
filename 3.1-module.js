//// CommonJs , every file is module (by default)
//  Modules - Encapsulated Code (Only share minimum)
const names = require('./3.2-names-module');
const sayHi = require('./3.3-utils');
const data = require('./4.alternative-module');

console.log(data);
sayHi('Vrushabh');
sayHi(names.john);
sayHi(names.peter);
// sayHi(peter);
