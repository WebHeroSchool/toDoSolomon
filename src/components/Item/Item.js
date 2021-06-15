import React from "react";
import styles from '../App/App.module.css'

const Item = ({value}) => (<span className={styles.ItemList}>{value}</span>);

export default Item;