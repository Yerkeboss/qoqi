import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { LoadingOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTengeSign } from '@fortawesome/free-solid-svg-icons';
import { useDocumentTitle, useScrollTop, useOrder } from '@/hooks';

const ViewOrder = () => {
  const history = useHistory();
  const { id } = useParams();
  const { job, isLoading, error } = useOrder(id);
  const [users, setUsers] = useState([]);

  useScrollTop();
  useDocumentTitle(`Обзор ${job?.selectedSpecialist || 'Item'}`);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const getUserAvatar = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.avatar : ''; // Return the avatar if user is found, otherwise return an empty string
  };

  const getUserId = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.id : '';
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.fullname : '';
  };

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
  };

  const backToOrder = () => {
    history.push('/vacancies');
  };


  return (

    <div
      className="content"
      style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}
    >
      {isLoading && (
        <div className="loader">
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {job && !isLoading && (
        <div
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '3vw'
          }}
          key={job?.id}
        >
          {' '}
          <Button
            style={{
              backgroundColor: 'white',
              border: '2px solid #F28290 ',
              borderRadius: '1vw',
              width: 'fit-content',
              height: '4vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '1vw',
              paddingRight: '1vw',
              marginRight: '1vw'

            }}
            onClick={backToOrder}
          >
            <p style={{ color: '#F28290' }}>Назад</p>
          </Button>
          <div
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }}
          >
            <Card
              style={{
                marginRight: '1rem',
                border: '1px solid black',
                borderRadius: '2vw',
                height: '100%'
              }}
            >
              {' '}
              {/* First card */}
              <Card.Body>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '1vw',
                    width: '50vw',
                    marginBottom: '1vw'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                  >
                    <Card.Title
                      style={{
                        color: 'black',
                        fontFamily: 'Inter',
                        fontWeight: '500',
                        marginLeft: '2.6vw',
                        width: '30vw'
                      }}
                    >
                      <Card.Text style={{ fontSize: '1.8vw', fontWeight: 'bold' }}>{job?.selectedSpecialist}</Card.Text>
                      <Card.Text style={{ fontSize: '1.8vw', marginTop: '0vw' }}>
                        {`${job?.from}`}
                        {' '}
                        <FontAwesomeIcon icon={faTengeSign} />
                        { `  -  ${job?.to}`}
                        {' '}
                        <FontAwesomeIcon icon={faTengeSign} />
                      </Card.Text>
                      <div style={{ display: 'flex' }}>
                        <Card.Text style={{ fontSize: '1vw', width: '100%', marginTop: '-0.5vw' }}>
                          Время выполнения проекта:
                        </Card.Text>
                        <Card.Text style={{ fontSize: '1vw', width: '100%', marginTop: '-0.5vw' }}>
                          {`${job?.duration}`}
                        </Card.Text>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <Card.Text style={{ fontSize: '1vw', width: '100%', marginTop: '-0.5vw' }}>
                          Название задачи:
                        </Card.Text>
                        <Card.Text style={{ fontSize: '1vw', width: '100%', marginTop: '-0.5vw' }}>
                          {`${job?.name}`}
                        </Card.Text>
                      </div>
                    </Card.Title>
                    <div style={{ display: 'flex', marginBottom: '2vw' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          border: 'none',
                          borderRadius: '1vw',
                          marginLeft: '2.6vw',
                          width: 'fit-content',
                          height: '4rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: '1vw',
                          paddingRight: '1vw'
                        }}
                      >
                        <p style={{ color: 'white' }}>Откликнуться</p>
                      </Button>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '2.6vw'
                    }}
                    onClick={() => onClickUser(getUserId(job.userId))}
                  >
                    <Image
                      src={getUserAvatar(job.userId)}
                      style={{
                        width: '15vw',
                        height: '15vw'
                      }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{
                marginRight: '1rem',
                border: '1px solid black',
                borderRadius: '2vw',
                height: '100%',
                marginTop: '1vw'

              }}
            >
              <Card.Body style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1vw',
                width: '50vw',
                marginBottom: '1vw'
              }}
              >
                <Card.Title style={{
                  color: 'black',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginLeft: '2.6vw',
                  width: '100%',
                  marginTop: '1vw',
                  marginRight: '2vw'
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.4vw', width: '100%', marginTop: '-0.5vw' }}>
                      Местоположение офиса:
                    </Card.Text>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                    >
                      <Card.Text style={{
                        fontSize: '1.4vw', width: '15vw', marginTop: '-0.5vw'
                      }}
                      >
                        {`${job?.address}`}
                      </Card.Text>
                    </div>

                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.4vw', width: '100%', marginTop: '-0.5vw' }}>
                      Основные критерии для вакансии:
                    </Card.Text>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                    >
                      <Card.Text style={{
                        fontSize: '1.4vw', width: '15vw', marginTop: '-0.5vw'
                      }}
                      >
                        {`${job?.enteredTexts}`}
                      </Card.Text>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.4vw', width: '100%', marginTop: '-0.5vw' }}>
                      Тип бюджета:
                    </Card.Text>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                    >
                      <Card.Text style={{
                        fontSize: '1.4vw', width: '15vw', marginTop: '-0.5vw'
                      }}
                      >
                        {`${job?.budgetType}`}
                      </Card.Text>
                    </div>
                  </div>

                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </div>

  );
};
export default ViewOrder;
