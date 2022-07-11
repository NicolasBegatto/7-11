import logo from './CAT.jpg';
import './App.css';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <p>
          Welcome
        </p>
        
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </header>
    </div>
  );
}

export default App;
