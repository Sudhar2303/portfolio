import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeComponent from '../HomeComponent/HomeComponent';
import AboutMeComponent from '../AboutMeComponent/AboutMeComponent';
import ProjectsComponent from '../ProjectsComponent/ProjectsComponent';
import { ArrowRight ,Menu,ArrowUpRight,Copyright,X} from 'lucide-react';
import './HeaderComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';
import ContactMeComponent from '../ContactMeComponent/ContactMeComponent';
import PayrollProjectComponent from '../PayrollProjectComponent/PayrollProjectComponent';
import CurrencyConverterProjectComponent from '../CurrencyConverterProjectComponent/CurrencyConverterProjectComponent';

const HeaderComponent = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () =>
    {
        setIsNavVisible(!isNavVisible);
        
        if (!isNavVisible) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }
    const scrollToTop = () => 
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <React.Fragment>
        <Router>
            <div className='header'>
                <div className='header-left' >
                <Link to="/" className='nav-contactme'><span className='span-hash-color'>Sudhar</span>sanan</Link>
                </div>
                <div className='header-right'>
                    <div className='border-box' >
                        <Link to="/contact" onClick={scrollToTop} className='nav-contactme'>Let's Talk</Link>
                        <ArrowRight />
                    </div>
                    { !isNavVisible && <div className='border-box'  onClick={toggleNav}>
                        <Menu/>
                    </div>}
                </div>
            </div>
            <div className={`navbar ${isNavVisible ? 'visible' : ''}`}>
                <div className='closing-nav-button' onClick={toggleNav}>
                    < X/>
                </div>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleNav}>Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutme" onClick={toggleNav}>About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={toggleNav}>Projects</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<HomeComponent/>} />
                <Route path="/aboutme" element={<AboutMeComponent/>} />
                <Route path="/projects/*" element={<ProjectsComponent/>} />
                <Route path="/projects/payroll" element={<PayrollProjectComponent/>} />
                <Route path="/projects/converter" element={<CurrencyConverterProjectComponent/>} />
                <Route path="/contact" element={<ContactMeComponent/>}/>
            </Routes>
            <div className='footer'>
                <div className='footer-nav'>
                    <ul>
                        <li>
                            <Link to="/" onClick={scrollToTop}>Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutme" onClick={scrollToTop}>About Me</Link>
                        </li>
                        <li>
                            <Link to="/projects" onClick={scrollToTop}>Projects</Link>
                        </li>
                    </ul>
                    <div className='social-media-icons'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='social-icon' />
                        <FontAwesomeIcon icon={faGithub } className='social-icon' />
                        <FontAwesomeIcon icon={faYoutube} className='social-icon' />
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                    </div>
                </div>
                <div className='contact-email-container'>
                    <div className='connect-tag'>
                        <p>Stay connected w/ me</p>
                    </div>
                    <div className='email-field'>
                        <input type='text' placeholder='Enter your email' />
                        <ArrowUpRight/>
                        <hr className='horizontal-line'/>
                    </div>
                </div>
                <div className='copy-rights'>
                    <Copyright size="18px"/>
                    <p> Copyright 2024 . Made by Sudharsanan</p>
                </div>
            </div>
        </Router>
    </React.Fragment>
  )
}

export default HeaderComponent