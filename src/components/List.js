import "./List.css"
import React from 'react'
import Item from "./Item"

const List = (props) => {
    return (
        <div className="List_Frame">
            <Item item={props.item}/>
        </div>
    )
}
export default List