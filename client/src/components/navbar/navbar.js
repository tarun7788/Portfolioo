import './navbar.css';
import React from 'react'
import {Link} from 'react-scroll';


export default function Navbar(){
    return(
        <div className='main' id='home'>
        <img src={require('./Draw.jpg')}/>
        <div className='nav'>
            <div className='content'>
        <h4><Link to="about" smooth={true} duration={500}>About</Link></h4>
        <h4><Link to="education" smooth={true} duration={500}>Education</Link></h4>
        <h4><Link to="projects" smooth={true} duration={500}>Projects</Link></h4>
        <h4><Link to="skills" smooth={true} duration={500}>Skills</Link></h4>
        <h4><Link to="contact" smooth={true} duration={500}>Connect</Link></h4>
            </div>
        </div> 
        <div className='home1'>
            <ul>
                <li><h1> TARUN</h1></li>
                <li><h1> SARASWAT</h1></li>
                <li><h3>Software Engineer</h3></li>
                <li><a id='resume' href='https://drive.google.com/file/d/1uIW5bdCSzEi4nBwQtTWv38KYMn-CnXUN/view?usp=sharing' target='_blank'>Download Resume</a></li>
            </ul>
        </div>
        </div>
    )
}