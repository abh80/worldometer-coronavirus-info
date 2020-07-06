 const replacer = [
    'united kingdom',
    'united states',
]
const replacerValue = {
    'united kingdom': 'uk',
    'united states':'us'
}
module.exports.checkReplace = (query)=>{
replacer.includes(query)?query = replacerValue[query] : query=query
return query
}
