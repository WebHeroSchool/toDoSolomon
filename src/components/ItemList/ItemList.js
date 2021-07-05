import React from "react";
import Item from "../Item/Item";
import Divider from '@material-ui/core/Divider';

const ItemList = ({items, onClickDone, onClickDelete}) => (
  <ul>
    {items.map(item =><li key={item.id}>
      <Item
        value={item.value}
        isDone={item.isDone}
        id={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
        <Divider />
    </li>
    )}
  </ul>
)

export default ItemList;