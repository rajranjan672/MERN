
import { Accordion, AccordionDetails, AccordionSummary, Checkbox } from '@mui/material'
import React from 'react'

const categories = [
  {
    "id": 1,
    "name": "men's clothing"
  },
  {
    "id": 2,
    "name": "jewelery"
  },
  {
    "id": 3,
    "name": "electronice"
  },
  {
    "id": 4,
    "name": "women's clothing"
  }

]




const  CheckBox = () => {
 
   
  return (

      <>
      <Accordion>
      <AccordionSummary
      aria-controls="panel1-content"
      id="panel1-header"
    >
      Accordion 1
    </AccordionSummary>
   {categories.map((person, id) => {

        return(
    <AccordionDetails key={person.id}>
          
            
            <Checkbox></Checkbox>
            <span>{person.name}</span>
    </AccordionDetails>
        )
   })}
        </Accordion>
    
     
  
  </>
  

)}



export default CheckBox