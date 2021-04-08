import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './Icon.css'

library.add(fab)

export default function Icon() {
    return (
        <div>
            <div className='container-icons'>
                <ul className='list-of-icons'>
                    <a 
                        href='https://github.com/Alicerichardson28' 
                        aria-label= "github" 
                        target="_blank" 
                        rel="noopener noreferrer" >
                            <li><FontAwesomeIcon 
                                icon={['fab', 'github']} 
                                color='white'/>
                            </li> 
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/alice-richardson-dev/' 
                        aria-label= "linkedIn" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <li>
                                <FontAwesomeIcon 
                                icon={['fab', 'linkedin']} 
                                color='white'/>
                            </li>  
                    </a> 
                </ul>
            </div>
        </div>
    )
}

