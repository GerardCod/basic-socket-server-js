
class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket) => {

            console.log('Cliente conectado ', socket.id);

            socket.on('mensaje-usuario', (data) => {
                
                socket.emit('mensaje-servidor', data);

            });
        });
    }

}


module.exports = Sockets;