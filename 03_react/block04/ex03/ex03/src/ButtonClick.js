import React from 'react'


class ButtonClick extends React.Component{



render(){
return (
   <div>
       <button onClick={this.props.getButtonClicked}>Click me!</button>
   </div>
    )
}
}

export default ButtonClick;
