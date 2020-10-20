import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
        axios.get('http://localhost:3000')
        .then(res => {
          setState(res.data)
        })
		// fetch("http://localhost:3000")
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setWord(data.hiddenWord) // new
		// 	})
  }, [])

  const [state, setState] = useState({
    hiddenWord: "",
    wordId: null,
    numberOfWrongLetters: null,      
    isGameStillGoing: true,
    playerStatus: ""
  });

  function sendGuessing(){

  }

  return (
    <div className="App">
      {state.hiddenWord}<br/>
      <input type="text" id="letter" name="letterField"></input>
      <button onClick={sendGuessing}>Check letter</button>
    </div>
  );
}

export default App;
