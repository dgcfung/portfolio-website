import React from 'react'
import CurrencyExchange from '../images/CurrencyExchange.jpg'
import DictionaryProject from '../images/DictionaryProject2.png'
import Megabus from '../images/MegaBusMobile.jpg'
import BloggerProject from '../images/BloggerProject.jpg'

function Project(){
    return(
        <div className="project-page">
        <h1 className ="section-header">Projects</h1>
        <div className="project-page-1">
        <div className= "project-div">
        <div className="img-div">
        <img className="projects" style={{height: "20vw", width: "20vw" }}src= {CurrencyExchange}/> 
        </div>
        <h3>Currency Exchange Rate</h3>
        <p>Currency Exchange Rate app was designed to allow users a quick check of latest exchange rates. Latest news will also appear in the feed to give users a convenient way to keep up to date.</p>
        <h4>Languages:</h4>
        <p>HTML, CSS, Javascript</p>
        <a href="https://pages.git.generalassemb.ly/dgcfung/currency-exchange-rate/">Project Website</a>
        <br></br>
        <a href="https://git.generalassemb.ly/dgcfung/currency-exchange-rate">Project Repository</a>
        </div>
        <div className= "project-div">
        <div className="img-div">
        <img className="projects" style={{height: "20vw", width: "20vw" }}src= {DictionaryProject}/> 
        </div>
        <h3>Dictionary</h3>
        <p>Dictionary app utilized the Merriam-Webster's dictionary API to allow users a quick way to look up latest words. The site ulitizes simplicity to perform a normally tedious task.</p>
        <h4>Languages:</h4>
        <p>React, CSS, Merriam-Webster's API</p>
        <a href="http://dictionary-app-donald.surge.sh/">Project Website</a>
        <br></br>
        <a href="https://git.generalassemb.ly/dgcfung/dictionary-app">Project Repository</a>
        </div>
        </div>
        <div className="project-page-2">
        <div className="project-div">
        <div className="img-div">
        <img className="projects" style={{height: "20vw", width: "20vw" }}src= {Megabus}/> 
        </div>
        <h3>Megabus</h3>
        <p>Following Agile & Scrum methodology, a collaborative project to re-design Megabus's mobile app.</p>
        <h4>Languages:</h4>
        <p>React, CSS, Express.js, Sequelize, PostgreSQL</p>
        <a href="http://megabus-mobile.herokuapp.com/">Project Website</a>
        <br></br>
        <a href="https://git.generalassemb.ly/RachelML/megabus">Project Repository</a>
        </div>
        <div className= "project-div">
        <div className="img-div">
       <img className="projects" style={{height: "20vw", width: "20vw" }}src= {BloggerProject}/> 
       </div>
        <h3>Blogger 2020</h3>
        <p>Blogger 2020 is a new app allowing users to share their feelings with their friends, family, and co-workers.</p>
        <h4>Languages:</h4>
        <p>React, Ruby on Rails, PostgreSQL, bcrypt, JWT</p> 
        <a href="https://git.generalassemb.ly/dgcfung/blogger-2020-backup">Project Website</a>
        <br></br>
        <a href="https://git.generalassemb.ly/dgcfung/blogger-2020-backup">Project Repository</a>
        </div>
        </div>

        </div>
    )
}

export default Project