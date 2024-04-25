import React from 'react'
import pizzasmall from '../Assets/pizza_small.jpg'
import pizzamedium from '../Assets/pizza_medium.png'
import pizzalarge from '../Assets/pizza_large.webp'
import { Radio, RadioGroup } from '@mui/material';

const Type = () => {
  return (
    <div>
        <h3> PIZZA </h3>
       <RadioGroup>
            <div className='pizza_type'>
             
                  <div className='type1'><img src={pizzasmall} alt='Pizza 1'></img>
                        <h3> PIZZA_NAME1</h3>
                        <p>$8</p>
                        <Radio value= {8} onClick={(e) => handleClick(e)}/>
                </div>
                 <div className='type2'><img src={pizzamedium} alt='Pizza 2'></img>
                       <h3> PIZZA_NAME2</h3>
                       <p>$10</p>
                       <Radio value= {10} onClick={(e) => handleClick(e)}/>
                   </div>
                 <div className='type3'><img src={pizzalarge} alt='Pizza 3'></img>
                       <h3> PIZZA_NAME3</h3>
                       <p>$12</p>
                       <Radio value= {12}  onClick={(e) => handleClick(e)}/>
                      
                  </div>
             
            </div>
   
      </RadioGroup>
    </div>
  )
}
function handleClick(e) {
    console.log(e.target.value);
  }
export default Type
