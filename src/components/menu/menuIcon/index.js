import React from 'react'
import {connect} from 'react-redux'

import {toggleMenu} from '../actions'

import styles from './styles.css'



const MenuIcon = ({menu, ...props}) => {

    console.log(menu.active)

    return (

        <div className={menu.active ? styles.active : styles.menuIcon} onClick={() => props.toggle({active: ! menu.activeactive})}>

            <div></div>
            <div></div>
            <div></div>

        </div>

    )

}

const mapStateToProps = state => ({menu: state.menu})

const mapDispatchToProps = dispatch => ({
    toggle: menu => dispatch(toggleMenu(menu))
})

const AppConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuIcon)

export default AppConnect