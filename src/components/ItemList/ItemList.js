import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from "../ItemList/ItemList.module.css";

class ItemList extends React.Component {
  render() {
    const {items, onClickDone, onClickDelete} = this.props
    return <ul className={styles.wrapUl}>
      {items.map(item =>
        <li className={item.isDone === true ? styles.isDoneLi : styles.isNormalLi} key={item.id}>
          <Item
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
        </li>
      )}
    </ul>
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default ItemList;