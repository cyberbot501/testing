import React from 'react'
import './body.css'
import cbg from "../../../Assets/contact.png";
function Body() {
  return (
    <div className='Container'>
      <div className='main'>
        <div className='inner'>
          <h4>Hey, there!!!</h4>
          <div className='avater'>
            <img src={cbg}/>
            <p>i’m oluwaseun, i can answer any
                question you might have.
                Try me!
              </p>
          </div>
        </div>

        <form>
        <div className="name">
                <label htmlFor="lastname">First Name</label>
                <input type="text" id="lastname"/> 
            </div>

            <div className="name">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname"/> 
            </div>

            <div className="thoughts">
                    <label htmlFor="">Tell us about your experience and Why you want to intern with us</label>
                    <textarea
                        name=""
                      />
            </div>

            <div className='pick'>
              <input type= 'checkbox'/>
              <p>I agrree to receive other communications from 501k internship</p>
            </div>

            <div className='pick'>
              <input type= 'checkbox'/>
              <p>I agree to allow 501k internship to store and process my personal data</p>
            </div>
        </form>


      </div>
    </div>
  )
}

export default Body