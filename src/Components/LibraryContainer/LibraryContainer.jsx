import React from 'react'
import styles from './LibraryContainer.module.css'
import { MdArrowForwardIos } from 'react-icons/md'
import SongComp from '../SongComp/SongComp'

function LibraryContainer() {
  return (
    <div
        style={{
            backgroundImage: ``
        }}
        className={styles.libCont}>LibraryContainer
        <SongComp/>
        <span className={`${styles.arrCont} ${styles.right}`}><MdArrowForwardIos/></span>
        <span className={`${styles.arrCont} ${styles.left}`}><MdArrowForwardIos/></span>
    </div>
  )
}

export default LibraryContainer