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
    <div style={{ position: 'relative', marginLeft: '7vw', width: '50vw' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#12141799' }}>Шаг 3</h2>
          <h2>Уточните детали </h2>
        </div>
        <div>
          <Button
            onClick={_prev}
            style={{
              background: 'white',
              border: '1px solid #F28290',
              height: '4vw',
              borderRadius: '1vw',
              width: '5vw',
              marginRight: '1vw'
            }}
          >
            <p style={{ color: '#F28290', fontSize: '1vw' }}>Назад</p>
          </Button>
          <Button
            type="submit"
            style={{
              background: '#F28290',
              border: 'none',
              height: '4vw',
              borderRadius: '1vw',
              width: '14vw',
              marginRight: '1vw'
            }}
          >
            <p style={{ color: 'white', fontSize: '1vw', textTransform: 'none' }}>Опубликовать вакансию</p>
          </Button>
        </div>
      </div>


      <FormControl
        style={{
          marginLeft: '1rem'
        }}
      >
        <p style={{
          marginTop: '0', marginBottom: '0vw', fontSize: '1.1vw', color: '#121417', fontWeight: '400', marginLeft: '-0.5vw'
        }}
        >
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
            style={{
              borderRadius: '1vw',
              marginTop: '1rem',
              background: 'white',
              border: '1px solid black',
              width: '28rem',
              height: '4rem'
            }}
          />
          <FormControlLabel
            value="от 3 до 6 месяцев"
            control={<Radio />}
            label="от 3 до 6 месяцев"
            style={{
              borderRadius: '1vw',
              marginTop: '1rem',
              background: 'white',
              border: '1px solid black',
              width: '28rem',
              height: '4rem'
            }}
          />
          <FormControlLabel
            value="от 1 до 3 месяцев"
            control={<Radio />}
            label="от 1 до 3 месяцев"
            style={{
              borderRadius: '1vw',
              marginTop: '1rem',
              background: 'white',
              border: '1px solid black',
              width: '28rem',
              height: '4rem'
            }}
          />
        </RadioGroup>

        <p style={{
          marginTop: '1.5vw', fontSize: '1.1vw', color: '#121417', fontWeight: '400', marginLeft: '-0.5vw', marginBottom: '0.7vw'
        }}
        >
          Определите бюджет за ваш проект
        </p>
        <div style={{
          display: 'flex', justifyContent: 'space-between', width: '20vw', marginLeft: '-0.5vw', marginBottom: '0.7vw'
        }}
        >
          <Button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#F28290',
              border: '1px solid #F28290',
              height: '4vw',
              borderRadius: '1vw',
              width: 'fit-content',
              paddingLeft: '1.5vw',
              paddingRight: '1.5vw',
              opacity: monthly ? '1' : '0.5'
            }}
            onClick={monthButton}
          >
            <p style={{ color: 'white' }}>Ежемесячно</p>
          </Button>
          <Button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'fit-content',
              paddingLeft: '1.5vw',
              paddingRight: '1.5vw',
              background: '#F28290',
              border: '1px solid #F28290',
              height: '4vw',
              borderRadius: '1vw',
              opacity: project ? '1' : '0.5'
            }}
            onClick={projectButton}
          >
            <p style={{ color: 'white' }}>Проектно</p>
          </Button>
        </div>
        <div style={{
          display: 'flex', position: 'relative', marginLeft: '-0.5vw', justifyContent: 'space-between', width: '21.5vw'
        }}
        >
          <div style={{
            display: 'flex', flexDirection: 'column'
          }}
          >
            <p>От</p>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-0.5vw'
            }}
            >
              <Input
                style={{
                  borderRadius: '1vw', width: '5vw', height: '3vw'
                }}
                type="text"
                name="from"
                id="from"
                placeholder="Тнг"
                value={from}
                onChange={handleMoney}
              />
              <p style={{ marginLeft: '0.5vw', fontSize: '1vw' }}>/в месяц</p>
            </div>

          </div>
          <div style={{
            display: 'flex', flexDirection: 'column'
          }}
          >
            <p>До</p>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-0.5vw'
            }}
            >
              <Input
                style={{
                  borderRadius: '1vw', width: '5vw', height: '3vw'
                }}
                type="text"
                name="to"
                id="to"
                placeholder="Тнг"
                value={to}
                onChange={handleMoney}
              />
              <p style={{ marginLeft: '0.5vw', fontSize: '1vw' }}>/в месяц</p>
            </div>

          </div>
        </div>

      </FormControl>
    </div>
  );
};

export default Step3;
