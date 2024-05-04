import React from 'react';

const SecondRow = () => (
  <div
    style={{
      border: '1px solid #F28290',
      backgroundColor: '#F282904D',
      height: 'auto',
      borderRadius: '2vw',
      marginTop: '1vw'
    }}
  >
    <div
      style={{
        borderRadius: '15px',
        marginLeft: '1vw',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{
        backgroundColor: '#F28290',
        width: 'fit-content',
        borderRadius: '1vw',
        marginLeft: '1vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        marginTop: '2vw',
        height: '3vw'
      }}
      >
        <p
          style={{
            color: 'white'
          }}
        >
          QOQI
        </p>
      </div>
      <p
        style={{
          color: '#F28290',
          width: '60vw',
          marginTop: '2vw',
          marginLeft: '1vw',
          fontSize: '1.6vw'
        }}
      >
        QOQI Project – это креативный проект в рамках которого
        работает Арт-пространство на базе Музея энергии будущего NUR
        ALEM со следующими активностями:
      </p>
    </div>
  </div>
);

export default SecondRow;
