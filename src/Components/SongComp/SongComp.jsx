import React from 'react'
import styles from './SongComp.module.css'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import SongPlayer from "../SongPlayer/SongPlayer"
function SongComp(props) {
  const click=()=>{
      console.log("from songComp",props.song);
      <SongPlayer track={props.song}/>
  }
  return (
    <div
        style={{
            backgroundImage: `url(${props.song.thumb})`,
        }}
        className={styles.songCont}
      >
        <span className={styles.playBtn}><BsFillPlayCircleFill onClick={click} /></span>
        <span className={styles.songName}>{props.song.trackName}</span>
    </div>
  )
}

export default SongComp