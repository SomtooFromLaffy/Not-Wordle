import React, { useState, useEffect } from 'react'
import './KeypadStyles.css'
import letterkeys from '../assets/keyletters.json'


export default function Keypad() {
  const [keypadLetters, setKeypadLetters] = useState(null)

  useEffect(() => {
    const keys = letterkeys['letters']
    setKeypadLetters(keys)
    }, [])



  console.log(keypadLetters)
  return (
    <div className='keypad'>
      {keypadLetters && keypadLetters.map((keypadLetter) => {
        return (
            <div key={keypadLetter.key}> {keypadLetter.key} </div>
        )
      })}
    </div>
  )
}
