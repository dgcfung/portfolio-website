import React from 'react'
import {Link} from 'react-router-dom'
import EmailLogo from '../images/EmailLogo.png'
import GitHubLogo from '../images/GitHubLogo.png'
import LinkedInLogo from '../images/LinkedInLogo.png'

function Contact (){
    return(
        <div className="contact-me">
        <h1 className= "section-header">Contact Me</h1>
        <div className="contact-me-content">
        <p>I'm open to learning about full-time and free-lance opportunities. Feel free to contact me by any of the below methods.</p>
        <a href="mailto: {d.gc.fung@gmail.com}"><img className="contact-img" style={{height: "10vw", width: "10vw" }}src={EmailLogo}/></a>
        <a href= "https://www.linkedin.com/in/dgcfung/"><img className="contact-img" style={{height: "10vw", width: "10vw" }}src={LinkedInLogo}/></a> 
        <a href= "https://git.generalassemb.ly/dgcfung"><img className="contact-img" style={{height: "10vw", width: "10vw" }}src={GitHubLogo}/></a>
        </div>
        </div>

    )
}

export default Contact