import React from 'react'
import {connect} from 'react-redux'

import MenuIcon from '../menu/icon'
import Sidebar from '../sidebar/'

import styles from './styles.css'

const Header = ({page}) => {
  
  return (
    
    <div className={page.scroll.top >= window.innerHeight ? styles.scrolled : styles.header}>

        <MenuIcon />
    
        <Sidebar />
    
    </div>
    
  )
  
}

const mapStateToProps = state => ({
    page: state.page
})

const mapDispatchToProps = dispatch => ({})

const HeaderConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderConnect