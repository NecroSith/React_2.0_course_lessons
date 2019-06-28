'use strict'

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

export {money};
export default sponsors;
