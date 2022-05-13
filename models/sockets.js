const BandList = require('./band-list');

class Sockets {

    constructor(io) {
        this.io = io;

        // Band list
        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket) => {

            console.log('Cliente conectado ', socket.id);

            // Emitir al cliente todas las bandas actuales.
            socket.emit('current-bands', this.bandList.getBands());

            socket.on('votar-banda', (data) => {
                this.bandList.increaseVotes(data.id);
                socket.emit('current-bands', this.bandList.getBands());
            })
        });
    }

}


module.exports = Sockets;