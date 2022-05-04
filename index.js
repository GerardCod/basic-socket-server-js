const express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

// Desplegar el directorio público
app.use(express.static(__dirname + '/public'))

io.on('connection', ( socket ) => {
    
   /*  socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido al server',
        fecha: new Date()
    }); */

    /* socket.on('mensaje-nombre', (data) => {
        console.log(data);
    }); */

    console.log('Cliente conectado ', socket.id);

    socket.on('mensaje-usuario', (data) => {
        
        socket.emit('mensaje-servidor', data);

    });
});

server.listen(8080, () => {
    console.log('Server corriendo en puerto :8080');
});