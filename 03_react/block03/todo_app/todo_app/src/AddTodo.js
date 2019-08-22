import React from 'react'

class AddTodo extends React.Component{

handleSubmit = (event) =>{
    event.preventDefault();
    this.props.getDataAdd(event.target[0].value);
    event.target[0].value = '';
}

render(){
   
    return(
        
            <form onSubmit = {this.handleSubmit}> 
             <input name = "AddTodo"/>
             <button>+</button>
            </form>
        
    )
}
}

export default AddTodo