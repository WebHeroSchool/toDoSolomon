import React from "react";
import PropTypes from "prop-types"
import styles from '../InputItem/InputItem.module.css'
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
      inputError: false
    });

    this.state.inputValue !== ''
      ? this.props.onClickAdd(this.state.inputValue)
      : this.setState({
        inputError: true,
      });
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
          {(this.state.inputError) && <div className={styles.Error}>Необходимо ввести текст</div>}
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