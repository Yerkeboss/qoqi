import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
import FourthRow from './FourthRow';
import Contacts from './Contacts';

const About = () => {
  useDocumentTitle('AboutUs | Qoqiqaz');
  useScrollTop();

  const [showInfo, setShowInfo] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [firstFloor, setFirstFloor] = useState(false);
  const [secondFloor, setSecondFloor] = useState(false);
  const [thirdFloor, setThirdFloor] = useState(false);

  const toggleInfo = () => {
    setShowInfo(true);
    setShowContacts(false);
  };


  const toggleContacts = () => {
    setShowInfo(false);
    setShowContacts(true);
  };

  const toggleFirstFloor = () => {
    setFirstFloor(true);
    setSecondFloor(false);
    setThirdFloor(false);
  };

  const toggleSecondFloor = () => {
    setFirstFloor(false);
    setSecondFloor(true);
    setThirdFloor(false);
  };

  const toggleThirdFloor = () => {
    setFirstFloor(false);
    setSecondFloor(false);
    setThirdFloor(true);
  };

  useEffect(() => {
    // Ensure that the first button is clicked when the page is just opened
    toggleInfo();
    toggleFirstFloor();
  }, []);


  return (
    <main
      className="content"
      style={{
        width: '97.5%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2rem',
        marginTop: '3rem'
      }}
    >
      <div>
        <div>
          <h2>О нас</h2>
          <Button
            onClick={toggleInfo}
            style={{
              // marginTop: "2rem",
              backgroundColor: showInfo ? '#F28290' : 'white',
              color: showInfo ? 'white' : 'black',
              border: showInfo ? 'none' : '1px solid black',
              borderRadius: '1vw',
              paddingLeft: '1vw',
              paddingRight: '1vw'
            }}
          >
            <p
              style={{
                color: showInfo ? 'white' : 'black',
                fontFamily: 'Inter',
                fontWeight: '500'
              }}
            >
              Информация о компании
            </p>
          </Button>
          <Button
            onClick={toggleContacts}
            style={{
              // marginTop: "2rem",
              marginLeft: '2rem',
              backgroundColor: showContacts ? '#F28290' : 'white',
              color: showContacts ? 'white' : 'black',
              border: showContacts ? 'none' : '1px solid black',
              borderRadius: '1vw',
              paddingLeft: '1vw',
              paddingRight: '1vw'
            }}
          >
            <p
              style={{
                color: showContacts ? 'white' : 'black',
                fontFamily: 'Inter',
                fontWeight: '500'
              }}
            >
              Контакты
            </p>
          </Button>
          <br />
          <br />
          <br />
        </div>
        {showInfo && (
          <div>
            <FirstRow />
            <SecondRow />
            <ThirdRow />
            <FourthRow firstFloor={firstFloor} secondFloor={secondFloor} thirdFloor={thirdFloor} toggleFirstFloor={toggleFirstFloor} toggleSecondFloor={toggleSecondFloor} toggleThirdFloor={toggleThirdFloor} />
          </div>
        )}
        {showContacts && (
        // <div>
        <Contacts />
        )}
      </div>
    </main>
  );
};

export default About;
