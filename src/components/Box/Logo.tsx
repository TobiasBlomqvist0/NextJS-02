import React from 'react'
import Styles from '../../styles/Home.module.css'

const Logo = () => {
  return (
    <div style={{width: "40%", height: '100%', display: 'flex', alignItems: 'center', marginLeft: "2rem"}}>
        <div className={Styles.logo}>
            <span>Logo</span>
        </div>
    </div>
  )
}

export default Logo