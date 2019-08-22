import React from 'react'; 
import "./styles.css";

class Shipping extends React.Component{
    
    render(){
      return(
         this.props.data > 500?  <h5>Free Delivery!</h5> : <h5>Not Free Delivery!</h5>
      )
    }
  }
  
  export default Shipping