import React from "react";
import Item from "../Item/Item";

const ItemList = ({todoItem, todoItemTwo, todoItemThree}) => (
  <ul>
    <li><Item todoItem={todoItem}/></li>
    <li><Item todoItem={todoItemTwo}/></li>
    <li><Item todoItem={todoItemThree}/></li>
  </ul>
)

export default ItemList;