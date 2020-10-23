import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Projects.css'
import ecofreak from '../picture/eco-freak.png'
import parking from '../picture/parking-spot-finder.png'


export default class Projects extends Component {
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
                <div>
                    <h1 className='project-title'><u>Some of my latest work</u></h1>
                    <ul className='project-container'>
                        <li className='project-card'>
                                {/* <div className='image-project'>
                                    <img className='eco-freak-project' src={ecofreak}/>
                                </div> */}
                                 <iframe className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/wtGFgzJXCxw">
                                </iframe>
                                <div className='content'>
                                    <h1 className='project-name'>Ecofreak // Tech Stack : MEVN app deploy with AWS EC2 //<a className='link-url' href='http://ec2-3-138-142-241.us-east-2.compute.amazonaws.com/'> Link URL</a> </h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <iframe className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/QVFtjzVuoXc">
                                </iframe>
                                <div className='content'>
                                    <h1 className='project-name'>Parking spot finder// Tech Stack : Ruby on rails, React Native(expo), <br></br><br></br>Authentication (JWT)</h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <iframe className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/g_wWus-WjAk">
                                </iframe>
                                <div className='content'>
                                    <h1 className='project-name'>Thai Alphabet flashcard and Mix & Match game // Tech Stack : Ruby on Rails, <br></br><br></br> Javascript, HTML, CSS </h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <iframe className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/7_P93eDzkQs">
                                </iframe>
                                <div className='content'>
                                    <h1 className='project-name'>Coffee Shop // Tech Stack : Ruby on Rails, Javascript, HTML, CSS </h1>
                                </div>
                        </li>     
                    </ul>
                </div>
            </div>
        )
    }
}
