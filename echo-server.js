const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url === '/echo') {
        let body = [];

        req.on("data", chunk => {
                body.push(chunk);
            })
            .on("end", () => {
                res.writeHead(200, { "Content-Type": "text/plain" });
                body = Buffer.concat(body).toString();
                let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
                let date = new Date(body);
 //El método getDay() devuelve el día de la semana de la fecha especificada 
 //en función de la fecha local; siendo 0 (Domingo) el primer día.
                let day = date.getDay();

                res.end(`Naciste un día ${days[day]} de ${date}`);
            });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');

