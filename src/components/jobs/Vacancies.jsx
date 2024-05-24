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
          <h2 className="shop-title">Вакансии</h2>
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
              className="shop-button"
            >
              <p className="shop-text">
                Найти креатора
              </p>
            </Button>
            <Button
              onClick={onClickVacancies}
              className="shop-button-active"
            >
              <p className="shop-text-active">
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
          <div className="vac-card-container">
            <Card
              className="vacancies-card"
            >
              <div className="vac-card-wrapper">
                <p
                  className="vac-name"
                >
                  Название
                </p>
                <p
                  className="vac-user"
                >
                  Заказчики
                </p>
              </div>
              <div
                className="vac-items"
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
