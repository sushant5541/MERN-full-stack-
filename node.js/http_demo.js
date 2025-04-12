const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.url);

    if(req.url == '/about') {
        res.write(`<h1>Welcome to the about page</h1>`)
        res.end();
    }
    else if(req.url == '/contact') {
        res.write(`<h1>Welcome to the contact page</h1>`)
        res.end();
    }

    else if(req.url == '/blog') {
        res.write(`<h1>Welcome to the blog page</h1>`)
        res.end()
    }
    else {
        res.write(`<h1>Welcome to the Server</h1>
            <ul>
                <li style='display:inline-block;text-decoration:none;'><a href="/">Home</a></li>
                <li style='display:inline-block;text-decoration:none;'><a href="/about">About</a></li>
                <li style='display:inline-block;text-decoration:none;'><a href="/contact">Contact</a></li>
                <li style='display:inline-block;text-decoration:none;'><a href="/blog">Blog</a></li>

            </ul>`)
        res.end()
    }

   
})

server.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
    
});