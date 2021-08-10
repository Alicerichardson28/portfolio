import React, { Component } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
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
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary" href={blog.link} target="_blank">Read More</Button>
                    </Card.Body>
                </Card>   
            )
        })
        
        return (
        <>   
            <h1 className='blog-title'>Some of my blogs post</h1>
            <Container fluid className="container-blogs">
                {showBlogs}
            </Container>
        </>
        )
    }
}

