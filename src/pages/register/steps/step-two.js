import React from 'react'
import { useContext } from "react";
import RegisterContext from '../../../contexts/register-context';
import { useState } from 'react';

import logoss from "../assets/image 3.svg"

export default function StepTwo() {
  const { data, setData, step, setStep } = useContext(RegisterContext);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();

      const errors = {};

    if (!data.username.trim()) {
      errors.username = 'Preferred username is required';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!data.selectProgram) {
      errors.selectProgram = 'Please select a program';
    }

    setValidationErrors(errors);

    
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
    };
  return (
    <div> <div className='container'>
    <div className="main-box">
    <img src={logoss} alt="" srcset="" />
    <form onSubmit={handleSubmit} className="main">
     
      <div className="text">
          <h2>Hi, Welcome <span>{data.firstName}</span></h2>
          <p>Kindly choose a preferred password and a program </p>
      </div>
      <div className="form-box">
        <div className="form">
        <div className="input">
            <label htmlFor="name">preferred username</label>
            <input type="text" id="name" placeholder='Enter preferred username' value={data.username}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, username: e.target.value }))
                  }/>
                   {validationErrors.username && (
                  <span className="error">{validationErrors.username}</span>
                )}
         </div>

         <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter Password' value={data.password}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }/>
           {validationErrors.password && (
                  <span className="error">{validationErrors.password}</span>
                )}
         </div>


         <div className="input">
            <label htmlFor="password">confirm password</label>
            <input type="password" id="confirm-password" placeholder='confirm password' value={data.fir}
          onChange={(e) =>
            setData((prev) => ({ ...prev, confirmPassword: e.target.value }))
          }/>
          {validationErrors.confirmPassword && (
                  <span className="error">{validationErrors.confirmPassword}</span>
                )}
         </div>

         <div className="input">
            <label htmlFor="phone">select Program</label>
            <select name="select-program" id="select-program"  defaultValue={""}
          value={data.selectProgram}
          onChange={(e) =>
            setData((prev) => ({ ...prev, selectProgram: e.target.value }))
          }>
              <option value="" disabled hidden>Select Your Program</option>
              <option value="starter">Career Starter</option>
              <option value="professional">Proffesional Pathway</option>
              <option value="startup">Startup/Enterprenuership</option>
            </select>
            {validationErrors.selectProgram && (
                  <span className="error">{validationErrors.selectProgram}</span>
                )}
         </div>
        </div>
        <button type='submit'>NEXT</button>
      </div>
    </form>
    </div>
    
  </div>
  </div>
  )
}
