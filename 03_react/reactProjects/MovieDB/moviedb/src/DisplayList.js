import React from 'react'
import SingleMovie from './SingleMovie'
import './App.css';
import ExpandMovie from './ExpandMovie'

class DisplayList extends React.Component{
    looperList = () => {        
        return (this.props.state.movieList.map((elem, i)=>(
            <tr>
            <SingleMovie index = {i} key = {i} movie = {elem[0].Title} expandMovie={this.props.expandMovie} ></SingleMovie>
            {this.props.state.movieList[i][1].expand? <ExpandMovie movieData = {elem[0]}></ExpandMovie> : null}
            </tr>
           ))
        )   
      }

      

      render(){
          return(
            <table className="movieList">
                <tr>
                    <th>Favorite Movies</th>
                </tr>
                {this.looperList()}
            </table>
          )
      }
    
}

export default DisplayList

