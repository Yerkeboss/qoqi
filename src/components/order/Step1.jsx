import React, { useState } from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField
} from '@mui/material';
import Button from 'react-bootstrap/Button';
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
    <div className="order-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#12141799' }}>Шаг 1</h2>
          <h2 className="order-title">Какой специалист вам нужен? </h2>
        </div>
        <Button
          onClick={_next}
          className="next-btn"
        >
          <p className="next-btn-text">Следующий шаг</p>
        </Button>
      </div>

      <FormControl style={{ marginLeft: '1vw' }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedSpecialist}
          onChange={handleRadioChange}
          name="radio-buttons-group"
          style={{ display: 'grid' }}
          className="stepOneGrid"
        >
          <FormControlLabel
            value="Фотограф"
            control={<Radio />}
            label={(
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}
              >
                <FontAwesomeIcon icon={faCamera} className="orderIcon" />
                <p className="order-name">Фотограф</p>
              </div>
            )}
            className="form-control-label"
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
                <FontAwesomeIcon icon={faPlayCircle} className="orderIcon" />
                <p className="order-name">Видеооператор</p>
              </div>
            )}
            className="form-control-label"
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
                <FontAwesomeIcon icon={faFileVideo} className="orderIcon" />
                <p className="order-name">Аниматор</p>
              </div>
            )}
            className="form-control-label"
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
                <FontAwesomeIcon icon={faPaintBrush} className="orderIcon" />
                <p className="order-name">Иллюстратор</p>
              </div>
            )}
            className="form-control-label"
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
                <FontAwesomeIcon icon={faDesktop} className="orderIcon" />
                <p className="order-name">Графичесĸий дизайнер</p>
              </div>
            )}
            className="form-control-label"
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
                <FontAwesomeIcon icon={faCube} className="orderIcon" />
                <p className="order-name">3D Художник</p>
              </div>
            )}
            className="form-control-label"
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
            className="form-control-label2"
          />
          )}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Step1;
