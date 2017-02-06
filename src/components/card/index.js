import React from 'react'

import styles from './styles.css'

const Card = ({id, title, description}) => {

    return (

        <div className={styles.Card} key={id}>

            <h1>{title}</h1>

            <p>{description}</p>

        </div>

    )

}

export default Card