import React, { Component } from 'react'
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
                        <button className='button'>Contact</button>
                    </div>
                </div>
                <div className='about-container'>
                    <h1 className='about'>About</h1>
                    <p className='content-about'>
                        I am a full stack developer with a background in interior design. <br></br>
                        I am passionate about coding, and I'm excited to continue growing my skills.<br></br>
                        I am looking for a full-time position as a Software Engineer. I have experience in Javascript,<br></br>
                        Ruby on Rails, React, React Native, HTML, CSS, and I am also open to learning any new technical <br></br> language as well.
                        I am hardworking, a quick learner, and a great team player. </p>
                </div>
            </>
        )
    }
}
