import React from 'react'
import {connect} from 'react-redux'

import {toggleSidebar} from '../../sidebar/actions'

import styles from './styles.css'



const MenuIcon = ({sidebar, ...props}) => {

    return (

        <div className={sidebar.active ? styles.active : styles.menuIcon} onClick={props.toggle}>

            <div></div>
            <div></div>
            <div></div>

        </div>

    )

}

const mapStateToProps = state => ({sidebar: state.sidebar})

const mapDispatchToProps = dispatch => ({
    toggle: active => dispatch(toggleSidebar(active))
})

const MenuConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuIcon)

export default MenuConnect