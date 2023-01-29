import React, { useState } from 'react';
import localContext from './localContext';

const StateContext = (props) => {

    const [songForSongPlayer, setSongForSongPlayer]=useState([]);
    const [likedSongData,setLikedSongData]=useState([]);
    // console.log("from songForSongPlayer",songForSongPlayer)
    return (
        <localContext.Provider value={{song:[songForSongPlayer,setSongForSongPlayer],like:[likedSongData,setLikedSongData]}}>
                {props.children}        
        </localContext.Provider>
    );
}

export default StateContext;
