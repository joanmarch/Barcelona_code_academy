import React from 'react';
import AddTodo from './AddTodo'
import DisplayTodos from './DisplayTodos'


class App extends React.Component{
  state={
    todos: [],
  }
  getDataAdd = data =>{
    this.setState(
      {todos: this.state.todos.concat(data)}
    )
    
  }
  getDataDelete = data => {
    this.state.todos.splice(data,1)
    this.setState(
      {todos : this.state.todos}
    )
  }
render(){
  return(
    <div style ={styles.wrapper}>
    <AddTodo getDataAdd = {this.getDataAdd}/>
    <DisplayTodos todos = {this.state.todos} getDataDelete = {this.getDataDelete}/>
    </div>
  )
}
}

export default App;

const styles = {
  wrapper : {
    boxSizing: 'border-box',
    maxWidth : '200px',
    
  }
}