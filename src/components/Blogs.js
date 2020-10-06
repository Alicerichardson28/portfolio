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

    showBlogs = this.state.blogs.map(blog => {
        return (
            <ul className='blogs-container'>
                <li className='blogs-card'><h1>{blog.items.content}</h1></li>
            </ul>
        )
    })
    render() {

        return (
            <div>
                {this.showBlogs}
            </div>
        )
    }
}
