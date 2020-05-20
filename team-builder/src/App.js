import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Teammate from './Teammate.js'


function App() {

 const initalTeammates = [

  {
    name: 'Jamie',
    email: 'jkcrawshaw@gmail.com',
    role: 'Front-End Developer'

  }

 ]
 
  

const [teammates, setTeammates] = useState(initalTeammates)

  return (
    
    <div class='App'>

      <h1>Meet My Teammates </h1>

      {
        teammates.map(teammate => {
          return (
          <Teammate name = {teammate.name} email ={teammate.email} role={teammate.role} />
          )
        })
      }

      <button>Join Our Team!</button>


    </div>
   
  )
}

export default App;
