import './footer.css';
import React from 'react'
import {Link} from 'react-scroll';
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaChevronUp } from "react-icons/fa";
export default function Footer() {
    return(
        <div id="footer">
            <p className='p1'>Made with ❤️ by Me... </p>
            <p className='p3'><Link to="home" smooth={true} duration={500}><FaChevronUp /></Link><a></a></p>
            <p className='p2'>
                <ul>
                    <li><a href='https://github.com/tarun7788' target='_blank'><FiGithub /></a></li>
                    <li><a href='https://www.linkedin.com/in/tarun-saraswat-77i/' target='_blank'><CiLinkedin /></a></li>
                    <li><a href='https://twitter.com/Tarun_Saraswa_t' target='_blank'><FaXTwitter /></a></li>
                    <li><a href='https://www.instagram.com/tarun.s._/?hl=en' target='_blank'><IoLogoInstagram /></a></li>
                </ul>
            </p>

        </div>
    )
}
