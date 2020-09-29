import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className='first-container'>
                <div className='name-container'>
                    <h1 className='name'>Alice Richardson</h1>
                    <h2 className='job-title'>Full stack developer</h2>
                </div>
            </div>
        )
    }
}
