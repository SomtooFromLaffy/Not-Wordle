import React from 'react'
import Row from './Row'
import './GridStyles.css'

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div className='wordle-grid'>
      {guesses.map((guess, index) =>{
        return <Row key={index} />
      })}
    </div>
  )
}
