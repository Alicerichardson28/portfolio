import React, { Component } from 'react'
import PDF from '../picture/Alice Richardson.pdf'
import './Home.css'
import { Link } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
// import Parada from '../picture/parada.png'
import alice from '../picture/Alice.jpg'
library.add(fab)
export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='first-container'>
                        <ul className='nav-container'>
                                <a href="#about-container" className='nav-list-home'>
                                    About
                                </a>
                                <Link to="/blogs" target="_blank" rel="noopener noreferrer">
                                    <li className='nav-list-home'>Blogs</li>
                                </Link>
                                <Link to="/projects" target="_blank" rel="noopener noreferrer">
                                    <li className='nav-list-home'>My works</li>
                                </Link>
                        </ul> 
                    <div className='name-container'>
                        <div className='content-container'>
                            <Icon/>
                            <br></br>
                            <h1 className='name'>Alice Richardson</h1>
                            <h2 className='job-title'>Full stack developer / Designer</h2>
                            <br></br>
                            <button className='button'><a href={PDF} target="_blank" rel="noopener noreferrer">Download CV </a></button>
                        </div>
                        {/* <div className='photo-container'>
                            <img className='parada' src={Parada}/>
                        </div> */}
                    </div>
                </div>
                <div id='about-container'>
                    <div className='alice-container'>
                        <img className='alice-photo' src={alice} alt="alice"/>
                    </div>
                    <div className='about-content'>
                        <h1 className='about'>about me</h1>
                        <p className='content-about1'>
                            I am a full stack developer with a background in interior design. I am looking 
    
                            for full time remote position as a Frontend developer.
                        </p>
                        <p className='content-about2'>
                            I enjoy turning complex problems into simple, beautiful and intuitive designs. I also love the
                            logic and structure of coding and always strive to write elegant and efficient code. whether it be HTML,
    
                            CSS, Javascript or React. When I'm not coding, tweeting or pushing pixels, you'll find me cooking, hiking 
    
                            or at the gym. 
                            
                        </p>
                    </div>
                </div>
                {/* <div className='skill'>
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                    </ul>
                </div>
                <div id='blog-post'>
                    <h1>Blogs posts</h1>
                    <ul>
                        <li>Blog1</li>
                        <li>Blog2</li>
                        <li>Blog3</li>
                    </ul>
                </div> */}
            </>
        )
    }
}
