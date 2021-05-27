const http = require('http');


const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        return res.end('Home Page');
    }
    if(req.url === '/about'){
        // BLOCKING CODE !!! ---->>>> sometimes nested for loop willl block code so its a bad practice
        for(let i =0; i< 1000; i++){
            for(var j=0; j< 1000; j++ ){
                console.log(`${i}, ${j}`)
            }
        }
        // return res.end('About Page');
    }
    return res.end('Error page')
});

server.listen(5000, ()=> {
    console.log('Server is listening on port 5000....')
})