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
        style={{
          flex: 1,
          marginRight: '1rem',
          border: '1px solid black',
          borderRadius: '2vw',
          height: '100%',
          marginTop: '1vw'
        }}
        key={job?.id}
      >
        {' '}
        {/* First card */}
        <Card.Body>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1vw',
              width: '49vw'
            }}
          >
            <Card.Title
              style={{
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: '500',
                marginLeft: '2.6vw',
                width: '18vw'
              }}
            >
              <Card.Text style={{ fontSize: '1.2vw' }} onClick={() => onClickJob(job.id)}>{job?.selectedSpecialist}</Card.Text>
              <Card.Text style={{ fontSize: '1.8vw', marginTop: '0vw' }}>
                {`${job?.from}`}
                {' '}
                <FontAwesomeIcon icon={faTengeSign} />
                { `  -  ${job?.to}`}
                {' '}
                <FontAwesomeIcon icon={faTengeSign} />
              </Card.Text>
              <Card.Text style={{ fontSize: '1.2rem', width: '100%', marginTop: '-1vw' }}>
                {`${job?.duration} | ${job?.address}`}
              </Card.Text>
            </Card.Title>
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.8vw', marginBottom: '0.8vw'
              }}
              onClick={() => onClickUser(getUserId(job.userId))}
            >
              <Image
                src={getUserAvatar(job.userId)}
                style={{
                  width: '12vw',
                  height: '12vw'
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '2vw', marginTop: '-4vw' }}>
            <Button
              style={{
                backgroundColor: '#F28290',
                border: 'none',
                borderRadius: '1vw',
                marginLeft: '2.6vw',
                width: 'fit-content',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '1vw',
                paddingRight: '1vw'
              }}
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
