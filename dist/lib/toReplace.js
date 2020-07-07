"use strict";
const replacer = [
    'united kingdom',
    'united states',
    'usa',
    'united states of america'
];
const replacerValue = {
    'united kingdom': 'uk',
    'united states': 'us',
    'usa': 'us',
    'united states of america': 'us'
};
module.exports = function checkReplace(query) {
    replacer.includes(query) ? query = replacerValue[query] : query = query;
    return query;
};
//# sourceMappingURL=toReplace.js.map