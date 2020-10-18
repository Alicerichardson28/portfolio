import React, { Component } from 'react'
import PDF from '../picture/Alice Richardson.pdf'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../picture/2.png'
export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='first-container'>
                        {/* <h1 className='logo-main-page'>A</h1> */}
                        <ul className='nav-container'>
                                <Link to="/about">
                                    <li className='nav-list-home'>About</li>
                                </Link>
                                <Link to="/blogs">
                                    <li className='nav-list-home'>Blogs</li>
                                </Link>
                                <Link to="/projects">
                                    <li className='nav-list-home'>Projects</li>
                                </Link>
                        </ul> 
                    <div className='name-container'>
                        <h1 className='name'>Alice Richardson</h1>
                        <h2 className='job-title'>Full stack developer / Designer</h2>
                        <br></br>
                        <button className='button'><a href={PDF}>Download CV</a></button>
                    </div>
                </div>
            </>
        )
    }
}
