import React from 'react'
import { Link } from 'react-router-dom'
import DLogo from '../images/DLogo.png'
import Donald from '../images/DonaldProfilePic2.jpg'

class Header extends React.Component {

    container = React.createRef();
    state = {
        open: false,
    };

    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };


    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    render() {

        return (

            <div className="Header">

                <div className="container" ref={this.container}>


                    <button type="button" className="hamburger-button" onClick={this.handleButtonClick}>
                        ☰
            </button>

                    {this.state.open && (
                        <div class="dropdown" onClick={this.handleButtonClick}>
                            <ul>
                                <img className="dropdown-profile-pic" style={{ height: "15vw", width: "15vw" }} src={Donald} />
                                <br></br>
                                {/* <img style={{ height: "20vh", width: "20vw" }} src={DLogo} /> */}
                                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/`}><li> Donald's Page</li></Link>
                                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/about-me`}><li>About Me</li></Link>
                                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/skills`}><li>Skills</li></Link>
                                {/* <Link style={{ color: 'white',textDecoration: 'none' }} to={`/my-resume`}><li>Resume</li></Link> */}
                                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/portfolio`}><li>My Work</li></Link>
                                <Link style={{ color: 'white', textDecoration: 'none' }} to={`/contact-me`}><li>Contact Me</li></Link>
                            </ul>

                        </div>

                    )}


                </div>
                <h1 className="portfolio-header">Welcome to Donald's site</h1>
                <h3 className="headline">Software Developer. Scholar. Marketer. International Mindset.</h3>
                <br></br>
            </div>
        );

    }
}

export default Header
