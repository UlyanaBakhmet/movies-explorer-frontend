import { useState, useCallback } from 'react';
import { regExpEmail } from '../utils/constants';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  };

  const handleChangeEmail = (evt) => {
    handleChange(evt);

    const {name, value} = evt.target;

    if (name === 'email' && !regExpEmail.test(value)) {
      setIsValid(false);
      setErrors((errors) => {
        return {
          ...errors, email: 'Неправильный формат почты!',
        };
      });
    }
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values, setValues, handleChange, handleChangeEmail, errors, setErrors, isValid, setIsValid, resetForm 
  };
}