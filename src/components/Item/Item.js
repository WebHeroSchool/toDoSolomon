import React from "react";
import classNames from "classnames";
import styles from '../App/App.module.css'
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item = ({value, isDone, onClickDone, id}) => (<span className={
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
  <IconButton className={styles.delete} aria-label="delete" >
    <DeleteIcon />
  </IconButton>
</span>);

export default Item;