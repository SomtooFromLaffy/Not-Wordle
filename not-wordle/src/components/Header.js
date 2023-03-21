import React from 'react'
import './HeaderStyles.css'

function Header({ setCategory }) {
  // Header/Navbar for the project
  const changeCategory = (val) =>{
    setCategory('car_models')
  }
  return (
    <div>
      <header>
        <h1>Not-Wordle</h1>
      </header>

      <button onClick={changeCategory}> Hello </button>
      
    </div>
  )
}

export default Header
