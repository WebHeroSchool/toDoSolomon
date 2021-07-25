import React from "react";
import PropTypes from 'prop-types';
import styles from '../Footer/Footer.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count, onClickDeleteAllTrue, onClickFilterAll, onClickFilterFalse, onClickFilterTrue }) => (
  <div className={styles.Footer}>
    <p className={styles.Count}>Осталось выполнить: {count}</p>
    <ButtonGroup
      className={styles.ButtonGroup}
      variant="text"
      color="default">
      <Button onClick={onClickFilterAll}>Все</Button>
      <Button onClick={onClickFilterFalse}>Активные</Button>
      <Button onClick={onClickFilterTrue}>Выполненные</Button>
    </ButtonGroup>
    <Button
      className={styles.ButtonDelete}
      color="default"
      startIcon={<DeleteIcon />}
      onClick={onClickDeleteAllTrue}
    >
      Удалить выполненные
    </Button>
  </div>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;