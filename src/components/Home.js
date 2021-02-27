import React, { Component } from 'react'
import PDF from '../picture/Alice Richardson Resume.pdf'
import './Home.css'
import { Link } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
import alice1 from '../picture/alice1.jpg'
import ProjectContainer from '../components/Projects'
import TechSkill from './TechSkill'
import About from './About'
library.add(fab)
export default class Navbar extends Component {
    render() {
        // let aboutBtn = document.getElementById('#about-container')
        // let wolfImg = document.getElementsByClassName('.wolf')
        // function imgHidden() {
        //     if(aboutBtn === aboutBtn){
        //     }
        // }
        return (
            <>
                <div className='first-container'>
                        <ul className='nav-container'>
                                <a href="#about-section-container" className='nav-list-home'>
                                    About
                                </a>
                                <a href="#tech-tools-container" className='nav-list-home'>
                                    Tools & Tech
                                </a>
                                <a href="#project-container" className='nav-list-home'>
                                    My works
                                </a>
                                <Link to="/blogs" target="_blank" rel="noopener noreferrer">
                                    <li className='nav-list-home'>Blogs</li>
                                </Link>
                        </ul> 
                        <div className="name-photo-container">
                            <div className='content-container'>
                                <Icon/>
                                <br></br>
                                <h1 className='name'>Alice Richardson</h1>
                                <h2 className='job-title'>Full stack developer / Designer</h2>
                                <br></br>
                                <button className='button'><a href={PDF} target="_blank" rel="noopener noreferrer">Download CV </a></button>
                            </div>
                            <div className='photo-container'>
                                <img alt="wolf" className='alice1-photo' src={alice1}/>
                            </div>
                        </div>
                </div>
                <div id='about-section-container'>
                    <About/>
                </div>
                <div id='tech-tools-container'>
                    <TechSkill/>
                </div>
                <div id='project-container'>
                    <ProjectContainer/>
                </div>
                <div id='blog-post'>
                    <h1>Blogs posts</h1>
                    <ul>
                        <li>Blog1</li>
                        <li>Blog2</li>
                        <li>Blog3</li>
                    </ul>
                </div>
            </>
        )
    }
}
