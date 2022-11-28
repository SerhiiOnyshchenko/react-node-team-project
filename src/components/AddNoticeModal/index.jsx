import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import s from './index.module.css';

export default function AddNoticeModal({ onClose }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    titleOfAd: '',
    namePet: '',
    breed: '',
    sex: '',
    location: '',
    price: '1$',
    category: '',
    comments: '',
    dateOfBirth: '',
    image: '',
  });

  const nextStep = () => setStep(prev => (prev === 1 ? prev + 1 : 2));
  const prevStep = () => setStep(prev => prev - 1);

  switch (step) {
    case 1:
      return (
        <div className={s.Wrapper}>
          <h1 className={s.header}>Add pet</h1>
          <StepOne
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            onClose={onClose}
          />
        </div>
      );
    case 2:
      return (
        <div className={s.Wrapper}>
          <h1 className={s.header}>Add pet</h1>
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            onClose={onClose}
          />
        </div>
      );
    default:
      return <div></div>;
  }
}
