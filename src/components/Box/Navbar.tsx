import React from 'react'
import Styles from '../../styles/Home.module.css'

const Navbar = () => {
  return (
    <div style={{width: "40%", height: '100%', display: 'flex',justifyContent: 'flex-end', alignItems: 'center', marginRight: "2rem"}}>
        <div>
            <div style={{display: 'flex'}}>
                <div className={Styles.box}></div>
                <div className={Styles.box}></div>
                <div className={Styles.box}></div>
                <div className={Styles.box}></div>
            </div>
                <h2 style={{textAlign: 'center'}}>Navar</h2>
        </div>
    </div>
  )
}

export default Navbar