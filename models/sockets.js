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
                this.io.emit('current-bands', this.bandList.getBands());
            })

            socket.on('borrar-banda', (data) => {
                this.bandList.removeBand(data.id);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('cambiar-nombre-banda', ({id, nombre}) => {
                this.bandList.changeName(id, nombre);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('crear-banda', ({ nombre }) => {
                this.bandList.addBand(nombre);
                this.io.emit('current-bands', this.bandList.getBands());
            });
        });
    }

}


module.exports = Sockets;