import React, { useEffect } from 'react'
import Grid from './Grid'
import useGameLogicHook from './useGameLogicHook'
import './WordleBodyStyles.css'
import Keypad from './Keypad'

export default function WordleBody({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys } = useGameLogicHook(solution)

    //  tracks everytime a users presses a key
    //  the return in there ensures that the event listener is discarded after we grab
    //  the value   
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
    
            // if guess is correct, or turns > 5,
        // input is locked and game is over
        if(isCorrect || turn > 5){
            console.log('congratulations')
            window.removeEventListener('keyup', handleKeyup)
        }
    
        return () => window.removeEventListener('keyup', handleKeyup)
        }, [handleKeyup, isCorrect, turn])

  return (
    <div className='wordle-body'>
      {/* Pass in the following to Grid. Reasons explained in grid */}
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
      <Keypad usedKeys={usedKeys} />
    </div>
  )
}
