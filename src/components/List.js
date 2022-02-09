import "./List.css"
import React from 'react'
import Item from "./Item"

const List = (props) => {
    return (
        <div className="List_Frame">
            <Item item={props.item} key={props.item._id}/>
        </div>
    )
}
export default List