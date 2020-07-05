const axios = require('axios')
const ch = require('cheerio')
class worldometer {

  constructor(){
    this.version = require('../package.json')
  }
  static async trackAll(){
    const {data:html}=await axios.get('https://www.worldometers.info/coronavirus/')
    const $ = ch.load(html)
    const base = $('#maincounter-wrap div span').text().split(' ')
    const totalCases = base[0]
    const totalRecovered = base[1].toString().slice(7)
    const totalDeaths = base[1].toString().slice(0,7)
    const activeCases = $('body div.container div div.col-md-8 div div div div.panel-body div div.panel_front div.number-table-main').html()
    const closedCases =  $('body div.container div div.col-md-8 div div div div.panel-body div div.panel_front div.number-table-main').text().slice(activeCases.length)
    const object = {
      totalCases:totalCases,
      totalDeaths:totalDeaths,
      totalRecovered:totalRecovered,
      activeCases:activeCases,
      closedCases:closedCases
    }
    return object
  }
}
module.exports = worldometer
