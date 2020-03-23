import React from 'react'
import {Link} from 'react-router-dom'
import EmailLogo from '../images/EmailLogo.png'
import GitHubLogo from '../images/GitHubLogo.png'
import LinkedInLogo from '../images/LinkedInLogo.png'

function Contact (){
    return(
        <div className="contact-me">
        <h1>Contact Me</h1>
        <a href="mailto: {d.gc.fung@gmail.com}"><img className="contact-img" style={{height: "15vh", width: "10vw" }}src={EmailLogo}/></a>
        <a href= "https://www.linkedin.com/in/dgcfung/"><img className="contact-img" style={{height: "15vh", width: "10vw" }}src={LinkedInLogo}/></a> 
        <a href= "https://git.generalassemb.ly/dgcfung"><img className="contact-img" style={{height: "15vh", width: "10vw" }}src={GitHubLogo}/></a>
        </div>

    )
}

export default Contact