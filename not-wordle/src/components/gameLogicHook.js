import { useState } from "react"


const gameLogicHook = (solution) => {

    // Count the number of turns for a user
    const [turn, setTurn] = useState(0) 
    // Keetrack of the current guess
    const [currentGuess, setCurrentGuess] = useState('')
    // List of the letters in the string of the guess
    const [guesses, setGuesses] = useState([])
    // History of the guesses made by the player
    const [history, setHistory] = useState([]) 
    // Correct state
    const [isCorrect, setIsCorrect] = useState(false)
  
    // conevrt the list into objects with properties that denote the state of a letter
    // i.e present and in correct position(green), present and in wrong position{yellow}, wrong(red)
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
      
    }
  
    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {
  
    }
  
    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = () => {
  
    }

    // Private function  will update later
    // const handleButtonPress = () =>{

    // }
  
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
  }

export default gameLogicHook
