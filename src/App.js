import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Search from './Components/Search/Search';
import SongPlayer from './Components/SongPlayer/SongPlayer';

function App() {

  return (
    <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='*' element={<PageNotFound/>}/>
          </Routes>
          <SongPlayer/>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
