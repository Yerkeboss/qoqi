import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {
  useDocumentTitle,
  useScrollTop, useUserId
} from '@/hooks';
import Firebase from '../../services/firebase';
import CardComponent from './CardComponent';

const Vacancies = () => {
  useDocumentTitle('Vacancies | Qoqiqaz');
  useScrollTop();
  const history = useHistory();
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const userId = useUserId();


  useEffect(() => {
    const fetchVacancies = async () => {
      const vacanciesCollection = await firebase.firestore().collection('orders').get();
      const vacanciesData = vacanciesCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobs(vacanciesData);
    };

    fetchVacancies();
  }, [userId]);


  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  console.log('isSaved', isSaved);


  const onSaveClick = async (jobId) => {
    if (!userId) return;

    try {
      const jobIndex = jobs.findIndex((job) => job.id === jobId);
      if (jobIndex === -1) return;

      const updatedJobs = [...jobs];
      const job = updatedJobs[jobIndex];

      if (job.saved && job.saved.includes(userId)) {
        job.saved = job.saved.filter((savedUserId) => savedUserId !== userId);
      } else {
        job.saved = [...(job.saved || []), userId];
      }

      setJobs(updatedJobs);

      await Firebase.editOrder(jobId, { saved: job.saved });
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  const getUserAvatar = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.avatar : ''; // Return the avatar if user is found, otherwise return an empty string
  };

  const getUserId = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.id : '';
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

  const onClickJob = (jobId) => {
    history.push(`/job/${jobId}`);
  };

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
  };

  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>Вакансии</h2>

          <div
            style={{
              display: 'flex',
              marginBottom: '2vw',
              paddingLeft: '1.5vw',
              paddingRight: '1.5vw',
              width: '100%',
              alignItems: 'center',
              gap: '0.95vw'
            }}
          >
            <Button
              onClick={onClickArt}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '1vw',
                height: '4rem',
                padding: '1.5vw'
              }}
            >
              <p style={{
                color: 'black',
                margin: '0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: '1.2vw'
              }}
              >
                Купить работу
              </p>
            </Button>
            <Button
              onClick={onClickCreators}
              style={{
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '1vw',
                padding: '1.5vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{
                color: 'black',
                margin: '0', // Remove default margin for <p> tag
                whiteSpace: 'nowrap', // Ensure the text does not wrap to the next line
                overflow: 'hidden', // Hide any overflow text
                textOverflow: 'ellipsis',
                fontSize: '1.2vw'
              }}
              >
                Найти креатора
              </p>
            </Button>
            <Button
              onClick={onClickVacancies}
              style={{
                backgroundColor: '#F28290',
                border: 'none',
                color: 'black',

                borderRadius: '1vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5vw'
              }}
            >
              <p style={{
                color: 'white',
                margin: '0', // Remove default margin for <p> tag
                whiteSpace: 'nowrap', // Ensure the text does not wrap to the next line
                overflow: 'hidden', // Hide any overflow text
                textOverflow: 'ellipsis',
                fontSize: '1.2vw'
              }}
              >
                {' '}
                Вакансии
              </p>

            </Button>
            <Button
              onClick={onClickOrder}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                padding: '1.5vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{
                color: 'black',
                margin: '0', // Remove default margin for <p> tag
                whiteSpace: 'nowrap', // Ensure the text does not wrap to the next line
                overflow: 'hidden', // Hide any overflow text
                textOverflow: 'ellipsis',
                fontSize: '1.2vw'
              }}
              >
                Разместить заказ
              </p>

            </Button>
            <Button
              onClick={onClickTender}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                padding: '1.5vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{
                color: 'black',
                margin: '0', // Remove default margin for <p> tag
                whiteSpace: 'nowrap', // Ensure the text does not wrap to the next line
                overflow: 'hidden', // Hide any overflow text
                textOverflow: 'ellipsis',
                fontSize: '1.2vw'
              }}
              >
                Конкурсы/тендеры
              </p>
            </Button>
            <Button
              onClick={onClickCroud}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                padding: '1.5vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{
                color: 'black',
                margin: '0', // Remove default margin for <p> tag
                whiteSpace: 'nowrap', // Ensure the text does not wrap to the next line
                overflow: 'hidden', // Hide any overflow text
                textOverflow: 'ellipsis',
                fontSize: '1.2vw'
              }}
              >
                Краудсорсинг
              </p>
            </Button>
            <Button
              onClick={onClickCharity}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                padding: '1.5vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{
                color: 'black',
                margin: '0', // Remove default margin for <p> tag
                whiteSpace: 'nowrap', // Ensure the text does not wrap to the next line
                overflow: 'hidden', // Hide any overflow text
                textOverflow: 'ellipsis',
                fontSize: '1.2vw'
              }}
              >
                Благотворительность
              </p>
            </Button>
          </div>
          <div style={{ width: '99%' }}>

            <Card
              style={{
                border: '1px solid black',
                backgroundColor: 'white',
                height: '100%',
                borderRadius: '2vw',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginLeft: '2rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '47vw' }}>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    marginLeft: '4rem'
                  }}
                >
                  Название
                </p>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    marginRight: '2rem'
                  }}
                >
                  Заказчики
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column'
                }}
              >
                {jobs.map((job) => (
                  <CardComponent
                    key={job.id}
                    job={job}
                    onSaveClick={onSaveClick}
                    getUserAvatar={getUserAvatar}
                    onClickJob={onClickJob}
                    onClickUser={onClickUser}
                    userId={userId}
                    getUserId={getUserId}
                  />
                ))}
              </div>
            </Card>

          </div>
        </div>
      </div>
    </main>

  );
};


export default Vacancies;
