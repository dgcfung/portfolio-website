import React from 'react'
import DonaldProfilePic2 from '../images/DonaldProfilePic2.jpg'

function About() {

    return (
        <div className="About">
            <h1 className="section-header" >About Me</h1>
            <div classname="about-content">
            {/* <br></br>
        <img  className= "profile-pic" style={{height: "20vw", width: "20vw" }} src={DonaldProfilePic2}/>
        <br></br> */}
            {/* <a className= "resume" href= "https://www.docdroid.net/Rc9QKLN/donald-fung-pdf">Click Here for My Resume</a> */}
            <p className="brand-statement">I am a highly motivated software developer with a passion to connect users with technology with a background in marketing, sales, and academia. My past experience as a researcher and regional account manager have strengthened my skills working in a leadership role and working in a collaborative environment. These experiences have allowed me to combine my passion for creative products with my love for coding, programming, and learning.</p>
            <br></br>
            <a className= "resume" href= "https://docs.google.com/document/d/1HG2_km4R2EUw6wPIj3ZQhBNez5Va3GeimwmdEbkTewM/edit?usp=sharing">Please Click Here for My Full Resume</a>
            </div>
        </div>
    )
}

export default About