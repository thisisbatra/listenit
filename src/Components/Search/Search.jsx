import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SongComp from '../SongComp/SongComp';
import styles from './Search.module.css';

const Search = (props) => {
    const [songData,setSongData]=useState([]);
    const location=useLocation();
    const val=location.state.inputVal
    const resultSuccessJsx=<p>results:&nbsp;{songData.length}</p>
    const resultJsx=<p>Sorry, can't able to find your search request `{val}` :(</p>
    const getData=()=>{
        // let url=`https://itunes.apple.com/search?term=${val}&media=music&entity=song&limit=12&country=in`
        //http://localhost:8080
        let url=`https://chorus-backend.onrender.com/searchSong?term=${val}`
        let p=axios.get(url);
        p.then((res)=>{
            console.log(res);
            setSongData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    useEffect(()=>{
        getData();
    },[val])

    // console.log("from search state",songData)
  
    return (
        <div className={styles.bContainer} style={{...props.contStyle}}>
            <div className={styles.sContainer}>
                    <h3 className={styles.result}>{songData.length>0?resultSuccessJsx:resultJsx}</h3>
                <div className={styles.sContainer2}>
                    {songData.map((i)=><SongComp key={i.id} song={i}/>)}
                </div>
            </div>
        </div>
    );
}

export default Search;
