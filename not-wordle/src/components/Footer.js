import React from 'react'
import './FooterStyles.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
// import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className='foot'>
            <div className='introduction'>
                <h4>Developer</h4>
                <p>Somtoo Chukwu </p>
                <i>Aspiring Frontend Developer</i>
                <div className='connect'>
                    <a href="https://www.linkedin.com/in/somtoo-chukwu-b5189b159/" target="_blank" rel="noreferrer"><FaLinkedin size={20} style={{color:'#000', marginRight: '2rem'}} /></a>
                    <a href="https://github.com/SomtooFromLaffy" target="_blank" rel="noreferrer"><FaGithub size={20} style={{color:'#000', marginRight: '2rem'}} /></a>

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
