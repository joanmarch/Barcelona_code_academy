import React from 'react'
import Countdown from './Countdown'

class Alert extends React.Component {



checkData = () => {
    
    let exist = false
    this.props.data.users.map((item, index)=>{
    if (item.email === this.props.data.email){
        if (item.password === this.props.data.password){
            //this.setState ({enableAlert:true})
            exist = true;
        }
    }
})
    //this.props.checkdataDone()
    
    return exist
}

render(){

return(
    <div>
{this.checkData()? <Countdown checkdataDone = {this.props.checkdataDone}></Countdown> : <h1>FALSE</h1>}
   </div>
)
}
}


export default Alert