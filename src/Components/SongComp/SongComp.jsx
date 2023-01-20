import React from 'react'
import styles from './SongComp.module.css'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function SongComp() {
  return (
    <div
        style={{
            backgroundImage: ``
        }}
        className={styles.songCont}>SongComp
        <span className={styles.playBtn}><BsFillPlayCircleFill/></span>
    </div>
  )
}

export default SongComp