import React from 'react'; 
import "./styles.css";

class DisplayList extends React.Component{
    
    render(){
        
      return(
        <div name={this.props.key} className="singleProduct">
            <h4>{this.props.product.name}</h4>
            <h4>{"("+this.props.product.price+"€)"}</h4>
            <table className="quantityTable" >
                <tr>
                    <th>
                    <h4>{this.props.product.quantity}</h4>
                    </th>
                    <th>
                        <tr >
                        <button onClick = {() => this.props.addUnit(this.props.index)}>^</button>
                        </tr>
                        <tr>
                        <button onClick = {() => this.props.removeUnit(this.props.index)}>V</button>
                        </tr>
                    </th>
                </tr>
            </table>
        </div>
      )
    }
  }
  
  export default DisplayList