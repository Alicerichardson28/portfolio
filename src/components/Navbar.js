import React, { Component } from 'react'
import About from './About'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='first-container'>
                    <div className='name-container'>
                        <h1 className='name'>Alice Richardson</h1>
                        <h2 className='job-title'>Full stack developer</h2>
                        <br></br>
                        <button className='button'>Download CV</button>
                    </div>
                </div>
            </>
        )
    }
}
