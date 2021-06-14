import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

const todoItem = 'Передать в футер кол-во дел которые нужно выполнить!'
const todoItemTwo = 'Передать 3 дела в Item!'
const todoItemThree = 'Запушить в репозиторий!'
const App = () => (
  <div>
    <h1>Важные дела:</h1>
    <InputItem />
    <ItemList todoItem={todoItem} todoItemTwo={todoItemTwo} todoItemThree={todoItemThree}/>
    <Footer count={3}/>
  </div>
)

export default App;