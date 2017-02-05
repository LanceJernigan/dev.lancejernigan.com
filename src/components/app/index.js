import React from 'react'
import ReactDOM from 'react-dom';

import styles from './styles/index.css'

import Header from '../header/'
import Hero from '../hero/'
import About from '../about/'

class App extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            menu: {
                active: false,
                toggle: () => {
                    this.setState({
                        ...this.state,
                        menu: {
                            ...this.state.menu,
                            active: ! this.state.menu.active
                        }
                    })
                }
            },
            page: {
                scrolled: 0
            }
        }

    }

    componentDidMount() {

        ReactDOM.findDOMNode(this.refs.page).addEventListener('scroll', this.pageScroll)

    }

    pageScroll = e => {

        this.setState({
            ...this.state,
            page: {
                scrolled: e.currentTarget.scrollTop,
            }
        })

    }

    render() {

        return (

            <div className={styles.App}>

                <Header page={this.state.page} menu={this.state.menu} />

                <div className={styles.Page} ref='page' onClick={this.state.menu.active ? this.state.menu.toggle : null}>

                    <Hero page={this.state.page} menu={this.state.menu} />

                    <About />

                </div>

            </div>

        )

    }

}

export default App