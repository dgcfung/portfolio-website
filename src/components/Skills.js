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

function Skills(){
    return(
        <div className= "skills">
        <h1>Skills</h1>
        <div className= "row-1">
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={HTMLLogo2}/>
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={CSSLogo}/>
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={JSLogo}/>
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={ReactIcon}/>
        </div>
        <div className="row-2">
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={PostgreSQLLogo}/>
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={SequelizeLogo}/>
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={RailsLogo}/>
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={RubyLogo}/>
        </div>
        <div className="row-3">
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={ExpressLogo}/>
        <img className="contact-img" style={{height: "15vh", width: "10vw" }}src={NodeLogo}/>
        </div>

        </div>
    )
}

export default Skills