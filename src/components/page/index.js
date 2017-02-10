import React from 'react'
import {connect} from 'react-redux'

import {setHeader} from '../header/actions'
import {updatePage} from './actions'
import {toggleSidebar} from '../sidebar/actions'

import Styles from './styles.css'

const Page = ({sidebar, children, actions}) => {

    return (

        <div className={Styles.Page} onScroll={actions.update} onClick={sidebar.active ? actions.toggleSidebar : null}>

            {children}

        </div>

    )

}

const mapStateToProps = state => ({
    sidebar: state.sidebar,
})

const mapDispatchToProps = dispatch => ({
    actions: {
        update: e => {
            if (e.currentTarget.scrollTop >= window.innerHeight)
                dispatch(setHeader({active: true}))
            else
                dispatch(setHeader({active: false}))

            dispatch(updatePage(e))

        },
        toggleSidebar: e => dispatch(toggleSidebar()),
    }
})

const PageConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page)

export default PageConnect