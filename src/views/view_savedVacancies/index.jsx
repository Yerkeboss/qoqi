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
      const filteredVacancies = vacanciesData.filter((vac) => vac.saved && vac.saved.includes(userId));
      setJobs(filteredVacancies);
    };

    fetchVacancies();
  }, [userId, jobs]);


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
  const onClickJob = (jobId) => {
    history.push(`/job/${jobId}`);
  };

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
  };
  const BackToSavedList = () => {
    history.push('/saved');
  };

  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
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
                position: 'relative',
                marginBottom: '2vw',
                marginLeft: '1.5vw'
              }}
              onClick={BackToSavedList}
            >
              <p style={{ color: '#F28290' }}>Назад</p>
            </Button>
            <h2 style={{ marginLeft: '1.5vw', height: '20%' }}> Сохраненные вакансии</h2>

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
