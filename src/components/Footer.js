import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
    render() {
        return (
            <div id='footer-container' className='section-container'>
                <div id='footer-content-container' className='content-container'>
                    <div className='footer-content1-container'>
                        <h1 className='year-title'>@2021 Alice Richardson</h1>
                    </div>
                    <div className='footer-content2-container'>
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
                                href="#blog-post"
                                className='nav-list-footer'
                            >
                                Blogs
                            </a>
                    </div>
                    <div className='footer-content3-container'>
                        <div className='container-icons'>
                            <ul className='list-of-icons'>
                                <a 
                                    aria-label= "take a look of my github" 
                                    href='https://github.com/Alicerichardson28' 
                                    target="_blank" 
                                    rel="noopener noreferrer"  
                                >
                                        <li className='li-icon'>
                                            <FontAwesomeIcon className='icon' icon={['fab', 'github']}/>
                                        </li> 
                                </a>
                                <a 
                                    aria-label= "connect with me on linkedIn" 
                                    href='https://www.linkedin.com/in/alice-richardson-dev/' 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <li className='li-icon'>
                                        <FontAwesomeIcon className='icon' icon={['fab', 'linkedin']}/>
                                    </li>  
                                </a> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

