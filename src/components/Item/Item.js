import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from '../Item/Item.module.css'
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Item extends React.Component {

  render() {
    const {value, isDone, onClickDone, id, onClickDelete, provided, innerRef} = this.props;
    return( <div className={styles.line}
    ref={innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}>
      <span className={
      classNames({
        [styles.ItemList]: true,
        [styles.done]: isDone
      })
    }>
  <span>
    <Checkbox
      checked={isDone}
      tabIndex={-1}
      onClick={() => onClickDone(id)}
    />
    {value}
  </span>
  <IconButton
    className={styles.delete}
    aria-label="delete"
    onClick={() => onClickDelete(id)}
  >
    <DeleteIcon />
  </IconButton>
</span>
</div>)}
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default Item;