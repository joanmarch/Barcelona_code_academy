import React, { Component } from 'react';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}



class AdminArea extends Component {
  constructor(props){
    super(props);
    this.state={
    //   loginPage:[],
    //   uploadScreen:[],
    //   pageTitle:"Wellcome to our market"
    image:"",
    name:"",
    price:0,
    id:""
    }
  }

  submitHandle = async event =>{
    
    event.preventDefault();  
    try{
        var payload=this.state;       
        let response = await axios.post('http://localhost:3001/products/add', payload, config)
        alert("Product submitted");
        
        if(response.data.code == 200){
          //  let fields = {};
          //  fields["emailid"] = "";
          //  fields["password"] = "";
          //  fields["confirmPassword"] = "";
          //  this.setState({fields:fields});
           console.log("registration successfull");
          //  var loginscreen=[];
          //  loginscreen.push(<Login parentContext={this}/>);
          //  var loginmessage = "Not Registered yet.Go to registration";
          //  this.props.parentContext.setState({loginscreen:loginscreen,
          //  loginmessage:loginmessage,
          //  buttonLabel:"Register",
          //  isLogin:true
          //  });
          }
      }
      catch(error){
        console.log(error)
      }
  }

  handleChange = event =>{
    this.setState({[event.target.name] : event.target.value})
  }

  
  render() {
    return (
        <form onSubmit={this.submitHandle} action="/upload" method = "post" enctype ="multipart/form-data">
        <input onChange={this.handleChange} type="file" value={this.image}  name="image"></input>
        <input onChange={this.handleChange} type="text" name="name" value={this.name} placeholder="Enter product name"></input>
        <input onChange={this.handleChange} type="text" name="price" value={this.price} placeholder="Enter product price"></input>
        <input onChange={this.handleChange} type="text" name="id" value={this.id} placeholder="Enter product Id "></input>
        <button>Upload Product</button>
      </form>
    );
  }
}
const style = {
  margin: 15,
};
export default AdminArea;
