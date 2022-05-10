import React from 'react';
import { useState } from 'react';

const Example = () => {
    
    let [text, setText] = useState('Random Title');
    let [age, setAge] = useState(100)
    let [person, setPerson] = useState({

        Name: 'Akin',
        Age:21,
        message: 'web dev'
    })

    function nameChanger(){
setPerson({...person, Name:'Eggy', Age:50, message:'Trainee'}     )
      
    }

function ageChanger(){
    if(age === 100) {
        setAge(150)
    }else{
        setAge(100)
    }
}
function hold() {
    if(text==='Random Title'){
        setText('Random City')
    }else{
        setText('Random Title')
    }
}

  return (
    <div className='example'>
      <h2>useState Basics</h2>
      <h2>{text}</h2>
      <button onClick={hold}>Click to Change Title</button>
      {/* <div>
          <h2>{age}</h2>
          <button onClick={ageChanger}>click to change age
          </button>
      </div> */}
      <h2>{person.Name}</h2>
      <h2>{person.Age}</h2>
      <h2>{person.message}</h2>
      <button onClick={nameChanger}>click to change person</button>
    </div>
  )
}

export default Example