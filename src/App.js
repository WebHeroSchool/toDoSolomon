import logo from './logo.svg';
import './App.css';
import {countTwo, length} from "./numers";

const flag = true;
const count = 29;
let num = count >= 30;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {'count * length = ' + countTwo * length }
        </p>
        <p style={{
          color: "#d40101",
          fontSize: 20 + 30
        }}>
          (= Hello world! =)
        </p>
        <p>
          {count}
        </p>
        <p>
          {9999999999}
        </p>
        <p>
          {9999999999 + 1}
        </p>
        <p>
          {flag ? 'Flag is true': 'Flag is false'}
        </p>
        <p>
          {num ? 'num is true' : 'num is false'}
        </p>
        <p>
          {undefined}
        </p>
        <p>
          {null}
        </p>
        <p>
          {false ? 'True' : 'False'}
        </p>
        <p>
          {true ? 'True' : 'False'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
