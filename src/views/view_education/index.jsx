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
          className="course-info-wrap"
          key={education?.id}
        >
          <Button
            className="course-back-btn"
            onClick={backToOrder}
          >
            <p className="course-back-txt">Назад</p>
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
              className="course-info-card"
            >
              {/* Dividing the card into two sides */}
              <Card.Body
                className="course-info-card-body"
              >
                {/* Left side */}
                <div
                  className="course-info-details1"
                >
                  <Card.Text className="course-header1">
                    Название:
                  </Card.Text>
                  <Card.Text className="course-header2">
                    Длительность:
                  </Card.Text>
                  <Card.Text className="course-header3">
                    Описание:
                  </Card.Text>
                </div>
                {/* Right side */}
                <div
                  className="course-info-details2"
                >
                  <Card.Text className="course-name">
                    {`${education?.name}`}
                  </Card.Text>
                  <Card.Text className="course-duration">
                    {`${education?.duration}`}
                  </Card.Text>
                  <Card.Text className="course-descr">
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
