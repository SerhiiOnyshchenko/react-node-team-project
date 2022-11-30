import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { petsOperations } from 'redux/pets';

import ModalPage1 from './ModalPage1';
import ModalPage2 from './ModalPage2';

export default function EditPetModal({ onClose, data }) {
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

  const makeRequest = form => {
    dispatch(petsOperations.addUserPet({ form, token }));
  };

  const handleNextStep = (newData, final = false) => {
    setFormData(prev => (prev = newData));
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
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      title={FormTitles[page]}
      pet={data}
    />,
    <ModalPage2
      prev={handlePrevStep}
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      title={FormTitles[page]}
      pet={data}
    />,
  ];

  return <>{steps[page]}</>;
}
