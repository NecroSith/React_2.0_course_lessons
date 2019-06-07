'use strict';

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const nullHandler = arg => (...a) => arg(...a.map(v => (v === null ? undefined : v)));

class Business {
    constructor(owner, director, emp, own = 0, budget) {
        this.owner = owner;
        this.director = director;
        this.emp = emp;
        this.own = own;
        this.budget = budget;
    }

    calcCash() {
        const everyCash = [...this.budget];
        return everyCash.reduce((acc, cash) => acc + cash, this.own);
    }  

    makeReport() {
        nullHandler(this.owner, this.director = 'Victor', this.emp, this.own = 0, this.budget);
        const {eu, rus} = sponsors;
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.calcCash()}.And our employers: ${this.emp}.
        And we have a sponsors: 
        ${[...sumSponsors]}
        Note. Be careful with ${eu[0]}. It's a huge risk.`);
    } 
}

export {Business, sponsors};

