import React from 'react';
import './App.css';
import { Route, withRouter} from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
// import Resume from './components/Resume'
import Project from './components/Project';
import Contact from './components/Contact'

class App extends React.Component {
 

  render() {
    return (
      <div className="App">
      <React.Fragment>
        <Header/>
        <Route exact path='/' component={Main}/>
        <Route exact path='/about-me' component={About}/> 
        <Route exact path='/skills' component={Skills}/>
        {/* <Route exact path="/my-resume" component={Resume}/> */}
        <Route exact path='/portfolio' component={Project}/>
        <Route exact path='/contact-me' component={Contact}/>
      </React.Fragment>
      </div>
        );
      }
  }
      
      export default withRouter(App);
