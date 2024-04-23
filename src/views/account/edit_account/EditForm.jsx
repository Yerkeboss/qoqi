import { ArrowLeftOutlined, CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { Field, useFormikContext } from 'formik';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ACCOUNT } from '@/constants/routes';
import { CustomInput, CustomMobileInput } from '@/components/formik';

const EditForm = ({ isLoading, authProvider }) => {
  const history = useHistory();
  const { values, submitForm } = useFormikContext();

  return (
    <div className="user-edit-profile-details">
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
      }}
      >
        <Field
          disabled={isLoading}
          name="fullname"
          type="text"
          label="Полное имя"
          placeholder="Введите свое полное имя"
          component={CustomInput}
          style={{
            textTransform: 'capitalize', width: '25rem', height: '7rem'
          }}
        />
        <Field
          disabled={authProvider !== 'password' || isLoading}
          name="email"
          type="email"
          label="* Email"
          placeholder="test@example.com"
          component={CustomInput}
          style={{ width: '25rem', height: '7rem' }}
        />
        <Field
          disabled={isLoading}
          name="password"
          type="password"
          label="* Пароль"
          placeholder="Ваш пароль"
          component={CustomInput}
          style={{ width: '25rem', height: '7rem' }}
        />
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
      }}
      >
        <Field
          disabled={isLoading}
          name="position"
          type="text"
          label="* Позиция"
          placeholder="Графический дизайнер "
          style={{
            textTransform: 'capitalize', width: '25rem', height: '7rem'
          }}
          component={CustomInput}
        />
        <Field
          disabled={isLoading}
          name="address"
          type="text"
          label="Aдрес"
          placeholder="Казахстан, Алматы "
          component={CustomInput}
          style={{
            textTransform: 'capitalize', width: '25rem', height: '7rem'
          }}
        />
        <Field
          disabled={isLoading}
          name="portfolio"
          type="text"
          label="Портфолио"
          placeholder="portfolio.com"
          component={CustomInput}
          style={{ width: '25rem', height: '7rem' }}
        />
      </div>

      <div className="edit-user-action">
        <button
          className="button button-muted w-100-mobile"
          disabled={isLoading}
          onClick={() => history.push(ACCOUNT)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp;
          Вернуться в профиль
        </button>
        <button
          className="button w-100-mobile"
          disabled={isLoading}
          onClick={submitForm}
          type="button"
          style={{ marginLeft: '3rem' }}
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
                    &nbsp;
          {isLoading ? 'Обновляется' : 'Обновить профиль'}
        </button>
      </div>
    </div>
  );
};

EditForm.propTypes = {
  isLoading: PropType.bool.isRequired,
  authProvider: PropType.string.isRequired
};

export default EditForm;
