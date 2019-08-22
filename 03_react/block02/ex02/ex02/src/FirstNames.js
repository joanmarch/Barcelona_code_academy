import React from 'react'

export default props => {
return (
    props.names.map ((value, i)=>(
        <h1 key={i}>{value}</h1>
    )
)
)
}
//class ChildComp extends React.Component{
//render(){
//    return(
//       
//    )
//}
//}

//export default ChildComp