import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from "../ItemList/ItemList.module.css";
import { Droppable, Draggable } from "react-beautiful-dnd";

class ItemList extends React.Component {
  render() {
    const {sort, onClickDone, onClickDelete} = this.props

    return <Droppable droppableId={'list'} className={styles.wrapUl}>
    {(provided) => (<div ref={provided.innerRef} {...provided.droppableProps} >
        {sort.map((item, index) =>
            <Draggable draggableId={'item' + item.id} index={index} key={item.id} 
            className={item.isDone === true ? styles.isDoneLi : styles.isNormalLi}>
                {(provided) => (
                    <Item
                      className={styles.isDoneLi} 
                      value={ item.value }
                      isDone={ item.isDone }
                      isImportant={item.isImportant }
                      id={item.id}
                      onClickDone={onClickDone}
                      onClickDelete={onClickDelete}
                      provided={provided}
                      innerRef={provided.innerRef}
                    />)}
            </Draggable>
        )}
        {provided.placeholder}
    </div>)}
</Droppable>
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default ItemList;