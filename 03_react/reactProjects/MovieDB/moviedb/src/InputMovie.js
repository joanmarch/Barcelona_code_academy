import React from 'react'
import { Icon ,Input } from 'semantic-ui-react'
import './App.css';

class InputMovie extends React.Component{
state ={
   movie : "",
}

handleChange = (event) =>{
   this.setState ({movie : event.target.value})
   
}
   
render(){
   return(
      <Input onChange ={event=>this.handleChange(event)} icon={<Icon name='search' inverted circular link onClick={()=> this.props.handleIconClick(this.state.movie)}/>} placeholder='Search...' />
      
      
   )
}
}
//
export default InputMovie


//

//
    
//