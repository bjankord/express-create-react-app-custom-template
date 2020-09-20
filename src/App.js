import React from 'react';
import PingApi from './components/PingApi';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PingApi />
        <p>This data is from the server and provided via window.bootstrap: {JSON.stringify(window.bootstrap)}</p>
      </header>
    </div>
  );
}

export default App;
