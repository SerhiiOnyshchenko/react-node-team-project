import React, { useState } from 'react';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';

export default function AuthForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const handleNextStep = (newData, final = false) => {
    setFormData(prev => ({ ...prev, ...newData }));
    if (final) {
      dispatch(authOperations.register(newData));
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setFormData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <FormUserDetails next={handleNextStep} data={formData} />,
    <FormPersonalDetails
      next={handleNextStep}
      prev={handlePrevStep}
      setFormData={setFormData}
      data={formData}
    />,
  ];
  return <div>{steps[currentStep]}</div>;
}
