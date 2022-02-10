import "./List.css"
import React from 'react'
import Item from "./Item"

const List = (props) => {
    const RemoveClickHandler = (id) => {
        props.RemoveItemHandler(id);
    }
    return (
        <div className="List_Frame">
            <Item item={props.item} RemoveClickHandler={RemoveClickHandler} />
        </div>
    )
}
export default List