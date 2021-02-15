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
                            <a href='#about-container' className='nav-list-home'>About</a>
                                <Link to="/blogs">
                                    <li className='nav-list-home'>Blogs</li>
                                </Link>
                                <Link to="/projects">
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
                            <button className='button'><a href={PDF}>Download CV</a></button>
                        </div>
                        {/* <div className='photo-container'>
                            <img className='parada' src={Parada}/>
                        </div> */}
                    </div>
                </div>
                <div id='about-container'>
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
                            I have also done my best to build on that foundation,<br></br>
                            by continuing to push myself to to learn even more languages,<br></br>
                            such as <u>Vue.js, MongoDB, Node.js, and AWS.</u> and I am also open <br></br> 
                            to learning any new technical language as well. <br></br>
                            <br></br>
                            <br></br>
                            I am personable with a talent for developing solid relationships <br></br> 
                            with co-workers and clients. My work ethic and dedication to exceeding <br></br> 
                            expectations is what keeps me motivated to impress, and I continuously <br></br> strive to improve my craft. 
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
