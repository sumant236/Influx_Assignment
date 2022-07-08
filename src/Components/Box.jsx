import React from 'react'
import styles from "./Page.module.css"

export const Box = ({item}) => {
  return (
    <div className={styles.box} key={item.id}>
        <div className={styles.container}>
            <div className={styles.clr}></div>
            <input type="checkbox" />
            <div className={styles.task}>
                <div className={styles.title}>
                    <h5>{item.title}</h5>
                    {item.status==="Rejected"?<p className={styles.reject}>"REJECTED"</p>:null}
                </div>
                <div className={styles.byLine}>
                    <p>{item.byLine}</p>
                    {item.status==="NEW"?<p className={styles.new}>"NEW"</p>:null}
                </div>
            </div>
        </div>
        {item.status==="Latest Task"?<p className={styles.latest}>"LATEST TASK"</p>:null}
    </div>
  )
}
