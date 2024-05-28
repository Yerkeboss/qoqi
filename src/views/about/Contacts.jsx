import React from 'react';
import Card from 'react-bootstrap/Card';

const Contacts = () => (
  <div className="about-wrap">
    <Card
      className="about-card1"
    >
      <p
        style={{
          color: 'white',
          fontWeight: 'bolder'
        }}
      >
        Контакты:
      </p>
      <Card.Body style={{ width: '100%' }}>
        <p
          style={{
            color: 'white',
            width: '25rem',
            fontFamily: 'sans-serif'
          }}
        >
          QOQI
          {' '}
          <br />
          {' '}
          <br />
          пр. Мангилик Ел, 53/1
        </p>
      </Card.Body>
    </Card>
  </div>
);

export default Contacts;
