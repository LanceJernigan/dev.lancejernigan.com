import React from 'react'
import {connect} from 'react-redux'

import MenuIcon from '../menu/icon'

import styles from './styles.css'

const Header = ({header}) => {

  return (
    
    <div className={(header.active ? styles.active : styles.inactive) + ' ' + (header.hidden ? styles.hidden : '')} style={{background: header.color}}>

        <MenuIcon />

    </div>
    
  )
  
}

const mapStateToProps = state => ({
    header: state.header
})

const HeaderConnect = connect(
    mapStateToProps,
)(Header)

export default HeaderConnect