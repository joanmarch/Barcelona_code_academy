import React from 'react'
import Delete from './image/delete.png';

class DisplayTodos extends React.Component{
    state={
        deletevisible : false,
        done: false
    }

handleMouseEnter =() =>{
   
            this.setState ({
            deletevisible : true
        })
}

handleMouseLeave = () =>{
    this.setState ({
        deletevisible : false
    })
}

handleClickDelete = (event) => {
    this.props.removeTodo(event.target.id);
}

handleClickDone = (event) => {
    
    this.setState ({
        done : !this.state.done
    })
}

render(){
debugger
    return(
        <li onMouseEnter = {this.handleMouseEnter} onMouseLeave ={this.handleMouseLeave} >
         {this.state.deletevisible ? <img id={this.props.id}  onClick ={this.handleClickDelete} style = {styles.img} src={Delete}/> : null}
         <span onClick = {this.handleClickDone}>
              {this.state.done?<h1 style={styles.h1Done}>{this.props.todo}</h1> : <h1 style={styles.h1}>{this.props.todo}</h1> }
         </span>
        </li>
    )
}
}

const styles ={
    img:{
        width: '30px',
        height : '30px',
      
    },
    h1:{
        display : 'inline'
    },
    h1Done:{
        display : 'inline',
        textDecoration : 'line-through'

    }
  
}

export default DisplayTodos