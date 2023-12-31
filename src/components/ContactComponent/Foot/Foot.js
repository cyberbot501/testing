import React from 'react'
import env from "../../../Assets/envelope.png"
import lin from "../../../Assets/linkdn.png"
import twi from "../../../Assets/twitter.png"
import wha from "../../../Assets/whatsapp.png"
import loga from "../../../Assets/form-img.png"

import './foot.css'
function Foot() {
  return (
    <div className='count'>

        <div className='-e-box'>
            
        </div>

        <div className='containers'>
            
            <ul className='f-nav'>
                <li> <img src={loga} alt=''/></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Contact uS</a></li>
                <li><a href='#'>Testimonials</a></li>
            </ul>

            <ul className='s-nav'>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Our internship</a></li>
                <li><a href='#'>Newsletter</a></li>
            </ul>

            <div className='contact'>
                <div className='icon'>
                    <img src={env} alt=''/>
                    <img src={twi} alt=''/>
                    <img src={lin} alt=''/>
                    <img src={wha} alt=''/>
                </div>
                <p>@productsquare</p>
            </div>

        </div>

        <div class="custom-shape-divider-top-1704490432">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>

    </div>
     )
}

export default Foot