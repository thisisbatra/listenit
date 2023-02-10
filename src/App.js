import { useState } from 'react';
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

  const [blur, setBlur] = useState();

  const blurStyle = {
    filter: blur? "blur(25px)" : "" ,
    pointerEvents: blur? "none" : "",
    transition: ".5s",
  }

  return (
    <StateContext>
          <BrowserRouter>
                <Header blurFunc={(bool)=>setBlur(bool)}/>
                <Routes>
                    <Route path="/" element={<Home contStyle={blurStyle}/>}/>
                    <Route path='/search' element={<Search contStyle={blurStyle}/>}/>
                    <Route path='/ourTeam' element={<OurTeam contStyle={blurStyle}/>}/>
                    <Route path='/like' element={<Like contStyle={blurStyle}/>} />
                    <Route path='*' element={<PageNotFound contStyle={blurStyle}/>}/>
                </Routes>
                <SongPlayer/>
                <Footer/>
          </BrowserRouter>
    </StateContext>
  );
}

export default App;
