import React from 'react';


class Login extends React.Component{
 
  render(){
    return(
        <form
            onChange={this.props.handleChange}
            onSubmit={this.props.handleSubmit}
        >
         <input value={this.props.email} name="email"></input>
         <input value={this.props.password} name="password"></input>
         <input value={this.props.confirmation} name="confirmation"></input>
         <button>Log In</button>
        </form>


    )

  }
}

export default Login;
