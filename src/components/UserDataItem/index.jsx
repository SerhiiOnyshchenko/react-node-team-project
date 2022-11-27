import { useState, useRef } from 'react';
import { ReactComponent as Logo } from '../../images/svg/edit.svg';
import { ReactComponent as LogoOk } from '../../images/svg/edit-ok.svg';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import MaskInput from 'components/MaskInput';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import DropList from 'components/DropList';
import { parse } from 'date-fns';

const today = new Date();

export default function UserDataItem({
  field,
  value,
  disBtnEdit,
  setDisBtnEdit,
}) {
  const form = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [showDropList, setShowDropList] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);
  const disabledBtn = useSelector(authSelectors.getDisabledBtn);
  const listCities = useSelector(authSelectors.getCities);

  const emailSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
  });
  const citySchema = yup.object({
    city: yup
      .string()
      .matches(
        /^[a-zA-Z\-’ ]+, [a-zA-Z\-’ ]+$/,
        'Address should be in format: City, Region'
      ),
  });
  const phoneSchema = yup.object({
    phone: yup
      .string()
      .matches(
        /^\+38\(0..\)...-..-../,
        'Phone should be in format +38(067)123-45-67'
      ),
  });
  const birthdaySchema = yup.object({
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
      .min('1920-11-13', 'Date is too early')
      .max(today),
  });

  const handleSubmit = async e => {
    e.preventDefault();
    let error = true;
    if (field === 'Phone') {
      error = await phoneSchema.isValid({
        phone: inputValue,
      });
      if (!error) {
        toast.error('Phone should be in format +38(067)123-45-67');
        return;
      }
    }
    if (field === 'Email') {
      error = await emailSchema.isValid({
        email: inputValue,
      });
      if (!error) {
        toast.error('Invalid email');
        return;
      }
    }
    if (field === 'City') {
      error = await citySchema.isValid({
        city: inputValue,
      });
      if (!error) {
        toast.error('Address should be in format: City, Region');
        return;
      }
    }
    if (field === 'Birthday') {
      error = await birthdaySchema.isValid({
        birthday: inputValue,
      });
      if (!error) {
        toast.error('Please enter a valid date');
        return;
      }
    }

    if (isEdit && inputValue !== value) {
      dispatch(
        authOperations.patchUserInfo({
          type: field.toLowerCase(),
          value: inputValue,
          token,
        })
      );
    }

    setIsEdit(false);
    setDisBtnEdit(false);
  };

  const handleEdit = () => {
    setDisBtnEdit(true);
    setIsEdit(true);
  };

  const changeInputCity = e => {
    if (/\d/g.test(e.target.value)) return;
    if (e.target.value !== ' ') {
      setInputValue(e.target.value);
      if (e.target.value.length >= 3) {
        dispatch(authOperations.searchCity(e.target.value));
        setShowDropList(true);
      } else {
        setShowDropList(false);
      }
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <p className={s.field}>{field}:</p>

        {!isEdit ? (
          <p className={s.value}>{inputValue}</p>
        ) : field === 'Phone' ? (
          <input
            className={s.Input}
            type={field.toLowerCase()}
            name={field.toLowerCase()}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            data-pattern="+**(***)***-**-**"
            data-prefix="+38(0"
            onInput={MaskInput.maskInput}
            onFocus={MaskInput.onMaskedInputFocus}
            onBlur={MaskInput.onMaskedInputBlur}
          />
        ) : field === 'Birthday' ? (
          <input
            className={s.Input}
            type={field.toLowerCase()}
            name={field.toLowerCase()}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            data-pattern="**.**.****"
            onInput={MaskInput.maskInput}
            onFocus={MaskInput.onMaskedInputFocus}
            onBlur={MaskInput.onMaskedInputBlur}
          />
        ) : field === 'City' ? (
          <label className={s.inputBox} htmlFor="city">
            <input
              className={s.Input}
              type={field.toLowerCase()}
              name={field.toLowerCase()}
              value={inputValue}
              onChange={changeInputCity}
            />
            {showDropList && (
              <DropList
                list={listCities}
                onSelect={str => {
                  setInputValue(str);
                  setShowDropList(false);
                }}
              />
            )}
          </label>
        ) : (
          <input
            className={s.Input}
            type={field.toLowerCase()}
            name={field.toLowerCase()}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        )}
        {isEdit ? (
          <button className={s.button} type="button" onClick={handleSubmit}>
            <LogoOk className={s.logo} />
          </button>
        ) : disabledBtn || disBtnEdit ? (
          <button className={s.button} type="button" disabled>
            <Logo className={s.logo} style={{ fill: 'gray' }} />
          </button>
        ) : (
          <button className={s.button} type="button" onClick={handleEdit}>
            <Logo className={s.logo} />
          </button>
        )}
      </div>
    </form>
  );
}
