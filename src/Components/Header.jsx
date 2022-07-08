import React from 'react'
import styles from "./Page.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
        <img src="https://www.fullstackpython.com/img/logos/react.png" alt="react icon" className={styles.reactIcon}/>
        <div className={styles.creator}>
            <h5 className={styles.name}>John Wick</h5>
            <p className={styles.role}>Developer</p>    
        </div>
    </header>
  )
}
