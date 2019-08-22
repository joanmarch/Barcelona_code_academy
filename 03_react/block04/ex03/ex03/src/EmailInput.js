import React from 'react'


const EmailInput = (props) => {
 
return (
   <div>
       <input onChange={e=> props.getEmail(e.target.value)}/>
   </div>
    )
}


export default EmailInput;