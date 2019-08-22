import React from 'react'; 
import "./styles.css";

class TotalCost extends React.Component{
    
    render(){
      return(
         <h1>{"Total:"+(this.props.data)}</h1>
      )
    }
  }
  
  export default TotalCost