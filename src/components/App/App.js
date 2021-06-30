import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Передать в футер кол-во дел которые нужно выполнить!',
        isDone: true,
        id: 1,
      },
      {
        value: 'Передать 3 дела в Item!',
        isDone: false,
        id: 2,
      },
      {
        value: 'Запушить в репозиторий!',
        isDone: true,
        id: 3,
      },
      {
        value: 'Дополнительный!',
        isDone: false,
        id: 4,
      },
    ],
    count: 6,
  };

  //Стрелочная ф-ция не теряет контекст, поэтому будем использовать ее.
  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItemList });
  };

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>Важные дела:</h1>
          <InputItem/>
          <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
          <Footer count={this.state.items.length}/>
        </div>
      </div>
    )
  }
}

export default App;