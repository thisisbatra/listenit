import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SongComp from '../SongComp/SongComp';
import styles from './Search.module.css';

const Search = (props) => {
    const [songData,setSongData]=useState([]);
    const location=useLocation();
    const getData=()=>{
        let url=`https://itunes.apple.com/search?term=${location.state.inputVal}&media=music&entity=song&limit=12&country=in`
        let p=axios.get(url);
        p.then((res)=>{
            // console.log(res.data.results);
            setSongData(res.data.results)
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    useEffect(()=>{
        getData();
    },[])

    console.log("from search state",songData)
  
    return (
        <div className={styles.bContainer}>
            <div className={styles.sContainer}>
                {songData.map((i)=><SongComp key={i.trackId} song={i}/>)}
            </div>
        </div>
    );
}

export default Search;
