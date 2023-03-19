import React, { useState, useEffect } from 'react'
import './KeypadStyles.css'
import letterkeys from '../assets/keyletters.json'


export default function Keypad({ usedKeys, setButtonEntry}) {
  const [keypadLetters, setKeypadLetters] = useState(null)



  useEffect(() => {
    const keys = letterkeys['letters']
    setKeypadLetters(keys)
    }, [])

  return (
    <div className='keypad'>
      {keypadLetters && keypadLetters.map((keypadLetter) => {
        // update the colors, if a letter returns undefined as a color,
        // no formatting is added
        const color = usedKeys[keypadLetter['key']]
        return (
            <button key={keypadLetter.key} className={color===undefined ? '' : color} type='submit' onClick={()=>{setButtonEntry(keypadLetter.key)}}>{keypadLetter.key}</button> 
        )
      })}
    </div>
  )
}
