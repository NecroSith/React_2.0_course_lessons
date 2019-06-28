'use strict';
import employers from './employers';
import sponsors, {money} from './money';

const nullHandler = arg => (...a) => arg(...a.map(v => (v === null ? undefined : v)));

class makeBusiness {
    constructor(owner, director, cash, emp) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }

    makeReport() {
        nullHandler(this.owner, this.director = 'Victor', this.cash, this.emp);
        const {eu, rus} = sponsors;
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}.And our employers: ${this.emp}.
    And we have a sponsors: 
    ${[...sumSponsors]}
    Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
}  

const business = new makeBusiness('Sam', null, money, employers);
business.makeReport();