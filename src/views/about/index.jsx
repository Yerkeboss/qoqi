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
        width: '98.5%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3rem'
      }}
    >
      <div className="education-container">
        {/* <div> */}
        <h2 className="education-title">О нас</h2>
        <div className="toggle-btns">
          <Button
            onClick={toggleInfo}
            className={showInfo ? 'toggle-btn-active' : 'toggle-btn'}
          >
            <p className={showInfo ? 'toggle-txt-active' : 'toggle-txt'}>        Информация о компании</p>
          </Button>
          <Button
            onClick={toggleContacts}
            className={showContacts ? 'toggle-btn-active' : 'toggle-btn'}
          >
            <p className={showContacts ? 'toggle-txt-active' : 'toggle-txt'}>Контакты</p>
          </Button>
        </div>
        {/* </div> */}
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
