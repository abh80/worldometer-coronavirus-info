 const replacer = [
    'united kingdom',
    'united states',
    'usa',
    'united states of america'
]
const replacerValue = {
    'united kingdom': 'uk',
    'united states':'us',
    'usa':'us',
    'united states of america':'us'
}
module.exports.checkReplace = (query)=>{
replacer.includes(query)?query = replacerValue[query] : query=query
return query
}
