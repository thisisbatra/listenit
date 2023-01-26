import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LibraryContainer from '../LibraryContainer/LibraryContainer'; 

const Home = () => {
    
    const [randomSong, setRandomSong] = useState([]);
    const [topHitSong, setTopHitSong] = useState([]);

    const getRandomData=()=>{
        let url="http://localhost:3005/random"
        let p=axios.get(url);
        p.then((res)=>{
        // console.log(res.data);
        setRandomSong(res.data)
        }).catch((err)=>{
        console.log(err);
        })
    }
    const getTopHitsData=()=>{
        let url="http://localhost:3005/topHits"
        let p=axios.get(url)
        p.then((res)=>{
              setTopHitSong(res.data);  
        }).catch((err)=>{
            console.log(err);
        })
    }
    // console.log("from state",randomSong);
    useEffect(()=>{
        getRandomData();
        getTopHitsData();
    },[]);

    return (
        <div>
            <LibraryContainer data={randomSong} head="random"/>
            <LibraryContainer data={topHitSong} head="top hits"/>
        </div>
    );
}

export default Home;
