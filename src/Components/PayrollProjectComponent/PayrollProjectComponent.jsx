import React from 'react'
import payrollImage from '../../assets/PayrollImages/payroll-landing-page.jpg'
import payrollHRImage from '../../assets/PayrollImages/payrol-hr.jpg'
import accountImage from '../../assets/PayrollImages/account.png'
import peopleImage from '../../assets/PayrollImages/people.png'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';

const PayrollProjectComponent = () => {

  const navigate = useNavigate()
  const NavigateToWork = () =>
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/projects')
    }
  return (
    <React.Fragment>
      <div className='project-container'>
          <p className='title'>Payroll Management</p>
          <img src={payrollImage} alt="" className='work-image'/>
          <p className='title'>About</p>
          <div className='project-text-container'>
              <p>
              The Payroll Management System is a comprehensive web solution tailored for efficient HR and Admin operations.
               Designed to streamline payroll and attendance tracking, this system offers two secure login options for HR and Admin users. 
               The Admin has full control over employee data, with the ability to manage grades, perform CRUD operations
               , and access a variety of statistical graphs that provide an intuitive, data-driven overview of the workforce. 
               HR personnel can effortlessly monitor employee attendance, online status, and working hours. 
               Salary calculations are fully automated, drawing from attendance logs and backend processes to ensure timely, 
               accurate payroll distribution. This system not only simplifies complex payroll tasks but also enhances transparency 
               and ease of use for HR teams, enabling efficient workforce management and operational insights.</p>
          </div>
          <p className='title'>Challenges</p>
          <div className='project-text-container'>
              <p>One of the key challenges in developing the Payroll Management System was ensuring seamless integration between multiple features, 
                such as automated salary calculations, attendance tracking, and role-based access. 
                Balancing data security with ease of access for HR and Admin roles required precise planning 
                and implementation. Additionally, creating intuitive, interactive statistical graphs posed a challenge in terms of both design 
                and real-time data processing, ensuring that all information remains accurate and up-to-date for effective decision-making.
                 This system addresses these challenges through robust backend automation and efficient data management to streamline payroll operations.</p>
          </div>
          <div class="slideshow">
              <img src={payrollHRImage} alt="Image 1" class="slide" />
              <img src={accountImage}alt="Image 2" class="slide" />
              <img src={peopleImage} alt="Image 3" class="slide" />
          </div>
          <div className='works-page-nav' onClick={NavigateToWork}>
            <p>View All Works</p>
            <ArrowRight/>
          </div>
      </div>
    </React.Fragment>
  )
}

export default PayrollProjectComponent