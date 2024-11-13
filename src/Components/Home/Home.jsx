import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LibraryContainer from '../LibraryContainer/LibraryContainer'; 

const Home = (props) => {

    const [randomSong, setRandomSong] = useState([]);
    const [topHitSong, setTopHitSong] = useState([]);

    const getLikedData=()=>{
        let url="http://localhost:8080/getMostLikedSongs"
        let p=axios.get(url);
        p.then((res)=>{
        setRandomSong(res.data)
        }).catch((err)=>{
        console.log(err);
        })
    }
    const getTopHitsData=()=>{
        let url="http://localhost:8080/getMostClickedSongs"
        let p=axios.get(url)
        p.then((res)=>{
              setTopHitSong(res.data);  
        }).catch((err)=>{
            console.log(err);
        })
    }
    // console.log("from state",randomSong);
    useEffect(()=>{
        getLikedData();
        getTopHitsData();
    },[]);

    return (
        <div style={{ 
            padding: "1rem 2rem",
            ...props.contStyle
        }}>
            <LibraryContainer data={randomSong} head="Most Liked"/>
            <LibraryContainer data={topHitSong} head="Top Hits"/>
        </div>
    );
}

export default Home;
