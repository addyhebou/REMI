import React, { Component } from 'react'

const Form = ({ setInputText }) => {
    
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }

    const submitToDoHandler = (e) =>{
        e.preventDefault();
    }

    return(
        <form>
            <input onChange = {inputTextHandler} placeholder = "Enter Task" type = "text" />
            <select size="5" multiple>
                <option value = "MusicTech">Music Tech</option>
                <option value = "Performancence">Performance</option>
                <option value = "MusicCreator">Music Creator</option>
                <option value = "FinancialFreedom">Financial Freedom</option>
                <option value = "Personal">Personal</option>
            </select>
            <button onClick = {submitToDoHandler} type = "submit">Submit</button>
        </form>
    )
}

export default Form;