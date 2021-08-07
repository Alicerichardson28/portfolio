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
                        <div className='blogs-card' key={index}>
                            <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                <h1 className='title'>{blog.title}</h1>
                            </a>
                        </div>
                </div>
            )
        })
        
        return (
        <>   
            <h1 className='blog-title'>Some of my blogs post</h1>
            <div className='big-blogs-container'>
                {showBlogs}
            </div>
            
            
            {/* <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row> */}
        </>
        )
    }
}
