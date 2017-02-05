import React from 'react'

import Router from '../../router'

import styles from './style.css'

const MenuItem = ({id, route = '/', label = ''}) => {

    return (

        <Router route={route} key={id} className={styles.menuItem}>{label}</Router>

    )

}

export default MenuItem