import React, { useEffect, useState } from 'react'
import {AiTwotonePrinter} from "react-icons/ai"
import { Chat } from './Chat';
import styles from "./Page.module.css"

export const ChatBox = () => {
    const [data, setData]= useState([]);

    const getData = async () => {
        await fetch("http://localhost:3000/tasksList")
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getData();
    } , [])
  return (
    <div  style={{width: "100%"}}>
        <div className={styles.chatBox}>
            <AiTwotonePrinter/>
            <h3>Chat Box</h3>
        </div>
        {data.map((data)=><Chat data={data}/>)}
    </div>
  )
}
