import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Like from './Components/Like/Like';
import OurTeam from './Components/OurTeam/OurTeam';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Search from './Components/Search/Search';
import SongPlayer from './Components/SongPlayer/SongPlayer';
import StateContext from './Context/StateContext';

function App() {

  return (
    <StateContext>
          <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/ourTeam' element={<OurTeam/>}/>
                    <Route path='/like' element={<Like/>} />
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
                <SongPlayer/>
                <Footer/>
          </BrowserRouter>
    </StateContext>
  );
}
{/* Thi comment was Written in CodeSpace by Gagan for testing only... */}
export default App;
