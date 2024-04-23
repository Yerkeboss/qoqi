import { ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { Field, Form, Formik } from 'formik';
import PropType from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { SocialLogin } from '@/components/common';
import { CustomInput } from '@/components/formik';
import { SIGNIN } from '@/constants/routes';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import { signUp } from '@/redux/actions/authActions';
import { setAuthenticating, setAuthStatus } from '@/redux/actions/miscActions';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is not valid.')
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password length should be at least 8 characters.')
    .matches(/[A-Z\W]/g, 'Password should contain at least 1 uppercase letter.'),
  fullname: Yup.string()
    .min(4, 'Full name should be at least 4 characters.')
    .max(60, 'Full name should be only be 4 characters long.')
    .required('Full name is required'),
  position: Yup.string()
    .required('Full name is required.'),
  address: Yup.string(),
  portfolio: Yup.string()
});

const SignUp = ({ history }) => {
  const { isAuthenticating, authStatus } = useSelector((state) => ({
    isAuthenticating: state.app.isAuthenticating,
    authStatus: state.app.authStatus
  }));
  const dispatch = useDispatch();

  useScrollTop();
  useDocumentTitle('Sign Up | Qoqiqaz');

  useEffect(() => () => {
    dispatch(setAuthStatus(null));
    dispatch(setAuthenticating(false));
  }, []);

  const onClickSignIn = () => history.push(SIGNIN);

  const onFormSubmit = (form) => {
    dispatch(signUp({
      fullname: form.fullname,
      email: form.email,
      password: form.password,
      position: form.position,
      address: form.address,
      portfolio: form.portfolio
    }));
  };

  return (
    <div className="auth-content">
      {authStatus?.success && (
        <div className="loader">
          <h3 className="toast-success auth-success">
            {authStatus?.message}
            <LoadingOutlined />
          </h3>
        </div>
      )}
      {!authStatus?.success && (
        <>
          {authStatus?.message && (
            <h5 className="text-center toast-error">
              {authStatus?.message}
            </h5>
          )}
          <div className={`auth ${authStatus?.message && (!authStatus?.success && 'input-error')}`}>
            <div className="auth-main">
              <h3>Зарегистрироваться в Qoqiqaz</h3>
              <Formik
                initialValues={{
                  fullname: '',
                  email: '',
                  password: '',
                  position: '',
                  address: '',
                  portfolio: ''
                }}
                validateOnChange
                validationSchema={SignInSchema}
                onSubmit={onFormSubmit}
              >
                {() => (
                  <Form>
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="fullname"
                        type="text"
                        label="* Полное имя"
                        placeholder="Қайрат Нұртас "
                        style={{ textTransform: 'capitalize' }}
                        component={CustomInput}
                      />
                    </div>
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="email"
                        type="email"
                        label="* Email"
                        placeholder="test@example.com"
                        component={CustomInput}
                      />
                    </div>
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="password"
                        type="password"
                        label="* Пароль"
                        placeholder="Ваш пароль"
                        component={CustomInput}
                      />
                    </div>
                    <br />
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="position"
                        type="text"
                        label="* Позиция"
                        placeholder="Графический дизайнер "
                        style={{ textTransform: 'capitalize' }}
                        component={CustomInput}
                      />
                    </div>
                    <br />
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="address"
                        type="text"
                        label="* Адрес"
                        placeholder="Казахстан, Алматы "
                        style={{ textTransform: 'capitalize' }}
                        component={CustomInput}
                      />
                    </div>
                    <br />
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="portfolio"
                        type="text"
                        label="Портфолио"
                        placeholder="portfolio.com"
                        component={CustomInput}
                      />
                    </div>
                    <br />
                    <div className="auth-field auth-action auth-action-signup">
                      <button
                        className="button auth-button"
                        disabled={isAuthenticating}
                        type="submit"
                      >
                        {isAuthenticating ? 'В процессе' : 'Зарегистрироваться'}
                        &nbsp;
                        {isAuthenticating ? <LoadingOutlined /> : <ArrowRightOutlined />}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            {/* <div className="auth-divider">
              <h6>OR</h6>
            </div> */}
            {/* <SocialLogin isLoading={isAuthenticating} /> */}
          </div>
          <div className="auth-message">
            <span className="auth-info">
              <strong>У вас есть аккаунт?</strong>
            </span>
            <button
              className="button button-small button-border button-border-gray"
              disabled={isAuthenticating}
              onClick={onClickSignIn}
              type="button"
            >
              Вход
            </button>
          </div>
        </>
      )}
    </div>
  );
};

SignUp.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default SignUp;
