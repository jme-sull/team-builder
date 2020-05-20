import React from 'react'

export default function TeammateForm(props) {

    const { values, onInputChange, onSubmit } = props 


    return (
    <form onSubmit={onSubmit}> 
        <div className = 'form'>
            <h2>Join the Team!</h2>
            <label>Name:&nbsp;
                <input
                    type = 'text'
                    placeholder = 'name'
                    maxLength = '20'
                    name = 'name'
                    value = {values.name}
                    onChange = {onInputChange}
                    />
            </label>
            <label>Email:&nbsp; 
                <input 
                type = 'text'
                placeholder = 'email'
                maxLength = '20'
                name = 'email'
                value = {values.email}
                onChange = {onInputChange}
                />
            </label>

            <label>Role:&nbsp; 
                <select name='role' value={values.role} onChange = {onInputChange}>
                    <option value='' >Select a Role</option>
                    <option value='Front-End'>Front-End</option>
                    <option value='Back-End'>Back-End</option>
                    <option value='UI'>UI</option>
                    <option value='Marketing'>Marketing</option>
                </select>
            </label>
            
           
            <button>Submit</button>
        </div>     
    </form>

    )
}