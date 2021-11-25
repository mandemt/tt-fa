import logo from './logo.svg';
import './App.css';

function Lijst(){
  const reptiles = ["alligator", "snake", "lizard"];

  return (
    <ol>
      {reptiles.map((reptile) => (
        <li>{reptile}</li>
      ))}
    </ol>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hallo hallo hallo
          <Lijst/>
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
