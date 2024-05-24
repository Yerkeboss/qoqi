import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Croud = () => {
  const [crouds, setCrouds] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchCrouds = async () => {
      const croudsCollection = await firebase.firestore().collection('croud').get();
      const croudsData = croudsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCrouds(croudsData);
    };
    fetchCrouds();
  }, []);

  const onClickCroud = (croudId) => {
    history.push(`/croud/${croudId}`);
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

  const onClickCroudList = () => {
    history.push('/croudList');
  };

  const onClickCharity = () => {
    history.push('/charityList');
  };

  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="shop-title">Краудсорсинг</h2>
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
              className="shop-button"
            >
              <p className="shop-text">
                Конкурсы/тендеры
              </p>
            </Button>
            <Button
              onClick={onClickCroud}
              className="shop-button-active"
            >
              <p className="shop-text-active">
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
          <div className="croud-container">
            <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
              <div style={{ marginTop: '-2vw' }}>
                {crouds?.map((croud) => (
                  <Card
                    className="croud-card"
                    key={croud?.id}
                    onClick={() => onClickCroud(croud.id)}
                  >
                    <Card.Body style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <div className="croud-date">
                        <p className="croud-date-txt">{croud?.date}</p>
                      </div>
                      <div className="croud-label">
                        <p className="croud-label-txt">
                          {croud?.label}
                        </p>
                      </div>
                      <Image style={{ width: '100%' }} src={croud?.image} />
                    </Card.Body>
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
export default Croud;
