import React from 'react';
import Card from 'react-bootstrap/Card';

const Contacts = () => (
  <div
    style={{
      flex: 1,
      border: '1px solid #F28290',
      backgroundColor: '#F28290',
      borderRadius: '2vw'
    }}
  >
    <Card
      style={{
        backgroundColor: '#F28290',
        width: '10rem',
        borderRadius: '15px',
        marginLeft: '2rem',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'
      }}
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
