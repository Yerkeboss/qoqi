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
    <div className="order-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#12141799' }}>Шаг 2</h2>
          <h2>Опишите вашу задачу </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            onClick={_prev}
            className="back-btn"
          >
            <p className="back-btn-text">Назад</p>
          </Button>
          <Button
            onClick={_next}
            className="next-btn"
          >
            <p className="next-btn-text">Следующий шаг</p>
          </Button>
        </div>
      </div>

      <FormGroup>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="task-name">
            Название задачи
          </p>
          <Input
            className="input-style"
            type="text"
            name="name"
            id="name"
            value={name} // Prop: The username input data
            onChange={handleInputChange} // Prop: Puts data into the state
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="task-descr">
            Описание задачи
          </p>
          <Input
            className="input-style"
            type="textarea"
            name="description"
            id="description"
            value={description} // Prop: The username input data
            onChange={handleInputChange} // Prop: Puts data into the state
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="task-address">
            Где находится ваш офис?
          </p>
          <div style={{ display: 'flex' }}>
            <Input
              className="input-style2"
              type="text"
              name="address"
              id="address"
              value={address} // Prop: The username input data
              onChange={handleInputChange} // Prop: Puts data into the state
            />
            <Button
              className={remoteButton ? 'remote-btn-active' : 'remote-btn'}
              value="Удаленная вакансия"
              onClick={remoteVac}
            >
              <p className={remoteButton ? 'remote-btn-text-active' : 'remote-btn-text'}>Удаленная вакансия</p>
            </Button>
          </div>
          <p className="task-address">
            Отметьте основные критерии для вашей вакансии
          </p>
          <div className="task-search-wrapper">
            <Input
              className="input-style3"
              type="text"
              name="criteria"
              id="criteria"
              value={inputText}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="task-search-icon"
            />
            <div className="entered-text-wrap">
              {enteredTexts.map((text, index) => (
                <div
                  key={index}
                  className="entered-text"
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
