import React, { useState } from 'react';
import './App.css';
import HangMan from  './gameComponents/HangMan';
import axios from 'axios';


function App() {

  function wordInitial() {
    var word;
    axios.get('http://localhost:3000')
    .then(res => {
      word =  res.data.hiddenWord;
    })
    return word;
  }

  // setWord(newWord => newWord = wordObj.word);
  const [word, setWord] = useState(() => wordInitial());

  return (
    <div className="App">
      {word}
    </div>
  );
}

export default App;
