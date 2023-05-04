import React from 'react'
import Styles from '../../styles/Home.module.css'
import Hero from '../Box/Hero'
import Content from '../Box/Content'

const Article = () => {
  return (
    <div className={Styles.article}>
        <Hero/>
        <Content/>
    </div>
  )
}

export default Article