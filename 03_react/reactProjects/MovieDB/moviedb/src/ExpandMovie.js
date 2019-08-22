import React from 'react'
import './App.css';

class ExpandMovie extends React.Component{
    render(){
        return(
           
                <table className = "expandMovie">
                    <tr>Released: {this.props.movieData.Released}</tr>
                    <tr>Director: {this.props.movieData.Director}</tr>
                    <tr><img src={this.props.movieData.Poster}></img></tr>
                    <tr>Runtime: {this.props.movieData.Runtime}</tr>
                    <tr>Genre: {this.props.movieData.Genre}</tr>
                    <tr>Plot: {this.props.movieData.Plot}</tr>
                    <tr>
                        <td >
                        <td className = "Ratings">{this.props.movieData.Ratings[0].Source} : {this.props.movieData.Ratings[0].Value}</td>
                        <td className = "Ratings">{this.props.movieData.Ratings[1].Source} : {this.props.movieData.Ratings[1].Value}</td>
                        <td className = "Ratings">{this.props.movieData.Ratings[2].Source} : {this.props.movieData.Ratings[2].Value}</td>
                        </td>
                    </tr>
                </table>
            
        )
    }
}

export default ExpandMovie