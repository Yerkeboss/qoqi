import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';

const Saved = () => {
  const history = useHistory();
  const [tenders, setTenders] = useState([]);
  const [author, setAuthor] = useState([]);

  const onOpenProducts = () => {
    history.push('/savedProducts');
  };

  const onOpenVacancies = () => {
    history.push('/savedVacancies');
  };


  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <div className="tender-grid">

          <Card
            style={{
              width: '30vw', height: '28vw', border: '1px solid black', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5vw', flexDirection: 'column'
            }}
            onClick={onOpenProducts}
          >
            <div
              style={{
                background: '#F28290', width: '27vw', height: '25vw', borderRadius: '1vw', padding: '1vw'
              }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
              }}
              >

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

                <p style={{
                  fontSize: '1.9vw', color: 'white', marginTop: '1vw', marginBottom: '1vw'
                }}
                >
                  Сохраненные работы
                </p>
                <div style={{
                  border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw', marginTop: '1.5vw'
                }}
                >
                  <p style={{
                    color: 'white'
                  }}
                  >
                    Работы на продажу
                  </p>
                </div>
                <div style={{
                  border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw', marginTop: '1.5vw'
                }}
                >
                  <p style={{
                    color: 'white'
                  }}
                  >
                    Посты
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card
            style={{
              width: '30vw', height: '28vw', border: '1px solid black', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5vw', flexDirection: 'column'
            }}
            onClick={onOpenVacancies}
          >
            <div
              style={{
                background: '#F28290', width: '27vw', height: '25vw', borderRadius: '1vw', padding: '1vw'
              }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
              }}
              >

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

                <p style={{
                  fontSize: '1.9vw', color: 'white', marginTop: '1vw', marginBottom: '1vw'
                }}
                >
                  Откликнутые вакансии
                </p>
                <div style={{
                  border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw', marginTop: '1.5vw'
                }}
                >
                  <p style={{
                    color: 'white'
                  }}
                  >
                    Позиция
                  </p>
                </div>
                <div style={{
                  border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw', marginTop: '1.5vw'
                }}
                >
                  <p style={{
                    color: 'white'
                  }}
                  >
                    Заказчик
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card
            style={{
              width: '30vw', height: '28vw', border: '1px solid black', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5vw', flexDirection: 'column'
            }}
          >
            <div
              style={{
                background: '#F28290', width: '27vw', height: '25vw', borderRadius: '1vw', padding: '1vw'
              }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'
              }}
              >

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

                <p style={{
                  fontSize: '1.9vw', color: 'white', marginTop: '1vw', marginBottom: '1vw'
                }}
                >
                  Зарегистрированные курсы
                </p>
                <div style={{
                  border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw'
                }}
                >
                  <p style={{
                    color: 'white'
                  }}
                  >
                    Работы на продажу
                  </p>
                </div>
                <div style={{
                  border: '2px solid white', borderRadius: '1vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw', marginTop: '1.5vw'
                }}
                >
                  <p style={{
                    color: 'white'
                  }}
                  >
                    Посты
                  </p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </main>
  );
};
export default Saved;
