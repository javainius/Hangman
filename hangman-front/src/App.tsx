import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    hiddenWord: "",
    wordId: null,
    numberOfWrongLetters: null,      
    isGameStillGoing: true,
    playerStatus: "",
    guessingLetter: ""
  });

  useEffect(() => {
        axios.get('http://localhost:3000')
        .then(res => {
          setState(res.data)
        })
  }, [])

  function handleLetterChange(e: any){
    state.guessingLetter = e.target.value;
  }

  return (
    <div className="App">
      {state.hiddenWord}<br/>
      <input value={state.guessingLetter} type="text" id="letter"
      onChange={handleLetterChange} name="letterField"></input>
      <button onClick={sendGuessing}>Check</button>
    </div>
  );

  function sendGuessing(){
    axios.post('http://localhost:3000', state)
      .then(res => {
        setState(res.data)
      });
  }

}

export default App;
