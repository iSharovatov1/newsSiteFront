import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './Registration.module.scss';

import { registration } from '../../axiosRequests';
import CustomInput from '../../components/CustomInput';
import AuthBtn from '../../components/AuthBtn';
import AuthContainer from '../../components/AuthContainer';
import { registrationField } from '../../helper';

function Registration() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Не валидный email').required('Обязательное поле'),
      password: Yup.string().required('Обязательное поле').min(6, 'пароль должен имееть более 6 символов'),
      repeatPassword: Yup.string().required('Обязательное поле')
        .test('', 'Пароли не совпадают', (value) => value === formik.values.password),
    }),

    onSubmit: (values) => registration(values),
  });

  return (
    <AuthContainer onSubmit={formik.handleSubmit}>
      <div className={styles.title}>Регистрация</div>
      <div className={styles.inputContainer}>
        {registrationField.map((item) => (
          <CustomInput
            id={item.id}
            labelText={item.labelText}
            formik={formik}
            type={item.type}
            isObligatory
          />
        ))}
        <AuthBtn>Войти</AuthBtn>
      </div>
      <Link className={styles.src} to="/login">
        У меня уже есть аккаунт
      </Link>
    </AuthContainer>
  );
}

export default Registration;
