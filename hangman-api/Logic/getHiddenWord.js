const getWord = require('../Logic/getWord');

module.exports = function (){
    return{
        "id": getWord().id, 
        "hiddenWord": getWord().word.replace(/[a-zA-Z]/g , '-')
    }
}