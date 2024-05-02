/* eslint-disable indent */
import { ShoppingOutlined } from '@ant-design/icons';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import * as ROUTE from '@/constants/routes';
import UserAvatar from '@/views/account/components/UserAvatar';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';
import MobileNavigation from './MobileNavigation';
import SearchBar from './SearchBar';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';

const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading
  }));

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the basket toggle to these pathnames
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD
  ];

  if (store.user && store.user.role === 'ADMIN') {
    return null;
  }
  if (window.screen.width <= 800) {
    return (
      <MobileNavigation
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...store}
        disabledPaths={basketDisabledpathnames}
        pathname={pathname}
      />
    );
  }
  return (
    <nav className="navigation" ref={navbar}>
      <div className="logo">
        <Link onClick={onClickLink} to="/">
          <img alt="Logo" src={logo1} />
        </Link>
        <Link onClick={onClickLink} to="/">
          <img alt="Logo" src={logo2} />
        </Link>
      </div>
      <ul className="navigation-menu-main">
        <li>
          <Button style={{ border: 'none', backgroundColor: '#f9f9f9' }}>
            <FontAwesomeIcon
              icon={faBars}
              style={{
                color: '#000000',
                width: '2rem',
                height: '2rem',
                marginTop: '0.5rem'
              }}
            />
          </Button>
        </li>
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            exact
            to={ROUTE.HOME}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navigation-menu-active" to={ROUTE.EVENTS}>
            Мероприятия
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navigation-menu-active" to={ROUTE.SHOP}>
            Маркетплейс
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.EDUCATION}
          >
            Обучение
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navigation-menu-active" to={ROUTE.ABOUT}>
            О нас
          </NavLink>
        </li>
      </ul>

      <ul className="navigation-menu">
        <SearchBar />
        <li className="navigation-menu-item">
          <NavLink
            style={{ border: 'none', backgroundColor: '#f9f9f9' }}
            to={ROUTE.ADD_PRODUCT_CLIENT}
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                color: '#000000',
                width: '2rem',
                height: '2rem',
                marginTop: '0.5rem'
              }}

            />
          </NavLink>
        </li>
        <li className="navigation-menu-item">
          <Button
            style={{
              border: 'none',
              backgroundColor: '#f9f9f9',
              marginLeft: '1rem'
            }}
          >
            <FontAwesomeIcon
              icon={faBell}
              style={{
                color: 'black',
                // backgroundColor:"white",
                width: '2rem',
                height: '2rem',
                marginTop: '0.5rem'
              }}

            />
          </Button>
        </li>
        <li className="navigation-menu-item">
          <BasketToggle>
            {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link basket-toggle"
                disabled={basketDisabledpathnames.includes(pathname)}
                onClick={onClickToggle}
                type="button"
              >
                <Badge count={store.basketLength}>
                  <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
                </Badge>
              </button>
            )}
          </BasketToggle>
        </li>

        {store.user ? (
          <li className="navigation-menu-item">
            <UserAvatar />
          </li>
        ) : (
          <li className="navigation-action">
            {pathname !== ROUTE.SIGNUP && (
              <Link
                className="button button-small"
                onClick={onClickLink}
                to={ROUTE.SIGNUP}
              >
                Зарегистрироваться
              </Link>
            )}
            {pathname !== ROUTE.SIGNIN && (
              <Link
                className="button button-small button-muted margin-left-s"
                onClick={onClickLink}
                to={ROUTE.SIGNIN}
              >
                Вход
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
