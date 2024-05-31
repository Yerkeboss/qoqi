/* eslint-disable indent */
import { ShoppingOutlined, DownOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
 Link, NavLink, useLocation, useHistory
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import BigMenu from './BigMenu';
import * as ROUTE from '@/constants/routes';
import UserAvatar from '@/views/account/components/UserAvatar';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';
import SearchBar from './SearchBar';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';


const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading
  }));

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 300) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const userNav = useRef(null);
  const toggleDropdown = (e) => {
    const closest = e.target.closest('div.user-nav');

    try {
      if (!closest && userNav.current.classList.contains('user-sub-open')) {
        userNav.current.classList.remove('user-sub-open');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onClickNav = () => {
    userNav.current.classList.toggle('user-sub-open');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', handleWindowResize);
    document.addEventListener('click', toggleDropdown);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', handleWindowResize);
      document.removeEventListener('click', toggleDropdown);
    };
  }, [windowWidth]);

  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  const onOpenMenu = () => {
    setShowMenu(!showMenu);
  };
// State to track if handleClick has been called

  const handleClick = (route) => {
    history.push(route);
    setShowMenu(false);
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
      <li className="navigation-big-menu">
        <Button
          onClick={onOpenMenu}
          className="navigation-big-menu-button"
        >
          <FontAwesomeIcon
            icon={faBars}
            className="navigation-bars"
          />
        </Button>
      </li>
      <ul className="navigation-menu-main">
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
      <div id="google_translate_element" />
      <ul className="navigation-menu">
        <SearchBar />
        <li className="navigation-menu-item">
          <NavLink
            style={{ border: 'none', backgroundColor: 'transparent' }}
            to={ROUTE.ADD_PRODUCT_CLIENT}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="bell"
            />
          </NavLink>
        </li>
        <li className="navigation-menu-item">
          <Button
            style={{ border: 'none', backgroundColor: 'transparent', marginLeft: '1rem' }}
          >
            <FontAwesomeIcon
              icon={faBell}
              className="bell"
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
                  <ShoppingOutlined className="basket-icon" />
                </Badge>
              </button>
            )}
          </BasketToggle>
        </li>

        {store.user ? (
          <li className="navigation-menu-item-avatar">
            <UserAvatar />
          </li>
        ) : (
          <>
            {windowWidth <= 800 ? (
              <li className="navigation-menu-item-avatar">
                <div
                  className="user-nav"
                  onClick={onClickNav}
                  onKeyDown={() => { }}
                  ref={userNav}
                  role="button"
                  tabIndex={0}
                >
                  <Link
                    className="button register-button"
                    onClick={onClickLink}
                    to={ROUTE.SIGNIN}
                    style={{ borderRadius: '1vw' }}
                  >
                    Вход
                  </Link>
                  <DownOutlined style={{ fontSize: '1.2rem', marginLeft: '1rem' }} />

                  <div className="user-nav-sub">

                    <Link
                      to={ROUTE.SIGNUP}
                      className="user-nav-sub-link"
                    >
                      Зарегистрироваться

                    </Link>

                    <Link
                      to={ROUTE.SIGNIN}
                      className="user-nav-sub-link"
                    >
                      Вход

                    </Link>
                  </div>
                </div>
              </li>
) : (
  <li className="navigation-action">
    {pathname !== ROUTE.SIGNUP && (
    <Link
      className="button register-button"
      onClick={onClickLink}
      to={ROUTE.SIGNUP}
      style={{ borderRadius: '1vw' }}
    >
      Зарегистрироваться
    </Link>
            )}
    {pathname !== ROUTE.SIGNIN && (
    <Link
      className="button register-button register-button-muted margin-left-s"
      onClick={onClickLink}
      to={ROUTE.SIGNIN}
      style={{ borderRadius: '1vw' }}
    >
      Вход
    </Link>
            )}
  </li>
        )}
          </>
        )}
      </ul>
      {showMenu && (
      <BigMenu handleClick={handleClick} />
        )}
    </nav>
  );
};

export default Navigation;
