import React from 'react'

import styles from './styles.css'

import Header from '../header/'
import Sidebar from '../sidebar/'
import Page from '../page/'

const App = ({children}) => {

    return (

        <div className={styles.App}>

            <Header />

            <Sidebar />

            <Page>

                {children}

            </Page>

        </div>

    )

}

export default App