import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUserId, useDidMount, useModal } from '@/hooks';
import Firebase from '@/services/firebase';
import { Boundary, Modal } from '@/components/common';

const Creators = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();

  const { user } = useSelector((state) => ({
    user: state.auth
  }));

  useEffect(() => {
    // Fetch users data from Firestore
    const fetchUsers = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredUsers = usersData.filter((user) => user.role !== 'ADMIN' && user.person);
      setUsers(filteredUsers);
    };

    fetchUsers();
  }, []);

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
  };

  const onClickArt = () => {
    history.push('/shop');
  };

  const onClickCreators = () => {
    history.push('/creators');
  };

  const onClickVacancies = () => {
    history.push('/vacancies');
  };

  const onClickOrder = () => {
    history.push('/order');
  };

  const onClickTender = () => {
    history.push('/tenderList');
  };

  const onClickCroud = () => {
    history.push('/croudList');
  };

  const onClickCharity = () => {
    history.push('/charityList');
  };

  const handleSendMessage = (userId) => {
    if (!user) {
      onOpenModal();
    } else {
      history.push(`/chat/${userId}`);
    }
  };

  const onSignInClick = () => {
    onCloseModal();
    history.push('/signin');
  };


  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      { user === null && (
      <Modal
        isOpen={isOpenModal}
        onRequestClose={onCloseModal}
      >
        <p className="text-center">Вы должны войти в систему чтобы написать сообщение</p>
        <br />
        <div className="d-flex-center">
          <button
            className="button button-border button-border-gray button-small"
            onClick={onCloseModal}
            type="button"
          >
            Продолжить смотреть сайт
          </button>
          &nbsp;
          <button
            className="button button-small"
            onClick={onSignInClick}
            type="button"
          >
            Войти в систему чтобы написать сообщение
          </button>
        </div>
      </Modal>
      )}
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="shop-title">Найти креатора</h2>
          <div
            className="buttons-container"
          >
            <Button
              onClick={onClickArt}
              className="shop-button"
            >
              <p className="shop-text">
                Купить работу
              </p>
            </Button>
            <Button
              onClick={onClickCreators}
              className="shop-button-active"
            >
              <p className="shop-text-active">
                Найти креатора
              </p>
            </Button>
            <Button
              onClick={onClickVacancies}
              className="shop-button"
            >
              <p className="shop-text">

                {' '}
                Вакансии
              </p>

            </Button>
            <Button
              onClick={onClickOrder}
              className="shop-button"
            >
              <p className="shop-text">
                Разместить заказ
              </p>
            </Button>
            <Button
              onClick={onClickTender}
              className="shop-button"
            >
              <p className="shop-text">
                Конкурсы/тендеры
              </p>
            </Button>
            <Button
              onClick={onClickCroud}
              className="shop-button"
            >
              <p className="shop-text">
                Краудсорсинг
              </p>
            </Button>
            <Button
              onClick={onClickCharity}
              className="shop-button"
            >
              <p className="shop-text">
                Благотворительность
              </p>
            </Button>
          </div>
          <div style={{ width: '99%' }}>
            <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
              <div className="creators-grid">
                {users?.map((user) => (
                  <div className="creators-card" key={user?.id}>
                    <div className="creators-card-content">
                      <div className="creators-card-img-wrapper" onClick={() => onClickUser(user.id)}>
                        <Image src={user?.avatar} className="img-avatar" />
                      </div>
                      <div className="creators-details">
                        <h2 className="creators-card-name" onClick={() => onClickUser(user.id)}>{user.fullname}</h2>
                        <h5 className="creators-card-position" onClick={() => onClickUser(user.id)}>{user.position}</h5>
                        <Button
                          className="creators-button"
                          onMouseDown={() => handleSendMessage(user.id)}
                        >
                          <FontAwesomeIcon icon={faEnvelope} className="message-icon" />
                          <p className="message-text">Сообщение</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Creators;
