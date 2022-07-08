import React from 'react'
import styles from "./Page.module.css"
import {BsStarFill} from "react-icons/bs"

export const AnalyticsDashboard = () => {
  return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardDetail}>
            <div className={styles.plane}>
                <img className={styles.planeImg} src="https://flyclipart.com/thumb2/airplane-flight-plane-icon-symbol-vector-free-vector-silhouette-158081.png" alt="" />
            </div>
            <div className={styles.detail}>
                <h3>Analytics Dashboard</h3>
                <p>Dashboard is an online report where your website data from ecommerce to web analytics is displayed</p>
            </div>
        </div>
        <div className={styles.btns}>
            <BsStarFill/>
            <button className={styles.create}>+ Create New</button>
        </div>
    </div>
  )
}
