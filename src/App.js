import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //JSX (Class em js é feita pra criar classes | className é css)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <b>World</b> React
        </p>
      </header>
    </div>
  );
}

export default App;
