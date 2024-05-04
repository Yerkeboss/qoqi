import React from 'react';
import Image from 'react-bootstrap/Image';

const FirstRow = () => (
  <div style={{ display: 'flex', marginTop: '1vw' }}>
    <div
      style={{
        flex: 1,
        border: '1px solid #F28290',
        backgroundColor: '#F28290',
        borderRadius: '2vw'
      }}
    >
      <div
        style={{
          marginLeft: '1vw',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{
          backgroundColor: '#FFFBFB',
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
              color: '#F28290'
            }}
          >
            Описание
          </p>
        </div>
        <p
          style={{
            color: 'white',
            width: '40vw',
            marginTop: '12vw',
            marginLeft: '1vw',
            fontSize: '1.6vw'
          }}
        >
          ACDSSS (Ассоциация креативного развития социальных и
          спортивных пространств) – это некоммерческая
          организация, Целью которой является создание новых точек
          притяжения в виде креативных арт-пространств и устойчивого
          образования
        </p>
      </div>
    </div>
    <div
      style={{
        flex: 1,
        // border: "1px solid #F28290",
        // borderRadius: "20px",
        marginLeft: '2rem'

      }}
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2Fpexels-fauxels-3184418.jpg?alt=media&token=8077d9e9-821e-4edc-a20c-f532dc50e807"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '2vw'
        }}
      />
    </div>
  </div>
);

export default FirstRow;
