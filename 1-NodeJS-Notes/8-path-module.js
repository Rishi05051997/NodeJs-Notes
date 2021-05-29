const path = require('path');


//// .sep method return / (forward slash)
console.log(path.sep); //// ----->>>> \

///// path.join() --->> joins the relative path
const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath); //// ----->>> \content\subfolder\test.txt


//// .basename() ---->>> it returns last path instance 
const base = path.basename(filePath);

console.log(base); ////// ----->>>> test.txt

////// .resolve() ---->>> it will return absolute path of current working directory
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute); ///// ------>>>> C:\Users\91902\OneDrive\Desktop\node-tutorial\content\subfolder\test.txt