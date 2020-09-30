import React, { Component } from 'react'
import PDF from '../picture/Alice Richardson.pdf'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='first-container'>
                    <ul className='nav-container'>
                        <li className='nav-list'>About</li>
                        <li className='nav-list'>Blog</li>
                        <li className='nav-list'>Contact Me</li>
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
