import React from 'react'
import Item from "./Item"
import styled from "styled-components"

const ListFrame = styled.div`
    width: 80%;
    background-color:rgb(141, 141, 141);
    margin-top:20px;
    border-radius: 10px;
    display:flex;
    flex-flow: column wrap;
`
const List = (props) => {
    return (
        <ListFrame>
            <Item item={props.item} ClickHandler={props.ItemActionHandler}/>
        </ListFrame>
    )
}
export default List