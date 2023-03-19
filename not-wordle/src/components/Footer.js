import React from 'react'
import './FooterStyles.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <div className='foot'>
            <div className='introduction'>
                <h4>Developer</h4>
                <p>Somtoo Chukwu </p>
                <i>Aspiring Frontend Developer</i>
                <div className='connect'>
                    <FaLinkedin size={20} style={{color:'#000', marginRight: '2rem'}} />
                    <FaGithub size={20} style={{color:'#000', marginRight: '2rem'}} />

                </div>
            </div>

            <div className='description'>
                <h4>Project Aim</h4>
                <p> 
                    This is a learning project to showcase to hiring managers.
                    It makes use of React, HTML and CSS.
                    It also incorporates using Git and Github tools via VS Code. It is
                    mobile friendly.
                </p>

            </div>
      
        </div>
    </div>
  )
}
