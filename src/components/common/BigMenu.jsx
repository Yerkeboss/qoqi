import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';

const BigMenu = ({ handleClick }) => (
  <Box
    className="big-menu-container"
  >
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
      <div style={{ marginTop: '2vw' }}>
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
      <div style={{ marginTop: '2vw' }}>
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
    </div>
  </Box>
);

export default BigMenu;
