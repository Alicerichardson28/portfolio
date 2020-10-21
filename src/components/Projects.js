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
                            <li className='nav-list'>Projects</li>
                        </Link>
                    </ul> 
                </div>
                <div>
                    <h1 className='project-title'><u>Some of my latest work</u></h1>
                    <ul className='project-container'>
                        <li className='project-card'>
                            <a href='http://ec2-3-138-142-241.us-east-2.compute.amazonaws.com/'>
                                <div className='image-project'>
                                    <img className='eco-freak-project' src={ecofreak}/>
                                </div>
                                <div className='content'>
                                    <h1 className='project-name'>Ecofreak</h1>
                                    <h1 className='font-stack'>Tech Stack // MEVN app deploy with AWS EC2</h1>
                                </div>
                            </a>
                        </li>
                        <li className='project-card'>
                                {/* <img className='parking-image' src={parking}/> */}
                                <iframe className='parking-video' width="420" height="315"
                                        src="https://www.youtube.com/embed/QVFtjzVuoXc">
                                </iframe>
                        </li>     
                        <li className='project-card'>
                                <iframe className='parking-video' width="420" height="315"
                                        src="https://www.youtube.com/embed/QVFtjzVuoXc">
                                </iframe>
                        </li>     
                        <li className='project-card'>
                                <iframe className='parking-video' width="420" height="315"
                                        src="https://www.youtube.com/embed/QVFtjzVuoXc">
                                </iframe>
                        </li>     
                    </ul>
                </div>
            </div>
        )
    }
}
