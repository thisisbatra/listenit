import React, { useRef } from 'react'
import styles from './LibraryContainer.module.css'
import { MdArrowForwardIos } from 'react-icons/md'
import SongComp from '../SongComp/SongComp'

function LibraryContainer(props) {

  // For scrolling the Library Container by clicking on the Arrow button
  const libContRef = useRef();

  const scrollFunc = (scrollVal) => {
    libContRef.current.scrollLeft += scrollVal
  }
  // console.log(props.data);
  return (
    <div className={styles.outerLibCont}>
      <h3>{props.head}</h3>
      <div
          ref={libContRef}
          className={styles.libCont}>
          {props.data.map((i)=><SongComp
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