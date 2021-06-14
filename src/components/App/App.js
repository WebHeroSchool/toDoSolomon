import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

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
  <div>
    <h1>Важные дела:</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3}/>
  </div>
)

export default App;