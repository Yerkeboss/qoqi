import React, { useState, useEffect } from 'react';
import {
  Form, Button, FormGroup, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import 'firebase/firestore';
import firebase from '../../services/firebase';
import Modal from '../../components/common/Modal';
import { useUserId } from '@/hooks';


const Educate = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const userId = useUserId();
  const [saved, setSaved] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'duration') {
      setDuration(value);
    } else if (name === 'description') {
      setDescription(value);
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
      // Formulate the course object
      const course = {
        name, duration, description, userId, saved
      };

      // Add course to Firestore
      await firebase.db.collection('education').add(course);
      toggleModal();
      history.push('/educate');
      setName('');
      setDescription('');
      setDuration('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const onClickBack = () => {
    history.push('/educationList');
  };


  return (
    <main className="content" style={{ marginTop: '2rem' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <div className="educate-container">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                  <p className="order-duration" style={{ marginTop: '0' }}>
                    Название курса
                  </p>
                  <Input
                    className="order-duration"
                    style={{ marginLeft: '4rem' }}
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{
                  display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '2vw'
                }}
                >

                  <p className="order-duration" style={{ marginTop: '0' }}>

                    Длительность курса
                  </p>
                  <Input className="order-duration" style={{ marginLeft: '4rem' }} type="text" name="duration" id="duration" value={duration} onChange={handleInputChange} />
                </div>
                <div style={{
                  display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '2vw'
                }}
                >
                  <p className="order-duration" style={{ marginTop: '0' }}>
                    Описание
                  </p>
                  <Input
                    className="order-duration"
                    style={{ marginLeft: '4rem', height: '10rem' }}
                    type="textarea"
                    name="description"
                    id="description"
                    value={description}
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3vw'
                }}
                >
                  <Button
                    onClick={onClickBack}
                    className="back-btn"
                  >
                    <p className="back-btn-text">Назад</p>
                  </Button>
                  <Button
                    type="submit"
                    className="next-btn"
                  >
                    <p className="next-btn-text">Опубликовать курс</p>
                  </Button>
                </div>
              </div>

            </div>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              afterOpenModal={() => {}}
            >
              <p>Курс успешно добавлен</p>
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

          </FormGroup>
        </Form>
      </div>
    </main>
  );
};

export default Educate;
