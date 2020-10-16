import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Projects.css'


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
                    <h1>some of my latest work</h1>
                    <ul className='project-container'>
                        <li className='project-card'>
                            <a href='http://ec2-3-128-181-53.us-east-2.compute.amazonaws.com/'>
                                <img className='eco-freak-project' src='https://cdn3.f-cdn.com//files/download/110732690/plant.png'/>
                                <h1 className='project-name'>Ecofreak</h1>
                                <h1 className='font-stack'>Tech Stack // MEVN app deploy with AWS EC2</h1>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
