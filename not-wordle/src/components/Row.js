import React from 'react'
import './RowStyles.css'

export default function Row({ guess, currentGuess }) {

  // Each passed in guess is a list of letter objects
  // Each time Row is called, if guess is undefined, the second
  // return statement is used. 
  // Note to self: Imagine the divs below as a row not column

  if(guess){
    return(
      <div className='row past'>
        {/* Set the index as the key, and class name as color
            to make css easy. Output the letter through the key */}
        {guess.map((letter, index) => (
          <div key={index} className={letter.color}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if(currentGuess){
    let letters = currentGuess.split('')

    return(
      <div className='row current'>
        {/* This fill in the letters that have been inputed by a user */}
        {letters.map((letter,index) => (
          <div key={index} className='filled'>{letter}</div>
        ))}

        {/* This fill in the rest of the empty boxes of the rows that havent had letters inputted in them */}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    )
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
