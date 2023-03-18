import React, { useEffect } from 'react'
import Grid from './Grid'
import useGameLogicHook from './useGameLogicHook'
import './WordleBodyStyles.css'

export default function WordleBody({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, handleKeyup } = useGameLogicHook(solution)

    //  tracks everytime a users presses a key
    //  the return in there ensures that the event listener is discarded after we grab
    //  the value   
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    // Just outputing this to test game logic per guess
  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div className='wordle-body'>
      {/* Pass in the following to Grid. Reasons explained in grid */}
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
    </div>
  )
}
