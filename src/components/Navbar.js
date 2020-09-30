import React, { Component } from 'react'
import PDF from '../picture/Alice Richardson.pdf'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='first-container'>
                        <ul className='nav-container'>
                        <Link to="/About">
                            <li className='nav-list'>About</li>
                        </Link>
                            <li className='nav-list'>Blogs</li>
                            <li className='nav-list'>Projects</li>
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
