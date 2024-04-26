import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { LoadingOutlined } from '@ant-design/icons';
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

  return (

    <div className="content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <div className="loader">
          <h4>Загружается</h4>
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {job && !isLoading && (
      <Card
        style={{
          marginRight: '1rem',
          border: '1px solid black',
          borderRadius: '2vw',
          height: '31vw',
          marginTop: '3vw'
        }}
        key={job?.id}
      >
        {' '}
        {/* First card */}
        <Card.Body>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1vw',
              width: '60vw'
            }}
          >
            <Card.Title
              style={{
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: '500',
                marginLeft: '2.6vw',
                width: '35vw'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Text style={{ fontSize: '1.2vw' }}>Имя специалиста:</Card.Text>
                <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }} onClick={() => onClickJob(job.id)}>{getUserName(job.userId)}</Card.Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Text style={{ fontSize: '1.2vw' }}>Специальность:</Card.Text>
                <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }} onClick={() => onClickJob(job.id)}>{job?.selectedSpecialist}</Card.Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Text style={{ fontSize: '1.2vw' }}>Название задачи:</Card.Text>
                <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }} onClick={() => onClickJob(job.id)}>{job?.name}</Card.Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Text style={{ fontSize: '1.2vw' }}>Местонахождение:</Card.Text>
                <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
                  {`${job?.address}`}
                </Card.Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Text style={{ fontSize: '1.2vw' }}>Основные критерий для вакансий:</Card.Text>
                <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
                  {`${job?.enteredTexts}`}
                </Card.Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Text style={{ fontSize: '1.2vw' }}>Время выполнения проекта:</Card.Text>
                <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
                  {`${job?.duration}`}
                </Card.Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Text style={{ fontSize: '1.2vw' }}>{`Бюджет (${job?.budgetType})`}</Card.Text>
                <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
                  {`${job?.from} - ${job?.to}`}
                </Card.Text>
              </div>

            </Card.Title>
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '5vw', marginBottom: '5vw', marginRight: '2.6vw', flexDirection: 'column', height: '18vw'
              }}
              onClick={() => onClickUser(getUserId(job.userId))}
            >
              <Image
                src={getUserAvatar(job.userId)}
                style={{
                  width: '12vw',
                  height: '12vw'
                }}
              />
              {/* <div style={{ display: 'flex', marginBottom: '2vw', marginTop: '4vw' }}> */}
              <Button
                style={{
                  backgroundColor: '#F28290',
                  border: 'none',
                  borderRadius: '1vw',
                  width: 'fit-content',
                  height: '4vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: '1vw',
                  paddingRight: '1vw',
                  marginLeft: '0.5vw'
                }}
              >
                <p style={{ color: 'white' }}>Откликнуться</p>
              </Button>
              {/* </div> */}
            </div>
          </div>

        </Card.Body>
      </Card>
      )}
    </div>

  );
};
export default ViewOrder;
