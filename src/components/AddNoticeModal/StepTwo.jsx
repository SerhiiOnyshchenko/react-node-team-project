/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = e => {
    e.preventDefault();

    if (values.photo === '' || values.comments === '') {
      setError(true);
    } else {
      nextStep();
    }
  };
  return <div></div>;
};

export default StepTwo;
