import React from 'react';
import LibraryContainer from '../LibraryContainer/LibraryContainer'; 

const Home = () => {
    const data = [ {index: 1, songName: "DilWale" },
    {index: 2, songName: "Sanam Re" },
    {index: 3, songName: "Apna Bana Le" },]

    return (
        <div>
            {data.map((i)=><LibraryContainer key={i.index}/>)}
        </div>
    );
}

export default Home;
