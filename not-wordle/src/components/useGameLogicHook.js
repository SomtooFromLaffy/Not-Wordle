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
      console.log(currentGuess)
      // list out letters in the solution
      let solutionList = [...solution]

      // list out letters in the guess and create an object
      // with each letter as indicated in the comment above
      let formattedGuess = [...currentGuess].map((letter, item) =>{
        //Make all letters to be red
        let tag = 'red'

        //if the letter is in the solution go into the if else the letter
        //remains red
        if(solutionList.includes(letter)){
          //get the index of the letter in the solution list
          let index = solutionList.indexOf(letter)
          // if the index is the same in both arrays the mark it as green
          // also remove it from the array so that a similar letter in the 
          // list, indexOf does not keep returning the one we have selected
          if(index === item){
            solutionList[index] = null
            tag = 'green'
          }
          // indexes dont match so return yellow
          else{
            tag = "yellow"
          }
        }
        return {key: letter, color : tag}
      })

      return formattedGuess
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

      if(key==='Enter'){
        // end of turn
        // make sure current guess length == 5
        // make sure it is not word from previous guess (people are weird)
        // add guess to history of guesses
        // update the count of tries

        if(turn > 5){
          console.log("You used all your guesses")
          return
        }

        if(history.includes(currentGuess)){
          console.log("You used all your guesses")
          return
        }
        
        // make sure current guess length == 5 and not less
        if(currentGuess.length !==5 ){
          console.log("Keep guessing quitter")
          return
        }

        const format = formatGuess()
        console.log(format)
      }

      if(key === 'Backspace') {
        // Checks if user calls backspace
        // deletes the last character
        setCurrentGuess((prev) =>{
          return prev.slice(0, -1)
        })

        // bascially java return 0
        return
      }
      
      // check input is a letter and not special key
      // regex  in if statement to ensure comment above

      if(/^[A-Za-z]$/.test(key)){
        // Make sure the number of inputs does not exceed 5
        if(currentGuess.length < 5){
          // Basically append new input letter if entire 
          // word guess is less than 5
          setCurrentGuess((prev) => {
            return prev + key
          })
        }
      }
    }

    // Personal function  will update later
    // const handleButtonPress = () =>{

    // }
  
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
  }

export default useGameLogicHook
