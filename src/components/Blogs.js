import React, { Component } from 'react'

export default class Blogs extends Component {
    state ={
        blogs: []
    }
    
    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alicerichardson28')
         .then(res => res.json())
         .then(blogs => this.setState({blogs}))
    }

    showBlogs = this.state.blogs.map(blog => {
        return (
            <ul>
                <li>{blog.content}</li>
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
