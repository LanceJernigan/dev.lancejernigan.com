import React from 'react'

import styles from './styles/hero.css'

const Hero = ({page = {scrolled: 0}, menu}) => {
  
  const style = {
    content: {
      top: (((window.innerHeight / 100) * 20) + Math.floor(page.scrolled / 8)) + 'px',
      opacity: ((100 - (page.scrolled / 7)) / 100)
    }
  }
  
  return (
    
    <div className={styles.hero}>
    
      <div className={styles.background}>
      
        <img src='/assets/images/background.jpg' alt='Mountainscape' />
      
      </div>
      
      <div className={styles.content} style={style.content}>
      
        <h1>Lance Jernigan</h1>
        
        <div className={styles.divider}></div>
        
        <h5>A work in progress</h5>
      
      </div>
    
    </div>
    
  )
  
}

export default Hero