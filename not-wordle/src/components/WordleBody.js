import React, { useEffect, useState } from 'react'
import Grid from './Grid'
import useGameLogicHook from './useGameLogicHook'
import './WordleBodyStyles.css'
import Keypad from './Keypad'
import Modal from './Modal'
import Footer from './Footer'

export default function WordleBody({ solution }) {
  const { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys } = useGameLogicHook(solution)
  const [showModal, setShowModal] = useState(false)

    //  tracks everytime a users presses a key
    //  the return in there ensures that the event listener is discarded after we grab
    //  the value   
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
    
            // if guess is correct, or turns > 5,
        // input is locked and game is over
        if(isCorrect || turn > 5){
            setTimeout(()=> setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

    
        return () => window.removeEventListener('keyup', handleKeyup)
        }, [handleKeyup, isCorrect, turn])

  return (
    <div className='wordle-body'>
      {/* Pass in the following to Grid. Reasons explained in grid */}
      <Grid currentGuess={currentGuess} turn={turn} guesses={guesses} />
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}
