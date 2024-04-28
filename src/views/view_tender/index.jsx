import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop, useTender } from '@/hooks';

const ViewTender = () => {
  const history = useHistory();
  const { id } = useParams();
  const { tender, isLoading, error } = useTender(id);

  useScrollTop();
  useDocumentTitle(`Обзор ${tender?.position || 'Item'}`);


  const backToOrder = () => {
    history.push('/shop');
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {' '}
          <Button
            style={{
              backgroundColor: 'white',
              border: '2px solid #F28290 ',
              borderRadius: '1vw',
              width: 'fit-content',
              height: '4vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '1vw',
              paddingRight: '1vw',
              top: '10vw',
              left: '23vw',
              position: 'absolute'
            }}
            onClick={backToOrder}
          >
            <p style={{ color: '#F28290' }}>Назад</p>
          </Button>
          <Card
            style={{
              marginRight: '1rem',
              border: '1px solid black',
              borderRadius: '2vw',
              height: '100%',
              marginTop: '3vw'
            }}
            key={tender?.id}
          >
            {' '}
            {/* First card */}
            <Card.Body>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '1vw',
                  marginBottom: '2vw',
                  width: 'fit-content',
                  paddingRight: '2vw',
                  paddingLeft: '2vw'
                }}
              >
                <Card.Title
                  style={{
                    color: 'black',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    width: '35vw'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.2vw' }}>Дата:</Card.Text>
                    <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>{tender?.date}</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.2vw' }}>Команда:</Card.Text>
                    <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>{tender?.team}</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.2vw' }}>Позиция</Card.Text>
                    <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>{tender?.position}</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.2vw' }}>Тип работы:</Card.Text>
                    <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
                      {`${tender?.typeOfJob}`}
                    </Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.2vw' }}>Уровень</Card.Text>
                    <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
                      {`${tender?.level}`}
                    </Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.2vw' }}>Цена:</Card.Text>
                    <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
                      {`${tender?.price}`}
                    </Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '1.2vw' }}>Адрес:</Card.Text>
                    <Card.Text style={{ fontSize: '1.2vw', color: '#F28290', justifyContent: 'flex-end' }}>
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
                      style={{
                        backgroundColor: '#F28290',
                        border: 'none',
                        borderRadius: '1vw',
                        width: 'fit-content',
                        height: '4vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: '1vw',
                        paddingRight: '1vw',
                        marginLeft: '0.5vw'
                      }}
                    >
                      <p style={{ color: 'white' }}>Сообщение</p>
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
