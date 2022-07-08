import React from 'react'
import styles from "./Page.module.css"
import {BsCalendar3} from "react-icons/bs"

export const Chat = ({data}) => {
  return (
    <div className={styles.box}>
        <div className={styles.user}>
            <img src={data.imgUrl} alt="" className={styles.userImg}/>
            <p className={styles.message}>{data.message}</p>
        </div>
        <div className={styles.dateAndTime}>
            <BsCalendar3/>
            <p>{data.time} {data.day}</p>
        </div>
    </div>
  )
}
