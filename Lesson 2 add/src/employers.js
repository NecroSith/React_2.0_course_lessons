'use strict';

class Employers {
    constructor(input) {
        this.input = input;
    }

    optimize() {
        this.input = this.input.filter((name) => {
            return (name.length > 0 && name.length != '');
        });

        this.input = this.input.map((name) => {
            return name.toLowerCase().trim();
        });

        return this.input;
    }
}

export default Employers;