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
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5vw'
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
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5vw'
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
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5vw'
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
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5vw'
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

                color: 'black',
                backgroundColor: '#F28290',
                border: 'none',
                borderRadius: '1vw',
                padding: '1.5vw',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
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
          <div style={{ width: '98.5%' }}>
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
