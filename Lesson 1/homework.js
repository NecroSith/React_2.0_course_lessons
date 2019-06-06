'use strict';
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// Filter the array to drop null or zero-length names
employers = employers.filter((name) => {
    return (name.length > 0 && name.length != '');
});

// Change the array to lowercase all the elements
employers = employers.map((name) => {
    return name.toLowerCase().trim();
});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (own = 0, cash) => {
    const everyCash = [...cash];
    return everyCash.reduce((acc, cash) => acc + cash, own);
}

const money = calcCash(null, sponsors.cash);

// Null handler function in case that director takes null value which can pass through default parameter algorithm
const nullHandler = arg => (...a) => arg(...a.map(v => (v === null ? undefined : v)));

const makeBusiness = nullHandler((owner, director = 'Victor', cash, emp) => {
    const {eu, rus} = sponsors;
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}.And our employers: ${emp}.
And we have a sponsors: 
${[...sumSponsors]}
Note. Be careful with ${eu[0]}. It's a huge risk.`);
});

makeBusiness('Sam', null, money, employers);