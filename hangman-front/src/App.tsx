import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = useState({
    hiddenWord: "",
    wordId: null,
    numberOfWrongLetters: 0,      
    isGameStillGoing: true,
    playerStatus: "",
    guessingLetter: ""
  });

  var alert;

  useEffect(() => {
        axios.get('http://localhost:3000')
        .then(res => {
          setState(res.data)
        })
  }, [])

  function handleLetterChange(e: any){
    state.guessingLetter = e.target.value;
  }

  function formAlert(){
    if(!state.isGameStillGoing){
      return (
      <div className="alert alert-dark" role="alert">
        {state.playerStatus}
      </div>
      );
    }
  }

  return (
    <div className="App">
      <h2>{state.hiddenWord}</h2>
      <br/>
      <input minLength={1} maxLength={1} value={state.guessingLetter} type="text" pattern="[A-Za-z]{3}"
      onChange={handleLetterChange} name="letterField"></input>
      <button onClick={sendGuessing}>Check</button>
      <br/>
      <h3>moves left: {10 - state.numberOfWrongLetters}</h3>
      {formAlert()}
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
