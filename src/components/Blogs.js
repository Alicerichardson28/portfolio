import React, { Component } from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom';

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
        const showBlogs = this.state.blogs.map(blog => 
             {
            return ( 
                <>
                    <div className='blogs-container'>
                        <a href={blog.link}>
                        <ul className='blogs-ul'>
                            <li className='blogs-li'>
                                <div className='img-container'>
                                    <img className='img' src={blog.thumbnail}/>
                                </div>
                                <h1 className='title'>{blog.title}</h1>
                            </li>
                        </ul>
                        </a>
                    </div>
                </>
            )
        })
        
        return (
            <div>
                <Link to='/'><h2 className='logo'>A</h2></Link>
                <ul className='nav-container'>
                    <Link to="/about">
                        <li className='nav-list'>About</li>
                    </Link>
                    <Link to="/blogs">
                        <li className='nav-list'>Blogs</li>
                    </Link>
                    <Link to="/projects">
                        <li className='nav-list'>Projects</li>
                    </Link>
                </ul> 
                {showBlogs}
            </div>
        )
    }
}
