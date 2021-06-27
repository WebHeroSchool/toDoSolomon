import React from "react";
import Item from "../Item/Item";
import Divider from '@material-ui/core/Divider';

const ItemList = ({items}) => (
  <ul>
    {items.map(item =><li key={item.value}>
      <Item value={item.value} isDone={item.isDone}/>
        <Divider />
    </li>
    )}
  </ul>
)

export default ItemList;