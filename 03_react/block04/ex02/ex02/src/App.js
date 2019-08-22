import React from 'react';
import Input from './Input';
import Converted from './Converted';


class App extends React.Component{

state={
 input:0,
 ratio:0
}

//Addtodo = (todo) =>{
  // let {todo} = this.state         we grap the state
  // todos.push({todo});    we modify the state
  // this.setState({todos})    we put it back
//}

getInput = async (data) =>{
try{
let dolarratio = await this.getExchange();
this.setState({input : data, ratio : dolarratio})
}
catch(err){
console.log(err)
}

this.setState({input:data})
}

 getExchange  = async ()=>{
 try{
    const response = await fetch('https://api.exchangeratesapi.io/latest')
    const data= await response.json()
    return data.rates.USD;
   }
   catch (error){
    console.log(error);
   }
}

  render(){

    return(
      <div>
        <Input getInput = {this.getInput}/>
        <Converted input = {this.state}/>
      </div>
    )
  }
}

export default App;
