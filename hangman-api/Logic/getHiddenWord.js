const getWord = require('../Logic/getWord');

module.exports = function (){
    return{
        "wordId": getWord().id, 
        "hiddenWord": getWord().word.replace(/[a-zA-Z]/g , '-')
    }
}