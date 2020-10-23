import React, { Component } from 'react'
import PDF from '../picture/Alice Richardson.pdf'
import './Home.css'
import { Link } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from './Icon'
import Parada from '../picture/parada.png'

library.add(fab)
export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='first-container'>
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
                        <div className='content-container'>
                            <Icon/>
                            <br></br>
                            <h1 className='name'>Alice Richardson</h1>
                            <h2 className='job-title'>Full stack developer / Designer</h2>
                            <br></br>
                            <button className='button'><a href={PDF}>Download CV</a></button>
                        </div>
                        <div className='photo-container'>
                            <img className='parada' src={Parada}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
