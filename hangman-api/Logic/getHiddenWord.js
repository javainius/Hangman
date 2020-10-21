const getWord = require('../Logic/getWord');

module.exports = function (){
    const wordObj = getWord();
    return{
        "wordId": wordObj.id, 
        "hiddenWord": wordObj.word.replace(/[a-zA-Z]/g , '-'),
        "numberOfWrongLetters": 0,
        "isGameStillGoing": true,
        "playerStatus": ""
}
}