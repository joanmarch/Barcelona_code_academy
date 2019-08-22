import React from 'react'

class MessageGeneric extends React.Component{

    render(){
        
        let styles ={
            background : this.props.data.color
        }

        this.props.waitTime(5000);

        return(
            <div style={styles} className="ui message">
                {this.props.data.message}
            </div>
        )

    }
}


export default MessageGeneric