/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React, { StrictMode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Preloader } from '@/components/common';
import AppRouter from '@/routers/AppRouter';

const App = ({ store, persistor }) => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'ru', // Assuming the default language is Russian
        includedLanguages: 'kk,ru,en', // Kazakh, Russian, English
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    );
  };

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
};

App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired
};

export default App;
