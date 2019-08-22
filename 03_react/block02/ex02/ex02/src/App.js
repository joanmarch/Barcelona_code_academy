import React from 'react';
import LastNames from './LastNames';
import FirstNames from './FirstNames';


class App extends React.Component{
  
  lastNamesLooper = (namesArr) =>(

    namesArr.map((values, i)=>(
    <LastNames key={i} lastnames = {values}/>
    )
  )
  )
  
render (){

  let names = ["Joan", "Marc", "Sergi", "Francesc", "Riki"];
  let lastnames = ["March", "Cierco", "de Pablo", "Balcells", "Campru"];
 
  
  return(
  <div>
      <div style ={styles.firstnames} >
      <FirstNames names = {names}/>
      </div>
      <div style ={styles.lastnames}>
      {this.lastNamesLooper(lastnames)}
      </div>
    </div>
  )
}
}

const styles ={
  ul:{
    listStyle: 'none',
    margin: '0px',
    padding: '0px',
  },
  firstnames:{
    width: '20%',
    float: 'left',
    textAlign: 'center',
  },
  lastnames:{
    width: '20%',
    float: 'left',
    textAlign: 'center',
  },
  afterStyle: {
    clear: 'both'
  },

}


export default App;

//Create a parent component inside which you define two arrays of equal length, the first will have 
//5 firstnames and the second 5 lastnames.
//Create 2 children components – one to display the firstnames and one to display the lastnames so
// that they are rendered side by side with matching order.