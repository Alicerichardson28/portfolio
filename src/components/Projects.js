import React, { Component } from 'react'
import './Projects.css'
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
                                    <h1 className='project-name'><u>Volunteer speaker at WWC </u> (Women Who Code Boulder/Denver)</h1>
                                </div>
                        </li>
                        <li className='project-card'>
                                <div className='video-container'>
                                    <iframe title="EcoFreak" className='video' 
                                            src="https://www.youtube.com/embed/wtGFgzJXCxw">
                                    </iframe>
                                </div>
                                <div className='project-content'>
                                    <h1 className='project-name'><u>EcoFreak</u></h1>
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
                                    <h1 className='project-name'><u>Parking spot finder</u></h1>
                                    <h1 className='project-name'>Tech Stack: Ruby on rails, React Native(expo), Authentication (JWT)</h1>
                                </div>
                        </li>     
                        <li className='project-card'>
                                <div className='video-container'>
                                    <iframe title="Thai Alphabet" className='video' 
                                            src="https://www.youtube.com/embed/g_wWus-WjAk">
                                    </iframe>
                                </div>
                                <div className='project-content'>
                                    <h1 className='project-name'><u>Thai Alphabet flashcard and Mix & Match game</u></h1>
                                    <h1 className='project-name'>Tech Stack: Ruby on Rails, Javascript, HTML, CSS </h1>
                                </div>
                        </li>     
                    </ul>
                </div>
        )
    }
}
