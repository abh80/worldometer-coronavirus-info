# worldometer-coronavirus-info V1 (V1 only supports global cases V2 comming soon!)
This is a npm package which will help you to fetch details directly from worldometer.info.

# Installing
```bash
npm i worldometer-coronavirus-info
```
# Features
-Fetched Information Directly from worldometer.info and is accurate
-Very simple to use
-Lightweight
-Easy to understand with docs
#Example
```js
const client = require('worldometer-coronavirus-info')
const worldometer = new client()
const corona = worldometer.trackAll()//returns object
```
# Using Global Data
```js
const corona = worldometer.trackAll()//returns object
const totalCases = corona.totalCases //returns total cases
const totalDeaths = corona.totalDeaths
const totalRecovered = corona.totalRecovered
const activeCases = corona.activeCases
const closedCases = corona.closedCases
```
