import React, { Component } from 'react'
import './Blogs.css'

export default class Blogs extends Component {
    state ={
        blogs: []
    }
    
    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alicerichardson28')
         .then(res => res.json())
         .then(res => res.items)
         .then(res => this.setState({blogs: res}))
    }

    render() {
        const showBlogs = this.state.blogs.map((blog, index) => 
             {
            return ( 
                <div className='blog-container'>
                    <ul className='blogs-post-container'>
                        <li className='blogs-card' key={index}>
                            <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                <h1 className='title'>{blog.title}</h1>
                            </a>
                        </li>
                    </ul>
                </div>
            )
        })
        
        return (
            <>
                <h1 className='blog-title'>Some of my blogs post</h1>
                <div>
                    {showBlogs}
                </div>
            </>
        )
    }
}
