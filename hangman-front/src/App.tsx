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

  useEffect(() => {
        axios.get('http://localhost:3000')
        .then(res => {
          setState(res.data)
        })
  }, [])

  function handleLetterChange(e: any){
    setState({...state, guessingLetter: e.target.value})
  }

  function formGame(){
    if(state.isGameStillGoing){
      return(
        <div>
          <form onSubmit={sendGuessing}>
            <input minLength={1} maxLength={1} value={state.guessingLetter} type="text"
            onChange={handleLetterChange} name="letterField" ></input>
          </form>
        </div>
      );
    }
    else {
      return (
      <div className="alert alert-dark" role="alert">
        {state.playerStatus}
      </div>
      );
    }
  }

  return (
    <div className="App">
      <h1>THE HANGMAN</h1>
      <br/>
      <h2>{state.hiddenWord}</h2>
      <br/>
        {formGame()}
      <br/>
      <h3>moves left: {10 - state.numberOfWrongLetters}</h3>
      <br/>
    </div>
  );

  function sendGuessing(e: any){
    e.preventDefault();
    axios.post('http://localhost:3000', state)
      .then(res => {
        setState({ ...res.data, guessingLetter: ''})
      });
  }
}

export default App;
