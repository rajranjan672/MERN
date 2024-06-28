import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from '@mui/material';


const FilterListToggle = ({options, value, selectToggle}) => {
  return (
    <div>
        
                {options.map(({label, id, value}) => {
                    <Button key={id} value={value}>{label}</Button>
                })}
    </div>
  )
}

export default FilterListToggle