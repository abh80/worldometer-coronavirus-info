# worldometer-coronavirus-info V2
This is a npm package which will help you to fetch details directly from worldometer.info.
<img src =https://nodei.co/npm/worldometer-coronavirus-info.png>
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
- Typescript Example
```ts
import worldometer from 'worldometer-coronavirus-info'
const corona = await worldometer.trackAll()
```
# Golbal Data Properties
The following are given property for **Global Data**
| Properties | Description |
| :---   |  :---       |
| totalCases | Gives total cases|
| totalDeaths| Gives total Death|
| totalRecovered| Gives total Recovered|
| activeCases| Gives Active Cases|
| closedCases| Gives the cases which had an outcome|
- If you are having trouble understanding this pls scroll a bit down
# Country Data Properties
The following are given property for **Country Data**
| Properties | Description |
| :---  |  :---       |
|cases#totalCases|Gives total Cases|
|cases#recovered|Gives total recovered|
|cases#deaths|Gives total deaths|
|closedCases#percentage#discharge|Gives discharge percent|
|closedCases#percentage#death|Gives Death Percent|
|closedCases#total|Gives total closed cases number|
|country#flagImg|Gives image of flag of the country in gif format but is static|
|country#name|Gives the country name|
- If you are having trouble understanding this pls scroll a bit down
# Using Global Data
```js
const corona =await worldometer.trackAll()//returns object
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
# Typescript
- here is an compiler example to use this package
```ts
{
    "compilerOptions": {
    "noImplicitAny": false,
    "strictNullChecks": true,
    "esModuleInterop":true,
    "target": "ES2018", 
    "module": "commonjs",
    "allowJs": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "lib": ["es2018", "dom"],
    "strict": true
    }
}
```
# Changelog
<h3>V 2.2.6
 - Added Typescript support!!
<h3>V 2.8.0
- Rewritten in typescript.
