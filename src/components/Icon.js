import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './Icon.css'

library.add(fab)

export default function Icon() {
    return (
        <div className='container-icons '>
            <ul className="list-unstyled d-flex">
                <a 
                    href='https://github.com/Alicerichardson28' 
                    aria-label= "take a look of my github" 
                    target="_blank" 
                    rel="noopener noreferrer" >
                        <li>
                            <FontAwesomeIcon 
                            icon={['fab', 'github']} 
                            color=' #282828'/>
                        </li> 
                </a>
                <a 
                    href='https://www.linkedin.com/in/alice-richardson-dev/' 
                    aria-label= "connect with me on linkedIn" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <li>
                            <FontAwesomeIcon 
                            icon={['fab', 'linkedin']} 
                            color=' #282828'/>
                        </li>  
                </a> 
            </ul>
        </div>
    )
}

