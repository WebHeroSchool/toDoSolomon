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
      },
      {
        value: 'Передать 3 дела в Item!',
        isDone: false,
      },
      {
        value: 'Запушить в репозиторий!',
        isDone: true,
      },
      {
        value: 'Дополнительный!',
        isDone: false,
      },
    ]

  }
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>Важные дела:</h1>
          <InputItem/>
          <ItemList items={this.state.items}/>
          <Footer count={this.state.items.length}/>
        </div>
      </div>
    )
  }
}

// const App = () => {
//   const items = [
//     {
//       value: 'Передать в футер кол-во дел которые нужно выполнить!',
//       isDone: true,
//     },
//     {
//       value: 'Передать 3 дела в Item!',
//       isDone: false,
//     },
//     {
//       value: 'Запушить в репозиторий!',
//       isDone: true,
//     },
//   ]
//
//   return (
//     <div className={styles.wrap}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Важные дела:</h1>
//         <InputItem/>
//         <ItemList items={items}/>
//         <Footer count={3}/>
//       </div>
//     </div>
//   )
//
// }

export default App;