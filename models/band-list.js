const Band = require("./band");

class BandList {

    constructor() {
        this.bands = [
            new Band('The Himalayas'),
            new Band('Rammstein'),
            new Band('El cuarteto de nos')
        ];
    }

    addBand( bandName ) {
        const newBand = new Band( bandName );
        this.bands.push(newBand);
        return this.bands;
    }

    removeBand( id ) {
        this.bands = this.bands.filter(band => band.id !== id);
    }

    getBands() {
        return this.bands;
    }

    increaseVotes( id ) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
            }
            return band;
        });
    }

    changeName(id, name) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = name;
            }
            return band;
        });
    }
}

module.exports = BandList;