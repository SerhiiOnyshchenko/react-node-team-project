import { useState, useRef } from 'react';
import { ReactComponent as Logo } from '../../images/svg/edit.svg';
import { ReactComponent as LogoOk } from '../../images/svg/edit-ok.svg';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import MaskInput from 'components/MaskInput';

export default function UserDataItem({
  field,
  value,
  disBtnEdit,
  setDisBtnEdit,
}) {
  const form = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);
  const disabledBtn = useSelector(authSelectors.getDisabledBtn);

  const handleSubmit = () => {
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

  return (
    <form ref={form}>
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
