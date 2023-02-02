import React,{useState} from 'react';
import styles from "./Like.module.css";
const Like = () => {

    const [likeData,setLikeData]=useState([])
    const noLikeComp=<h3>oop's, No data found</h3>
    const likeComp=<h3>data is here!</h3>

    // console.log("from like: ",likeData)
    return (
        <div className={styles.bContainer}>
            <div className={styles.sContainer}>
                {likeData.length===0?noLikeComp:likeComp}
            </div>
        </div>
    );
}

export default Like;
