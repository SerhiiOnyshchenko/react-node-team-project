import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './index.module.css';
import { parse } from 'date-fns';
import MaskInput from 'components/MaskInput';
import { useState } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import DropList from 'components/DropList';

const today = new Date();

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z ]*$/g, 'Only alphabetic characters are allowed')
    .required(),
  birthday: yup
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
  breed: yup
    .string()
    .min(2)
    .max(30)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphanumeric characters are allowed')
    .required(),
});

export default function ModalPage1({ data, setFormData, next, onClose }) {
  const dispatch = useDispatch();
  const [showDropList, setShowDropList] = useState(false);
  const [breedValue, setBreedValue] = useState(data.breed);
  const listBreeds = useSelector(authSelectors.getBreeds);

  const handleSubmit = values => {
    next({ ...values, breed: breedValue }, false);
  };

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
    <div className={s.containerPet}>
      <div className={s.title}>Add pet</div>
      <div className={s.formWrapper}>
        <Formik
          initialValues={data}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form autoComplete="on" className={s.formPageOne}>
            <label htmlFor="name" className={s.label}>
              Name pet
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Type name pet"
              className={s.input}
            />
            <ErrorMessage
              name="name"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
            <label htmlFor="birthday" className={s.label}>
              Date of birth
            </label>
            <Field
              name="birthday"
              placeholder="Type date of birth"
              className={s.input}
              data-pattern="**.**.****"
              onInput={MaskInput.maskInput}
              onFocus={MaskInput.onMaskedInputFocus}
              onBlur={MaskInput.onMaskedInputBlur}
            />
            <ErrorMessage
              name="birthday"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <label htmlFor="breed" className={s.label}>
              Breed
            </label>
            <div style={{ position: 'relative' }}>
              <Field
                name="breed"
                placeholder="Type breed"
                autoComplete="off"
                value={breedValue}
                className={s.inputLast}
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
            </div>
            <ErrorMessage
              name="breed"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <div className={s.buttonsWrapper}>
              <button
                type="submit"
                className={s.buttonSubmit}
                name="next"
                aria-label="next"
              >
                Next
              </button>
              <button
                type="button"
                className={s.buttonSimple}
                onClick={() => onClose()}
                name="cancel"
                aria-label="cancel"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
