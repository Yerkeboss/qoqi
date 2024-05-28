import React from 'react';
import Button from 'react-bootstrap/Button';
import FirstFloor from './FirstFloor';
import SecondFloor from './SecondFloor';
import ThirdFloor from './ThirdFloor';

const FourthRow = ({
  firstFloor, secondFloor, thirdFloor, toggleFirstFloor, toggleSecondFloor, toggleThirdFloor
}) => (
  <div
    style={{ display: 'flex', marginTop: '1vw', height: '100%' }}
  >
    <div
      className="about-card5"
    >
      <div className="about-card5-navs">
        <Button
          onClick={toggleFirstFloor}
          className={firstFloor ? 'toggle-btn-active2' : 'toggle-btn2'}
        >
          <p
            className={firstFloor ? 'toggle-txt-active2' : 'toggle-txt2'}
          >
            1 этаж
          </p>
        </Button>
        <Button
          onClick={toggleSecondFloor}
          className={secondFloor ? 'toggle-btn-active2' : 'toggle-btn2'}
        >
          <p
            className={secondFloor ? 'toggle-txt-active2' : 'toggle-txt2'}
          >
            2-7 этажи
          </p>
        </Button>
        <Button
          onClick={toggleThirdFloor}
          className={thirdFloor ? 'toggle-btn-active2' : 'toggle-btn2'}
        >
          <p
            className={thirdFloor ? 'toggle-txt-active2' : 'toggle-txt2'}
          >
            8 этаж
          </p>
        </Button>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {firstFloor && (
        <FirstFloor />
        )}
      </div>
      {secondFloor && (
      <SecondFloor />
      )}
      {thirdFloor && (
      <ThirdFloor />
      )}
    </div>
  </div>
);

export default FourthRow;
