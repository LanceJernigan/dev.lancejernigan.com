import React from 'react'
import {Link} from 'react-router'

import styles from './styles.css'

const MenuItem = ({id, route = '/', label = ''}) => {

    return (

        <Link to={route} key={id} className={styles.menuItem} activeClassName={styles.active}>{label}</Link>

    )

}

export default MenuItem