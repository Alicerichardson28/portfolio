import React, { useState } from 'react'
import PDF from '../picture/Alice Richardson Resume.pdf'
import './Home.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
import alice1 from '../picture/alice1.jpg'
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
            <div id='nav-container' className='section-container'>
                {/* <div id='nav-content-container' className='content-container'> */}
                <div id='nav-content-container'>
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
                {/* <div className={`menu-btn ${showMenu ? "open":""}`} onClick={() => setShowMenu(!showMenu)}>
                    <div className="menu-btn__burger"></div>
                </div> */}
            </div> 
            {/* <div className = {`nav-sidebar ${showMenu ? "open" : "close"}`}>
                    <ul>
                        <li><a href="#about-section-container">About </a> </li>
                        <li><a href="#tech-tools-container">Tech & Tools</a></li>
                        <li><a href="#project-container">My Work</a></li>
                        <li><a href="#blog-post">Blogs</a></li>
                    </ul>
            </div> */}
            <div id='first-container' className='section-container'>
                    <div className="name-photo-container content-container">
                        <div className='profile-container'>
                            <Icon/>
                            <br></br>
                            <h1 className='name'>Alice Richardson</h1>
                            <h2 className='job-title'>Frontend & Full stack developer</h2>
                            <h3 className='job-title-h3'>UX & UI Designer</h3>
                            <br></br>
                            <button className='button'><a href={PDF} target="_blank" rel="noopener noreferrer">Download Resume </a></button>
                        </div>
                        <div className='photo-container'>
                            <img alt="alice picture" className='alice1-photo' src={alice1}/>
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
