import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {BiCoinStack} from "react-icons/bi"
import { Box } from './Box'
import styles from "./Page.module.css"


export const TaskList = () => {
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
    <div style={{width: "100%"}}>
        <div className={styles.taskList}>
            <BiCoinStack/>
            <h3>Task List</h3>
        </div>
        {
            data.map((item)=><Box item={item}/>)
        }
        <div>
            <button>Cancel</button>
            <button>Save</button>
        </div>
    </div>
  )
}
