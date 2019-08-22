import React from 'react';
import Totalcost from './TotalCost'
import DisplayList from './DisplayList'
import Shipping from './Shipping'
import "./styles.css";

class App extends React.Component{
  
  state={
    productList : [{name: "hat", quantity : 0, price : 10},
                   {name: "shoes", quantity : 0, price : 25},
                  {name: "shirt", quantity : 0, price :15}],
    totalCost: 0
    
  }

  _looper = () => {
    return (this.state.productList.map((obj, i)=>(
     <DisplayList index = {i} product = {obj} addUnit = {this.addUnit} removeUnit = {this.removeUnit}></DisplayList>)
    ))
   }

  addUnit = (index) =>{
    let myState = this.state;
    myState.productList[index].quantity += 1;
    this.getTotalCost(myState.productList);
    this.setState(myState);
  }

  removeUnit = (index) =>{
    let myState = this.state;
    if (myState.productList[index].quantity > 0){
    myState.productList[index].quantity -= 1;
    }else {}
    this.getTotalCost(myState.productList);
    this.setState(myState);
  }

  getTotalCost =(list) =>{
    let total = 0
    for (let i = 0; i < list.length; i++){
        total = total + list[i].quantity * list[i]. price;
    }
    this.state.totalCost = total;  
}

  render(){
    return(
      <div>
        <div>
         {this._looper()}
       </div>
      <Totalcost data={this.state.totalCost}></Totalcost>
      <Shipping data={this.state.totalCost}></Shipping>
      </div>
    )
  }
}

export default App