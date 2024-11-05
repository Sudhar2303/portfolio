import React from 'react'
import { ArrowRight } from 'lucide-react';
import './HomeComponent.css'
import payrollImage from '../../assets/PayrollImages/payroll-landing-page.jpg'
import { useNavigate } from 'react-router-dom';
const HomeComponent = () => {
  const navigate = useNavigate();
  const NavigateToContactme = () =>
  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/contact')
  }
  const NavigateToWork = () =>
  {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/projects')
  }
  const NavigateToAboutMe = () =>
  {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/aboutme')
  }
  return (
    <React.Fragment>
      <div className='home-body'>
        <p> 
          <span className='span-hash-color'>I'm Sudhar, </span>
          a MERN stack developer passionate about creating impactful digital experiences</p>
        <div className='home-navigate-contant'>
          <div className= 'border-box' onClick={NavigateToContactme}>
            <p>Let's Talk</p>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className='home-aboutMe'>
        <div className='aboutme-tag'>
            <p>Discover the journey behind my design —where passion meets purpose</p>
        </div>
        <div className='aboutme-data'>
           <p>I'm an aspiring MERN Full Stack Developer living in chennai, passionate about coding and driven to create innovative web applications.</p>
          <div className='home-aboutme-navigate'>
            <div className= 'border-box' onClick={NavigateToAboutMe}>
              <p>About Me</p>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className='home-works'>
          <p className='work-title'>Discover my latest works</p>
          <div className='project-info'>
              <img src={payrollImage} alt="" className='work-image' onClick={()=>{navigate('/projects/payroll')}}/>
              <div className='project-title'>
                <div>
                  <p>Payroll Management</p>
                  <p style={{opacity:0.5}}>Full Stack</p>
                </div>
                <div className='home-work-nav' onClick={()=>{navigate('/projects/payroll')}}>
                  <ArrowRight/>
                </div>
              </div>
          </div>
          <div className='works-page-nav' onClick={NavigateToWork}>
            <p>View All Works</p>
            <ArrowRight/>
          </div>
      </div>
    </React.Fragment>
  )
}

export default HomeComponent