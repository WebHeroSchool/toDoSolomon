import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

const items = [
  {
    value: 'Передать в футер кол-во дел которые нужно выполнить!'
  },
  {
    value: 'Передать 3 дела в Item!'
  },
  {
    value: 'Запушить в репозиторий!'
  },
]

const App = () => (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Важные дела:</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3}/>
  </div>
)

export default App;