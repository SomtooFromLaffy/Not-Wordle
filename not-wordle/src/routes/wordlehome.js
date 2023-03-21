import React, { useEffect, useState } from 'react'
import  word_list from '../assets/animals.json'
import WordleBody from '../components/WordleBody'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Wordlehome = () => {
  const [solution, setSolution] = useState(null)
  const [category, setCategory] = useState('animals')

  // Get a word upon re-render of the component and changes state to the 
  // current word. solution word at this time is generated randomly regardless
  // of category
  useEffect(() => {
    console.log(category)
    const random_word = word_list[category][Math.floor(Math.random()*word_list[category].length)]
    console.log(random_word)
    setSolution(random_word['name'])
  }, [setSolution, category])
  return (
    <div>
      <Header setCategory = {setCategory}/>
      {solution && <WordleBody solution = {solution} />}
      <Footer />
    </div>
  )
}

export default Wordlehome

