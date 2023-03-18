import React, { useEffect, useState } from 'react'
import  word_list from '../assets/animals.json'

const Wordlehome = () => {
  const [solution, setSolution] = useState(null)

  // Get a word upon re-render of the component and changes state to the 
  // current word. solution word at this time is generated randomly regardless
  // of category
  useEffect(() => {
    const random_word = word_list['animals'][Math.floor(Math.random()*word_list['animals'].length)]
    console.log(random_word)
    setSolution(random_word['name'])
  }, [setSolution])
  return (
    <div>
      <h1>Hello Wordle</h1>
      {solution && <h1>{solution}</h1>}
    </div>
  )
}

export default Wordlehome

