import React from 'react'

import styles from './styles.css'

import Header from '../header/'
import Page from '../page/'
import Hero from '../hero/'

const App = ({children}) => {

    return (

        <div className={styles.App}>

            <Header />

            <Page>

                <Hero />

                {children}

            </Page>

        </div>

    )

}

export default App