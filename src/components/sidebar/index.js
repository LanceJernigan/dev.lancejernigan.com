import React from 'react'
import {connect} from 'react-redux'

import {toggleSidebar} from './actions'

import List from '../list'
import MenuIcon from '../menu/icon/'
import MenuItem from '../menu/item/'

import styles from './styles.css'

const _menu = [
  {
    route: '/about/',
    label: 'About',
    id: '1'
  },
  {
      route: '/projects/',
      label: 'Projects',
      id: '2'
  },
]

const Sidebar = ({sidebar, ...props}) => {

  return (
    
    <div className={sidebar.active ? styles.active : styles.sidebar}>

      <MenuIcon />
      
      <List items={_menu} callback={MenuItem} className='menuItems' />

    </div>

  )
  
}

const mapStateToProps = state => ({sidebar: state.sidebar})

const mapDispatchToProps = dispatch => ({
    toggle: active => dispatch(toggleSidebar(active))
})

const AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default AppConnect