import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { petsOperations } from 'redux/pets';

import ModalPage1 from './ModalPage1';
import ModalPage2 from './ModalPage2';

export default function ModalAddsPet(props) {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);

  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    breed: '',
    image: '',
    comments: '',
  });
  const [page, setPage] = useState(0);

  const FormTitles = ['First page', 'Second page'];

  const makeRequest = formData => {
    dispatch(petsOperations.addUserPet({ formData, token }));
  };

  const handleNextStep = (newData, final = false) => {
    setFormData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev + 1);

    if (final) {
      makeRequest(newData);
      return;
    }
  };

  const handlePrevStep = newData => {
    setFormData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev - 1);
  };

  const steps = [
    <ModalPage1
      onClose={props.onClose}
      next={handleNextStep}
      data={formData}
      title={FormTitles[page]}
    />,
    <ModalPage2
      prev={handlePrevStep}
      onClose={props.onClose}
      next={handleNextStep}
      data={formData}
      title={FormTitles[page]}
    />,
  ];

  return <>{steps[page]}</>;
}
