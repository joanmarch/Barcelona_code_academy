import React from 'react'


const PasswordInput = (props) => {
    
return (
   <div>
       <input onChange={e=> props.getPassword(e.target.value)}/>
   </div>
    )
}

export default PasswordInput;
