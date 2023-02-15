import logo from './logo.svg';
import './App.css';
import { Counter } from './counter';

function WelcomeMessage() {
  return <p>Welcome!</p>
}

function App() {
  const message = 'Hello!';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage />
        <Counter />
        <p>
          {
            message === 'Hello!' ? 'The message was "Hello!"' : message
          }
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
