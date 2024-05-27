import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import 'firebase/firestore';
import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop, useCharity } from '@/hooks';

const ViewCharity = () => {
  const history = useHistory();
  const { id } = useParams();
  const { charity, isLoading, error } = useCharity(id);

  useScrollTop();
  useDocumentTitle(`Обзор ${charity?.label || 'Item'}`);


  const backToOrder = () => {
    history.push('/charityList');
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
      {charity && !isLoading && (
        <div
          className="course-info-wrap"
          key={charity?.id}
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
                        <Card.Text className="order-duration" style={{ width: '50%' }}>
                          Название:
                        </Card.Text>
                        <Card.Text className="order-duration" style={{ width: '50%' }}>
                          {`${charity?.name}`}
                        </Card.Text>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <Card.Text className="order-duration">
                          Автор:
                        </Card.Text>
                        <Card.Text className="order-duration">
                          {`${charity?.position}`}
                        </Card.Text>
                      </div>
                    </Card.Title>
                  </div>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '2vw'
                    }}
                  >
                    <Image
                      src={charity?.image}
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
export default ViewCharity;
