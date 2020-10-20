module.exports = function (id){
    const words = require('./words');
    return words.filter((word)=>(word.id === id))[0].word;
}