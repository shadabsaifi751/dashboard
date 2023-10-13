import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from "../Layout/main.module.scss"
const Main = () => {
  return (
    <div className={styles.main_wrapper}>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Main