import React from 'react'
import Item from './Item.js'

const List = props => {
return (
    props.categories.map ((value, i)=>(
        <Item value = {value}/>
    )
)
)
}

export default List;