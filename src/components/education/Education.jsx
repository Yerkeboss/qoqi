import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDocumentTitle, useScrollTop, useUserId } from '@/hooks';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';

const Education = () => {
  useDocumentTitle('Education | Qoqiqaz');
  useScrollTop();

  const [showInfo, setShowInfo] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [courses, setCourses] = useState([]);
  const [eduInfo, setEduInfo] = useState([]);
  const history = useHistory();
  const userId = useUserId();

  const toggleInfo = () => {
    setShowInfo(true);
    setShowContacts(false);
  };

  const userCourses = courses.filter((course) => course.userId === userId);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = await firebase.firestore().collection('education').get();
      const coursesData = coursesCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCourses(coursesData);
    };
    const fetchEduInfo = async () => {
      const eduCollection = await firebase.firestore().collection('educate').get();
      const eduData = eduCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEduInfo(eduData);
    };
    fetchCourses();
    fetchEduInfo();
    toggleInfo();
  }, []);

  const toggleContacts = () => {
    setShowInfo(false);
    setShowContacts(true);
  };

  const onClickEducation = (courseId) => {
    history.push(`/education/${courseId}`);
  };

  const onClickEduInfo = () => {
    history.push('/eduInfo');
  };

  const onClickAddCourse = () => {
    history.push('/educate');
  };

  return (
    <main
      className="content"
      style={{
        width: '98.5%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div>
        <div>
          <h2 style={{ marginTop: '5rem', marginLeft: '2rem' }}>Обучение</h2>
          <div style={{ display: 'flex' }}>
            <Button
              onClick={toggleInfo}
              style={{
              // marginTop: "2rem",
                marginLeft: '2rem',
                backgroundColor: showInfo ? '#F28290' : 'white',
                border: showInfo ? 'none' : '1px solid black',
                borderRadius: '12px',
                width: 'fit-content',
                height: '5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '1vw',
                paddingRight: '1vw'
              }}
            >
              <p style={{ color: showInfo ? 'white' : 'black' }}>Обучиться</p>
            </Button>
            <Button
              onClick={toggleContacts}
              style={{
              // marginTop: "2rem",
                marginLeft: '2rem',
                backgroundColor: showContacts ? '#F28290' : 'white',
                color: showContacts ? 'white' : 'black',
                border: showContacts ? 'none' : ' 1px solid black',
                borderRadius: '12px',
                width: 'fit-content',
                height: '5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '1vw',
                paddingRight: '1vw'
              }}
            >
              <p style={{ color: showContacts ? 'white' : 'black' }}>Обучать</p>
            </Button>
          </div>
          <br />
          <br />
        </div>
        {showInfo && (
          <div>
            <Card
              style={{
                border: '1px solid black',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: '1rem',
                marginLeft: '2rem',
                overflow: 'scroll',
                height: '60vw'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p
                  style={{
                    color: 'black',
                    marginLeft: '4rem'
                  }}
                >
                  Название
                </p>
                <p
                  style={{
                    color: 'black',
                    marginRight: '2rem'
                  }}
                >
                  Длительность
                </p>
                <p
                  style={{
                    color: 'black',
                    marginRight: '20rem'
                  }}
                >
                  Описание
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column'
                }}
              >
                {courses?.map((course) => (
                  <Card
                    style={{
                      flex: 1,
                      marginRight: '1rem',
                      border: '1px solid black',
                      borderRadius: '20px',
                      height: '100%',
                      marginTop: '1vw'
                    }}
                    key={course?.id}
                  >
                    {' '}
                    {/* First card */}
                    <Card.Body>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '3rem'
                        }}
                      >
                        <p
                          style={{
                            color: 'black',
                            marginLeft: '4rem',
                            width: '15rem'
                          }}
                        >
                          {course?.name}
                        </p>
                        <p
                          style={{
                            color: 'black',
                            marginRight: '10rem'
                          }}
                        >
                          {course?.duration}
                        </p>
                        <p
                          style={{
                            width: '20rem',
                            color: 'black',
                            marginRight: '7rem'
                          }}
                        >
                          {course?.description}
                        </p>
                      </div>
                      <div style={{ display: 'flex', marginBottom: '4rem' }}>
                        <Button
                          style={{
                            backgroundColor: '#F28290',
                            border: 'none',
                            borderRadius: '1vw',
                            marginLeft: '4rem',
                            width: 'fit-content',
                            height: '3vw',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: '1vw',
                            paddingRight: '1vw'
                          }}
                        >
                          <p style={{ color: 'white' }}>Записаться</p>

                        </Button>
                        <Button
                          style={{
                            backgroundColor: 'white',
                            border: '1px solid #F28290',
                            borderRadius: '1vw',
                            marginLeft: '4rem',
                            width: 'fit-content',
                            height: '3vw',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: '1vw',
                            paddingRight: '1vw'
                          }}
                          onClick={() => onClickEducation(course.id)}
                        >
                          <p style={{ color: '#F28290' }}> Подробнее</p>

                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        )}
        {showContacts && (
        <div>
          <Card
            style={{
              border: '1px solid black',
              backgroundColor: 'white',
              height: '100%',
              borderRadius: '20px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: '1rem',
              marginLeft: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
              }}
            >
              {eduInfo?.map((edu) => (
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    height: '100%'
                  }}
                  key={edu?.id}
                >
                  {' '}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <p
                        style={{
                          color: 'black',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        {edu?.name}
                      </p>

                      <p style={{
                        marginLeft: '5rem', width: '70%', textAlign: 'justify', marginRight: '5rem'
                      }}
                      >
                        {edu?.description}
                      </p>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: '#F28290',
                          border: 'none',
                          borderRadius: '12px',
                          marginLeft: '4rem',
                          width: 'fit-content',
                          height: '4rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: '1vw',
                          paddingRight: '1vw'
                        }}
                        onClick={onClickAddCourse}
                      >
                        <p style={{ color: 'white' }}>Создать </p>
                      </Button>
                      <Button
                        style={{
                          marginLeft: '2rem',
                          backgroundColor: 'white',
                          border: '1px solid #F28290',
                          borderRadius: '12px',
                          width: 'fit-content',
                          height: '4rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: '1vw',
                          paddingRight: '1vw'
                        }}
                        onClick={onClickEduInfo}
                      >
                        <p style={{ color: '#F28290' }}>Узнать подробнее</p>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column'
              }}
            >
              <p style={{ fontSize: '1.4vw', marginLeft: '4rem', fontWeight: 'bolder' }}>Мои курсы</p>
              {userCourses?.map((userCourse) => (
                <Card
                  style={{
                    flex: 1,
                    marginRight: '1rem',
                    border: '1px solid black',
                    borderRadius: '20px',
                    marginTop: '1vw',
                    overflow: 'scroll',
                    height: '60vw'
                  }}
                  key={userCourse?.id}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '3rem'
                      }}
                    >
                      <p
                        style={{
                          color: 'black',
                          marginLeft: '4rem',
                          width: '15rem'
                        }}
                      >
                        {userCourse?.name}
                      </p>
                      <p
                        style={{
                          color: 'black',
                          marginRight: '10rem'
                        }}
                      >
                        {userCourse?.duration}
                      </p>
                      <p
                        style={{
                          width: '20rem',
                          color: 'black',
                          marginRight: '7rem'
                        }}
                      >
                        {userCourse?.description}
                      </p>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '4rem' }}>
                      <Button
                        style={{
                          backgroundColor: 'white',
                          border: '1px solid #F28290',
                          borderRadius: '1vw',
                          marginLeft: '4rem',
                          width: 'fit-content',
                          height: '3vw',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: '1vw',
                          paddingRight: '1vw'
                        }}
                        onClick={() => onClickEducation(userCourse.id)}
                      >
                        <p style={{ color: '#F28290' }}> Подробнее</p>

                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Card>
        </div>
        )}
      </div>
    </main>
  );
};

export default Education;
