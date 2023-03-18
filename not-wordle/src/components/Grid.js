import React from 'react'
import Row from './Row'
import './GridStyles.css'

export default function Grid({ currentGuess, guesses, turn }) {
  // Returns one grid object. Each row is created when the map function below runs.
  // Turn is passed in as a key for the div I'm guessing
  // I need to sleep
  // Guesses is a list of letter object
  return (
    <div className='wordle-grid'>
      {guesses.map((guess, index) =>{
        // Each render of this map updates the rows
        if (turn === index){
          // This updates the current row. It renders each time the user inputs a new word
          return <Row key={index} guess={guess} currentGuess={currentGuess} />
        }
        else{
          // This updates the past rows. They are updated once because all the letters are know
          return <Row key={index} guess={guess} />
        }
      })}
    </div>
  )
}
