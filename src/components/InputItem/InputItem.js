import React from "react";
import PropTypes from "prop-types"
import styles from '../InputItem/InputItem.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component{
  state = {
    inputValue: '',
    inputError: false,
    errorText: '',
  };

  onButtonClick = () => {
    this.setState({
      inputValue: '',
      inputError: false
    });

    const {items, onClickAdd} = this.props;
    let inputError = false;

    items.forEach(item => {
      if(item.value === this.state.inputValue) {
          inputError = true
      }
    });

    if(this.state.inputValue === '' || inputError) {
      this.setState({
        inputError: true,
        errorText: inputError ? 'Дело уже в списке!' : 'Необходимо ввести текст'
      })
    } else{
      this.setState({
          inputValue: '',
          inputError: false
      });
      onClickAdd(this.state.inputValue)
  }
  }

  render() {

    return (
      <div className={styles.Input}>
        <div className={styles.InputBox}>
          <TextField
          id="standard-basic"
          label="Добавить задание"
          className={styles.InputItem}
          value={this.state.inputValue }
          onChange={event => this.setState({inputValue: event.target.value})}
          error={this.state.inputError}
          />
          {(this.state.inputError) && <div className={styles.Error}>{this.state.errorText}</div>}
        </div>
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

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
}

export default InputItem;