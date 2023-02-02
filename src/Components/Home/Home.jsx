import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LibraryContainer from '../LibraryContainer/LibraryContainer'; 

const Home = () => {

    const [randomSong, setRandomSong] = useState([]);
    const [topHitSong, setTopHitSong] = useState([]);

    const getRandomData=()=>{
        let url="http://localhost:3005/randomSong"
        let p=axios.get(url);
        p.then((res)=>{
        // console.log(res.data);
        setRandomSong(res.data)
        }).catch((err)=>{
        console.log(err);
        })
    }
    const getTopHitsData=()=>{
        let url="http://localhost:3005/topHitsSong"
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
        <div style={{ padding: "1rem 2rem" }}>
                <LibraryContainer data={randomSong} head="Randoms"/>
                <LibraryContainer data={topHitSong} head="Top Hits"/>
            </div>
    );
}

export default Home;
