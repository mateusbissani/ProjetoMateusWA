const http = require ('http');

const funCriarServidor = function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf8'});
    response.end('Olá mundo Node.js');
};

const servidor = http.createServer(funCriarServidor);

servidor.listen(8000, 'localhost', function(){
    console.log('Servidor rodando em http://localhost:8000/');
});
