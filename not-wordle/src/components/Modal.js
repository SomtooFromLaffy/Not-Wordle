import React from 'react'
import './ModalStyles.css'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
        {
            isCorrect && (
                <div>
                    <h1> You win. </h1>
                    <p> Imagine some confetti </p>
                    <p><br/><span className='solution'>{solution}</span> </p>
                    <p>Took you {turn}/6 tries</p>

                </div>
            )
        }

        {
            !isCorrect && (
                <div>
                    <h1>You lose. </h1>
                    <p> The solution was <br/><span className='solution'>{solution}</span> </p>

                </div>
            )
        }

     ``
    </div>
  )
}
