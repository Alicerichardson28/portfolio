import React, { Component } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import bgBlogPage from '../picture/font-bg.svg'
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
        console.log(this.state.blog)
        const showBlogs = this.state.blogs.map((blog) => 
        {
            return ( 
                <Card className="card" key={blog.id}>
                    <Card.Img className="blog-img" variant="top" src={blog.thumbnail} />
                    <Card.Body>
                        <Card.Title className="mt-2">{blog.title}</Card.Title>
                        <Button className="mt-5" variant="dark" href={blog.link} target="_blank">Read More</Button>
                    </Card.Body>
                </Card>   
            )
        })
        
        return (
            <>
                <div className="container">   
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <h1>Some of my blogs post</h1>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={ bgBlogPage}/>
                        </div>
                    </div>
                </div>
                <Container fluid className="container-blogs">
                    {showBlogs}
                </Container>
            </>
        )
    }
}
