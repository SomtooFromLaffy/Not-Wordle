import { useState } from "react"


const useGameLogicHook = (solution) => {

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
    // takes in the event passed in from wordlehome
    // NN destructures it and passes just the key
    // entry(consider in future projects)
    const handleKeyup = ({key}) => {
      // check input is a letter and not special key
      // regex  in if statement to ensure comment above
      if(key === 'Backspace') {
        setCurrentGuess((prev) =>{
          return prev.slice(0, -1)
        })
        return
      }
      if(/^[A-Za-z]$/.test(key)){
        // Make sure the number of inputs does not exceed 5
        if(currentGuess.length < 5){
          // Basically append new input letter if entire 
          // word guess is less than 5
          setCurrentGuess((prev) => {
            return prev + key
          })
        }
      }else{
        console.log('bad character')
      }
    }

    // Personal function  will update later
    // const handleButtonPress = () =>{

    // }
  
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
  }

export default useGameLogicHook
