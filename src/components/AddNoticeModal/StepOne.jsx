import React, { useState } from 'react';

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = e => {
    e.preventDefault();

    if (values.name === '' || values.breed === '' || values.birthday === '') {
      setError(true);
    } else {
      nextStep();
    }
  };

  return <div></div>;
};

export default StepOne;
