import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Final from './Final';
import s from './index.module.css';

export default function AddNoticeModal() {
  const [step, setstep] = useState(1);

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

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {
    const { value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <div className={s.Wrapper}>
          <h1 className={s.header}>Add pet</h1>
          <StepOne
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div className={s.Wrapper}>
          <h1 className={s.header}>Add pet</h1>
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <Final values={formData} />
        </div>
      );
    default:
      return <div></div>;
  }
}
