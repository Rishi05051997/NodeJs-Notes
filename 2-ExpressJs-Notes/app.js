const express = require('express');

const app = express();

///// req => middleware => res
const logger = () => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
}

app.get('/',logger, (req, res)=> {
    
    res.send('Home');
});

app.get('/about', (req, res)=> {
    res.send('About');
});

app.listen(5000, (req, res)=> {
    console.log('Server is listening on port 5000....')
});