import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './index.module.css';
import * as yup from 'yup';

const validationSchema = yup.object({
  titleOfAd: yup.string().required('Field is required!'),
  namePet: yup.string().required('Field is required!'),
  breed: yup.string().required('Field is required!'),
  birthDate: yup
    .string()
    .matches(
      /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
      'Date format is DD.MM.YYYY'
    )
    .required('Field is required!'),
});

const StepOne = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <div>
      <p className={s.text}>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </p>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          nextStep();
        }}
      >
        <Form>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className={s.radioWrapper}
          >
            <label className={s.radio} htmlFor="lost/found">
              lost/found
              <Field
                type="radio"
                name="category"
                value="lost/found"
                id="lost/found"
                className={s.input}
              />
            </label>
            <label className={s.radio} htmlFor="in good hands">
              in good hands
              <Field
                type="radio"
                name="category"
                value="in good hands"
                id="in good hands"
                className={s.input}
              />
            </label>
            <label className={s.radio} htmlFor="sell">
              sell
              <Field
                type="radio"
                name="category"
                value="sell"
                id="sell"
                className={s.input}
              />
            </label>
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="titleOfAd" type="text" className={s.label}>
              Tittle of ad
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
              Name pet
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
            <label htmlFor="birthDate" type="text" className={s.label}>
              Date of birth
            </label>
            <Field
              id="birthDate"
              name="birthDate"
              placeholder="Type date of birth"
              className={s.inputText}
            />
            <ErrorMessage
              name="birthDate"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="breed" type="text" className={s.label}>
              Breed
            </label>
            <Field
              id="breed"
              name="breed"
              placeholder="Type breed"
              className={s.inputText}
            />
            <ErrorMessage
              name="breed"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.submitBtnWrapp}>
            <button type="submit" className={s.submitBtn}>
              Next
            </button>
            <button type="button" className={s.submitBtn}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
