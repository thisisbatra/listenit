import React, { useRef } from 'react'
import styles from './LibraryContainer.module.css'
import { MdArrowForwardIos } from 'react-icons/md'
import SongComp from '../SongComp/SongComp'

function LibraryContainer() {
  const data = [
    {index: 1, songName: "DilWale" },
    {index: 2, songName: "Sanam Re" },
    {index: 3, songName: "Apna Bana Le" },
    {index: 4, songName: "Apna Bana De" },
    {index: 5, songName: "Apna Bana De" },
    {index: 6, songName: "Apna Bana De" },
  ]
  
  // For scrolling the Library Container by clicking on the Arrow button
  const libContRef = useRef();
  const scrollFunc = (scrollVal) => {
    libContRef.current.scrollLeft += scrollVal
  }

  return (
    <div className={styles.outerLibCont}>
    <div
        ref={libContRef}
        style={{
            backgroundImage: ``
        }}
        className={styles.libCont}>
        {data.map((items)=><SongComp
          key={items.index}
          songNameProp={items.songName}
          imageUrl=""
        />)}
    </div>
    <span onClick={()=>scrollFunc(-500)} className={`${styles.arrCont} ${styles.left}`}><MdArrowForwardIos/></span>
    <span onClick={()=>scrollFunc(500)} className={`${styles.arrCont} ${styles.right}`}><MdArrowForwardIos/></span>
    </div>
  )
}

export default LibraryContainer