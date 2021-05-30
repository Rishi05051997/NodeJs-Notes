const express = require('express');

const app = express();

///// req => middleware => res
//// when we working with middleware we must pass next() method for terminating whole cycle.
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}


module.exports = logger;