import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import localContext from "../../Context/localContext";
import styles from "./SongPlayer.module.css";
// import { BsFillPlayCircleFill } from 'react-icons/bs'

function SongPlayer(props) {
  const [like, setLike] = useState(false);

  const {song}=useContext(localContext);
  const [songForSongPlayer, setSongForSongPlayer]=song

  let songName = songForSongPlayer.trackName;
  let artist = songForSongPlayer.artistName||songForSongPlayer.artist;
  let movie = songForSongPlayer.collectionName||songForSongPlayer.movieName;
  let imgSrc =
    "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3=w240-h480-rw";
  
  // const toggleLike = () => {
  //   setLike((prev)=>!prev);
  // }

  return (
    <div className={styles.songPlayerCont}>
      <div className={styles.controlsCont}>
        
        <div className={styles.songName_HeartCont}>
          <div className={styles.songNameCont}>
            <span className={styles.songNameClass}>
              {songName ? songName : "No Song Playing"}
            </span>
            <span className={styles.artist_n_Movie}>
              <span className={styles.artist}>
                {artist ? artist : "Artist Name"}
              </span>
              &nbsp;•&nbsp;
              <span className={styles.movie}>
                {movie ? movie : "Movie Name"}
              </span>
            </span>
          </div>
          <span className={styles.heart} onClick={()=>setLike((prev)=>!prev)}>
            {like? <AiFillHeart/>
            :<AiOutlineHeart/>}
          </span>
        </div>
        
        <audio
          className={styles.audioTag}
          src={songForSongPlayer.url || songForSongPlayer.previewUrl}
          controls
          autoPlay
        >
          audio not supported:(
        </audio>
        <img className={styles.imgTag} src={imgSrc} alt="Song Thumbnail" />
      </div>
    </div>
  );
}

export default SongPlayer;
