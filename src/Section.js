import React, { useState } from 'react'
import './Section.css'
import 'animate.css';

const Section = () => {
  let gender = 'male'
  let trainees = ['Silva', 'Ola', 'Ade'];
  let picker = Math.floor(Math.random()*trainees.length)
  return (
    <div className='sec'>
     eggy is a {gender} contestant 
     <marquee behavior="" direction="left">biddd</marquee>
     <h2 className='animate__bounceIn'>deeed</h2>

    </div>
    
  )
}

export default Section