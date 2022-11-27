import React, { useState } from 'react';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNextStep = async (newData, final = false) => {
    setFormData(prev => ({ ...prev, ...newData }));
    if (final) {
      try {
        await dispatch(authOperations.register(newData)).unwrap();
        navigate('/user');
      } catch (error) {}
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
