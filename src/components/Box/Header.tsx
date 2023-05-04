import React from 'react'
import Styles from '../../styles/Home.module.css'
import Logo from "../Box/Logo"
import Navbar from "../Box/Navbar"

const Header = () => {
  return (
    <div className={Styles.header}>
        <Logo/>
    <div style={{width: "20%", height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Header Name</h1>
    </div>
        <Navbar/>
    </div>
  )
}

export default Header