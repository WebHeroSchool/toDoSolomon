import logo from './logo.svg';
import './App.css';

const flag = true;
const count = 23;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{
          color: 'red'
        }} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          (= Hello world! =)
        </p>
        <p>
          {flag ? 'Flag is true': 'Flag is false'}
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
