import React from 'react'
import {connect} from 'react-redux'

import styles from './styles.css'

const Hero = ({page, menu, props}) => {
  
  const style = {
    content: {
      top: (((window.innerHeight / 100) * 20) + Math.floor(page.scroll.top / 8)) + 'px',
      opacity: ((100 - (page.scroll.top / 7)) / 100)
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

const mapStateToProps = state => ({
    page: state.page,
    menu: state.menu
})

const mapDispatchToProps = dispatch => ({})

const HeroConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hero)

export default HeroConnect