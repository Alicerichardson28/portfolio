import React from 'react'
import resume from '../pdf/update-resume.pdf'
import './Home.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
import alice1 from '../picture/alice1.jpg'
import bg from '../picture/bg-section-1.png'
import { Button, Card, Container } from 'react-bootstrap'
import ProjectContainer from '../components/Projects'
import TechSkill from './TechSkill'
import About from './About'
import Footer from './Footer'
import BlogsAtHomePage from './BlogsAtHomePage.js'

library.add(fab)
function Navbar() {
    // const [showMenu, setShowMenu] = useState(false)
    // const [showAbout, setAbout] = useState(false)

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
                        My works
                    </a>
                    <a href="#blog-post" className='nav-list-home'>
                        Blogs
                    </a>
                </div>
            </div> 
            <div id='first-container'>
                    <div className="container">
                        <div className="row pb-2">
                            <div className='col-md-6 d-flex flex-column justify-content-center align-items-start'>
                                <Icon/>
                                <p className='name m-0'>Alice Richardson</p>
                                <p className='job-title m-0'>Frontend Developer & Design</p>
                                <a 
                                href={resume} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='downloadResume px-5 py-3'>View Resume 
                                </a>
                            </div>
                            <div className='col-md-6 mt-5'>
                                <img alt="first alice standing" className='d-none d-md-block img-fluid' src={alice1}/>
                            </div>
                        </div>
                    </div>
            </div>
            <div id='about-section-container' className='section-container'>
                <About/>
            </div>
            <div id='tech-tools-container' className='section-container'>
                <TechSkill/>
            </div>
            <div id='project-container' className='section-container'>
                <ProjectContainer/>
            </div>
            <div id='blog-post' className='section-container'>
                <BlogsAtHomePage />
            </div>
            <div className='section-container'>
                <Footer />
            </div>
        </>
    )
}
export default Navbar;
