import React from 'react'

import List from '../list'
import MenuIcon from '../menu/menuIcon/'
import MenuItem from '../menu/menuItem/'

import styles from './styles/sidebar.css'

const _menu = [
  {
    route: '/about',
    label: 'About',
    id: '1'
  },
  {
    route: '/contact',
    label: 'Contact',
    id: '2'
  },
  {
    route: '/work',
    label: 'Work',
    id: '3'
  }
]

const Sidebar = ({menu}) => {
  
  return (
    
    <div className={menu.active ? styles.active : styles.menuPanel}>
    
      <MenuIcon menu={menu} />
      
      {/*<List items={_menu} callback={MenuItem} className='menuItems' />*/}

        <h6>Once upon a time, there was a menu with no links.</h6>

    </div>
    
  )
  
}

export default Sidebar