import React, { useContext } from 'react'
import styles from './SongComp.module.css'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import SongContext from '../../Context/SongContext'

function SongComp(props) {

  const [songForSongPlayer,setSongForSongPlayer]=useContext(SongContext);

  const clickEvent=()=>{
      setSongForSongPlayer(props.song);
  }

  return (
    <div
        style={{
            backgroundImage: `url(${props.song.thumb||props.song.artworkUrl100.replace("100x100bb.jpg","600x600bb.jpg")})`,
        }}
        className={styles.songCont}
      >
        <span className={styles.playBtn}><BsFillPlayCircleFill onClick={clickEvent}/></span>
        <span className={styles.songName}>{props.song.trackName}</span>
    </div>
  )
}

export default SongComp