import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';

const Tender = () => {
  const history = useHistory();
  const [tenders, setTenders] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      const tendersCollection = await firebase.firestore().collection('tenders').get();
      const tendersData = tendersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTenders(tendersData);
    };

    const fetchAuthor = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredUser = usersData.filter((user) => user.fullname === 'Author');
      setAuthor(filteredUser);
    };
    fetchAuthor();
    fetchTenders();
  }, []);

  const authorId = author.map((item) => item.id);


  const onClickTender = (tenderId) => {
    history.push(`/tender/${tenderId}`);
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

  const onClickTenderList = () => {
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
          <h2 className="shop-title">Конкурсы/тендеры</h2>
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
              className="shop-button"
            >
              <p className="shop-text">
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
              className="shop-button-active"
            >
              <p className="shop-text-active">
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
          <div className="tender-container">
            <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
              <div className="tender-grid">
                {tenders?.map((tender) => (
                  <Card
                    className="tender-card"
                    key={tender?.id}
                  >
                    <div
                      className="tender-wrap"
                      onClick={() => onClickTender(tender.id)}
                    >
                      <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
                      }}
                      >
                        <div className="tender-date">
                          <p style={{ color: '#F28290' }}>{tender?.date}</p>
                        </div>
                        <div className="bookmark-icon-wrapper">
                          <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
                        </div>
                      </div>

                      <div className="tender-details">
                        <p className="tender-team">{tender?.team}</p>
                        <p className="tender-position">
                          {tender?.position}
                        </p>
                        <div className="tender-type">
                          <p className="tender-type-txt">
                            {tender?.typeOfJob}
                          </p>
                        </div>
                        <div className="tender-level">
                          <p className="tender-type-txt">
                            {tender?.level}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tender-bottom-wrap">
                      <div className="tender-price-wrap">
                        <p className="tender-price-txt">
                          {' '}
                          {tender?.price}
                        </p>
                        <p className="tender-location">{tender?.location}</p>
                      </div>
                      <Button
                        className="message-send-btn"
                        onClick={() => handleSendMessage(authorId)}
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="message-icon" />
                        <p className="message-send-txt">Сообщение</p>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Tender;
