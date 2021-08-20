import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
    render() {
        return (
            <div id='footer-container'>
                <div className='container py-3'>
                    <div className="text-center">
                        <h1 className='year-title'>@2021 Alice Richardson</h1>
                    </div>
                    <div className="nav-footer-container d-flex justify-content-between">
                            <a 
                                aria-label= "section about myself" 
                                href="#about-section-container" 
                                className='nav-list-footer'
                            >
                                About
                            </a>
                            <a 
                                aria-label= "Technical skills"
                                href="#tech-tools-container" 
                                className='nav-list-footer'
                            >
                                Tools & Tech
                            </a>
                            <a 
                                aria-label= "section about my project"
                                href="#project-container" 
                                className='nav-list-footer'
                            >
                                My works
                            </a>
                            <a 
                                aria-label= "section about my personal blog post"
                                href="/blogs"
                                target="_blank"
                                className='nav-list-footer'
                            >
                                Blogs
                            </a>
                    </div>
                    <div className="container-icons-footer d-flex justify-content-between mt-3">
                        <a 
                            aria-label= "take a look of my github" 
                            href='https://github.com/Alicerichardson28' 
                            target="_blank" 
                            rel="noopener noreferrer"  
                        >
                            <FontAwesomeIcon className='icon fa-2x' icon={['fab', 'github']}/>   
                        </a>
                        <a 
                            aria-label= "connect with me on linkedIn" 
                            href='https://www.linkedin.com/in/alice-richardson-dev/' 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon className='icon fa-2x' icon={['fab', 'linkedin']}/>
                        </a> 
                    </div>
                </div>
            </div>
        )
    }
}

