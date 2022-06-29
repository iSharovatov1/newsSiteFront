import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './Login.module.scss';

import { login } from '../../axiosRequests';
import CustomInput from '../../components/CustomInput';
import AuthBtn from '../../components/AuthBtn';
import AuthContainer from '../../components/AuthContainer';

function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: Yup.object({
      username: Yup.string().email().required('Обязательное поле'),
      password: Yup.string().required('Обязательное поле').min(6, 'пароль должен имееть более 6 символов'),
    }),

    onSubmit: (values) => login(values),
  });

  return (
    <AuthContainer onSubmit={formik.handleSubmit}>
      <div className={styles.title}>Вход</div>
      <div className={styles.inputContainer}>
        <CustomInput
          id="username"
          labelTExt="Введите email"
          formik={formik}
          type="text"
          isObligatory
        />
        <CustomInput
          id="password"
          labelTExt="Введите пароль"
          formik={formik}
          type="password"
          isObligatory
        />
        <AuthBtn>Войти</AuthBtn>
      </div>
      <button
        type="button"
        className={styles.src}
        onClick={function () { window.location.pathname = '/registration'; }}
      >
        Зарегистрировать аккаунт
      </button>
    </AuthContainer>
  );
}

export default Login;
