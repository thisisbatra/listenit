import React, { useContext } from 'react'
import SongContext from '../../Context/SongContext'
import styles from './SongPlayer.module.css'
// import { BsFillPlayCircleFill } from 'react-icons/bs'

function SongPlayer(props) {
  
  const [songForSongPlayer]=useContext(SongContext);
  // console.log(songForSongPlayer.url)
  return (
    <div className={styles.songPlayerCont}>
        SongPlayer
        <div className={styles.controlsCont}>
          <audio src={songForSongPlayer.url||songForSongPlayer.previewUrl} controls autoPlay loop>
              audio not supported:(
          </audio>
          <div className={styles.songNameCont}>{songForSongPlayer.trackName}</div>
        </div>
    </div>
  )
}

export default SongPlayer