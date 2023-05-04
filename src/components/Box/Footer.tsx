import React from 'react'
import Styles from '../../styles/Home.module.css'

const Footer = () => {
  return (
    <div className={Styles.footer}>
        <div style={{display: 'flex', flexDirection: "column"}}>
            <div style={{display: 'flex'}}>
                <div className={Styles.socialBox}></div>
                <div className={Styles.socialBox}></div>
                <div className={Styles.socialBox}></div>
                </div>
            <div style={{textAlign: 'center', marginTop: "0.5rem"}}>
                <span>Social icons</span>
            </div>
        </div>
        <div>
            <span>Tobias blomqivst</span>
        </div>
    </div>
  )
}

export default Footer