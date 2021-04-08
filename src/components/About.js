import React, { Component } from 'react'
import './About.css'
import alice from '../picture/Alice.jpg'

export default class About extends Component {
    render() {
        return (
            <div className='about-container content-container'>
                <div className='alice-container'>
                        <img className='alice-photo' src={alice} alt="second alice sitting" />
                </div>
                <div className='about-content'>
                    <h1 className='about'>about me</h1>
                    <p className='content-about1'>
                        I am a full stack developer with a background in interior design. I am looking 

                        for full time remote position as a Frontend developer.
                    </p>
                    <p className='content-about2'>
                        I enjoy turning complex problems into simple, beautiful and intuitive designs. I also love the
                        logic and structure of coding and always strive to write elegant and efficient code. whether it be HTML,

                        CSS, Javascript or React. When I'm not coding, tweeting or pushing pixels, you'll find me cooking, hiking 

                        or at the gym.   
                    </p>
                </div>
            </div>
        )
    }
}
