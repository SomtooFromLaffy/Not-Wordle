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
        return <Row key={index} guess={guess} />
      })}
    </div>
  )
}
