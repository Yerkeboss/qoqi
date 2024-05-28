import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const FirstRow = () => (
  <div className="about-wrap">
    <Card
      className="about-card1"
    >
      <div
        className="about-card1-container"
      >
        <div className="about-card1-descr">
          <p
            className="about-card1-descr-txt"
          >
            Описание
          </p>
        </div>
        <p
          className="about-card1-descr-details"
        >
          ACDSSS (Ассоциация креативного развития социальных и
          спортивных пространств) – это некоммерческая
          организация, Целью которой является создание новых точек
          притяжения в виде креативных арт-пространств и устойчивого
          образования
        </p>
      </div>
    </Card>
    <Card
      className="about-card2"
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/qoqiqaz7.appspot.com/o/images%2Fpexels-fauxels-3184418.jpg?alt=media&token=8077d9e9-821e-4edc-a20c-f532dc50e807"
        className="about-card2-img"
      />
    </Card>
  </div>
);

export default FirstRow;
