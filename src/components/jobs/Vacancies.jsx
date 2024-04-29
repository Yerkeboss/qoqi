import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTengeSign } from '@fortawesome/free-solid-svg-icons';
import {
  useDocumentTitle,
  useFeaturedProducts,
  useScrollTop
} from '@/hooks';

const Vacancies = () => {
  useDocumentTitle('Vacancies | Qoqiqaz');
  useScrollTop();
  const history = useHistory();
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      const vacanciesCollection = await firebase.firestore().collection('orders').get();
      const vacanciesData = vacanciesCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobs(vacanciesData);
    };

    fetchVacancies();

  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await firebase.firestore().collection('users').get();
      const usersData = usersCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const getUserAvatar = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.avatar : ''; // Return the avatar if user is found, otherwise return an empty string
  };

  const getUserId = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.id : '';
  }

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

  const onClickJob = (jobId) => {
    history.push(`/job/${jobId}`);
  };

  const onClickUser = (userId) => {
    history.push(`/user/${userId}`);
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
              color:  'black'

            }}
            >
              Купить работу
            </p>
          </Button>
          <Button
            onClick={onClickCreators}
            style={{
              backgroundColor:'white',
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
            <p style={{ color:  'black' }}> Найти креатора</p>
          </Button>
          <Button
            onClick={onClickVacancies}
            style={{
              backgroundColor:  '#F28290' ,
              color:  'white' ,
              border: 'none' ,
              borderRadius: '1vw',
              marginLeft: '0.5rem',
              width: '100%',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <p style={{ color: 'white'  }}> Вакансии</p>

          </Button>
          <Button
            onClick={onClickOrder}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border:  '1px solid black',
              borderRadius: '1vw',
              marginLeft: '0.5rem',
              width: '100%',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <p style={{ color: 'black' }}>Разместить заказ</p>

          </Button>
          <Button
            onClick={onClickTender}
            style={{
              backgroundColor: 'white',
              color:  'black',
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
            <p style={{ color:  'black' }}>Конкурсы/тендеры</p>
          </Button>
          <Button
            onClick={onClickCroud}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border:  '1px solid black',
              borderRadius: '1vw',
              marginLeft: '0.5rem',
              width: '100%',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <p style={{ color:  'black' }}>Краудсорсинг</p>
          </Button>
          <Button
            onClick={onClickCharity}
            style={{
              backgroundColor: 'white',
              color:  'black',
              border:  '1px solid black',
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
          <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300} style = {{overflowY:'scroll', overflowX:'hidden'}}>
      <div>
        <Card
          style={{
            border: '1px solid black',
            backgroundColor: 'white',
            height: '100%',
            borderRadius: '2vw',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: '2rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '47vw' }}>
            <p
              style={{
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: '500',
                marginLeft: '4rem'
              }}
            >
              Название
            </p>
            <p
              style={{
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: '500',
                marginRight: '2rem'
              }}
            >
              Заказчики
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column'
            }}
          >
            {jobs?.map((job) => (
              <Card
                style={{
                  flex: 1,
                  marginRight: '1rem',
                  border: '1px solid black',
                  borderRadius: '2vw',
                  height: '100%', 
                  marginTop:'1vw'
                }}
                key={job?.id}
              >
                {' '}
                {/* First card */}
                <Card.Body>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop:'1vw',
                      width:'49vw'
                    }}
                  >
                    <Card.Title
                      style={{
                        color: 'black',
                        fontFamily: 'Inter',
                        fontWeight: '500',
                        marginLeft: '2.6vw',
                        width: '18vw'
                      }}
                    >
                      <Card.Text style={{ fontSize: '1.2vw' }} onClick ={()=>onClickJob(job.id)} >{job?.selectedSpecialist}</Card.Text>
                      <Card.Text style={{ fontSize: '1.8vw', marginTop:'0vw' }}>
                      {`${job?.from}`}
                        {' '}
                        <FontAwesomeIcon icon={faTengeSign} />
                        { `  -  ${job?.to}`}
                        {' '}
                        <FontAwesomeIcon icon={faTengeSign} />
                      </Card.Text>
                      <Card.Text style={{ fontSize: '1.2rem', width:'100%', marginTop:'-1vw' }}>
                        {`${job?.duration} | ${job?.address}`} 
                      </Card.Text>
                    </Card.Title>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', marginTop:'0.8vw', marginBottom:'0.8vw' }} onClick={() => onClickUser(getUserId(job.userId))}>
                      <Image
                      src={getUserAvatar(job.userId)}
                        style={{
                          width: '12vw',
                          height: '12vw'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'flex', marginBottom: '2vw', marginTop:'-4vw' }}>
                    <Button
                      style={{
                        backgroundColor: '#F28290',
                        border: 'none',
                        borderRadius: '1vw',
                        marginLeft: '2.6vw',
                        width: 'fit-content',
                        height: '4rem',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center', 
                        paddingLeft:'1vw',
                        paddingRight:'1vw'
                      }}
                    >
                      <p style = {{color: 'white',}}>Откликнуться</p>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </SkeletonTheme>
        </div>
      </div>
    </div>
  </main>
   
  );
};

export default Vacancies;
