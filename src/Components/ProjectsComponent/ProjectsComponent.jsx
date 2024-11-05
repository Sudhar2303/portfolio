import React from 'react'
import payrollImage from '../../assets/PayrollImages/payroll-landing-page.jpg'
import currencyImage from '../../assets/CurrencyConverterImage/currency-converter.jpg'
import { ArrowRight } from 'lucide-react';
import '../ProjectsComponent/ProjectsComponent.css'
import { useNavigate } from 'react-router-dom'

const ProjectsComponent = () => 
{
  const navigate = useNavigate()
  return (
    <React.Fragment>
        <div className='project-work-container'>
            <p className='title'>My Works</p>
            <p className='project-work-title'>Delivering Excellence Through Code</p>
            <div className='project-info'>
              <img src={payrollImage} alt="" className='work-image'/>
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
            <hr />
            <div className='project-info'>
              <img src={currencyImage} alt="" className='work-image'/>
              <div className='project-title'>
                <div>
                  <p>Currency Converter</p>
                  <p style={{opacity:0.5}}>Full Stack</p>
                </div>
                <div className='home-work-nav' onClick={()=>{navigate('/projects/converter')}}>
                  <ArrowRight/>
                </div>
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProjectsComponent