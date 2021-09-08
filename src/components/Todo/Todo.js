import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from '../Todo/Todo.module.css';
import { DragDropContext } from 'react-beautiful-dnd';


const Todo = () => {
  const initialState = {
    items:
      JSON.parse(localStorage.getItem('editedList') ||
      '[{"value": "Ознакомиться с todo приложением!", "isDone": true, "id": 1},' +
      '{"value": "Добавить новое задание!", "isDone": false, "id": 2},' +
      '{"value": "Отметить выполненное задание!", "isDone": false, "id": 3},' +
      '{"value": "Удалить все выполненные задания!", "isDone": false, "id": 4}]'),
    count: JSON.parse(localStorage.getItem('count')) || 4,
    sortTask: 'Все',
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [sortTask, setSort] = useState(initialState.sortTask);

  const saveToLocalStorage = (items, count) => {
    let addToLocal = JSON.stringify(items);
    localStorage.setItem("editedList", addToLocal);
    localStorage.setItem("count", JSON.stringify(count));
  };

  useEffect(() => {
    saveToLocalStorage(items, count);
  });

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;

    const newItems = [...items];

    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);
    setItems(newItems)
  };

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

  const onClickDeleteAllTrue = () => {
    const newItems = items.filter(item => item.isDone === false);
    setItems(newItems);
  }

  const onClickSort = sorting => setSort(sorting);

  let sortingTasks;
  switch (sortTask) {
    case 'Выполненные':
      sortingTasks = items.filter(item => item.isDone);
      break;
    case 'Активные':
      sortingTasks = items.filter(item => !item.isDone);
      break;
    case 'Все':
      sortingTasks = items;
      break;
    default :
      sortingTasks = items;
  }

  const allItems = items;
  const getCountUnfulfilled = items.filter(item => item.isDone === false);
  const doneItems = items.filter(item => item.isDone === true)

    return (
      <div>
      
        <div>
        <DragDropContext onDragEnd={onDragEnd}>
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
              sort={sortingTasks}
              sortValue={sortTask}
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
            countAll={ allItems.length }
            countDone={ doneItems.length }
            sorting={sortTask}
            onClickSort={onClickSort}
            onClickDeleteAllTrue={onClickDeleteAllTrue}
            onClickFilterAll={onClickSort}
          />
          </DragDropContext>
        </div>
        
      </div>
    )
}

export default Todo;