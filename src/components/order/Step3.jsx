import React, { useState, useEffect } from 'react';
import {
  FormGroup, Label, Input, Button
} from 'reactstrap';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faWallet } from '@fortawesome/free-solid-svg-icons';

const Step3 = (props) => {
  const {
    currentStep, _prev, duration, budgetType, setBudgetType, from, to, handleDuration, handleBudgetType, handleMoney
  } = props;
  if (currentStep !== 3) {
    return null;
  }

  const [monthly, setMonthly] = useState(false);
  const [project, setProject] = useState(false);

  const monthButton = () => {
    setBudgetType('Ежемесячно');
    setMonthly(true);
    setProject(false);
  };

  const projectButton = () => {
    setBudgetType('Проектно');
    setMonthly(false);
    setProject(true);
  };

  useEffect(() => {
    monthButton();
  }, []);

  const handleRadioDuration = (event) => {
    const { value } = event.target;
    handleDuration(value);
  };

  return (
    <div className="order-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#12141799' }}>Шаг 3</h2>
          <h2>Уточните детали </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            onClick={_prev}
            className="back-btn"
          >
            <p className="back-btn-text">Назад</p>
          </Button>
          <Button
            type="submit"
            className="next-btn"
          >
            <p className="next-btn-text">Опубликовать</p>
          </Button>
        </div>
      </div>


      <FormControl
        style={{
          marginLeft: '1rem'
        }}
      >
        <p className="task-time">
          Какое количество времени нужно на ваш проект?
        </p>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={duration}
          onChange={handleRadioDuration}
        >
          <FormControlLabel
            value="Больше 6 месяцев"
            control={<Radio />}
            label="Больше 6 месяцев"
            className="form-control"
          />
          <FormControlLabel
            value="от 3 до 6 месяцев"
            control={<Radio />}
            label="от 3 до 6 месяцев"
            className="form-control"
          />
          <FormControlLabel
            value="от 1 до 3 месяцев"
            control={<Radio />}
            label="от 1 до 3 месяцев"
            className="form-control"
          />
        </RadioGroup>
        <br />
        <p className="task-budget">
          Определите бюджет за ваш проект
        </p>
        <div style={{
          display: 'flex', justifyContent: 'space-between', width: '20vw', marginLeft: '-0.5vw', marginBottom: '0.7vw'
        }}
        >
          <Button
            className={monthly ? 'budget-btn-active' : 'budget-btn'}
            onClick={monthButton}
          >
            <FontAwesomeIcon
              icon={faCalendar}
              className="budget-icon"
            />
            <p className="budget-text">Ежемесячно</p>
          </Button>
          <Button
            className={project ? 'budget-btn-active' : 'budget-btn'}
            onClick={projectButton}
            style={{ marginLeft: '1vw' }}
          >
            <FontAwesomeIcon
              icon={faWallet}
              className="budget-icon"
            />
            <p className="budget-text">Проектно</p>
          </Button>
        </div>
        <div className="budget-wrap">
          <div style={{
            display: 'flex', flexDirection: 'column'
          }}
          >
            <p>От</p>
            <div className="budget-container">
              <Input
                className="input-style4"
                type="text"
                name="from"
                id="from"
                value={from}
                onChange={handleMoney}
              />
              <p className="money">/в месяц</p>
            </div>

          </div>
          <div style={{
            display: 'flex', flexDirection: 'column'
          }}
          >
            <p>До</p>
            <div className="budget-container">

              <Input
                className="input-style4"
                type="text"
                name="to"
                id="to"
                value={to}
                onChange={handleMoney}
              />
              <p className="money">/в месяц</p>
            </div>

          </div>
        </div>

      </FormControl>
    </div>
  );
};

export default Step3;
