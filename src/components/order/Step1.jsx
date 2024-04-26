import React, { useState } from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button, TextField
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera, faPlayCircle, faFileVideo, faPaintBrush, faDesktop, faCube
} from '@fortawesome/free-solid-svg-icons';

const Step1 = (props) => {
  const {
    currentStep,
    handleSpecialist,
    selectedSpecialist,
    _next,
    anotherOption,
    setAnotherOption
  } = props;


  const toggleOption = () => {
    setAnotherOption(true);
  };

  if (currentStep !== 1) {
    return null;
  }

  const handleRadioChange = (event) => {
    const { value } = event.target;
    handleSpecialist(value); // Pass the selected specialist back to MasterForm
  };

  const handleTextChange = (event) => {
    const { value } = event.target;
    handleSpecialist(value);
  };

  return (
    <div style={{ position: 'relative', marginLeft: '7vw', width: '50vw' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#12141799' }}>Шаг 1</h2>
          <h2>Какой специалист вам нужен? </h2>
        </div>
        <Button
          onClick={_next}
          style={{
            background: '#F28290',
            border: 'none',
            height: '4vw',
            borderRadius: '1vw',
            width: '10vw',
            marginRight: '1vw'
          }}
        >
          <p style={{ color: 'white', fontSize: '1vw', textTransform: 'none' }}>Следующий шаг</p>
        </Button>
      </div>

      <FormControl style={{ marginLeft: '1vw' }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedSpecialist}
          onChange={handleRadioChange}
          name="radio-buttons-group"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
        >
          <FormControlLabel
            value="Фотограф"
            control={<Radio />}
            label={(
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}
              >
                <FontAwesomeIcon icon={faCamera} style={{ color: '#8c8c8c', fontSize: '3vw', marginTop: '1.5vw' }} />
                <p style={{ marginTop: '0.5vw' }}>Фотограф</p>
              </div>
            )}
            style={{
              background: 'white', border: '1px solid black', height: '14rem', justifyContent: 'center'
            }}
            classes={{ root: 'radioRoot' }}
          />
          <FormControlLabel
            value="Видеооператор"
            control={<Radio />}
            label={(
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}
              >
                <FontAwesomeIcon icon={faPlayCircle} style={{ color: '#8c8c8c', fontSize: '3vw', marginTop: '1.5vw' }} />
                <p style={{ marginTop: '0.5vw' }}>Видеооператор</p>
              </div>
            )}
            style={{
              background: 'white', border: '1px solid black', height: '14rem', justifyContent: 'center'
            }}
            classes={{ root: 'radioRoot' }}
          />
          {/* Replace one FormControlLabel with TextField */}
          <FormControlLabel
            value="Аниматор"
            control={<Radio />}
            label={(
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}
              >
                <FontAwesomeIcon icon={faFileVideo} style={{ color: '#8c8c8c', fontSize: '3vw', marginTop: '1.5vw' }} />
                <p style={{ marginTop: '0.5vw' }}>Аниматор</p>
              </div>
            )}
            style={{
              background: 'white', border: '1px solid black', height: '14rem', justifyContent: 'center'
            }}
            classes={{ root: 'radioRoot' }}
          />
          <FormControlLabel
            value="Иллюстратор"
            control={<Radio />}
            label={(
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}
              >
                <FontAwesomeIcon icon={faPaintBrush} style={{ color: '#8c8c8c', fontSize: '3vw', marginTop: '1.5vw' }} />
                <p style={{ marginTop: '0.5vw' }}>Иллюстратор</p>
              </div>
            )}
            style={{
              background: 'white', border: '1px solid black', height: '14rem', justifyContent: 'center'
            }}
            classes={{ root: 'radioRoot' }}
          />
          <FormControlLabel
            value="Графичесĸий дизайнер"
            control={<Radio />}
            label={(
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}
              >
                <FontAwesomeIcon icon={faDesktop} style={{ color: '#8c8c8c', fontSize: '3vw', marginTop: '1.5vw' }} />
                <p style={{ marginTop: '0.5vw', textAlign: 'center' }}>Графичесĸий дизайнер</p>
              </div>
            )}
            style={{
              background: 'white', border: '1px solid black', height: '14rem', justifyContent: 'center'
            }}
            classes={{ root: 'radioRoot' }}
          />
          <FormControlLabel
            value="3D Художник"
            control={<Radio />}
            label={(
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}
              >
                <FontAwesomeIcon icon={faCube} style={{ color: '#8c8c8c', fontSize: '3vw', marginTop: '1.5vw' }} />
                <p style={{ marginTop: '0.5vw' }}>3D Художник</p>
              </div>
            )}
            style={{
              background: 'white', border: '1px solid black', height: '14rem', justifyContent: 'center'
            }}
            classes={{ root: 'radioRoot' }}
          />
          {!anotherOption && (
          <p onClick={toggleOption} style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>Нужен другой специалист?</p>
          )}
          {anotherOption && (
          <TextField
            value={selectedSpecialist !== 'Фотограф' && '3D Художник' && 'Графичесĸий дизайнер' && 'Иллюстратор' && 'Аниматор' && 'Видеооператор' ? selectedSpecialist : ''}
            onChange={handleTextChange}
            placeholder="Другое"
            style={{
              background: 'white', border: '1px solid black', height: '14rem', justifyContent: 'center', borderRadius: '2vw', width: '15.5vw', padding: '1vw', marginLeft: '-0.6vw'
            }}
          />
          )}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Step1;
