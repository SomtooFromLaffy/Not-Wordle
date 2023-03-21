import React, { useEffect, useState } from 'react'
import './CategoryStyles.css'

export default function Category({ setCategory }) {
  // Used to define the dropdown after first render. Just like keypad
  const [cat, setCat] = useState(null)
  // Used to define whether the categories dropdown is out or no. Will consider moving to home so it can dissappear if a user clicks outside dropdown
  const [drop, setDrop] = useState(false)


  useEffect(()=>{
    const categories = [
      'animals', 'musical_instruments',
      'countries', 'cities',
      'boating', 'astronomy',
      'alloys', 'car_models'
      ]

    setCat(categories)
  },[])
  // const changeCategory = (val) =>{
  //     // setCategory(val)
  //     console.log(val)
  // }

  return (
    <div>
      {/* changes display from none on user click. Notice setCategory comes all the way from the top */}
      <ul className='categories' onClick={()=>{setDrop(!drop)}}>Categories
        <ul className= {drop ? 'submenuvis' : 'submenu'}>
                {cat && cat.map((category,index) =>{
                    return (
                        <button type='button' key = {category} onClick={()=>{setCategory(category)}}>{category}</button>
                    )
                    })}
        </ul>
      </ul>
    </div>
  )
}
