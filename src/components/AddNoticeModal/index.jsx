import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import s from './index.module.css';

export default function AddNoticeModal() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    titleOfAd: '',
    namePet: '',
    breed: '',
    sex: '',
    location: '',
    price: '',
    category: '',
    comments: '',
    birthDate: '',
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
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
      );
    default:
      return <div></div>;
  }
}
