const express = require('express');

const app = express();

let {people} = require('./data');

///// statis assets
app.use(express.static('./methods-public'))

app.post()


app.get('/api/people', (req, res)=> {
    res.status(200).json({
        success: true,
        data: people
    });
});





app.listen(5000, (req, res)=> {
    console.log('Server is listening on port 5000....')
});