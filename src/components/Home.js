import React, { Component } from 'react'
import PDF from '../picture/Alice Richardson Resume.pdf'
import './Home.css'
import { Link } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
import alice1 from '../picture/alice1.jpg'
import javascript from '../picture/javascript.svg'
import Html from '../picture/html5.svg'
import Css from '../picture/css3.svg'
import ReactIcon from '../picture/react.svg'
import Npm from '../picture/npm.svg'
import Bootstrap from '../picture/bootstrap.svg'
import Git from '../picture/git.svg'
import GitHub from '../picture/github.svg'
import Heroku from '../picture/heroku.svg'
import Vscode from '../picture/vscode.svg'
import Slack from '../picture/slack.svg'
// import wolf from '../picture/wolf.jpeg'
import alice from '../picture/Alice.jpg'
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
                <div id='about-container'>
                    <div className='alice-container'>
                        <img className='alice-photo' src={alice} alt="alice" />
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
                <div className='skills-container'>
                    <h1 className="tech-title">Tools & Technologies</h1>
                    <ul className="list-skill">
                        <div>
                            <img src={javascript}/>
                            <li className="card">Javascript</li>
                        </div>
                        <div>
                            <img src={Html}/>
                            <li className="card">Html</li>
                        </div>
                        <div>
                            <img src={Css}/>
                            <li className="card">Css</li>
                        </div>
                        <div>
                            <img src={ReactIcon}/>
                            <li className="card">React.js</li>
                        </div>
                        <div>
                            <img src={Npm}/>
                            <li className="card">NPM</li>
                        </div>
                        <div>
                            <img src={Bootstrap}/>
                            <li className="card">Bootstrap</li>
                        </div>
                        <div>
                            <img src={Git}/>
                            <li className="card">Git</li>
                        </div>
                        <div>
                            <img src={GitHub}/>
                            <li className="card">GitHub</li>
                        </div>
                        <div>
                            <img src={Heroku}/>
                            <li className="card">Heroku</li>
                        </div>
                        <div>
                            <img src={Vscode}/>
                            <li className="card">Vscode</li>
                        </div>
                        <div>
                            <img src={Slack}/>
                            <li className="card">Slack</li>
                        </div>
                        
                    </ul>
                </div>
                {/* <div id='blog-post'>
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
