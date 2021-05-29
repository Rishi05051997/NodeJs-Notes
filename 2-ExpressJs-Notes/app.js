const express = require('express');
const path = require('path');

const app = express();


//// setup static and middleware
/// static are those which server dont want to change 
app.use(express.static('./public'))


// app.get('/', (req, res)=> {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//  adding to static asset
// SSR
// })

app.all('*', (req, res)=> {
    res.status(404).send('Resource not found');
})

app.listen(5000, (req, res)=> {
    console.log('Server is listening on 5000....')
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen