import axios from "axios";
import React, { useContext,useState } from "react";
import localContext from "../../Context/localContext";
import styles from "./SongPlayer.module.css";


function SongPlayer(props) {
  const {song, like}=useContext(localContext);
  const [songForSongPlayer, setSongForSongPlayer]=song;
  const [likedSongData,setLikedSongData]=like;
  const [likeBoolState,setLikeBoolState]=useState(false)

  let songName = songForSongPlayer.trackName;
  let artist = songForSongPlayer.artistName||songForSongPlayer.artist;
  let movie = songForSongPlayer.collectionName||songForSongPlayer.movieName;
  let img=songForSongPlayer.thumb||songForSongPlayer.artworkUrl100
  let imgSrc ="../assets/img/apple-music-note.jpg"
  // let likeBool=songForSongPlayer.likeBool


  const toogleLike=(songForSongPlayer)=>{
    let likeId=songForSongPlayer.id||songForSongPlayer.trackName
    setLikeBoolState((x)=>!x)
      
      // console.log(songForSongPlayer)
    if(likeBoolState===false){
        console.log(likeBoolState," msg from tooglelike")
        // setLikedSongData([...likedSongData,songForSongPlayer])
    }
    else{
      console.log(likeBoolState," msg from tooglelike")
    }
  }

  return (
    <div className={styles.songPlayerCont}>
      <div className={styles.controlsCont}>
        
        <div className={styles.songName_HeartCont_n_audTag_Cont}>
          <div className={styles.songName_HeartCont}>
            <div className={styles.songNameCont}>
              <span className={styles.songNameClass}>
                <MarqueeComp marq={songName && true}>{songName ? songName : "No Song Playing"}</MarqueeComp>
              </span>
              <span className={styles.artist_n_Movie}>
                <span className={styles.artist}>
                  <MarqueeComp marq={artist && true}>{artist ? artist : "Artist Name"}</MarqueeComp>
                </span>
                &nbsp;<span className={styles.pipe}>|</span>&nbsp;
                <span className={styles.movie}>
                  <MarqueeComp marq={movie && true}>{movie ? movie : "Movie Name"}</MarqueeComp>
                </span>
              </span>
            </div>
            <span className={styles.heart} onClick={()=>toogleLike(songForSongPlayer)}>
            <i className={likeBoolState?"bi bi-heart-fill":"bi bi-heart"}></i>
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
        </div>

        <img className={styles.imgTag} src={img?img:imgSrc} alt="Song Thumbnail" />
      </div>
    </div>
  );
}

export const MarqueeComp = (props) => {
  if (props.marq) {
    return (
      <marquee style={props.style} scrollamount={props.scrollAmount? props.scrollAmount : 1}>
        {props.children}
      </marquee>
    );
  } else {
      return props.children;
  } 
}

export default SongPlayer;
