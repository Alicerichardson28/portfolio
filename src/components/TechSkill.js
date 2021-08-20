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
import Figma from '../picture/Figma.jpeg'
import Ruby from '../picture/ruby-on-rails .png'
import './TechSkill.css'

export default class TechSkill extends Component {
    render() {
        return (
            <div className='container text-center'>
                <p className="h4">
                    <b>STACK</b> I’m familiar with technologies such as <b>JavaScript, React, HTML, CSS, Bootstrap</b>, Web design, PhotoShop, Figma... <br/>
                    <a href="https://github.com/Alicerichardson28" target="_blank"><u className="text-dark link">SEE MY GITHUB</u></a>
                </p>
            </div>
        )
    }
}
