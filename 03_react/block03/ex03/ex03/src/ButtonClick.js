import React from 'react'


const ButtonClick = (props) => {
    
return (
   <div>
       <button onClick={e=> alert("Username: " + props.data.email+ "\nPassword: "+ props.data.password)}>Click me!</button>
   </div>
    )
}

export default ButtonClick;
