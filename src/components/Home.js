import React, { useState }from 'react'
import { useSpring, animated, config } from 'react-spring'
import resume from '../pdf/Update-resume.pdf'
import './Home.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
import alice1 from '../picture/image2-section-1.svg'
import ProjectContainer from '../components/Projects'
import TechSkill from './TechSkill'
import About from './About'
import Footer from './Footer'
import BlogsAtHomePage from './BlogsAtHomePage.js'

library.add(fab)
const  Navbar = () => {
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      delay: 250,
      config: config.molasses,
    })

    return ( 
        <>
            <div id='nav-container' className='section-container py-3'>
                <div id='nav-content-container' className='content-container'>
                    <a href="#about-section-container" className='nav-list-home'>
                        About
                    </a>
                    <a href="#tech-tools-container" className='nav-list-home'>
                        Tools & Tech
                    </a>
                    <a href="#project-container" className='nav-list-home'>
                        My Projects
                    </a>
                    <a href="/blogs" target="_blank" className='nav-list-home'>
                        Blogs
                    </a>
                </div>
            </div> 
            
            <div id='first-container'>
                    <div className="container">
                        <div className="row py-5">
                            <div className='col-md-6 d-flex flex-column justify-content-center align-items-start'>
                                <Icon/>
                                <p className="name h1">Alice Richardson</p>
                                <p className='job-title m-0'>Frontend Developer & Design</p>
                                <a 
                                href={resume} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='downloadResume px-5 py-3'>View Resume 
                                </a>
                            </div>
                            <div className='col-md-6 mt-5'>
                                <animated.div style={props} className="h1"><img alt="first alice standing" className='d-none d-md-block img-fluid' src={alice1}/></animated.div>
                            </div>
                        </div>
                    </div>
            </div>
            <div id='about-section-container' className='section-container'>
                <About/>
            </div>
            {/* <TechSkill/>  */}
            <div id="tech-tools-container" className="spacer layer1 d-flex justify-content-between">
                <div className="container svg-bottom-padding">
                    <p className="h4 text-center">
                        <b className="text-salmon h3">STACK:</b> I’m familiar with technologies such as <b className="text-salmon h3">JavaScript, React, HTML, CSS, Bootstrap</b>, Styled-Component, Web design, PhotoShop, Figma... <a href="https://github.com/Alicerichardson28" target="_blank"><u className="text-dark link">SEE MY GITHUB</u></a>
                    </p>
                </div>
            </div>
            <div id='project-container' className='section-container'>
                <ProjectContainer/>
            </div>
            <div id='blog-post' className="d-block d-md-none container-fluid">
                <BlogsAtHomePage />
            </div>
            <div className='container-fluid m-0 footer-bg-color'>
                <Footer />
            </div>
        </>
    )
}
export default Navbar;
