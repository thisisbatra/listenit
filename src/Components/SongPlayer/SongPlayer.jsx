import React from 'react'
import styles from './SongPlayer.module.css'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function SongPlayer(props) {
  console.log("from songPlayer",props.track);
  return (
    <div className={styles.songPlayerCont}>
        SongPlayer
        <div className={styles.controlsCont}>
          <div className={styles.songNameCont}>Song Name</div>
        </div>
    </div>
  )
}

export default SongPlayer