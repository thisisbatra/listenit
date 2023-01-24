import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [songData,setSongData]=useState([]);
    const getData=()=>{
        let url=`https://itunes.apple.com/search?term=${props}&media=music&entity=song&limit=1&country=in`
        let p=axios.get(url);
        p.then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            search!
        </div>
    );
}

export default Search;
