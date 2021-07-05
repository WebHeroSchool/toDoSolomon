import React from "react";
import styles from '../App/App.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component{
  state = {
    inputValue: '',
    inputError: false,
  };

  onButtonClick = () => {
    this.setState({
      inputValue: '',
    });

    this.state.inputValue !== ''
      ? this.props.onClickAdd(this.state.inputValue)
      : {inputError: true}
  }

  render() {
    const { onClickAdd } = this.props;

    return (
      <div className={styles.Input}>
        <TextField
          id="standard-basic"
          label="Добавить задание"
          className={styles.InputItem}
          value={this.state.inputValue}
          onChange={e => this.setState({inputValue: e.target.value})}
          error={this.state.inputError}
        />
        <div className={styles.space}> </div>
        <Button
          variant="outlined"
          color="primary"
          className={styles.InputButton}
          onClick={this.onButtonClick}
        >
          добавить
        </Button>
      </div>
    );
  }

}

export default InputItem;