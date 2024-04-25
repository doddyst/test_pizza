import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

const Topping = () => {
       
    const [value, setValue] = useState('')
  return (
    <div >
        
         <h2 >Toppings</h2>
      <div >
      <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="1"
          control={<Checkbox />}
          label="Avocado"
          labelPlacement="end"
          onClick={e => setValue(e.target.value)}
        />
        <FormControlLabel
          value="2"
          control={<Checkbox />}
          label="Lobster"
          labelPlacement="end"
          onClick={e => setValue(e.target.value)}
        />
        <FormControlLabel
          value="3"
          control={<Checkbox />}
          label="Bacon"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="1"
          control={<Checkbox />}
          label="Broccoli"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="2"
          control={<Checkbox />}
          label="Oyster"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        
        <FormControlLabel
          value="3"
          control={<Checkbox />}
          label="Duck"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="1"
          control={<Checkbox />}
          label="Onions"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="2"
          control={<Checkbox />}
          label="Salmon"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="3"
          control={<Checkbox />}
          label="Ham"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="1"
          control={<Checkbox />}
          label="Zucchini"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="2"
          control={<Checkbox />}
          label="Tuna"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        <FormControlLabel
          value="3"
          control={<Checkbox />}
          label="Sausage"
          labelPlacement="end"
          onClick={e => setValue(+e.target.value)}
        />
        
      </FormGroup>
    </FormControl>
    </div>
    <h2>Price</h2>
    <h2>${value}</h2>
    </div>

  )
}

export default Topping
