import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Courses = ({
  course, onSaveClick, onClickEducation, userId
}) => {
  const isSaved = course.saved && course.saved.includes(userId);
  return (
    <div>
      <Card
        style={{
          flex: 1,
          marginRight: '1rem',
          border: '1px solid black',
          borderRadius: '20px',
          height: '100%',
          marginTop: '1vw'
        }}
        key={course?.id}
      >
        {' '}
        {/* First card */}
        <Card.Body>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '3rem'
            }}
          >
            <p
              style={{
                color: 'black',
                marginLeft: '4rem',
                width: '15rem'
              }}
            >
              {course?.name}
            </p>
            <p
              style={{
                color: 'black',
                marginRight: '10rem'
              }}
            >
              {course?.duration}
            </p>
            <p
              style={{
                width: '20rem',
                color: 'black',
                marginRight: '7rem'
              }}
            >
              {course?.description}
            </p>
          </div>
          <div style={{ display: 'flex', marginBottom: '4rem' }}>
            <Button
              style={{
                backgroundColor: '#F28290',
                border: 'none',
                borderRadius: '1vw',
                marginLeft: '4rem',
                width: 'fit-content',
                height: '3vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '1vw',
                paddingRight: '1vw'
              }}
              onClick={() => onSaveClick(course?.id)}
            >
              {isSaved ? (<FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} />) : (<p style={{ color: 'white' }}>Записаться</p>)}
            </Button>
            <Button
              style={{
                backgroundColor: 'white',
                border: '1px solid #F28290',
                borderRadius: '1vw',
                marginLeft: '4rem',
                width: 'fit-content',
                height: '3vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '1vw',
                paddingRight: '1vw'
              }}
              onClick={() => onClickEducation(course.id)}
            >
              <p style={{ color: '#F28290' }}> Подробнее</p>

            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
