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
    history.push('/shop');
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
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '3vw'
          }}
          key={croud?.id}
        >
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
              marginRight: '1vw'

            }}
            onClick={backToOrder}
          >
            <p style={{ color: '#F28290' }}>Назад</p>
          </Button>
          <div
            style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }}
          >
            <Card
              style={{
                marginRight: '1rem',
                border: '1px solid black',
                borderRadius: '2vw',
                height: '100%'
              }}
            >
              {' '}
              {/* First card */}
              <Card.Body>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '1vw',
                    width: '50vw',
                    marginBottom: '1vw'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                  >
                    <Card.Title
                      style={{
                        color: 'black',
                        fontFamily: 'Inter',
                        fontWeight: '500',
                        marginLeft: '2.6vw',
                        width: '30vw',
                        marginTop: '2vw'
                      }}
                    >
                      <div style={{
                        display: 'flex'
                      }}
                      >
                        <Card.Text style={{ fontSize: '1.8vw', width: '100%', marginTop: '-0.5vw' }}>
                          Название:
                        </Card.Text>
                        <Card.Text style={{ fontSize: '1.8vw', width: '100%', marginTop: '-0.5vw' }}>
                          {`${croud?.label}`}
                        </Card.Text>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <Card.Text style={{ fontSize: '1.8vw', width: '100%', marginTop: '1vw' }}>
                          Дата:
                        </Card.Text>
                        <Card.Text style={{ fontSize: '1.8vw', width: '100%', marginTop: '1vw' }}>
                          {`${croud?.date}`}
                        </Card.Text>
                      </div>
                    </Card.Title>
                  </div>
                  <div
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '2.6vw'
                    }}

                  >
                    <Image
                      src={croud?.image}
                      style={{
                        width: '15vw',
                        height: '15vw'
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
