import ModalPage from 'pages/ModalPage';
import React from 'react';
// import { useState } from 'react';
// import StepOne from './StepOne';
// import StepTwo from './StepTwo';
// import Final from './Final';

export default function AddNoticeModal() {
  // const [step, setstep] = useState(1);

  // const [formData, setFormData] = useState({
  //   name: '',
  //   birthday: '',
  //   breed: '',
  //   photo: '',
  //   comments: '',
  // });

  // const nextStep = () => {
  //   setstep(step + 1);
  // };

  // const prevStep = () => {
  //   setstep(step - 1);
  // };

  // const handleInputData = input => e => {
  //   const { value } = e.target;

  //   setFormData(prevState => ({
  //     ...prevState,
  //     [input]: value,
  //   }));
  // };

  // switch (step) {
  //   case 1:
  //     return (
  //       <div>
  //         <StepOne
  //           nextStep={nextStep}
  //           handleFormData={handleInputData}
  //           values={formData}
  //         />
  //       </div>
  //     );
  //   case 2:
  //     return (
  //       <div>
  //         <StepTwo
  //           nextStep={nextStep}
  //           prevStep={prevStep}
  //           handleFormData={handleInputData}
  //           values={formData}
  //         />
  //       </div>
  //     );
  //   case 3:
  //     return (
  //       <div>
  //         <Final values={formData} />
  //       </div>
  //     );
  //   default:
  //     return <div></div>;
  // }
  return <ModalPage />;
}
