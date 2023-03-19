import React, { useEffect, useState } from 'react'
import  word_list from '../assets/animals.json'
import WordleBody from '../components/WordleBody'
import Header from '../components/Header'

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
      <Header />
      {solution && <WordleBody solution = {solution}/>}
    </div>
  )
}

export default Wordlehome

