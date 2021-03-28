import React, { Component } from 'react'
import './Projects.css'
import thaiCardProject from '../picture/thai-card.gif'
import { BiWorld } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";




export default class Projects extends Component {
    render() {
        return (
                <div className='container content-container'>
                    <h1 className='project-title'>Some of my latest work</h1>
                    <ul className='project-container'>
                        <li className='project-card'>
                                <div className='video-container'>
                                    <iframe title="Volunteer" className='video' 
                                            src="https://www.youtube.com/embed/SKebje9QFBg">
                                    </iframe>
                                </div>
                                <div className='project-content'>
                                    <h1 className='project-name'>Volunteer speaker at WWC (Women Who Code Boulder/Denver), after finish the school I had been self-learn new tech and would love to share my experience with everyone.</h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <div className='video-container'>
                                    <iframe title="EcoFreak" className='video' 
                                            src="https://www.youtube.com/embed/wtGFgzJXCxw">
                                    </iframe>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <AiFillGithub size='27px'/>
                                        <BiWorld size='27px'/>
                                    </div>
                                    <h1 className='project-name'>Eco-freak is a website to educate and show what we can do to save this world and help be more green.</h1>
                                    <h1 className='project-name'>Tech Stack: MEVN app
                                        {/* <a className='link-url' href=''> Link URL</a>  */}
                                    </h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <div className='video-container'>
                                    <iframe title="Parking spot finder" className='video' 
                                            src="https://www.youtube.com/embed/QVFtjzVuoXc">
                                    </iframe>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <AiFillGithub size='27px'/>
                                    </div>
                                    <h1 className='project-name'>Parking spot finder, this application was built to find a parking spot quickly and easily.</h1>
                                    <h1 className='project-name'>Tech Stack: Ruby on rails, React Native(expo), Authentication (JWT)</h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <div className='video-container'>
                                    <img alt='thai-card-gif' className='video' src={thaiCardProject}/>
                                  
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <AiFillGithub size='27px'/>
                                        <BiWorld size='27px'/>
                                    </div>
                                    <h1 className='project-name'>Web application and mix-and-match game for Thai language learning</h1>
                                    <p className='project-name'>Tech stack: Ruby on Rails, Javascript, HTML, CSS </p>
                                </div>
                        </li>     
                    </ul>
                </div>
        )
    }
}
