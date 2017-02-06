import React from 'react'
import {connect} from 'react-redux'

import List from '../list/'
import Project from './project/'
import Wrapper from '../wrapper/'

import styles from './styles.css'

const Projects = ({projects, params}) => {

    projects = params.hasOwnProperty('id') ? projects.map( project => params.id == project.id ? Object.assign(project, {active: true}) : Object.assign(project, {active: false})) : projects

    return (

        <div className={styles.projects}>

            <Wrapper>

                <h1>Projects</h1>

            </Wrapper>

            <Wrapper className={styles.wrapper}>

                <List className={styles.projectsList} callback={Project} items={projects}  />

            </Wrapper>

        </div>

    )

}

const mapStateToProps = state => ({projects: state.projects, routing: state.routing})

const ProjectsConnect = connect(
    mapStateToProps
)(Projects)

export default ProjectsConnect