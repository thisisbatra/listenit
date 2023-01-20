import React from 'react'
import styles from './SongComp.module.css'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function SongComp() {
  return (
    <div
        style={{
            backgroundImage: ``
        }}
        className={styles.libCont}>SongComp
        <span className={`${styles.arrCont} ${styles.right}`}><BsFillPlayCircleFill/></span>
    </div>
  )
}

export default SongComp