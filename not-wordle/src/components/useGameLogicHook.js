import { useState } from "react"


const useGameLogicHook = (solution) => {

    // Count the number of turns for a user
    const [turn, setTurn] = useState(0) 
    // Keetrack of the current guess
    const [currentGuess, setCurrentGuess] = useState('')
    // Player guesses as list of letter objects( containing state i.e color of the word )
    const [guesses, setGuesses] = useState([...Array(6)])
    // History of the guesses made by the player as strings(guesses as string instead of objects)
    const [history, setHistory] = useState([]) 
    // Correct state
    const [isCorrect, setIsCorrect] = useState(false)
    // Update Keypad. each entry is an object with the letter as the key and color 
    // as value
    const [usedKeys, setUsedKeys] = useState({})
  
    // conevrt the list into objects with properties that denote the state of a letter
    // i.e present and in correct position(green), present and in wrong position{yellow}, wrong(red)
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
      // console.log(currentGuess)
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
            solutionList[index] = null
          }
        }
        return {key: letter, color : tag}
      })

      return formattedGuess
    }
  
    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
      if(currentGuess === solution){
        setIsCorrect(true)
      }
      // Compare NN's function with mine //why not prevGuesses.push(formatted guess)
      // maybe to keep it strict and avoid resulting if (array > 6guesses)statement 
      // I see why but all the same
      // Consider changing(my idea would work)
      setGuesses((prevGuesses) => {
        let newGuesses = [...prevGuesses]
        newGuesses[turn] = formattedGuess
        return newGuesses
      })

      // Samee here prev.push too
      setHistory((prevHistory) => {
        return[...prevHistory, currentGuess]
      })

      //Increase turn count
      setTurn((prevTurn) => {
        return prevTurn + 1
      })

      //update the keypad
      setUsedKeys((prevUsedKeys) => {
        // tmp object as usual
        let newKeys = {...prevUsedKeys}

        formattedGuess.forEach((letter) => {
          // get the old color. if letter doesn't exist in newKeys, Undefined is returned
          const oldColor = newKeys['letter']
          // get the latest color from the latest guess
          const newColor = letter['color']

          
          switch(oldColor){
            case "green":
              // if its green, its green. Should not be changed
              break;
            
            case "yellow":
              // if its green, can't go back to yellow. User probably switchh a correctly placed letter
              // or letter appears twice
              if(newColor==="green"){
                  newKeys[letter.key] = "green"
              }
              break;
            
            case "red":
              // Once it is red, its red
              break;

            default:
              // Returned undefined so we assign it its first color
              newKeys[letter.key] = newColor
          }

        })

        return newKeys
      })

      // Reset current guess
      setCurrentGuess('')
  
    }
  
    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    // takes in the event passed in from wordlehome
    // NN destructures it and passes just the key
    // entry(consider in future projects)
    const handleKeyup = ({key}) => {
      // Switch statement for 3 kinds of input

      switch(key){
        
        // When user pushes Enter
        // check if the user has used more than 5 guesses
        // check if the word is in the previous guess list
        // check if the length of the guess is not equal to 5
        //if all conditions are met 
        case "Enter":
          turn > 5 ? console.log("You used all your guesses") :
                     history.includes(currentGuess) ? console.log("You already guessed this") :
                     currentGuess.length !==5 ? console.log("Keep guessing quitter") :
                     addNewGuess(formatGuess())
                     //console.log(formatGuess())

          break;

        // Backspace to clear character
        case "Backspace":
          setCurrentGuess((prev) => {
            return prev.slice(0, -1)
          })

          break;

          // Can't create backspace button for the keypad so...
        case "<":
          setCurrentGuess((prev) => {
            return prev.slice(0, -1)
          })

          break;

        // When user enters a regular letter, this cleans it and accepts(and updates the currentGuess) it or rejects it. 
        default:
          if(/^[A-Za-z]$/.test(key)){ 
            if(currentGuess.length < 5){
               setCurrentGuess((prev) => {return prev + key})
            }
          }
      
      }

      return
    }
  
    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}
  }

export default useGameLogicHook
