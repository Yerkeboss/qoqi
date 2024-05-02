import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import { useUserId } from '@/hooks';
import Firebase from '@/services/firebase';

const Creators = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

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
    history.push(`/chat/${userId}`);
  };


  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>Найти креатора</h2>

          <div
            style={{
              display: 'flex',
              marginBottom: '4rem',
              marginLeft: '1.5rem',
              width: '97.5%'
            }}
          >
            <Button
              onClick={onClickArt}
              style={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem'
              }}
            >
              <p style={{
                color: 'black'

              }}
              >
                Купить работу
              </p>
            </Button>
            <Button
              onClick={onClickCreators}
              style={{
                backgroundColor: '#F28290',
                color: 'white',
                border: 'none',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'white' }}> Найти креатора</p>
            </Button>
            <Button
              onClick={onClickVacancies}
              style={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem'
              }}
            >
              <p style={{ color: 'black' }}> Вакансии</p>

            </Button>
            <Button
              onClick={onClickOrder}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Разместить заказ</p>

            </Button>
            <Button
              onClick={onClickTender}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                width: '100%',
                height: '4rem',
                marginLeft: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Конкурсы/тендеры</p>
            </Button>
            <Button
              onClick={onClickCroud}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Краудсорсинг</p>
            </Button>
            <Button
              onClick={onClickCharity}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Благотворительность</p>
            </Button>
          </div>
          <div style={{ width: '98%' }}>
            <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
              <div className="creators-grid">
                {users?.map((user) => (
                  <div className="creators-card" key={user?.id}>
                    <div className="creators-card-content">
                      <div className="creators-card-img-wrapper" onClick={() => onClickUser(user.id)}>
                        <Image src={user?.avatar} />
                      </div>
                      <div className="creators-details">
                        <h2 className="creators-card-name" onClick={() => onClickUser(user.id)}>{user.fullname}</h2>
                        <h5 className="creators-card-position" onClick={() => onClickUser(user.id)}>{user.position}</h5>
                        <Button
                          className="creators-button"
                          onMouseDown={() => handleSendMessage(user.id)}
                        >
                          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '1rem' }} />
                          Сообщение
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
