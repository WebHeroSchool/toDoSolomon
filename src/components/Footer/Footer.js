import React from "react";
import PropTypes from 'prop-types';
import styles from '../Footer/Footer.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classNames from "classnames";

const Footer = ({ count, countAll, countDone, onClickDeleteAllTrue, onClickSort, sorting }) => (
  <div className={styles.Footer}>
    <p className={styles.Count}>Осталось выполнить: {count}</p>
    <ButtonGroup
      className={styles.ButtonGroup}
      variant="text"
      color="default">
      <Button
        className={classNames({
        [styles.selected]: sorting === 'Все'
      })}
        onClick={() => onClickSort('Все')}>
        Все: {countAll}
      </Button>
      <Button
        className={classNames({
          [styles.selected]: sorting === 'Активные'
        })}
        onClick={() => onClickSort('Активные')}>
        Активные: {count}
      </Button>
      <Button
        className={classNames({
          [styles.selected]: sorting === 'Выполненные'
        })}
        onClick={() => onClickSort('Выполненные')}>
        Выполненные: {countDone}
      </Button>
    </ButtonGroup>
    <Button
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