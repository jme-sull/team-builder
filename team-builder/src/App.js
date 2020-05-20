import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Teammate from './components/Teammate.js';
import TeammateForm from './components/Form.js';



function App() {

 const initalTeammates = [

  {
    id: uuid(),
    name: 'Jamie',
    email: 'jkcrawshaw@gmail.com',
    role: 'Front-End'

  },

  { 
    id: uuid(),
    name: 'Brendan',
    email: 'bsull05@yahoo.com',
    role: 'Back-End'
  
  }


 ]
 
 const initalFormValues = {
   name: '',
   email: '',
   role: '',
 }
  

const [teammates, setTeammates] = useState(initalTeammates)
const [formValues, setFormValues] = useState(initalFormValues)


const onInputChange = evt => {
  const { name } = evt.target
  const { value } = evt.target
  debugger
  setFormValues({ ...formValues, [name]: value })
}

const onSubmit = evt => {
  evt.preventDefault()

  if (
    !formValues.name.trim() ||
    !formValues.email.trim() ||
    !formValues.role.trim()
  ) {
    return
  }
  
  const newTeammate = { ...formValues, id: uuid() }
  
  setTeammates([ newTeammate, ...teammates ])
  setFormValues(initalFormValues)
}




  return (
    
    <div className='App'>

      <h1>Meet My Teammates </h1>

      {
        teammates.map(teammate => {
          return (
          <Teammate key = {teammate.id} name = {teammate.name} email ={teammate.email} role={teammate.role} />
          )
        })
      }

      <TeammateForm values = {formValues} onInputChange={onInputChange} onSubmit={onSubmit}/>

      


    </div>
   
  )
}

export default App;
