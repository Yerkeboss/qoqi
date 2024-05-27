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
import { faTengeSign, faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  useDocumentTitle, useScrollTop, useOrder, useUserId
} from '@/hooks';
import Firebase from '../../services/firebase';

const ViewOrder = () => {
  const history = useHistory();
  const { id } = useParams();
  const { job, isLoading, error } = useOrder(id);
  const [users, setUsers] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const saved = job?.saved || [];
  const userId = useUserId();


  useScrollTop();
  useDocumentTitle(`Обзор ${job?.selectedSpecialist || 'Item'}`);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };
    if (job && job.saved) {
      setIsSaved(job.saved.includes(userId)); // Check if the user liked the product
    }

    fetchUsers();
  }, [saved]);

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

  const onSaveClick = async () => {
    if (!job || !userId) return;

    try {
      let updatedSaved = saved; // Create a copy of liked array

      if (isSaved) {
        // If user has already liked the product, remove the like
        updatedSaved = saved.filter((id) => id !== userId);
      } else {
        // If user hasn't liked the product yet, add the like if it doesn't already exist
        if (!saved.includes(userId)) {
          updatedSaved.push(userId);
        }
      }

      // Update the liked array in Firebase
      await Firebase.editOrder(job.id, { saved: updatedSaved });

      // Update likes count directly from the updated liked array
      setIsSaved(!isSaved); // Toggle isLiked state
    } catch (error) {
      console.error('Error updating product:', error);
    }
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
          className="course-info-wrap"
          key={job?.id}
        >
          {' '}
          <Button
            className="course-back-btn"
            onClick={backToOrder}
          >
            <p className="course-back-txt">Назад</p>
          </Button>
          <Card
            className="course-info-card"
          >
            {' '}
            {/* First card */}
            <Card.Body>
              <div
                className="order-card-body"
              >
                <div className="order-card-wrap">
                  <Card.Title
                    className="order-card-title"
                  >
                    <div className="order-header">
                      <div className="order-header-details">
                        <Card.Text className="order-specialist">{job?.selectedSpecialist}</Card.Text>
                        <Card.Text className="order-budget">
                          {`${job?.from}`}
                          {' '}
                          <FontAwesomeIcon icon={faTengeSign} className="tenge-icon" />
                          { `  -  ${job?.to}`}
                          {' '}
                          <FontAwesomeIcon icon={faTengeSign} className="tenge-icon" />
                        </Card.Text>
                      </div>
                      <div
                        className="order-user"
                        onClick={() => onClickUser(getUserId(job.userId))}
                      >
                        <Image
                          src={getUserAvatar(job.userId)}
                          className="order-user-img"
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Card.Text className="order-duration">
                        Время выполнения проекта:
                      </Card.Text>
                      <Card.Text className="order-duration2">
                        {`${job?.duration}`}
                      </Card.Text>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Card.Text className="order-duration">
                        Название задачи:
                      </Card.Text>
                      <Card.Text className="order-duration2">
                        {`${job?.name}`}
                      </Card.Text>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Card.Text className="order-duration">
                        Описание задачи:
                      </Card.Text>

                      <Card.Text className="order-duration2">
                        {`${job?.description}`}
                      </Card.Text>


                    </div>
                    <div style={{ display: 'flex' }}>
                      <Card.Text className="order-duration">
                        Местоположение офиса:
                      </Card.Text>

                      <Card.Text className="order-duration2">
                        {`${job?.address}`}
                      </Card.Text>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Card.Text className="order-duration">
                        Основные критерии для вакансии:
                      </Card.Text>

                      <Card.Text className="order-duration2">
                        {`${job?.enteredTexts}`}
                      </Card.Text>

                    </div>
                    <div style={{ display: 'flex' }}>
                      <Card.Text className="order-duration">
                        Тип бюджета:
                      </Card.Text>

                      <Card.Text className="order-duration2">
                        {`${job?.budgetType}`}
                      </Card.Text>

                    </div>
                    <div className="order-save">
                      <Button
                        className="vac-save-button"
                        onClick={() => onSaveClick(job.id)}
                      >
                        {isSaved ? (<FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} />) : (<p style={{ color: 'white' }}>Откликнуться</p>)}
                      </Button>
                    </div>
                  </Card.Title>

                </div>

              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>

  );
};
export default ViewOrder;
