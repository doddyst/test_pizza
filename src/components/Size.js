import React from 'react'
import { Radio, RadioGroup } from '@mui/material';

const Size = () => {
  return (
    <div>
         <RadioGroup>
      <h2>Size</h2>
      <div className='pizza_size'>
      <Radio value= {-1}  onClick={(e) => handleClick(e)}/>
      <p>Small</p>
      <Radio value= {0} onClick={(e) => handleClick(e)}/>
      <p>Medium</p>
      <Radio value= {2}  onClick={(e) => handleClick(e)}/>
      <p>large</p>
      </div>
      </RadioGroup>
    </div>
  )
}
function handleClick(e) {
    console.log(e.target.value);
  }

export default Size
