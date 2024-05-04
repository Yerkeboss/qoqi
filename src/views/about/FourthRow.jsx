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
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #F28290',
        backgroundColor: '#F282904D',
        borderRadius: '2vw',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{
        marginTop: '2vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '22vw'
      }}
      >
        <Button
          onClick={toggleFirstFloor}
          style={{
          // marginTop: "2rem",
            backgroundColor: firstFloor ? '#F28290' : 'white',
            color: firstFloor ? 'white' : 'black',
            border: firstFloor ? 'none' : '1px solid black',
            borderRadius: '1vw',
            paddingLeft: '1vw',
            paddingRight: '1vw',
            width: 'fit-content'
          }}
        >
          <p
            style={{
              color: firstFloor ? 'white' : 'black',
              fontFamily: 'Inter',
              fontWeight: '500'
            }}
          >
            1 этаж
          </p>
        </Button>
        <Button
          onClick={toggleSecondFloor}
          style={{
          // marginTop: "2rem",

            backgroundColor: secondFloor ? '#F28290' : 'white',
            color: secondFloor ? 'white' : 'black',
            border: secondFloor ? 'none' : '1px solid black',
            borderRadius: '1vw',
            paddingLeft: '1vw',
            paddingRight: '1vw',
            width: 'fit-content'
          }}
        >
          <p
            style={{
              color: secondFloor ? 'white' : 'black',
              fontFamily: 'Inter',
              fontWeight: '500'
            }}
          >
            2-7 этажи
          </p>
        </Button>
        <Button
          onClick={toggleThirdFloor}
          style={{
          // marginTop: "2rem",

            backgroundColor: thirdFloor ? '#F28290' : 'white',
            color: thirdFloor ? 'white' : 'black',
            border: thirdFloor ? 'none' : '1px solid black',
            borderRadius: '1vw',
            paddingLeft: '1vw',
            paddingRight: '1vw',
            width: 'fit-content'
          }}
        >
          <p
            style={{
              color: thirdFloor ? 'white' : 'black',
              fontFamily: 'Inter',
              fontWeight: '500'
            }}
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
