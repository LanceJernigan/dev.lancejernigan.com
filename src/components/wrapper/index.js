import React from 'react'

import styles from './styles.css'

const Wrapper = ({children}) => {

    return (

        <div className={styles.wrapper}>

            {children}

        </div>

    )

}

export default Wrapper