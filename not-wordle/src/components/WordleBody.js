import React, { useEffect } from 'react'
import useGameLogicHook from './useGameLogicHook'

export default function WordleBody({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, handleKeyup } = useGameLogicHook(solution)

    //  tracks everytime a users presses a key
    //  the return in there ensures that the event listener is discarded after we grab
    //  the value   
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])


  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <h1>{currentGuess}</h1>
    </div>
  )
}
