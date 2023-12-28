import React from 'react'
import './step-one.css'
import { useContext } from "react";
import RegisterContext from '../../../contexts/register-context';
import { useState } from 'react';
import logoss from "../assets/image 3.svg"


export default function StepOne() {

  const [validationErrors, setValidationErrors] = useState({});

    const { data, setData, step, setStep } = useContext(RegisterContext);
    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};
        if (!data.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!data.lastName.trim()) {
          errors.lastName = 'Last name is required';
        }
    
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.trim() || !emailRegex.test(data.email)) {
          errors.email = 'Valid email address is required';
        }
    
        
        const phoneRegex = /^\d{11}$/;
        if (!data.phoneNo.trim() || !phoneRegex.test(data.phoneNo)) {
          errors.phoneNo = 'Valid 11-digit phone number is required';
        }

        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {

        setStep(step + 1);
        }
  };

  return (
   
    <div className='container'>
    <div className="main-box">
    <img src={logoss} alt="" srcset="" />
    <form onSubmit={handleSubmit} className="main">
     
      <div className="text">
          <h2>Get Started For <span>Free</span></h2>
          <p>Enter your details to create a new Account. </p>
          <a href="#home">Already Have An Account. ?</a>
          <button>APPLY NOW</button>
      </div>
      <div className="form-box">
        <div className="form">
            <div className="input">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" placeholder='Enter FirstName'
          value={data.firstName}
          onChange={(e) =>
            setData((prev) => ({ ...prev, firstName: e.target.value }))
          }/>
          {validationErrors.firstName && (
            <span className="error">{validationErrors.firstName}</span>
            )}
            </div>

            <div className="input">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" placeholder='Enter LastName' value={data.lastName}
          onChange={(e) =>
            setData((prev) => ({ ...prev, lastName: e.target.value }))
          }/> 
          {validationErrors.lastName && (
                  <span className="error">{validationErrors.lastName}</span>
                )}
            </div>


            <div className="input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder='Enter Email address' 
                value={data.email}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }/>
                  {validationErrors.email && (
                  <span className="error">{validationErrors.email}</span>
                )}
            </div>

            <div className="input">
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" placeholder='Enter Phone Number' 
                value={data.phoneNo}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, phoneNo: e.target.value }))
                }/>
                 {validationErrors.phoneNo && (
                  <span className="error">{validationErrors.phoneNo}</span>
                )}
            </div>
            </div>

            <button type='submit'>Next</button>
        </div>
        </form>
    </div>
    
  </div>
  )
}
