import logo from '../assets/images/logo.png';
import  MyComponent  from './Examples/MyComponent.js';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyComponent></MyComponent>
      </header>
      
    </div>
  );
}

export default App;
