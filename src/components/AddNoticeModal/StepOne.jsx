/* eslint-disable no-unused-vars */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './index.module.css';
import * as yup from 'yup';
import MaskInput from 'components/MaskInput';
import DropList from 'components/DropList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { parse } from 'date-fns';

const today = new Date();

const validationSchema = yup.object({
  titleOfAd: yup
    .string()
    .min(2)
    .max(48)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  category: yup.string().required('Category is required!'),
  namePet: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  breed: yup
    .string()
    .min(2)
    .max(36)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  dateOfBirth: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date')
    .required()
    .min('1950-11-13', 'Date is too early')
    .max(today),
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
                value="in good hands"
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
          </div>
          <ErrorMessage
            name="category"
            render={msg => <div className={s.errorMsg}>{msg}</div>}
          />
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
