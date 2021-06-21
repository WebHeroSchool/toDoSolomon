import React from "react";
import classNames from "classnames";
import styles from '../App/App.module.css'

const Item = ({value, isDone}) => (<span className={
  classNames({
    [styles.ItemList]: true,
    // [styles.item]: true,
    [styles.done]: isDone
  })
}>
  {value}
</span>);

export default Item;