import './App.css';
import Header from './Components/Header/Header';
import LibraryContainer from './Components/LibraryContainer/LibraryContainer';

function App() {
  const data = [ {index: 1, songName: "DilWale" },
    {index: 2, songName: "Sanam Re" },
    {index: 3, songName: "Apna Bana Le" },]
  return (
      <>
        <Header/>
        {data.map(()=><LibraryContainer/>)}
      </>  
  );
}

export default App;
