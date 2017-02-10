import React from 'react'
import {connect} from 'react-redux'

import {setHeader} from '../header/actions'

import styles from './styles.css'

class Focus extends React.Component {

    componentDidMount() {

        this.props.actions.header.setHeader({active: true})

    }

    render() {

        const {focus, params, children, actions} = this.props

        return (

            <div className={styles.active}>

                {React.cloneElement(children, {actions, params, ...children.props})}

            </div>

        )

    }

}

const mapStateToProps = state => ({
    focus: state.focus
})

const mapDispatchToProps = dispatch => ({
    actions: {
        header: {
            setHeader: payload => dispatch(setHeader(payload))
        }
    }
})

const focusConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Focus)

export default focusConnect