const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url == '/'){
         return res.end('<h1>Welcome to our home page</h1>')
    }
    if(req.url == '/about'){
         return res.end('<h1>Welcome to our About page</h1>')
    }
    return res.end(`
        <h1>oppps!!!!</h1>
        <p>We can't seems to find the page you r looking for </p>
        <a href="/">Back Home</a>
    `)
});

server.listen(5000);