import React from 'react'
import img from './images/illustration-hero (1).svg'
import img1 from './images/icon-music.svg'
import { useState } from 'react'

const Classwork = () => {
    let [texts, setText] = useState('Annual Plan');
    let [numb, setNumb] = useState('$59.99/yr')
  
function ageChanger(){
    if(texts === 'Annual Plan' ) {
        setText('Monthly Plan')
        setNumb('$4.99/month')
    }else{              
        setText('Annual Plan')
        setNumb('$59.99/yr')
    }
}


  return (
    <div className='Maindv'>

        <div className='div1'>
         <img className='im' src={img} alt="" />
          <div>
         <h2>Order Summary</h2>
         <p className='lorem'>You can now listen to millions of songs,<br/>Audiobooks, and podcast, on any device <br /> anywhere you like!<br/>
         
            </p>
            <div className='div2'>
            <img className='img22' src={img1} alt="" />
            
            <h5>{texts}<br/> <p>{numb}</p> </h5>
            
            
            
            <a href="#" onClick={ageChanger}>change</a>
           
            </div>
            <button className='btn'>Proceed to payment</button>
            <h6>Cancel Order</h6>
         </div>
        
       

        </div>
        
       
    </div>
  )
}

export default Classwork