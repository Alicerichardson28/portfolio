import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { Button } from 'react-bootstrap';
import './BlogsAtHomePage.css'



const BlogsAtHomePage = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 30,
      config: config.molasses,
      onRest: () => set(!flip),
    })

      return (
          <div className="container blog-homePage-container">
              <animated.div style={props} className="h1">Exploring technical blog post</animated.div>
              <Button href="/blogs" variant="warning" size="lg" target="_blank">Read more</Button>
          </div>
      )
    
}

export default BlogsAtHomePage;

