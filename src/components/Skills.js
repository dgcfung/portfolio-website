import React from 'react'
import HTMLLogo2 from '../images/HTMLLogo2.png'
import CSSLogo from '../images/CSSLogo.png'
import JSLogo from '../images/JSLogo.jpg'
import ReactIcon from '../images/ReactLogo.png'
import PostgreSQLLogo from '../images/PostgreSQLLogo.png'
import SequelizeLogo from '../images/SequelizeLogo.png'
import RailsLogo from '../images/RailsLogo.png'
import RubyLogo from '../images/RubyLogo.png'
import ExpressLogo from '../images/ExpressLogo.png'
import NodeLogo from '../images/NodeLogo.png'

function Skills() {
    return (
        <div className="skills-page">
            <h1 className="section-header">Skills</h1>
            <div className="skills-container">

                <div className="skills-logos-container">
                <div className="row-1">
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={HTMLLogo2} />
                    <img className="skills-logo" style={{ height: "5w", width: "5vw" }} src={CSSLogo} />
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={JSLogo} />
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={ReactIcon} />
                </div>
                <div className="row-2">
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={PostgreSQLLogo} />
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={SequelizeLogo} />
                    <img className="skills-logo" style={{ height: "5vw", width: "10vw" }} src={RailsLogo} />
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={RubyLogo} />
                </div>
                <div className="row-3">
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={ExpressLogo} />
                    <img className="skills-logo" style={{ height: "5vw", width: "5vw" }} src={NodeLogo} />
                </div>
                </div>
                <div className= "skills-description">
                    <p>My abilities as a software developer include front-end and backend skills. My project work includes work in JavaScript, HTML, CSS, and React, I've worked both individually and on collaborative teams using agile methodologies to design full-stack applications with backends in both Ruby on Rails and Express.</p>
                    <br></br>
                    <a className= "resume" href= "https://www.docdroid.net/Rc9QKLN/donald-fung-pdf">Check Out Skills on My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Skills