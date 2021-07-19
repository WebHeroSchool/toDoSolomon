import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from "./App.module.css";

const App = () =>
  (<Router>
    <div className={styles.wrap}>

      <div className={styles.sidebar}>
        <div>
          <NavLink to='/'
                   exact
                   activeClassName={styles.active}
                   className={styles.button}>
            Обо мне
          </NavLink>
        </div>
        <div>
          <NavLink to='/todo'
                   activeClassName={styles.active}
                   className={styles.button}>
            Дела
          </NavLink>
        </div>
      </div>

      <div className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
      </div>

    </div>
  </Router>);

export default App