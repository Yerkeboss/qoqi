import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { ShoppingOutlined, DownOutlined } from '@ant-design/icons';
import SearchBar from './SearchBar';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';

const BigMenu = ({
  handleClick, basketDisabledpathnames, pathname, store, windowWidth
}) => {
  const bigMenuRef = useRef(null);

  useEffect(() => {
    if (bigMenuRef.current) {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const headerHeight = document.querySelector('.navigation').offsetHeight;
      const headerWidth = document.querySelector('.navigation').offsetWidth;
      const topOffset = headerHeight - 2; // Adjust this value as needed
      const maxHeight = viewportHeight - topOffset;
      const maxWidth = viewportWidth + 30;
      bigMenuRef.current.style.top = `${topOffset}px`;
      bigMenuRef.current.style.maxHeight = `${maxHeight}px`;
      bigMenuRef.current.style.maxWidth = `${maxWidth}px`;
    }
  }, []);

  return (
    <Box className="big-menu-container" ref={bigMenuRef}>
      <div className="big-menu-grid">
        <div>
          <p
            className="menu-item-header"
            onClick={() => handleClick('/')}
          >
            Главное
          </p>
          <p
            className="menu-item"
            onClick={() => handleClick('/')}
          >
            Лучшее за неделю
          </p>
          <p
            className="menu-item"
            onClick={() => handleClick('/')}
          >
            Галерея лучших работ
          </p>
          <p
            className="menu-item"
            onClick={() => handleClick('/')}
          >
            Анонсы
          </p>
        </div>
        <div>
          {' '}
          <p className="menu-item-header" onClick={() => handleClick('/about')}>
            О нас
          </p>
          <p className="menu-item" onClick={() => handleClick('/about')}>
            Информация
            о компании
          </p>
          <p className="menu-item" onClick={() => handleClick('/about')}>
            Контакты
          </p>
        </div>
        <div>
          {' '}
          <p className="menu-item-header" onClick={() => handleClick('/shop')}>
            Работа
          </p>
          <p className="menu-item" onClick={() => handleClick('/shop')}>
            Купить работу
          </p>
          <p className="menu-item" onClick={() => handleClick('/order')}>
            Разместить заказ
          </p>
          <p className="menu-item" onClick={() => handleClick('/creators')}>
            Найти креатора
          </p>
          <p className="menu-item" onClick={() => handleClick('/tenderList')}>
            Конкурсы / Тендеры
          </p>
          <p className="menu-item" onClick={() => handleClick('/croud')}>
            Краудсорсинг
          </p>
        </div>
        <div>
          <p className="menu-item-header" onClick={() => handleClick('/events')}>
            Мероприятия
          </p>
          <p className="menu-item" onClick={() => handleClick('/events')}>
            Виртуальные
            выставки
          </p>
          <p className="menu-item" onClick={() => handleClick('/events')}>
            Онлайн форумы
          </p>
        </div>
        <div>
          <p className="menu-item-header" onClick={() => handleClick('/account')}>
            Профиль
          </p>
          <p className="menu-item" onClick={() => handleClick('/account')}>
            Портфолио
          </p>
          <p className="menu-item" onClick={() => handleClick('/account')}>
            Корзина
          </p>
          <p className="menu-item" onClick={() => handleClick('/account')}>
            Подписка
          </p>
          <p className="menu-item" onClick={() => handleClick('/account')}>
            Сообщения
          </p>
        </div>
        <div>
          <p className="menu-item-header" onClick={() => handleClick('/educationList')}>
            Обучение
          </p>
          <p className="menu-item" onClick={() => handleClick('/educationList')}>
            Онлайн курсы
          </p>
          <p className="menu-item" onClick={() => handleClick('/educationList')}>
            Мастер-классы
          </p>
          <p className="menu-item" onClick={() => handleClick('/educationList')}>
            Информационные
            ресурсы
          </p>
        </div>
        <div style={{ marginTop: '2.5vw' }}>
          <div className="new-menu1">
            <SearchBar />
          </div>
          <Button className="menu-button">
            <p>Фотографии</p>
          </Button>
          <Button className="menu-button">
            <p>Иллюстрации</p>
          </Button>
          <Button className="menu-button">
            <p>Анимации</p>
          </Button>
          <Button className="menu-button">
            <p>Дизайн одежды</p>
          </Button>
          <Button className="menu-button">
            <p>Арт</p>
          </Button>
        </div>
        <div style={{ marginTop: '2vw' }}>
          <div className="new-menu2">
            <FontAwesomeIcon
              icon={faBell}
              className="bell"
              onClick={() => handleClick('/client/add/product')}
              style={{ marginBottom: '2vw' }}
            />
          </div>
          <Button className="menu-button">
            <p>Музыка</p>
          </Button>
          <Button className="menu-button">
            <p>Аудио подкасты</p>
          </Button>
          <Button className="menu-button">
            <p>Скульптуры</p>
          </Button>
          <Button className="menu-button">
            <p>Дизайн интерьера</p>
          </Button>
          <Button className="menu-button">
            <p>Краудсорсинг</p>
          </Button>
        </div>
        <>
          {windowWidth <= 480 ? (
            <>
              <div style={{ marginTop: '2vw' }}>
                <div className="new-menu3">
                  <BasketToggle>
                    {({ onClickToggle }) => (
                      <button
                        className="button-link navigation-menu-link basket-toggle"
                        disabled={basketDisabledpathnames.includes(pathname)}
                        onClick={onClickToggle}
                        type="button"
                        style={{ marginTop: '-1vw', marginLeft: '-1.5rem' }}
                      >
                        <Badge count={store.basketLength}>
                          <ShoppingOutlined className="basket-icon" />
                        </Badge>
                      </button>
                    )}
                  </BasketToggle>
                </div>
                <Button className="menu-button">
                  <p>Дизайн</p>
                </Button>
                <Button className="menu-button">
                  <p>3D ART</p>
                </Button>
              </div>
              <div style={{ marginTop: '2vw' }}>
                <div className="new-menu3-1">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="bell"
                    onClick={() => handleClick('/client/add/product')}
                    style={{ marginBottom: '2vw' }}
                  />
                </div>
                <Button className="menu-button">
                  <p>Инсталляции</p>
                </Button>
                <Button className="menu-button">
                  <p>Граффити</p>
                </Button>
              </div>
            </>
          ) : (
            <div style={{ marginTop: '2vw' }}>
              <div className="new-menu3">
                <BasketToggle>
                  {({ onClickToggle }) => (
                    <button
                      className="button-link navigation-menu-link basket-toggle"
                      disabled={basketDisabledpathnames.includes(pathname)}
                      onClick={onClickToggle}
                      type="button"
                      style={{ marginTop: '-1vw', marginLeft: '-1.5rem' }}
                    >
                      <Badge count={store.basketLength}>
                        <ShoppingOutlined className="basket-icon" />
                      </Badge>
                    </button>
                  )}
                </BasketToggle>
              </div>
              <div className="new-menu3-1">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="bell"
                  onClick={() => handleClick('/client/add/product')}
                  style={{ marginBottom: '2vw' }}
                />
              </div>
              <Button className="menu-button">
                <p>Дизайн</p>
              </Button>
              <Button className="menu-button">
                <p>3D ART</p>
              </Button>

              <Button className="menu-button">
                <p>Инсталляции</p>
              </Button>
              <Button className="menu-button">
                <p>Граффити</p>
              </Button>
            </div>
          )}
        </>
      </div>
    </Box>
  );
};

export default BigMenu;
