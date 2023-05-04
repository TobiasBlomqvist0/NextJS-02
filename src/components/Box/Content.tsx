import React from 'react'
import Image from 'next/image'
import Styles from "../../styles/Home.module.css"

const Content = () => {
  return (
    <div className={Styles.content}>
        <div className={Styles.contentBox}>
        <Image style={{borderRadius: "50%"}}
            src="/img/icon.jpg"
            alt="Picture"
            width={400}
            height={400}
        />
        </div>
        <div className={Styles.contentBox}>
            <div style={{backgroundColor: "grey", width: "75%", height: "400px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p>Some random text</p>
            </div>
        </div>
    </div>
  )
}

export default Content