import React, { useState } from 'react';
import SongContext from './SongContext';

const SongStateContext = (props) => {

    const [songForSongPlayer, setSongForSongPlayer]=useState([]);
    // console.log("from songForSongPlayer",songForSongPlayer)
    return (
        <SongContext.Provider value={[songForSongPlayer,setSongForSongPlayer]}>
                {props.children}        
        </SongContext.Provider>
    );
}

export default SongStateContext;
