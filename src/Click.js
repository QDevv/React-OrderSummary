import React from 'react'

const click = () => {
    function handleClick() {
        console.log('na you click am')
    }

    let anotherHandleclick = (work, place)=> {
        let statement = `ade is a ${work} in ${place}`
        console.log(statement);
    
    } 
  return (
    <div className='click'>
        <p>Click Events</p>
<button onClick={handleClick}>Click Am</button>
<div>
<button onClick={() => anotherHandleclick('developer', 'tech')}>Click Am again</button>
</div>
    </div>
  )
}

export default click