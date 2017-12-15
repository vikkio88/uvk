const randomizer = require('../dist').randomizer;
const NL = require('../dist').CONSTS.NL;
const range = require('../dist').rangeArray;

console.log("rolling a 6 faced dice:");
console.log(randomizer.dice(6) + NL);

console.log("80% of chance, this time was a " + (randomizer.chance(80) ? 'Success' : 'Failure') + NL);

const values = range(5);
console.log("picking a random element of a set of 5 numbers");
console.log(randomizer.pickOne(values) + NL);