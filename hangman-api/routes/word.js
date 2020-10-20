const express = require('express');
const router = express.Router();
const getHiddenWord = require('../Logic/getHiddenWord');
const getGameState = require('../Logic/getGameState');

//ROUTES
router.get('/', (req,res)=> {
    res.send(getHiddenWord());
});

router.post('/', (req,res) => {
    var { wordId, hiddenWord, guessingLetter, numberOfWrongLetters } = req.body;

    res.send(getGameState(wordId, hiddenWord, guessingLetter, numberOfWrongLetters));   
});




module.exports = router;