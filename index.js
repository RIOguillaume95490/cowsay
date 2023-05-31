let promoInfo  = require('./information');

const cowsay = require('cowsay');

promoInfoTab = Object.values(promoInfo)

const sayMyInfo = promoInfoTab.join(',')

console.log(cowsay.say({
    text : sayMyInfo,
    e : "oO",
    T : "U "
}));

