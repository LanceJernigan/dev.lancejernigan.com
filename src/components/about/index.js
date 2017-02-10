import React from 'react'

import Wrapper from '../wrapper/'
import Hero from '../hero/'

import styles from './styles.css'

const About = () => {

    return (

        <div>

            <Hero />

            <div className={styles.about}>

                <Wrapper>

                    <h1>About Me</h1>

                </Wrapper>

                <Wrapper>

                    <p>I currently work as a Javascript Engineer at Knoxweb in Knoxville, TN.  I have experience working in both the LAMP stack, using technologies like PHP and MySQL, and the more recently adopted MERN stack using technologies like Express, Node, React, and Redux.  My work generally consists of using frontend technologies like React and Redux while leveraging the simplicity of Wordpress' content management system.</p>
                    <p>If any of my experience interests you or you just want to chat, feel free to send me an email at <a href="mailto:lance@lancejernigan.com" target="_blank">Lance@LanceJernigan.com</a>.</p>

                </Wrapper>

            </div>

        </div>

    )

}

export default About