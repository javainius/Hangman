const getWordById = require('./getWordById');

module.exports = function (wordState, wordId, guessedLetter){
    // numberOfdashes = (wordState.match(/-/g)||[]).length
    var word = getWordById(wordId);

    for (var i = 0; i < word.length; i++){
        if(word[i] === guessedLetter){
            wordState = replaceAt(wordState, i, guessedLetter);
        }
    }

    return wordState;
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}