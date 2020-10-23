import React, { Component } from 'react'
import './About.css'
import { Link } from 'react-router-dom';
import alice from '../picture/Alice.jpg'
import fadeIn from 'react-animations/lib/fade-in'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='navbar-bg'>
                    <Link to='/'><h2 className='logo'>A</h2></Link>
                            <ul className='nav-container'>
                                    <Link to="/about">
                                        <li className='nav-list'>About</li>
                                    </Link>
                                    <Link to="/blogs">
                                        <li className='nav-list'>Blogs</li>
                                    </Link>
                                    <Link to="/projects">
                                        <li className='nav-list'>My works</li>
                                    </Link>
                            </ul> 
                </div>
                <div className='about-container'>
                        <div className='alice-container'>
                            <img className='alice-photo' src={alice}/>
                        </div>
                        <div className='content'>
                            <h1 className='about'>About</h1>
                            <p className='content-about'>
                                I am a <u>full stack developer </u> with a background in interior design. I am <br></br>
                                passionate about coding, and I'm excited to continue growing my skills.<br></br>
                                <br></br>
                                <br></br>
                                I am looking for a full-time position as a Software Engineer. I have <br></br> 
                                experience in <u>ruby on rails, javascript, react, git/github, JWT, SQL </u> <br></br> 
                                <br></br>
                                <br></br>
                                I have also done my best to build on that foundation, by continuing to push myself to to learn even more languages, such as <u>Vue.js, MongoDB, Node.js, and AWS.</u>
                                and I am also open to learning any new technical language as well. <br></br>
                                <br></br>
                                <br></br>
                                I am personable with a talent for developing solid relationships with co-workers and clients. My work ethic and dedication to exceeding expectations is what keeps me motivated to impress, and I continuously strive to improve my craft. 
                            </p>
                        </div>
                </div>
            </div>
        )
    }
}
