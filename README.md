# uvk
[![NPM](https://nodei.co/npm/uvk.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/uvk/)


a small set of shared js utility functions, with no dependencies.
## How to install
```
yarn add uvk
```
## How to use it
```
const uvk = require('uvk);

uvk.range(5).map(_ => console.log("this will be executed 5 times"));
uvk.randomizer.dice(); // this will roll a 6 faced dice
```

# Randomizer
A set of function to work with randomness

## pickOne
Get a random element from an array
```
const randomizer = require('uvk').randomizer;
randomizer.pickOne([1,2,3]); // > 2
```

## int
Get a random integer number, between low and high
```
const randomizer = require('uvk').randomizer;
const LOW = 2;
const HIGH = 8;
randomizer.int(LOW, HIGH); // > 4
```

## chance
Get a boolean related to a chance in percentage
```
const randomizer = require('uvk').randomizer;
randomizer.chance(90); // > 90% of the times this will be true
```

## dice
Roll a dice of X number of faces (6 by default)
```
const randomizer = require('uvk').randomizer;
randomizer.dice(); // > 4
```

# Utils
Set of small text and number utils that I use between projects

# Consts
Set of Consts
