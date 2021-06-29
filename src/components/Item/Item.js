import React from "react";
import classNames from "classnames";
import styles from '../App/App.module.css'
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item = ({value, isDone, onClickDone}) => (<span className={
  classNames({
    [styles.ItemList]: true,
    [styles.done]: isDone
  })
}>
  <span onClick={() => onClickDone(isDone)}>
    <Checkbox
      checked={isDone}
      tabIndex={-1}
      onClick={() => onClickDone(isDone)}
    />
    {value}
  </span>
  <IconButton className={styles.delete} aria-label="delete" >
    <DeleteIcon />
  </IconButton>
</span>);

export default Item;