/* eslint-disable no-unused-vars */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './index.module.css';
import * as yup from 'yup';
import MaskInput from 'components/MaskInput';
import DropList from 'components/DropList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const validationSchema = yup.object({
  titleOfAd: yup.string().required('Field is required!'),
  category: yup.string().required('Category is required!'),
  namePet: yup.string().required('Field is required!'),
  breed: yup.string().required('Field is required!'),
  dateOfBirth: yup
    .string()
    .matches(
      /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
      'Date format is DD.MM.YYYY'
    )
    .required('Field is required!'),
});

const StepOne = ({ formData, setFormData, nextStep, onClose }) => {
  const dispatch = useDispatch();
  const [breedValue, setBreedValue] = useState(formData.breed);
  const [showDropList, setShowDropList] = useState(false);
  const listBreeds = useSelector(authSelectors.getBreeds);

  const changeInputBreed = e => {
    if (/\d/g.test(e.target.value)) return;
    if (e.target.value !== ' ') {
      setBreedValue(e.target.value);
      if (e.target.value.length >= 3) {
        dispatch(authOperations.searchBreeds(e.target.value));
        setShowDropList(true);
      } else {
        setShowDropList(false);
      }
    }
  };
  return (
    <div>
      <p className={s.text}>Write some information about your notice.</p>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={values => {
          setFormData({ ...values, breed: breedValue });
          nextStep();
        }}
      >
        <Form>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className={s.radioWrapper}
          >
            <label className={s.wrapprerInput} htmlFor="lost/found">
              <Field
                type="radio"
                name="category"
                value="lost/found"
                id="lost/found"
                className={s.inputRadio}
              />
              <div className={s.radioBtn}>lost/found</div>
            </label>
            <label className={s.wrapprerInput} htmlFor="in_good_hands">
              <Field
                type="radio"
                name="category"
                value="in_good_hands"
                id="in good hands"
                className={s.inputRadio}
              />
              <div className={s.radioBtn}>in good hands</div>
            </label>
            <label className={s.wrapprerInput} htmlFor="sell">
              <Field
                type="radio"
                name="category"
                value="sell"
                id="sell"
                className={s.inputRadio}
              />
              <div className={s.radioBtn}>sell</div>
            </label>
            <ErrorMessage
              name="category"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="titleOfAd" type="text" className={s.label}>
              Tittle of ad*:
            </label>
            <Field
              id="titleOfAd"
              name="titleOfAd"
              placeholder="Type name pet"
              className={s.inputText}
            />
            <ErrorMessage
              name="titleOfAd"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="namePet" type="text" className={s.label}>
              Name pet*:
            </label>
            <Field
              id="namePet"
              name="namePet"
              placeholder="Type name pet"
              className={s.inputText}
            />
            <ErrorMessage
              name="namePet"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="dateOfBirth" type="text" className={s.label}>
              Date of birth*:
            </label>
            <Field
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Type date of birth"
              className={s.inputText}
              data-pattern="**.**.****"
              onInput={MaskInput.maskInput}
              onFocus={MaskInput.onMaskedInputFocus}
              onBlur={MaskInput.onMaskedInputBlur}
            />
            <ErrorMessage
              name="dateOfBirth"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="breed" type="text" className={s.label}>
              Breed*:
            </label>
            <Field
              id="breed"
              name="breed"
              placeholder="Type breed"
              className={s.inputText}
              autoComplete="off"
              value={breedValue}
              onInput={changeInputBreed}
            />
            {showDropList && (
              <DropList
                list={listBreeds}
                onSelect={str => {
                  setBreedValue(str);
                  setShowDropList(false);
                }}
              />
            )}
            <ErrorMessage
              name="breed"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.submitBtnWrapp}>
            <button type="submit" className={s.submitBtn}>
              Next
            </button>
            <button type="button" className={s.submitBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
