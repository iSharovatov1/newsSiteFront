import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import styles from './Registration.module.scss';

import { registration } from '../../axiosRequests';
import { CustomInput } from '../../components/CustomInput';
import { AuthBtn } from '../../components/AuthBtn';
import { AuthContainer } from '../../components/AuthContainer';

export const Registration = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: ''
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required('Обязательное поле'),
      password: Yup.string().required('Обязательное поле').min(6, 'пароль должен имееть более 6 символов'),
      repeatPassword: Yup.string().required('Обязательное поле')
      .test('', 'Пароли не совпадают', value => value === formik.values.password),
    }),

    onSubmit: values => registration(values)
  });

  return (
    <AuthContainer onSubmit={formik.handleSubmit}>
      <div className={styles.title}>Регистрация</div>
      <div className={styles.inputContainer}>
        <CustomInput
          id='email'
          labelTExt='Введите email'
          formik={formik} 
          type='text'
          isObligatory
        />
        <CustomInput
          id='password'
          labelTExt='Введите пароль'
          formik={formik}
          type='password'
          isObligatory
        />
        <CustomInput
          id='repeatPassword'
          labelTExt='Повторите пароль'
          formik={formik}
          type='password'
          isObligatory
        />
        <AuthBtn type='submit'>Войти</AuthBtn>
      </div>
      <div className={styles.src} onClick={() => window.location.pathname = '/login'}>У меня уже есть аккаунт</div>
    </AuthContainer>
  )
}
