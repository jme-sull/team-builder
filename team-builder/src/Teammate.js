import React from 'react'


export default function Teammate (props) {

   const { name, email, role } = props 

   return (
    <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Role: {role}</p>
    </div>
   )


}