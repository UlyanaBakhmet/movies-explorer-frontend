import { regExpEmail, regExpName } from '../utils/constants';

export const emailValidator = (email) => {

  if (email !== undefined) {
    if (email.length === 0) {
      return {
        error: 'Это поле обязательное для заполнения!',
        activeButton: false,
      };
    } else if (regExpEmail.test(email.toLowerCase())) {
      return {
        error: '',
        activeButton: true,
      };
    } else if (!regExpEmail.test(email.toLowerCase())) {
      return {
        error: 'Что-то пошло не так! Попробуйте ещё раз или проверьте правильность написания вашей почты.',
        activeButton: false,
      };
    }
  } else if (email === undefined) {
    return {
      error: '',
      activeButton: false,
    };
  }
};

export const nameValidator = (name) => {
  if (name !== undefined) {
    if (name.length === 0) {
      return {
        error: 'Это поле обязательное для заполнения!',
        activeButton: false,
      };
    } else if (regExpName.test(name.toLowerCase())) {
      return {
        error: '',
        activeButton: true,
      };
    } else if (!regExpName.test(name.toLowerCase())) {
      return {
        error:
          'Недопустимое значение! Имя может содержать только кириллицу, латиницу и/или иметь пробел и дефис.',
        activeButton: false,
      };
    }
  } else if (name === undefined) {
    return {
      error: '',
      activeButton: false,
    };
  }
};