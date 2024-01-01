import React from 'react'
import env from "../../../Assets/envelope.png"
import lin from "../../../Assets/linkdn.png"
import twi from "../../../Assets/twitter.png"
import wha from "../../../Assets/whatsapp.png"

import './foot.css'
function Foot() {
  return (
    <div className='containers'>
        <ul className='f-nav'>
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
  )
}

export default Foot