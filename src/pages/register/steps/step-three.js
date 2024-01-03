import React, { useContext, useState } from 'react';
import RegisterContext from '../../../contexts/register-context';
import logoss from '../assets/image 3.svg';
import './step-one.css'

export default function StepThree() {
  const { data, setData, step, setStep } = useContext(RegisterContext);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};

    if (!data.experienceLevel) {
      errors.experienceLevel = 'Please select your level of experience';
    }

    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }

    if (!data.country) {
      errors.country = 'Please select your country';
    }

    if (!data.city) {
      errors.city = 'Please select your city';
    }

    setValidationErrors(errors);

    // If there are no errors, proceed to the next step
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };

  return (
    <div className="container">
      <div className="main-box">
        <img src={logoss} alt="" />
        <form onSubmit={handleSubmit} className="main">
          <div className="text">
            <h2>Hi <span>{data.firstName}</span></h2>
            <h2 className='con'>kindly Continue with your application.</h2>
            <p>we would love to know you better.</p>
          </div>

          <div className="form-box">
            <div className="form">
              <div className="input">
                <label htmlFor="experience-level">Level of Experience</label>
                <select
                  name="experience-level"
                  id="experience-level"
                  value={data.experienceLevel}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      experienceLevel: e.target.value,
                    }))
                  }
                >
                  <option value=""hidden>
                    Select Your Experience Level
                  </option>
                  <option value="0-6">0 - 6 Months</option>
                  <option value="6-12">6 Months - 1 Year</option>
                  <option value="above-12">1 Year - Above</option>
                </select>
                {validationErrors.experienceLevel && (
                  <span className="error">{validationErrors.experienceLevel}</span>
                )}
              </div>

              <div className="input">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  value={data.address}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, address: e.target.value }))
                  }
                />
                {validationErrors.address && (
                  <span className="error">{validationErrors.address}</span>
                )}
              </div>

              <div className="input">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  value={data.country}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, country: e.target.value }))
                  }
                >
                  <option value="" hidden>Select Your Country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="India">India</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
                {validationErrors.country && (
                  <span className="error">{validationErrors.country}</span>
                )}
              </div>

              <div className="input">
                <label htmlFor="city">City</label>
                <select
                  name="city"
                  id="city"
                  value={data.city}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, city: e.target.value }))
                  }
                >
                  <option value="" hidden>Select Your City</option>
                  <option value="Ibadan">Ibadan</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                </select>
                {validationErrors.city && (
                  <span className="error">{validationErrors.city}</span>
                )}
              </div>
            </div>
            <div className='stepp'>
              <button onClick={() => setStep(step - 1)}>Previous</button>
              <button type="submit" className='pop'>NEXT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
