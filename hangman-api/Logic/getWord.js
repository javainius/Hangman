module.exports = function (){
    const words = require('./words');
    
    const word = words[Math.floor(Math.random() * words.length)]
    return { 
        "id": word.id, 
        "word": word.word 
    };
}
