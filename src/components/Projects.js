import React, { Component } from 'react'
import './Projects.css'
import { BiWorld } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import projectBg  from "../picture/career-development.png";
import pizza from "../picture/pizza-project.png"

export default class Projects extends Component {
    render() {
        return (
                <div className='container content-container'>
                    <div className="row">
                        <div className="col-md-6 order-2">
                            <img className="img-fluid" src={ projectBg }/>
                        </div>
                        <div className="col-md-6 order-1">
                            <h1 className='project-title'>My Project</h1>
                        </div>
                    </div>
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
                        <li className='project-card d-flex flex-column justify-content-center'>
                                <div className='img-container '>
                                    <img className="img-fluid pizza-img" src={ pizza } alt="pizza project"/>
                                </div>
                                <div className='project-content '>
                                    <div className='icon-container mt-2'>
                                        <a href="https://github.com/Alicerichardson28/Pizza-website-with-React" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                        <a href="https://alicerichardson28.github.io/Pizza-website-with-React/" target="_blank" rel="noopener noreferrer">
                                            <BiWorld size='27px' color='black'/>  
                                        </a>
                                    </div>
                                    <h1 className='project-name'>Greatest Pizza Project, using styled component and Responsive Web Design</h1>
                                    <p className='project-name'><u>Tech Stack:</u> React, Styled-Component </p>
                                </div>
                        </li>   
                        <li className='project-card'>
                                <div className='video-container'>
                                    <iframe title='eco-freak' src="https://giphy.com/embed/Ci3pQjENHmpCCH6WoK" width="480" height="233" frameBorder="0" className="video" allowFullScreen></iframe>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Alicerichardson28/eco-freak-frontend-with-Vue" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                        {/* <BiWorld size='27px'/> */}
                                    </div>
                                    <h1 className='project-name'>Eco-freak is a website to educate and show what we can do to save this world and help be more green.</h1>
                                    <h1 className='project-name'><u>Tech Stack:</u> MEVN app
                                    </h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <div className='video-container'>
                                    <iframe title='parking-spot' src="https://giphy.com/embed/j4hgttAvY7JqqaQCgu" width="271" height="280" frameBorder="0" className="video" allowFullScreen></iframe>
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
                                    <iframe title='emperor' src="https://giphy.com/embed/p7Ztl6PR3uhgB20E7S" width="480" height="228" frameBorder="0" className="video" allowFullScreen></iframe>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Thai-Programmers-in-USA/emperor-frontend" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
                                    </div>
                                    <h1 className='project-name'>Emperor is frontend website about furniture shop</h1>
                                    <h1 className='project-name'><u>Tech Stack:</u> React, CI/CD, Docker, React testing </h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <div className='video-container'>
                                <iframe title='thai-alphabet' src="https://giphy.com/embed/XGU2dPqwSTzn0LlDo9" width="480" height="238" frameBorder="0" className='video' allowFullScreen></iframe>
                                    {/* <img alt='thai-card-gif' className='video' src={thaiCardProject}/> */}
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
                                    <iframe title='coffee-shop' src="https://giphy.com/embed/RK4c192o8h19jdJQR3" width="480" height="238" frameBorder="0" className='video' allowFullScreen>
                                    </iframe>
                                </div>
                                <div className='project-content'>
                                    <div className='icon-container'>
                                        <a href="https://github.com/Alicerichardson28/coffee-frontend-1" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub size='27px' color='black'/>
                                        </a>
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
