import React from 'react'
import './RowStyles.css'

export default function Row({ guess }) {

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
