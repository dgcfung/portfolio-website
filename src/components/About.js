import React from 'react'
import DonaldProfilePic2 from '../images/DonaldProfilePic2.jpg'

function About(){

    return(
        <div className= "About">
        <h1>About Me</h1>
        <img  className= "profile-pic" style={{height: "35vh", width: "23vw" }} src={DonaldProfilePic2}/>
        <br></br>
      
        <a href= "https://docdro.id/aR6qmQu">Click Here for My Resume</a>
        <h3 className= "brand-statement">I am a highly motivated software developer with a passion to connect users with technology with a background in marketing, sales, and academia. My past experience as a researcher and regional account manager have strengthened my skills working in a leadership role and working in a collaborative environment. These experiences have allowed me to combine my passion for creative products with my love for coding, programming, and learning.</h3>
        </div>
    )
}

export default About