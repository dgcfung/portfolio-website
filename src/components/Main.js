import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Resume from './Resume'
import Project from './Project'
import Contact from './Contact'

function Main(){

        return(
            <Route>
                <About/>
                <Skills/>
                <Resume/>
                <Project/>
                <Contact/>

            </Route>
        )
}

export default Main