import axios from "axios";
import React, { useContext,useState,useRef,useEffect } from "react";
import localContext from "../../Context/localContext";
import styles from "./SongPlayer.module.css";
import {IoPause ,IoPlay,IoPlayBack,IoPlayForward,IoVolumeHigh,IoVolumeOff  } from "react-icons/io5";
import { TbRepeatOff,TbRepeatOnce  } from "react-icons/tb";

function SongPlayer(props) {
  const {song, like}=useContext(localContext);
  const [songForSongPlayer, setSongForSongPlayer]=song;
  // const [likedSongData,setLikedSongData]=like;

  let checkUrl=(url)=>{
    if(url.includes(".m4a"))
      return url;
    else
      return "https://chorus-backend.onrender.com/mp3/"+url;
  }
  let url=checkUrl(songForSongPlayer.prevUrl);
  let songName = songForSongPlayer.songName||"songName";
  let artist = songForSongPlayer.artistName||"artistName";
  let img = songForSongPlayer.thumbUrl||"../assets/img/apple-music-note.jpg";

  const [isPlaying, setIsPlaying]=useState(true);
  const audioRef=useRef(null);
  const [progress,setProgress]=useState(0);
  const [isHovered,setIsHovered]=useState(false);
  const [repeat,setRepeat]=useState(true);

  const playPauseHandler=()=>{
    // console.log(audioRef);
    (isPlaying)?audioRef.current.pause():audioRef.current.play();
    setIsPlaying(!isPlaying);
  }

  const handleProgressChange=(e)=>{
      let value=e.target.value;
      setProgress(value);
      audioRef.current.currentTime=(audioRef.current.duration/100)*value;
  }

  const updateProgress=()=>{
      setProgress((audioRef.current.currentTime/audioRef.current.duration)*100);
  }

  const handleMouseEnter=()=>{
      setIsHovered(true);
  }

  const handleMouseLeave=()=>{
    setIsHovered(false);
  }

  const handleRepeat=()=>{
      repeat?audioRef.current.loop=true:audioRef.current.loop=false;
      console.log(audioRef.current.loop);
      setRepeat(!repeat);
  } 

  useEffect(()=>{
    (songName==="songName")?setIsPlaying(false):setIsPlaying(true)
    // console.log(audioRef)
  },[songForSongPlayer])

  return (
    <div className={styles.songComponent}>
      <audio src={url} className={styles.audio} ref={audioRef} onTimeUpdate={updateProgress} controls autoPlay></audio>
        <input type="range" className={styles.progressBar} min='0' max='100' step='0.01' value={isNaN(progress) ? 0 : progress} onChange={handleProgressChange} />

      <div className={styles.songPlayer}>
        <div className={styles.controllers}>
          <IoPlayBack/>
          {isPlaying?<IoPause onClick={playPauseHandler} />:<IoPlay onClick={playPauseHandler}/>}
          <IoPlayForward/>
        </div>
        <div className={styles.songDetails}>
          <img className={styles.imgTag} src={img} alt="thumbNail" />
          <span>
            <p className={styles.songName}>{songName}</p>
            <p className={styles.artistName}>{artist}</p>
          </span>
        </div>
        <div className={styles.controllers}>
          <div className={styles.volumeControl}>
            <input type="range" id='volumeBar' min='0' max='1' step='0.1' className={styles.volumeBar} style={{display:isHovered?'block':'none'}} />
            <IoVolumeHigh onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
          </div>
          {repeat?<TbRepeatOff onClick={handleRepeat}/>:<TbRepeatOnce onClick={handleRepeat}/>}
        </div>
      </div>
    </div>
  );
}

export default SongPlayer;
