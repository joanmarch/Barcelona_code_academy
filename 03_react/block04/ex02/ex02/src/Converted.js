import React from 'react';

class Converted extends React.Component {
    render (){
        
        return(
             <h1>{(this.props.input.input * this.props.input.ratio)}</h1>
        )
    }
}
    
export default Converted;
