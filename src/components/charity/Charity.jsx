import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Button from 'react-bootstrap/Button';

const Charity = () => {
  const [charities, setCharities] = useState([]);
  const [charities2, setCharities2] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchCharities = async () => {
      const charitiesCollection = await firebase.firestore().collection('charity').get();
      const charitiesData = charitiesCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCharities(charitiesData);
    };
    fetchCharities();
  }, []);

  useEffect(() => {
    const fetchCharities2 = async () => {
      const charitiesCollection2 = await firebase.firestore().collection('charityAdditional').get();
      const charitiesData2 = charitiesCollection2.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCharities2(charitiesData2);
    };
    fetchCharities2();
  }, []);

  const onClickCharity = (charityId) => {
    history.push(`/charity/${charityId}`);
  };

  const onClickCharity2 = (charityId2) => {
    history.push(`/charity2/${charityId2}`);
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

  const onClickCharityList = () => {
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
                Краудсорсинг
              </p>
            </Button>
            <Button
              onClick={onClickCharity}
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
                Благотворительность
              </p>
            </Button>
          </div>
          <div style={{ width: '98.5%' }}>
            <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
              <div className="charity-grid">
                {charities?.map((charity) => (
                  <div className="charity-card" key={charity?.id} onClick={() => onClickCharity(charity.id)}>
                    <div className="charity-card-content">
                      <div className="charity-card-img-wrapper">
                        <Image src={charity?.image} className="image" />
                      </div>
                      <div className="charity-details">
                        <p className="charity-card-name">
                          {charity?.name}
                          {/* <Skeleton width={80} height={100} /> */}
                        </p>
                        <p
                          className="charity-card-position"
                        >
                          {charity?.position}
                          {/* <Skeleton width={80} height={100} /> */}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {charities2?.map((charity2) => (
                <Card className="charity2-card" key={charity2?.id}>
                  <div className="charity2-card-content">
                    <div style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center' }}>
                      <Image src={charity2?.image} className="image2" onClick={() => onClickCharity2(charity2.id)} />
                      <div style={{ marginLeft: '1.5vw' }} onClick={() => onClickCharity2(charity2.id)}>
                        <Card.Title className="charity2-name">{charity2?.name}</Card.Title>
                        <Card.Title className="charity2-position">{charity2.position}</Card.Title>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      <FontAwesomeIcon color="#CCCCCC" icon={faHeart} className="heart-icon" />
                    </div>
                  </div>

                </Card>
              ))}
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Charity;
