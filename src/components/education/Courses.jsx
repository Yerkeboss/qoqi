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
        className="courses-container"
        key={course?.id}
      >
        {' '}
        {/* First card */}
        <Card.Body>
          <div
            className="card-info-details"
          >
            <p
              className="card-info-name"
            >
              {course?.name}
            </p>
            <p
              className="card-info-duration"
            >
              {course?.duration}
            </p>
            <p
              className="card-info-descr"
            >
              {course?.description}
            </p>
          </div>
          <div className="course-actions-wrap">
            <Button
              className="course-save"
              onClick={() => onSaveClick(course?.id)}
            >
              {isSaved ? (<FontAwesomeIcon icon={faCheck} className="course-save-icon" />) : (<p className="course-save-txt">Записаться</p>)}
            </Button>
            <Button
              className="course-details"
              onClick={() => onClickEducation(course.id)}
            >
              <p className="course-details-txt"> Подробнее</p>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
