import React from 'react'
import resume from '../pdf/resume.pdf'
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
            <div id='first-container' className='section-container'>
                    <div className="name-photo-container content-container">
                        <div className='profile-container'>
                            <Icon/>
                            <br></br>
                            <p className='name'>Alice Richardson</p>
                            <p className='job-title'>Frontend & Full stack developer</p>
                            <p className='job-title-h3'>UX & UI Designer</p>
                            <br></br>
                            <button 
                                aria-expanded="false"
                                className='button'>
                                    <a 
                                    href={resume} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='downloadResume'>View Resume 
                                    </a>
                            </button>
                        </div>
                        <div className='photo-container'>
                            <img alt="first alice standing" className='alice1-photo' src={alice1}/>
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
