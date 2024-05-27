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
import { faBookmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useDocumentTitle, useScrollTop, useTender } from '@/hooks';

const ViewTender = () => {
  const history = useHistory();
  const { id } = useParams();
  const { tender, isLoading, error } = useTender(id);
  const [author, setAuthor] = useState([]);

  useScrollTop();
  useDocumentTitle(`Обзор ${tender?.position || 'Item'}`);

  const handleSendMessage = (userId) => {
    history.push(`/chat/${userId}`);
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredUser = usersData.filter((user) => user.fullname === 'Author');
      setAuthor(filteredUser);
    };
    fetchAuthor();
  }, []);

  const authorId = author.map((item) => item.id);

  const backToOrder = () => {
    history.push('/tenderList');
  };

  return (

    <div className="content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <div className="loader">
          {/* <h4>Загружается</h4> */}
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {tender && !isLoading && (
        <div className="course-info-wrap">
          {' '}
          <Button
            className="course-back-btn"
            onClick={backToOrder}
          >
            <p className="course-back-txt">Назад</p>
          </Button>
          <Card
            className="course-info-card"
            key={tender?.id}
          >
            {' '}
            {/* First card */}
            <Card.Body>
              <div
                className="order-card-body"
              >
                <Card.Title
                  className="order-card-title"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text className="tender-name">Дата:</Card.Text>
                    <Card.Text className="tender-detail">{tender?.date}</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text className="tender-name">Команда:</Card.Text>
                    <Card.Text className="tender-detail">{tender?.team}</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text className="tender-name">Позиция:</Card.Text>
                    <Card.Text className="tender-detail">{tender?.position}</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text className="tender-name">Тип работы:</Card.Text>
                    <Card.Text className="tender-detail">
                      {`${tender?.typeOfJob}`}
                    </Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text className="tender-name">Уровень:</Card.Text>
                    <Card.Text className="tender-detail">
                      {`${tender?.level}`}
                    </Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text className="tender-name">Цена:</Card.Text>
                    <Card.Text className="tender-detail">
                      {`${tender?.price}`}
                    </Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text className="tender-name">Адрес:</Card.Text>
                    <Card.Text className="tender-detail">
                      {`${tender?.location}`}
                    </Card.Text>
                  </div>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', marginTop: '2vw'
                    }}
                  >
                    {/* <div style={{ display: 'flex', marginBottom: '2vw', marginTop: '4vw' }}> */}
                    <Button
                      className="message-send-btn2"
                      onClick={() => handleSendMessage(authorId)}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="message-icon2" />
                      <p className="message-send-txt2">Сообщение</p>
                    </Button>
                    {/* </div> */}
                  </div>

                </Card.Title>

              </div>

            </Card.Body>
          </Card>
        </div>
      )}
    </div>

  );
};
export default ViewTender;
