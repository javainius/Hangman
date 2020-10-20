const getProcessedWordState = require('../Logic/getProcessedWordState');
const getWordById = require('./getWordById');

module.exports = function (wordId, wordState, guessedLetter, numberOfWrongLetters){
    var processedWordState = getProcessedWordState(wordState, wordId, guessedLetter);
    var isGameStillGoing = true;
    var playerStatus = "";

    if(wordState === processedWordState){
        numberOfWrongLetters++;
        if(numberOfWrongLetters === 10){
            playerStatus = "you loose";
            isGameStillGoing = false;
        }
    }  
    else if(processedWordState === getWordById(wordId)){
        playerStatus = "you win";
        isGameStillGoing = false;
    }

    return ({
                "hiddenWord": processedWordState,
                "wordId": wordId,
                "numberOfWrongLetters": numberOfWrongLetters,
                "isGameStillGoing": isGameStillGoing,
                "playerStatus": playerStatus
    });
}