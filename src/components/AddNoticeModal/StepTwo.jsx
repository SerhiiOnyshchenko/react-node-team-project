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
  console.log(submitFormData, error);
  return <div></div>;
};

export default StepTwo;
