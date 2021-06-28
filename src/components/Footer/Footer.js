import React from "react";
import styles from '../App/App.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({count}) => (
  <div className={styles.Footer}>Осталось выполнить: {count}
    <ButtonGroup variant="text" color="default">
      <Button className={styles.buttonFilter}>Все</Button>
      <Button className={styles.buttonFilter}>Активные</Button>
      <Button className={styles.buttonFilter}>Выполненные</Button>
    </ButtonGroup>
    <Button
      variant="contained"
      color="secondary"
      className={styles.button}
      startIcon={<DeleteIcon />}
    >
      Удалить выполненные
    </Button>
  </div>
);

export default Footer;