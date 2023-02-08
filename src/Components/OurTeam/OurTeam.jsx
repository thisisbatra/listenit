import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./OurTeam.module.css";

const OurTeam = () => {

    const [teamList, setTeamList] = useState([]);

    const getTeamData = () => {
        let url="http://localhost:3005/team"
        let p = axios.get(url)
        p.then((res)=>{
              setTeamList(res.data);  
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getTeamData();
    },[]);
    console.log(teamList);
    return (
        <div className={styles.ourTeamCont}>
            {teamList.map((list)=> 
                <div key={list.id} style={{ flexDirection: list.id%2===0 ? "row-reverse" : "row" }} className={styles.ourTeamCard}>
                    <div className={styles.content}>
                        <span><strong>Name:</strong> {list.name}</span>
                        <span><strong>Course:</strong> {list.course}</span>
                        <span><strong>Roll No:</strong> {list.rollNumber}</span>
                        <span><strong>Role in Project:</strong> {list.role}</span>
                    </div>
                    <img src={list.url} alt="Team Pictures"/>
                </div>
            )}
        </div>
    );
}

export default OurTeam;
