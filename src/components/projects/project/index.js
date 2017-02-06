import React from 'react'

import {Link} from 'react-router'

import Page from '../../page/'
import Hero from '../../hero/'

import styles from './styles.css'

const Project = ({id, title, description, active = false}) => {

    return (

        <Link to={'/projects/' + id} className={styles.project}>

            <div className={styles.background}>

                <img src='/assets/images/background.jpg' alt='Mountainscape' />

            </div>

            <div className={styles.content}>

                <h5>{title}</h5>

                <h6>{description}</h6>

            </div>

        </Link>

    )

}

export default Project