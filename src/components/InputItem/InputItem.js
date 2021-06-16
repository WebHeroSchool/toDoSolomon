import React from "react";
import styles from '../App/App.module.css'
import TextField from '@material-ui/core/TextField';


const InputItem = () => (
    <div >
      <TextField
        id="standard-basic"
        label="Добавить задание"
        className={styles.InputItem}
      />
    </div>
);

export default InputItem;