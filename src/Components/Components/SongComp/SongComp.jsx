import React from 'react'
import styles from './SongComp.module.css'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function SongComp(props) {
  // console.log(props.song.thumb)
  return (
    <div
        style={{
            backgroundImage: `url(${props.song.thumb})`,
        }}
        className={styles.songCont}
      >
        <span className={styles.playBtn}><BsFillPlayCircleFill/></span>
        <span className={styles.songName}>{props.song.trackName}</span>
    </div>
  )
}

export default SongComp