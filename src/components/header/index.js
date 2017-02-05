import React from 'react'

import MenuIcon from '../menu/menuIcon'
import Sidebar from '../sidebar/'

import styles from './styles/header.css'

const Header = ({page = {scrolled: 0}, menu = {}}) => {
  
  return (
    
    <div className={page.scrolled >= window.innerHeight ? styles.scrolled : styles.header}>

        <MenuIcon menu={menu} />
    
        <Sidebar menu={menu} />
    
    </div>
    
  )
  
}

export default Header