import React from "react";
import styles from '../App/App.module.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from "classnames";

const Footer = ({count}) => (
  <div className={styles.Footer}>Осталось выполнить: {count}
    <Button
      variant="contained"
      color="secondary"
      className={styles.button}
      startIcon={<DeleteIcon />}
    >
      Удалить выполненные дела
    </Button>
  </div>
);

export default Footer;