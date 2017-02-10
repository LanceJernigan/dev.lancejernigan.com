import React from 'react'
import {connect} from 'react-redux'

import List from '../list/'
import Project from './project/'
import Wrapper from '../wrapper/'
import Hero from '../hero/'

import styles from './styles.css'

const Projects = ({projects}) => {

    return (

        <div>

            <Hero background />

            <div className={styles.projects}>

                <Wrapper>

                    <h1>Projects</h1>

                </Wrapper>

                <Wrapper className={styles.wrapper}>

                    <List className={styles.projectsList} callback={Project} items={projects}  />

                </Wrapper>

            </div>

        </div>

    )

}

const mapStateToProps = state => ({projects: state.projects, routing: state.routing})

const ProjectsConnect = connect(
    mapStateToProps
)(Projects)

export default ProjectsConnect