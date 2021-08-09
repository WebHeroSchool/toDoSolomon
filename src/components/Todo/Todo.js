import React, {useState} from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from '../Todo/Todo.module.css';

const Todo = () => {
  const initialState = {
    items: [
      {
        value: 'Ознакомиться с todo приложением!',
        isDone: true,
        id: 1,
      },
      {
        value: 'Добавить новое задание!',
        isDone: false,
        id: 2,
      },
      {
        value: 'Отметить выполненное задание!',
        isDone: false,
        id: 3,
      },
      {
        value: 'Удалить все выполненные задания!',
        isDone: false,
        id: 4,
      },
    ],
    count: 4,
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  //Стрелочная ф-ция не теряет контекст, поэтому будем использовать ее.
  const onClickDone = (id) => {
    const newItems = items.map(item => {
      const newItem = {...item};
      if (newItem.id === id) {
        newItem.isDone = !newItem.isDone;
      }
      return newItem
    });
    setItems(newItems)
  }

  const onClickDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const onClickAdd = (value) => {
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1,
      }
    ]
    setItems(newItems);
    setCount((count) => count + 1)
  }

  const getCountUnfulfilled = items.filter(item => item.isDone === false);

  const onClickDeleteAllTrue = () => {
    const newItems = items.filter(item => item.isDone === false);
    setItems(newItems);
  }

  const onClickFilterAll = () => {

  }

  const onClickFilterFalse = () => {

  }

  const onClickFilterTrue = () => {

  }

    return (
      <div>
        <div>
          <div className={styles.TitleInput}>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem
              onClickAdd={onClickAdd}
            />
          </div>
            <ItemList
              items={items}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
            />
          {items.length === 0
            ? <div className={styles.board}>
                <div className={styles.board__img}> </div>
                <h2 className={styles.board__title}>Вы ещё не добавили ни одной задачи</h2>
                <p className={styles.board__subtitle}>Сделайте это прямо сейчас!</p>
              </div>
            : null}
          <Footer
            count={ getCountUnfulfilled.length }
            onClickDeleteAllTrue={onClickDeleteAllTrue}
            onClickFilterAll={onClickFilterAll}
            onClickFilterFalse={onClickFilterFalse}
            onClickFilterTrue={onClickFilterTrue}
          />
        </div>
      </div>
    )
}

export default Todo;