import React from 'react'
import CurrencyExchange from '../images/CurrencyExchange.jpg'
import DictionaryProject from '../images/DictionaryProject.jpg'
import Megabus from '../images/MegabusProject.jpg'
import BloggerProject from '../images/BloggerProject.jpg'

function Project(){
    return(
        <div className="project-page">
        <h1>Projects</h1>
        <div className= "project-div">
        <img className="projects" style={{height: "50vh", width: "50vw" }}src= {CurrencyExchange}/> 
        <h3>Currency Exchange Rate</h3>
        <p>Currency Exchange Rate app was designed to allow users a quick check of latest exchange rates. Latest news will also appear in the feed to give users a convenient way to keep up to date.</p>
        <h4>Languages:</h4>
        <p>HTML, CSS, Javascript</p>
        </div>
        <div className= "project-div">
        <img className="projects" style={{height: "50vh", width: "50vw" }}src= {DictionaryProject}/> 
        <h3>Dictionary</h3>
        <p>Dictionary app utilized the Merriam-Webster's dictionary to allow users a quick way to look up latest words.</p>
        <h4>Languages:</h4>
        <p>React, CSS, Merriam-Webster's API</p>
        </div>
        <div className="project-div">
        <img className="projects" style={{height: "50vh", width: "50vw" }}src= {Megabus}/> 
        </div>
        <h3>Megabus</h3>
        <p>Following Agile & Scrum methodology, a collaborative project to re-design Megabus's mobile app.</p>
        <h4>Languages:</h4>
        <p>React, CSS, Express.js, Sequelize, PostgreSQL</p>
        <div className= "project-div">
        <img className="projects" style={{height: "50vh", width: "50vw" }}src= {BloggerProject}/> 
        <h3>Blogger 2020</h3>
        <p>Blogger 2020 is a new app allowing users to share their feelings with their friends, family, and co-workers.</p>
        <h4>Languages:</h4>
        <p>React, Ruby on Rails, PostgreSQL, bcrypt, JWT</p>
        </div>

        </div>
    )
}

export default Project