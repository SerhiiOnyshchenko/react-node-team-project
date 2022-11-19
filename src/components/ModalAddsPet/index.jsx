import React, { useState } from 'react';

import ModalPage1 from './ModalPage1';
import ModalPage2 from './ModalPage2';
// import ModalPage from 'pages/ModalPage';

// export default function ModalAddsPet(props) {
//   const [formData, setFormData] = useState({
//     name: '',
//     birthday: '',
//     breed: '',
//     photo: '',
//     comments: '',
//   });
//   const [page, setPage] = useState(0);

//   const FormTitles = ['First page', 'Second page'];

//   const makeRequest = formData => {
//     console.log('Submiting', formData);
//   };

//   const handleNextStep = (newData, final = false) => {
//     setFormData(prev => ({ ...prev, ...newData }));
//     setPage(prev => prev + 1);

//     if (final) {
//       makeRequest(newData);
//       return;
//     }
//   };

//   const handlePrevStep = newData => {
//     setFormData(prev => ({ ...prev, ...newData }));
//     setPage(prev => prev - 1);
//   };

//   const steps = [
//     <ModalPage1
//       onClose={props.onClose}
//       next={handleNextStep}
//       data={formData}
//       title={FormTitles[page]}
//     />,
//     <ModalPage2
//       prev={handlePrevStep}
//       onClose={props.onClose}
//       next={handleNextStep}
//       data={formData}
//       title={FormTitles[page]}
//     />,
//   ];

//   return <>{steps[page]}</>;
// }

export default function ModalAddsPet(props) {
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    breed: '',
    photo: '',
    comments: '',
  });
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  switch (step) {
    case 1:
      return (
        <ModalPage1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <ModalPage2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      return;
  }
}
