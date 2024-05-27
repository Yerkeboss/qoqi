import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import 'firebase/firestore';
import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop, useCroud } from '@/hooks';

const ViewCroud = () => {
  const history = useHistory();
  const { id } = useParams();
  const { croud, isLoading, error } = useCroud(id);

  useScrollTop();
  useDocumentTitle(`Обзор ${croud?.label || 'Item'}`);


  const backToOrder = () => {
    history.push('/croudList');
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
      {croud && !isLoading && (
        <div
          className="course-info-wrap"
          key={croud?.id}
        >
          {' '}
          <Button
            className="course-back-btn"
            onClick={backToOrder}
          >
            <p className="course-back-txt">Назад</p>
          </Button>
          <div
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }}
          >
            <Card
              className="course-info-card"
            >
              {' '}
              {/* First card */}
              <Card.Body>
                <div
                  className="order-card-body"
                  style={{ display: 'flex', flexDirection: 'column', padding: '4rem' }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                  >
                    <Card.Title
                      className="order-card-title"
                    >
                      <div style={{
                        display: 'flex'
                      }}
                      >
                        <Card.Text className="order-duration">
                          Название:
                        </Card.Text>
                        <Card.Text className="order-duration">
                          {`${croud?.label}`}
                        </Card.Text>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <Card.Text className="order-duration">
                          Дата:
                        </Card.Text>
                        <Card.Text className="order-duration">
                          {`${croud?.date}`}
                        </Card.Text>
                      </div>
                    </Card.Title>
                  </div>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                  >
                    <Image
                      src={croud?.image}
                      style={{
                        width: '100%'
                      }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </div>

  );
};
export default ViewCroud;
