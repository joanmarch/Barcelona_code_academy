import React from 'react';

class App extends React.Component{

constructor(){
  super()
  this.state = {
    count : 5
}
  this.handleStartStop();

}    


    handleStartStop =()=> {
        function timer() {
            if (this.state.count == 1){
                this.props.checkdataDone();
                clearInterval(counter);
            }
          this.setState({
            count: (this.state.count -= 1) 
          });
        }
    
        let counter = setInterval(timer.bind(this), 1000);
      
         
      }
  
    render(){
        this.handleStartStop.bind(this)  
        debugger     
      return(
          <div>
        <h1>this message will desapper in {this.state.count}</h1>
          </div>
      )
    }
  }
  
  
  export default App;
