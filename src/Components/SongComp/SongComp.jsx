import React from 'react'
import styles from './SongComp.module.css'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function SongComp(props) {
  return (
    <div
        style={{
            backgroundImage: `${props.imageUrl}`
        }}
        className={styles.songCont}>
        <span className={styles.playBtn}><BsFillPlayCircleFill/></span>
        <span className={styles.songName}>{props.songNameProp}</span>
    </div>
  )
}

export default SongComp