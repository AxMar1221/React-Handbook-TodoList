import logo from './logo.svg';
import './App.css';
import { Counter } from './counter';
import { CounterT } from './counterT';

function WelcomeMessage({ children }) {
  return <h1>{ children }</h1>
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
        <WelcomeMessage> Here is some message </WelcomeMessage>
        <Counter />
        <CounterT />
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
