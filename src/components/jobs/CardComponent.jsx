import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTengeSign, faCheck } from '@fortawesome/free-solid-svg-icons';

const CardComponent = ({
  job, onSaveClick, getUserAvatar, onClickJob, onClickUser, userId, getUserId
}) => {
  const isSaved = job.saved && job.saved.includes(userId);


  return (
    <div>
      <Card
        className="inner-card"
        key={job?.id}
      >
        {' '}
        {/* First card */}
        <Card.Body>
          <div
            className="inner-card-body"
          >
            <Card.Title
              className="inner-card-title"
            >
              <Card.Text className="specialist" onClick={() => onClickJob(job.id)}>{job?.selectedSpecialist}</Card.Text>
              <Card.Text className="job-from">
                {`${job?.from}`}
                {' '}
                <FontAwesomeIcon icon={faTengeSign} />
                { `  -  ${job?.to}`}
                {' '}
                <FontAwesomeIcon icon={faTengeSign} />
              </Card.Text>
              <Card.Text className="job-duration">
                {`${job?.duration} | ${job?.address}`}
              </Card.Text>
            </Card.Title>
            <div
              className="vac-spec"
              onClick={() => onClickUser(getUserId(job.userId))}
            >
              <Image
                src={getUserAvatar(job.userId)}
                className="vac-spec-img"
              />
            </div>
          </div>
          <div className="vac-save-wrapper">
            <Button
              className="vac-save-button"
              onClick={() => onSaveClick(job.id)}
            >
              {isSaved ? (<FontAwesomeIcon icon={faCheck} style={{ color: 'white' }} />) : (<p style={{ color: 'white' }}>Откликнуться</p>)}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
