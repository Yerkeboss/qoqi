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

  useEffect(() => {
    const fetchTenders = async () => {
      const tendersCollection = await firebase.firestore().collection('tenders').get();
      const tendersData = tendersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTenders(tendersData);
    };
    fetchTenders();
  }, []);

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
              <p style={{ color: 'black' }}> Найти креатора</p>
            </Button>
            <Button
              onClick={onClickVacancies}
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
              onClick={onClickTenderList}
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
              <p style={{ color: 'white' }}>Конкурсы/тендеры</p>
            </Button>
            <Button
              onClick={onClickCroud}
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
              <p style={{ color: 'black' }}>Краудсорсинг</p>
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
              <div className="tender-grid">
                {tenders?.map((tender) => (
                  <Card
                    style={{
                      width: '30vw', height: '34vw', border: '1px solid black', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5vw', flexDirection: 'column'
                    }}
                    key={tender?.id}
                  >
                    <div
                      style={{
                        background: '#F28290', width: '27vw', height: '25vw', borderRadius: '1vw', padding: '1vw'
                      }}
                      onClick={() => onClickTender(tender.id)}
                    >
                      <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
                      }}
                      >
                        <div style={{
                          borderRadius: '2vw', background: 'white', width: 'fit-content', paddingLeft: '1.5vw', paddingRight: '1.5vw', height: '3vw', display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                        >
                          <p style={{ color: '#F28290' }}>{tender?.date}</p>
                        </div>
                        <div style={{
                          background: 'white', width: '3vw', height: '3vw', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%'
                        }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ color: '#F28290', fontSize: '1.5vw' }} />
                        </div>
                      </div>

                      <div style={{
                        display: 'flex', flexDirection: 'column', width: 'fit-content', marginTop: '5vw', padding: '0.3vw'
                      }}
                      >
                        <p style={{ color: 'white', marginBottom: '0vw' }}>{tender?.team}</p>
                        <p style={{
                          fontSize: '1.9vw', color: 'white', marginTop: '1vw', marginBottom: '1vw'
                        }}
                        >
                          {tender?.position}
                        </p>
                        <div style={{
                          border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw'
                        }}
                        >
                          <p style={{
                            color: 'white'
                          }}
                          >
                            {tender?.typeOfJob}
                          </p>
                        </div>
                        <div style={{
                          border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw', marginTop: '0.5vw'
                        }}
                        >
                          <p style={{
                            color: 'white'
                          }}
                          >
                            {tender?.level}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '0vw', marginBottom: '-1vw'
                    }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0vw' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '1.9vw', marginBottom: '0' }}>
                          {' '}
                          {tender?.price}
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '1vw', marginTop: '0.5vw' }}>{tender?.location}</p>
                      </div>
                      <Button style={{
                        background: '#f28290', borderRadius: '1.5vw', border: 'none', width: 'fit-content', paddingLeft: '1.5vw', paddingRight: '1.5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', heigth: '1.9vw'
                      }}
                      >
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5vw', color: 'white' }} />
                        <p style={{ color: 'white' }}>Сообщение</p>
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
