import React from "react";
import classNames from "classnames";
import styles from '../App/App.module.css'
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

const Item = ({value, isDone}) => (<span className={
  classNames({
    [styles.ItemList]: true,
    [styles.done]: isDone
  })
}>
  <Checkbox />
  {value}
  <IconButton aria-label="delete" >  <DeleteIcon /></IconButton>
  <Divider />
</span>);

export default Item;