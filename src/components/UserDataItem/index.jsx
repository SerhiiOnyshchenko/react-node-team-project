import { useState, useRef } from 'react';
import { ReactComponent as Logo } from '../../images/svg/edit.svg';
import { ReactComponent as LogoOk } from '../../images/svg/edit-ok.svg';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

export default function UserDataItem({
  field,
  value,
  disBtnEdit,
  setDisBtnEdit,
}) {
  const form = useRef();
  const [isEdite, setIsEdite] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);
  const disabledBtn = useSelector(authSelectors.getDisabledBtn);

  const handleSubmit = () => {
    if (isEdite && inputValue !== value) {
      dispatch(
        authOperations.patchUserInfo({
          type: field.toLowerCase(),
          value: inputValue,
          token,
        })
      );
    }
    setIsEdite(false);
    setDisBtnEdit(false);
  };

  const handleEdite = () => {
    setDisBtnEdit(true);
    setIsEdite(true);
  };

  return (
    <form ref={form}>
      <div className={s.wrapper}>
        <p className={s.field}>{field}:</p>

        {isEdite ? (
          <input
            className={s.Input}
            type={field.toLowerCase()}
            name={field.toLowerCase()}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        ) : (
          <p className={s.value}>{inputValue}</p>
        )}
        {isEdite ? (
          <button className={s.button} type="button" onClick={handleSubmit}>
            <LogoOk className={s.logo} />
          </button>
        ) : disabledBtn || disBtnEdit ? (
          <button className={s.button} type="button" disabled>
            <Logo className={s.logo} style={{ fill: 'gray' }} />
          </button>
        ) : (
          <button className={s.button} type="button" onClick={handleEdite}>
            <Logo className={s.logo} />
          </button>
        )}
      </div>
    </form>
  );
}
