import axios from 'axios'
import ch from 'cheerio'
import functions from './toReplace'
export class worldometer {
version:string

  constructor(){
    this.version = require('../package.json')
    
  }
  static async trackAll(){
    const {data:html}=await axios.get('https://www.worldometers.info/coronavirus/')
    const $ = ch.load(html)
    const base:string[] =[]
    $('#maincounter-wrap div span').each(function(i,elem){
      //@ts-ignore
      base[i] = $(this).text()
    })
    const totalCases = base[0]
    const totalDeaths = base[1]
    const totalRecovered = base[2]
    const activeCases= $('body div.container div div.col-md-8 div div div div.panel-body div div.panel_front div.number-table-main').html()
    //@ts-ignore
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
   static async trackCountry(query){
     
     if(!query)throw new Error('No Country was provided')
     query= query.toLowerCase()
     try{
      //@ts-ignore
    query =functions.checkReplace(query)
    const {data:html}=await axios.get(`https://www.worldometers.info/coronavirus/country/${encodeURIComponent(query)}`)
    const $ = ch.load(html,{normalizeWhitespace:false})
    const flagImg = 'https://www.worldometers.info'+ $('body div div div.col-md-8 div div h1 div img').attr('src')
    const country = $('h1').first().text()
    const arr:string[] = []
     $('#maincounter-wrap div span').each(function(i,elem){
       //@ts-ignore
    arr[i] = $(this).text()
    })
    arr.join(',')
    const totalCases = arr[0]
    const totalRecovered = arr[2]
    const totalDeaths = arr[1]
    let closedCases = $('body div div div.col-md-8 div div.row div div div.panel-body div div.panel_front div.number-table-main').html()
    const newarr = []
    if(!closedCases)closedCases = 'Data not available'
   $('body div div div.col-md-8 div div.row div div div.panel-body div div.panel_front div div strong').each(function(i,elem){
    //@ts-ignore  
    newarr[i] = $(this).text()
    })
    let totalDischargePercent:string =newarr[0]
  totalDischargePercent?totalDischargePercent=newarr[0]:totalDischargePercent='Data Not Available'
  let totalDeathPercent:string= newarr[1]
  totalDeathPercent?totalDeathPercent=newarr[1]:totalDeathPercent="Data Not Available"
    
  let object = {
    country:{name:country,flagImg:flagImg},
    cases:{total:totalCases,recovered:totalRecovered,deaths:totalDeaths},
    closedCases:{total:closedCases,percentage:{
      death:totalDeathPercent,
      discharge:totalDischargePercent
    }}
  }
    
  
    return object
     }catch(e){throw new Error('Invalid Country was provided')}
    
}
}

