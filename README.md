# worldometer-coronavirus-info V2
This is a npm package which will help you to fetch details directly from worldometer.info.

# Installing
```bash
npm i worldometer-coronavirus-info
```
# Features
- Fetched Information Directly from worldometer.info and is accurate
- Very simple to use
- Lightweight
- Easy to understand with docs
- Returns Country flag and name, which is very usefull in some cases
# Example
- Global Data
```js
const worldometer = require('worldometer-coronavirus-info')
const corona = await worldometer.trackAll()//returns object
```
- Country Data
```js
const worldometer = require('worldometer-coronavirus-info')
const corona = await worldometer.trackCountry()//returns object or throw error if false country or no country was provided
 ```
# Golbal Data Properties
| Properties | Description |
| :---       |  ---:       |
| totalCases | Gives total cases|
|
# Using Global Data
```js
const corona = worldometer.trackAll()//returns object
const totalCases = corona.totalCases //returns total cases
const totalDeaths = corona.totalDeaths
const totalRecovered = corona.totalRecovered
const activeCases = corona.activeCases
const closedCases = corona.closedCases
```
# Using Country Data
```js
const corona = await worldometer.trackCountry('united states')
const totalCases = corona.cases.total //total cases
const recovered = corona.cases.recovered
const deaths = corona.cases.deaths
const dischargePercent = corona.closedCases.percentage.discharge
const deathPercent = corona.closedCases.percentage.death
const closedCases = corona.closedCases.total
const flagImg = corona.country.flagImg //returns flag image ex:https://www.worldometers.info/img/flags/small/tn_us-flag.gif
const countryName = corona.country.name
```
