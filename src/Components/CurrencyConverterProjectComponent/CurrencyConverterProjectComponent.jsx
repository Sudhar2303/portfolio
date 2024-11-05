import React from 'react'
import currencyImage from '../../assets/CurrencyConverterImage/currency-converter.jpg'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';

const CurrencyConverterProjectComponent = () => {
  const navigate = useNavigate()

  const NavigateToWork = () =>
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/projects')
    }

  return (
    <React.Fragment>
      <div className='project-container'>
          <p className='title'>Currency Converter</p>
          <img src={currencyImage} alt="" className='work-image'/>
          <p className='title'>About</p>
          <div className='project-text-container'>
              <p>
              The currency converter app provides a straightforward solution for converting values between different currencies.
               By storing currency values in the backend, it processes conversions based on user-selected currencies and inputs. 
               This design simplifies the conversion process, allowing users to access the value they need quickly and easily. 
               The app provides a practical and efficient tool for users navigating currency exchanges in various contexts.</p>
          </div>
          <p className='title'>Challenges</p>
          <div className='project-text-container'>
              <p>One of the main challenges in developing the currency converter app was ensuring efficient data handling on the backend to support fast and accurate conversions.
                 Managing exchange values required careful structuring to maintain responsiveness and prevent lag during conversions. 
                 Additionally, creating an intuitive and user-friendly interface was essential to make the app accessible and easy to use across diverse user groups</p>
          </div>
          {/* <div class="slideshow">
              <img src={currencyImage} alt="Image 1" class="slide" />
          </div> */}
          <div className='works-page-nav' onClick={NavigateToWork}>
            <p>View All Works</p>
            <ArrowRight/>
          </div>
      </div>
    </React.Fragment>
  )
}

export default CurrencyConverterProjectComponent