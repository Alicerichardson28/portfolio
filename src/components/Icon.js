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
                    <a href='https://twitter.com/ParadaRichards1'>
                    <li><FontAwesomeIcon icon={['fab', 'twitter']}/></li>
                    </a>
                    <a href='https://github.com/Alicerichardson28'>
                    <li><FontAwesomeIcon icon={['fab', 'github']}/></li> 
                    </a>
                    <a href='https://www.linkedin.com/in/alice-richardson-dev/'>
                    <li><FontAwesomeIcon icon={['fab', 'linkedin']}/></li>  
                    </a> 
                </ul>
            </div>
        </div>
    )
}
