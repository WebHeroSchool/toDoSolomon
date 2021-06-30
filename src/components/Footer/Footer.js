import React from "react";
import styles from '../App/App.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count }) => (
  <div className={styles.Footer}>
    Осталось выполнить: {count}
    <ButtonGroup variant="text" color="default">
      <Button>Все</Button>
      <Button>Активные</Button>
      <Button>Выполненные</Button>
    </ButtonGroup>
    <Button
      color="default"
      startIcon={<DeleteIcon />}
    >
      Удалить выполненные
    </Button>
  </div>
);

export default Footer;