import axios from "axios";
import React, { useContext,useState,useRef,useEffect } from "react";
import localContext from "../../Context/localContext";
import styles from "./SongPlayer.module.css";
import {IoPause ,IoPlay,IoPlayBack,IoPlayForward,IoVolumeHigh,IoVolumeOff  } from "react-icons/io5";
import { RiRepeat2Line,RiRepeatOneLine  } from "react-icons/ri";

function SongPlayer(props) {
  const {song, like}=useContext(localContext);
  const [songForSongPlayer, setSongForSongPlayer]=song;
  // const [likedSongData,setLikedSongData]=like;
  const audioRef=useRef(null);
  const [progress,setProgress]=useState(0);

  let url=songForSongPlayer.url||songForSongPlayer.previewUrl;
  let songName = songForSongPlayer.trackName||"songName";
  let artist = songForSongPlayer.artistName||songForSongPlayer.artist||"artistName";
  let img=songForSongPlayer.thumb||songForSongPlayer.artworkUrl100||"../assets/img/apple-music-note.jpg";

  const [isPlaying, setIsPlaying]=useState(true);

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

  useEffect(()=>{
    (songName==="songName")?setIsPlaying(false):setIsPlaying(true)
    console.log(audioRef)
  },[songForSongPlayer])

  return (
    <div className={styles.songComponent}>
      <audio src={url} className={styles.audio} ref={audioRef} onTimeUpdate={updateProgress} controls autoPlay></audio>
        <input type="range" className={styles.progressBar} min='0' max='100' step='0.01' value={progress} onChange={handleProgressChange} />

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
          <IoVolumeHigh/>
          <RiRepeat2Line/>
        </div>
      </div>
    </div>
  );
}

export default SongPlayer;
