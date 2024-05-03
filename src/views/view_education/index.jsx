import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import 'firebase/firestore';
import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop, useEducation } from '@/hooks';

const ViewEducation = () => {
  const history = useHistory();
  const { id } = useParams();
  const { education, isLoading, error } = useEducation(id);

  useScrollTop();
  useDocumentTitle(`Обзор ${education?.name || 'Item'}`);

  const backToOrder = () => {
    history.push('/educationList');
  };

  return (
    <div
      className="content"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {isLoading && (
        <div className="loader">
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {education && !isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3vw'
          }}
          key={education?.id}
        >
          <Button
            style={{
              backgroundColor: 'white',
              border: '2px solid #F28290',
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
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Card
              style={{
                border: '1px solid black',
                borderRadius: '2vw',
                height: '100%'
              }}
            >
              {/* Dividing the card into two sides */}
              <Card.Body
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'flex-start', // Align items at the top
                  width: '100%'
                }}
              >
                {/* Left side */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginLeft: '2vw', // Added margin between the two sides
                    width: '50%' // Set width to 50% for equal division
                  }}
                >
                  <Card.Text style={{ fontSize: '1.8vw', width: '100%' }}>
                    Название:
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.8vw', width: '100%' }}>
                    Длительность:
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.8vw', width: '100%' }}>
                    Описание:
                  </Card.Text>
                </div>
                {/* Right side */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '50%', // Set width to 50% for equal division
                    marginRight: '2vw'
                  }}
                >
                  <Card.Text style={{ fontSize: '1.8vw', width: '100%' }}>
                    {`${education?.name}`}
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.8vw', width: '100%' }}>
                    {`${education?.duration}`}
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.8vw', width: '100%' }}>
                    {`${education?.description}`}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewEducation;
