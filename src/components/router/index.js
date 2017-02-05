import React from 'react'

const blockLink = e => e.preventDefault()

const Router = ({route, children, className}) => <a href={route} className={className} onClick={blockLink}>{children}</a>

export default Router