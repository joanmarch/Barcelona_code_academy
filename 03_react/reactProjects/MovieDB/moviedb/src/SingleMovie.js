import React from 'react'
import './App.css';

class SingleMovie extends React.Component{
    render(){
        
        return(
                <span className = "singleMovie" onClick = { () => this.props.expandMovie(this.props.index)}>
                    {this.props.movie}
                </span>
            
        )
    }
}

export default SingleMovie