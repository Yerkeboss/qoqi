import React, { Component, useState } from 'react';
import {
  Form,
  Card,
  CardBody,
  CardTitle,
  CardFooter, Button
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import 'firebase/firestore';
import MultiStepProgressBar from './MultiStepProgressBar';
import firebase from '../../services/firebase';
import { useUserId } from '@/hooks';
import Modal from '../common/Modal';


const MasterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSpecialist, setSelectedSpecialist] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [inputText, setInputText] = useState(''); // State to track input text
  const [enteredTexts, setEnteredTexts] = useState([]); // State to store entered texts
  const [duration, setDuration] = useState('');
  const [budgetType, setBudgetType] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const userId = useUserId();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [anotherOption, setAnotherOption] = useState(false);


  // Function to go to the next step
  const _next = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to go to the previous step
  const _prev = () => {
    setCurrentStep(currentStep - 1);
  };


  // Function to handle specialist change
  const handleSpecialist = (value) => {
    setSelectedSpecialist(value);
  };

  const handleDuration = (value) => {
    setDuration(value);
  };

  const handleBudgetType = (value) => {
    setBudgetType(value);
  };

  const handleMoney = (e) => {
    const { name, value } = e.target;
    if (name === 'from') {
      setFrom(value);
    } else if (name === 'to') {
      setTo(value);
    }
  };

  // Function to handle input change for step 2
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'address') {
      setAddress(value);
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Add the entered text to the list
      setEnteredTexts([...enteredTexts, inputText]);
      setInputText(''); // Clear the input field
    }
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Formulate the order object
      const order = {
        selectedSpecialist, name, address, enteredTexts, duration, budgetType, from, to, userId
      };

      // Add order to Firestore
      await firebase.db.collection('orders').add(order);
      toggleModal();
      setCurrentStep(1);
      setAnotherOption(false);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const history = useHistory();

  const onClickArt = () => {
    history.push('/shop');
  };

  const onClickCreators = () => {
    history.push('/creators');
  };

  const onClickVacancies = () => {
    history.push('/vacancies');
  };

  const onClickOrder = () => {
    history.push('/order');
  };

  const onClickTender = () => {
    history.push('/tenderList');
  };

  const onClickCroud = () => {
    history.push('/croudList');
  };

  const onClickCharity = () => {
    history.push('/charityList');
  };

  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginLeft: '2rem', height: '20%' }}>Вакансии</h2>

          <div
            style={{
              display: 'flex',
              marginBottom: '4rem',
              marginLeft: '1.5rem',
              width: '97.5%'
            }}
          >
            <Button
              onClick={onClickArt}
              style={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem'
              }}
            >
              <p style={{
                color: 'black'

              }}
              >
                Купить работу
              </p>
            </Button>
            <Button
              onClick={onClickCreators}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}> Найти креатора</p>
            </Button>
            <Button
              onClick={onClickVacancies}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}> Вакансии</p>

            </Button>
            <Button
              onClick={onClickOrder}
              style={{
                backgroundColor: '#F28290',
                color: 'white',
                border: 'none',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'white' }}>Разместить заказ</p>

            </Button>
            <Button
              onClick={onClickTender}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                width: '100%',
                height: '4rem',
                marginLeft: '0.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Конкурсы/тендеры</p>
            </Button>
            <Button
              onClick={onClickCroud}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Краудсорсинг</p>
            </Button>
            <Button
              onClick={onClickCharity}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '1vw',
                marginLeft: '0.5rem',
                width: '100%',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p style={{ color: 'black' }}>Благотворительность</p>
            </Button>
          </div>
          <div style={{ width: '98%' }}>
            <Form onSubmit={handleSubmit}>
              <Card>
                <CardBody style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}
                >
                  <CardTitle>
                    <MultiStepProgressBar currentStep={currentStep} />
                  </CardTitle>

                  <Step1
                    currentStep={currentStep}
                    _next={_next}
                    handleSpecialist={handleSpecialist}
                    selectedSpecialist={selectedSpecialist}
                    anotherOption={anotherOption}
                    setAnotherOption={setAnotherOption}
                  />
                  <Step2
                    currentStep={currentStep}
                    handleInputChange={handleInputChange}
                    _prev={_prev}
                    _next={_next}
                    name={name}
                    address={address}
                    inputText={inputText}
                    enteredTexts={enteredTexts}
                    handleChange={handleChange}
                    handleKeyPress={handleKeyPress}
                    setAddress={setAddress}
                  />
                  <Step3
                    currentStep={currentStep}
                    _prev={_prev}
                    duration={duration}
                    budgetType={budgetType}
                    setBudgetType={setBudgetType}
                    from={from}
                    to={to}
                    handleDuration={handleDuration}
                    handleBudgetType={handleBudgetType}
                    handleMoney={handleMoney}
                  />
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    afterOpenModal={() => {}}
                  >
                    <p>Заказ успешно добавлен</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button
                        onClick={closeModal}
                        style={{
                          background: '#F28290',
                          border: 'none',
                          height: '4vw',
                          borderRadius: '1vw',
                          width: '10vw'

                        }}
                      >
                        <p style={{ color: 'white', fontSize: '1vw', textTransform: 'none' }}>OK</p>
                      </Button>
                    </div>
                  </Modal>
                </CardBody>
                <CardFooter />
              </Card>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MasterForm;

