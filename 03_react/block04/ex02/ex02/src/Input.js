import React from 'react';

const Input = (props) => {
    return (
             <form onSubmit = {e=> {
                e.preventDefault();
                return(
                 props.getInput(e.target[0].value))}}> 
             <input name = "Input"/>
            </form>
        )

    }
    
    export default Input;
