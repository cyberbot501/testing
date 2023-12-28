import React, { useContext, useState } from 'react';
import './step-four.css';
import RegisterContext from '../../../contexts/register-context';

export default function StepFour() {
  const { data, setData, step, setStep } = useContext(RegisterContext);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};

    if (!data.study.trim()) {
      errors.study = 'Course of study/discipline/skill learned is required';
    }

    if (!data.commitment) {
      errors.commitment = 'Please select your willingness to commit';
    }

    // Add more validation checks for other fields as needed

    setValidationErrors(errors);

    // If there are no errors, proceed to the next step
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };

  return (
    <div className='containers'>
      <div className="mat-box">
        <form onSubmit={handleSubmit} className="mat">
          <div className="studys">
            <label htmlFor="study">Course of study/Discipline/skill learnt</label>
            <input
              type="text"
              id="study"
              value={data.study}
              onChange={(e) => setData((prev) => ({ ...prev, study: e.target.value }))}
            />
            {validationErrors.study && (
              <span className="error">{validationErrors.study}</span>
            )}
          </div>

          <div className="cv">
            <div className="studyss">
              <label htmlFor="time">Are you willing to commit to the necessary hours?</label>
              <select
                name="commitment"
                id="time"
                value={data.commitment}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, commitment: e.target.value }))
                }
              >
                <option value="" hidden>Select Your Hours</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {validationErrors.commitment && (
                <span className="error">{validationErrors.commitment}</span>
              )}
            </div>

            <div className="resume">
              <label htmlFor="resumes">Upload your CV/resume.</label>
              <input
                type="file"
                id="resumes"
                placeholder="Upload documents"
               
              />
              
            </div>
          </div>

          <div className="comments">
                    <label htmlFor="comment">Tell us about your experience and Why you want to intern with us</label>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Enter Your Purpose Of Internship In 200 Words"
                        value={data.comment}
                        onChange={(e) => setData((prev) => ({ ...prev, comment: e.target.value }))}
                    />
                    {validationErrors.comment && (
                        <span className="error">{validationErrors.comment}</span>
                    )}
            </div>



          <div className="know">
              <p>how did you hear about us ?</p>
              <div className="knownn">
                  <label htmlFor="known">LinkedIn</label>
                  <input type="radio" name="known" id="known" />
                  <label htmlFor="known">Twitter</label>
                  <input type="radio" name="known" id="known"/>
                  <label htmlFor="known">Others</label>
                  <input type="radio" name="known" id="known"/>
              </div>
          </div>

          <div className="update">
            <p>Would you like to receive updates by email?</p>
            <div className="updatedd">
              <label htmlFor="updated">Yes</label>
              <input
                type="radio"
                name="updated"
                id="updated"
                checked={data.updated}
                onChange={() => setData((prev) => ({ ...prev, updated: true }))}
              />
              <label htmlFor="updated">No</label>
              <input
                type="radio"
                name="updated"
                id="resume"
                checked={!data.updated}
                onChange={() => setData((prev) => ({ ...prev, updated: false }))}
              />
            </div>
          </div>

          <button type='submit' className='yes'>APPLY NOW</button>
        </form>
      </div>
    </div>
  );
}