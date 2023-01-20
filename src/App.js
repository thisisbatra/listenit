import './App.css';
import LibraryContainer from './Components/LibraryContainer/LibraryContainer';

function App() {
  const data = [ {index: 1, songName: "DilWale" },
    {index: 2, songName: "Sanam Re" },
    {index: 3, songName: "Apna Bana Le" },]
  return (
    <div className="App">
    
      {data.map(()=><LibraryContainer/>)}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
