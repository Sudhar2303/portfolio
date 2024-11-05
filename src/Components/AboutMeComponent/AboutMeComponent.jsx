import React from 'react'
import profilePhoto from '../../assets/AppLogo/profile-photo.jpg'
import '../AboutMeComponent/AboutMeComponent.css'
import htmlLogo from '../../assets/AppLogo/html-logo.png'
import cssLogo from '../../assets/AppLogo/css-logo.png'
import jsLogo from '../../assets/AppLogo/js-logo.png'
import reactLogo from '../../assets/AppLogo/react-logo.png'
import nodeLogo from '../../assets/AppLogo/node-logo.png'
import mongodbLogo from '../../assets/AppLogo/mongodb-logo.png'
import javaLogo from '../../assets/AppLogo/java-logo.png'

const AboutMeComponent = () => {
  return (
    <React.Fragment>
        <div className='aboutMe-conatiner'>
          <div className='title'>About Me </div>
            <div className='content'>
              <img src={profilePhoto} alt="" className='profile-photo'/>
              <div className='text-container'>
                <p className='aboutMe-tag'>Driven by Code, Inspired by Innovation</p>
                <p>I'm an aspiring MERN Full Stack Developer living in Chennai, passionate about coding and driven to create innovative web applications. I thrive on tackling challenging problems and continuously seek to expand my skill set. My goal is to build user-centric solutions that not only meet client needs but also enhance the overall digital experience.</p>
              </div>
            </div>
        </div>
        <div className='skills-conatiner'>
            <div className='title'>Areas of Proficiency</div>
            <div class="image-scroll-container">
                <div class="image-scroll">
                    <img src={htmlLogo} alt="" />
                    <img src={cssLogo} alt="" />
                    <img src={jsLogo} alt="" />
                    <img src={reactLogo}alt="" />
                    <img src={nodeLogo} alt="" />
                    <img src={mongodbLogo} alt="" />
                    <img src={javaLogo} alt="" />

                    <img src={htmlLogo} alt="" />
                    <img src={cssLogo} alt="" />
                    <img src={jsLogo} alt="" />
                    <img src={reactLogo}alt="" />
                    <img src={nodeLogo} alt="" />
                    <img src={mongodbLogo} alt="" />
                    <img src={javaLogo} alt="" />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AboutMeComponent