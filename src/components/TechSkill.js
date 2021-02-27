import React, { Component } from 'react'
import javascript from '../picture/javascript.svg'
import Html from '../picture/html5.svg'
import Css from '../picture/css3.svg'
import ReactIcon from '../picture/react.svg'
import Npm from '../picture/npm.svg'
import Bootstrap from '../picture/bootstrap.svg'
import Git from '../picture/git.svg'
import GitHub from '../picture/github.svg'
import Heroku from '../picture/heroku.svg'
import Vscode from '../picture/vscode.svg'
import Slack from '../picture/slack.svg'
import Node from '../picture/nodejs.svg'
import './TechSkill.css'

export default class TechSkill extends Component {
    render() {
        return (
            <div className='tech-container'>
                <h1 className="tech-title">Tools & Technologies</h1>
                        <ul className="lists-skill">
                            <li className="card">
                                <img src={javascript} className="svg"/>
                                <h1 className="tech-name">Javascript</h1>
                            </li>
                            <li className="card">
                                <img src={Html} className="svg"/>
                                <h1 className="tech-name">Html</h1>
                            </li>
                            <li className="card">
                                <img src={Css} className="svg"/>
                                <h1 className="tech-name">Css</h1>
                            </li>
                            <li className="card">
                                <img src={ReactIcon} className="svg"/>
                                <h1 className="tech-name">React.js</h1>
                            </li>
                            <li className="card">
                                <img src={Npm} className="svg"/>
                                <h1 className="tech-name">NPM</h1>
                            </li>
                            <li className="card">
                                <img src={Bootstrap} className="svg"/>
                                <h1 className="tech-name">Bootstrap</h1>
                            </li>
                            <li className="card">
                                <img src={Git} className="svg"/>
                                <h1 className="tech-name">Git</h1>
                            </li>
                            <li className="card"> 
                                <img src={GitHub} className="svg"/>
                                <h1 className="tech-name">GitHub</h1>
                            </li>
                            <li className="card">
                                <img src={Heroku} className="svg"/>
                                <h1 className="tech-name">Heroku</h1>
                            </li>
                            <li className="card">
                                <img src={Vscode} className="svg"/>
                                <h1 className="tech-name">Vscode</h1>
                            </li>
                            <li className="card">
                                <img src={Slack} className="svg"/>
                                <h1 className="tech-name">Slack</h1>
                            </li>
                            <li className="card">
                                <img src={Node} className="svg"/>
                                <h1 className="tech-name">Node.js</h1>
                            </li>
                        </ul>
            </div>
        )
    }
}
