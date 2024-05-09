import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Step2 = (props) => {
  const {
    currentStep,
    handleInputChange,
    name,
    description,
    _next,
    _prev,
    address,
    inputText,
    enteredTexts,
    handleChange,
    handleKeyPress,
    setAddress
  } = props;

  if (currentStep !== 2) {
    return null;
  }
  const [remoteButton, setRemoteButton] = useState(false);
  const remoteVac = () => {
    setAddress('Удаленная вакансия');
    setRemoteButton(true);
  };

  return (
    <div style={{ position: 'relative', marginLeft: '7vw', width: '50vw' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#12141799' }}>Шаг 2</h2>
          <h2>Опишите вашу задачу </h2>
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
      </div>

      <FormGroup>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{
            marginTop: '0', marginBottom: '0.5vw', fontSize: '1.1vw', color: '#121417', fontWeight: '400'
          }}
          >
            Название задачи
          </p>
          <Input
            style={{ borderRadius: '1vw', width: '98%', fontSize: '1vw' }}
            type="text"
            name="name"
            id="name"
            placeholder="Пример: Редизайн сайта"
            value={name} // Prop: The username input data
            onChange={handleInputChange} // Prop: Puts data into the state
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{
            marginTop: '1.5vw', marginBottom: '0.5vw', fontSize: '1.1vw', color: '#121417', fontWeight: '400'
          }}
          >
            Описание задачи
          </p>
          <Input
            style={{
              borderRadius: '1vw', width: '98%', fontSize: '1vw', height: '7vw'
            }}
            type="textarea"
            name="description"
            id="description"
            placeholder="Фокус на Дизайн"
            value={description} // Prop: The username input data
            onChange={handleInputChange} // Prop: Puts data into the state
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{
            marginBottom: '0.5vw', fontSize: '1.1vw', color: '#121417', fontWeight: '400', marginTop: '1.5vw'
          }}
          >
            Где находится ваш офис?
          </p>
          <div style={{ display: 'flex' }}>
            <Input
              style={{ borderRadius: '1vw', width: '50%', fontSize: '1vw' }}
              type="text"
              name="address"
              id="address"
              placeholder="Местонахождение"
              value={address} // Prop: The username input data
              onChange={handleInputChange} // Prop: Puts data into the state
            />
            <Button
              style={{
                background: remoteButton ? '#F28290' : 'white',
                border: '1px solid #F28290',
                height: '3vw',
                borderRadius: '1vw',
                marginLeft: '1vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '13vw'
              }}
              value="Удаленная вакансия"
              onClick={remoteVac}
            >
              <p style={{ color: remoteButton ? 'white' : '#F28290' }}>Удаленная вакансия</p>
            </Button>
          </div>
          <p style={{
            marginBottom: '0.5vw', fontSize: '1.1vw', color: '#121417', fontWeight: '400', marginTop: '1.5vw'
          }}
          >
            Отметьте основные критерии для вашей вакансии
          </p>
          <div style={{ position: 'relative', width: '50%' }}>
            <Input
              style={{
                borderRadius: '1vw', width: '100%', fontSize: '1vw', paddingLeft: '3vw', display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}
              type="text"
              name="criteria"
              id="criteria"
              placeholder="Находите и отмечайте до 4 описаний"
              value={inputText}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                position: 'absolute', top: '1.5vw', transform: 'translateY(-50%)', left: '1.3vw'
              }}
            />
            <div style={{
              marginTop: '1rem', display: 'flex', justifyContent: 'flex-start'
            }}
            >
              {enteredTexts.map((text, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex', alignItems: 'center', border: '1px solid #F28290', borderRadius: '1vw', height: '3vw', color: '#F28290', marginLeft: '1vw', width: 'fit-content', paddingLeft: '1vw', paddingRight: '1vw'

                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FormGroup>
    </div>
  );
};

export default Step2;
