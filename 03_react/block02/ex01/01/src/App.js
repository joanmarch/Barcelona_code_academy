import React from 'react';
import ChildComp from './ChildComp';


class App extends React.Component{

render (){
  let name = "joan march";
  return(
  <ChildComp name = {name}/>
  )
}
}

export default App;

//Create two React components, one of them will be the parent component and the other will be the child component.
//The parent component will render the child component passing a prop to it (this will be your name that you first
// assign in the parent component using the keyword this).
