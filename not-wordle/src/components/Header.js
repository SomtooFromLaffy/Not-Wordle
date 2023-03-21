import React from 'react'
import Category from './Category'
import './HeaderStyles.css'

function Header({ setCategory, category}) {
  // Header/Navbar for the project

  return (
    <div>
      <header>
        <h1>Not-Wordle</h1>
        {/* Cattegory addition to navbar */}
        <Category setCategory = {setCategory} />
      </header>
      {/* Displays the category to the user */}
      <h4 className='cat'> Category is {category}</h4>
      

      {/* <button onClick={changeCategory}> Hello </button> */}
      
    </div>
  )
}

export default Header

