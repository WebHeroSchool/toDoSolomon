import React from "react";
import Item from "../Item/Item";
import Divider from '@material-ui/core/Divider';

const ItemList = ({items, onClickDone}) => (
  <ul>
    {items.map(item =><li key={item.value}>
      <Item
        value={item.value}
        isDone={item.isDone}
        id={item.id}
        onClickDone={onClickDone}
      />
        <Divider />
    </li>
    )}
  </ul>
)

export default ItemList;