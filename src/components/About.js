import React, { Component } from 'react'
import './About.css'
import alice from '../picture/Alice.jpg'

export default class About extends Component {
    render() {
        return (
            <div className='container text-center'>
                <div className="row align-items-center">
                    <div className='col-md-6 alice-container'>
                            <img className='alice-photo' src={alice} alt="second alice sitting" />
                    </div>
                    <div className='col-md-6'>
                        <h1 className='about'>about me</h1>
                        <h4>
                            I am a <b className="text-salmon">Frontend developer</b> with a background in designer. I am looking 
                            for full time remote position as a Frontend developer.
                        </h4>
                        <h4>
                            I enjoy turning complex problems into simple, beautiful and intuitive designs. I also love the
                            logic and structure of coding and always strive to write elegant and efficient code. whether it be <b className="text-salmon"><u>HTML,
                            CSS, Javascript and React.</u></b> When I'm not coding, you'll find me cooking, hiking 
                            or at the gym.   
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}
