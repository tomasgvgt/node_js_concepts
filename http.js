const http = require('http');

http.createServer((req, res)=>{
    //Adding a response header
    console.log(req.url);
    if (req.url === '/hello'){
        res.writeHead(202, {
            'content-type': 'text/html',
        });
        res.write('Hello buddy');
    }else{
        res.writeHead(404);
        res.write('Error 404. I dont know what you are looking for');
    }
    res.end();
}).listen(3001);

console.log('Escuchando el puerto 3000');