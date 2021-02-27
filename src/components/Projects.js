import React, { Component } from 'react'
import './Projects.css'
export default class Projects extends Component {
    render() {
        return (
                <div className='container'>
                    <h1 className='project-title'><u>Some of my latest work</u></h1>
                    <ul className='project-container'>
                        <li className='project-card'>
                                 <iframe title="Volunteer" className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/SKebje9QFBg">
                                </iframe>
                                <div className='project-content'>
                                    <h1 className='project-name'>Volunteer speaker at WWC (Women Who Code Boulder/Denver) </h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                 <iframe title="EcoFreak" className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/wtGFgzJXCxw">
                                </iframe>
                                <div className='project-content'>
                                    <h1 className='project-name'>EcoFreak </h1>
                                    <h1 className='project-name'>Tech Stack : MEVN app
                                        <a className='link-url' href=''> Link URL</a> 
                                    </h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <iframe title="Parking spot finder" className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/QVFtjzVuoXc">
                                </iframe>
                                <div className='project-content'>
                                    <h1 className='project-name'>Parking spot finder</h1>
                                    <h1 className='project-name'>Tech Stack : Ruby on rails, React Native(expo),Authentication (JWT)</h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <iframe title="Thai Alphabet" className='video' width="420" height="315"
                                        src="https://www.youtube.com/embed/g_wWus-WjAk">
                                </iframe>
                                <div className='project-content'>
                                    <h1 className='project-name'>Thai Alphabet flashcard and Mix & Match game</h1>
                                    <h1 className='project-name'>Tech Stack : Ruby on Rails,Javascript, HTML, CSS </h1>
                                </div>
                        </li>     
                    </ul>
                </div>
        )
    }
}
