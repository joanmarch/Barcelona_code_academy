import React from 'react'
import SingleTodo from './SingleTodo'

class DisplayTodos extends React.Component{
 
looperTodos = () =>
    this.props.todos.map((todo,i)=>(
      <SingleTodo key={i} id={i} todo = {todo} removeTodo = {this.props.getDataDelete}/>    
    )
    )

render(){
    return(
       <ul style={styles.ul}>
            {this.looperTodos()}
       </ul>
    )
}
}

const styles = {
    ul:{
        listStyle : 'none'
    }
}



export default DisplayTodos