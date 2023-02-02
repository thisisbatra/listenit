import React, { useContext } from "react";
import localContext from "../../Context/localContext";
import styles from "./SongPlayer.module.css";

function SongPlayer(props) {
  
  const {song,like}=useContext(localContext);
  const [songForSongPlayer, setSongForSongPlayer]=song
  const [likedSongData,setLikedSongData]=like;

  // let id=songForSongPlayer.id||songForSongPlayer.trackId;
  let songName = songForSongPlayer.trackName;
  let artist = songForSongPlayer.artistName||songForSongPlayer.artist;
  let movie = songForSongPlayer.collectionName||songForSongPlayer.movieName;
  let img=songForSongPlayer.thumb||songForSongPlayer.artworkUrl100
  let imgSrc ="../assets/img/apple-music-note.jpg"
  let likeId=songForSongPlayer.id||songForSongPlayer.trackName

  const toogleLike=(songForSongPlayer)=>{
    let i=document.getElementById(songForSongPlayer.id)
    if(i.className==="bi bi-heart"){
      i.className="bi bi-heart-fill"
      // setLikedSongData({...songForSongPlayer,setSongForSongPlayer})
    }
    else{
      i.className="bi bi-heart"
    }
  }

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
          <span className={styles.heart}>
            <i className="bi bi-heart" id={likeId} onClick={()=>toogleLike(songForSongPlayer)}></i>
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
        <img className={styles.imgTag} src={img?img:imgSrc} alt="Song Thumbnail" />
      </div>
    </div>
  );
}

export default SongPlayer;
