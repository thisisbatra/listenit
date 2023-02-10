import React,{useState} from 'react';
import styles from "./Like.module.css";

const Like = () => {
    const [likeData,setLikeData]=useState([]);
    const noLikeComp="Oops!, No data found";
    const likeComp="Data is here!";

    // console.log("from like: ",likeData)
    return (
        <div className={styles.bContainer}>
            <div className={styles.sContainer}>
                {likeData.length===0
                    ? <h3 style={{textAlign : "center"}}>{noLikeComp}</h3>
                    : <h3 style={{textAlign : "center"}}>{likeComp}</h3>
                }
            </div>
        </div>
    );
}

export default Like;
