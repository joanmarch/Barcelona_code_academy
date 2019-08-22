import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';


class App extends React.Component {
  render(){
    //var categories  =[ 't-shirts', 'Hats', 'shorts', 'shirts', 'pants', 'shoes'];
    //var looper = categories.map(function(name, i){

      //return <h1 style = {{...styles.title,...styles.size}} key={i}>{name}</h1>
    //   {looper}   })
   
    return(
      <div className =  "wrapper">    
        <Header/>
        <div>
          <Main/>
        </div>
        <Footer/>
      </div>
    )
  }
}




const styles ={
  
}


export default App;
