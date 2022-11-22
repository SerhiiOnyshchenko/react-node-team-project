import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
      'Name should contain only letters '
    ),
  breed: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
      'Breed  should contain only letters '
    ),
  birthday: yup.string().required(),
});

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
  console.log(submitFormData, error);

  return (
    <div>
      <Formik validationSchema={validationSchema}>
        <Form>
          <label htmlFor="name">Name pet</label>
          <Field id="name" name="name" placeholder="Type name pet" />
          {/* <ErrorMessage name="name">{ErrorMessageWrapper}</ErrorMessage> */}
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
