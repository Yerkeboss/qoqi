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
              <p style={{ color: 'black' }}> Найти креатора</p>
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
              <p style={{ color: 'white' }}>Краудсорсинг</p>
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
              <div style={{ marginTop: '-2vw' }}>
                {crouds?.map((croud) => (
                  <Card
                    style={{
                      marginLeft: '1.5vw', width: '99%', borderRadius: '1vw', marginTop: '2vw'
                    }}
                    key={croud?.id}
                    onClick={() => onClickCroud(croud.id)}
                  >
                    <Card.Body style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <div style={{
                        display: 'flex', justifyContent: 'center', background: 'white', width: '10vw', borderRadius: '1vw', marginLeft: '1.5vw', marginTop: '1.5vw', position: 'absolute', flexGrow: '1'
                      }}
                      >
                        <p>{croud?.date}</p>
                      </div>
                      <div style={{
                        display: 'flex', justifyContent: 'center', width: '30vw', marginLeft: '2vw', position: 'absolute', marginTop: '24vw'
                      }}
                      >
                        <p style={{
                          color: 'white', fontWeight: 'bold', fontSize: '2vw', lineHeight: '2.5vw'
                        }}
                        >
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
