import React, { Component } from 'react'
import './Projects.css'
import thaiCardProject from '../picture/thai-card.gif'
import emperor from '../picture/emperor.gif'
import parkingSpotFinder from '../picture/Parking-spot-finder.gif'
import coffee from '../picture/coffee-shop.gif'
import ecoFreak from '../picture/Eco-freak.gif'
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
                                    <h1 className='project-name'>Volunteer speaker at WWC (Women Who Code Boulder/Denver). After finishing school I had been self-learning a lot of new tech, and love sharing my experience with everyone.</h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <div className='video-container'>
                                    <img alt='eco-freak-gif' className='video' src={ecoFreak}/>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Alicerichardson28/eco-freak-frontend-with-Vue" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                        {/* <BiWorld size='27px'/> */}
                                    </div>
                                    <h1 className='project-name'>Eco-freak is a website to educate and show what we can do to save this world and help be more green.</h1>
                                    <h1 className='project-name'><u>Tech Stack:</u> MEVN app (Node express, Vue, MongoDB)
                                    </h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <div className='video-container'>
                                    <img alt='parking-spot-finder-gif' className='video' id='parking-spot-gif' src={parkingSpotFinder}/>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Alicerichardson28/Parking-spot-finder-react-native-frontend" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                    </div>
                                    <h1 className='project-name'>Parking spot finder was built to find a parking spot quickly and easily.</h1>
                                    <h1 className='project-name'><u>Tech Stack:</u> Ruby on rails, React Native(expo), Authentication (JWT)</h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <div className='video-container'>
                                    <img alt='thai-card-gif' className='video' src={emperor}/>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Thai-Programmers-in-USA/emperor-frontend" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                        <a href="http://emperor-frontend.us-east-2.elasticbeanstalk.com/" target="_blank" rel="noopener noreferrer">
                                            <BiWorld size='27px' color='black'/>  
                                        </a>
                                    </div>
                                    <h1 className='project-name'>Emperor is frontend website about furniture shop</h1>
                                    <h1 className='project-name'><u>Tech Stack:</u> React, CI/CD, Docker, React testing </h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <div className='video-container'>
                                    <img alt='thai-card-gif' className='video' src={thaiCardProject}/>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Alicerichardson28/Mod3-project-thai-alphabet-frontend" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                        <a href="https://thai-alphabet-flashcard.web.app/" target="_blank" rel="noopener noreferrer">
                                            <BiWorld size='27px' color='black'/>  
                                        </a>
                                    </div>
                                    <h1 className='project-name'>Web application and mix-and-match game for Thai language learning</h1>
                                    <p className='project-name'><u>Tech Stack:</u> Ruby on Rails, Javascript, HTML, CSS </p>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <div className='video-container'>
                                    <img alt='coffee-shop-gif' className='video' src={coffee}/>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Alicerichardson28/coffee-frontend-1" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                        {/* <a href="https://thai-alphabet-flashcard.web.app/" target="_blank" rel="noopener noreferrer">
                                            <BiWorld size='27px' color='black'/>  
                                        </a> */}
                                    </div>
                                    <h1 className='project-name'>coffee shop was design for create a system for ordering & tracking inventory.</h1>
                                    <p className='project-name'><u>Tech Stack:</u> Ruby on Rails, Javascript, HTML, CSS </p>
                                </div>
                        </li>     
                    </ul>
                </div>
        )
    }
}
