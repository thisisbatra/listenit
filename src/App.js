import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import OurTeam from './Components/OurTeam/OurTeam';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Search from './Components/Search/Search';
import SongPlayer from './Components/SongPlayer/SongPlayer';
import SongStateContext from './Context/SongStateContext';

function App() {

  return (
    <SongStateContext>
          <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/ourTeam' element={<OurTeam/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
                <SongPlayer/>
                <Footer/>
          </BrowserRouter>
    </SongStateContext>
  );
}

export default App;
