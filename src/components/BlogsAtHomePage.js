import React, { Component } from 'react'
import './BlogsAtHomePage.css'

export default class BlogsAtHomePage extends Component {
    render() {
        return (
            <div className='blogs-at-home-container'>
                <h1 className='blog-title'>Some of my blogs post</h1>
                <div className='blogs-container'>
                    <div className='blog-card'>
                        <a href='https://alicerichardson28.medium.com/my-experience-as-a-speaker-for-women-who-code-6beb99ae0de5' target="_blank" rel="noopener noreferrer">
                            <h2 className='topic-title'>My experience as a speaker for Women Who Code</h2>
                        </a>
                    </div>
                    <div className='blog-card'>
                        <a href='https://alicerichardson28.medium.com/as-a-frontend-developer-should-you-know-about-ui-and-ux-8e78c7a955ee' target="_blank" rel="noopener noreferrer">
                            <h2 className='topic-title'>As a Frontend developer, should you know about UI and UX?
</h2>
                        </a>
                    </div>
                    <div className='blog-card'>
                        <a href='https://alicerichardson28.medium.com/how-i-become-a-software-developer-with-english-as-my-second-language-937a516e3530' target="_blank" rel="noopener noreferrer">
                            <h2 className='topic-title'>How I become a software developer with English as my second language</h2>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

