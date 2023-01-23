import React, { useState,useEffect,useRef } from 'react'
import styles from './LibraryContainer.module.css'
import { MdArrowForwardIos } from 'react-icons/md'
import SongComp from '../SongComp/SongComp'
import axios from 'axios'

function LibraryContainer() {

  const [song, setSong] = useState([]);

  const getData=()=>{
    let url="http://localhost:3005/random"
    let p=axios.get(url);
    p.then((res)=>{
      console.log(res);
      setSong(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  // console.log("from state",song);
  useEffect(()=>{
    getData();
  },[]);

  // For scrolling the Library Container by clicking on the Arrow button
  const libContRef = useRef();
  const scrollFunc = (scrollVal) => {
    libContRef.current.scrollLeft += scrollVal
  }

  return (
    <div className={styles.outerLibCont}>
    <div
        ref={libContRef}
        className={styles.libCont}>
        {song.map((i)=><SongComp
          key={i.id}
          song={i}
        />)}
    </div>
    <span onClick={()=>scrollFunc(-500)} className={`${styles.arrCont} ${styles.left}`}><MdArrowForwardIos/></span>
    <span onClick={()=>scrollFunc(500)} className={`${styles.arrCont} ${styles.right}`}><MdArrowForwardIos/></span>
    </div>
  )
}

export default LibraryContainer