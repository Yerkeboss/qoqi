import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDocumentTitle, useScrollTop, useUserId } from '@/hooks';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import Firebase from '../../services/firebase';
import Courses from './Courses';

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

  const onSaveClick = async (courseId) => {
    if (!userId) return;

    try {
      const courseIndex = courses.findIndex((course) => course.id === courseId);
      if (courseIndex === -1) return;

      const updatedCourses = [...courses];
      const course = updatedCourses[courseIndex];

      if (course.saved && course.saved.includes(userId)) {
        course.saved = course.saved.filter((savedUserId) => savedUserId !== userId);
      } else {
        course.saved = [...(course.saved || []), userId];
      }

      setCourses(updatedCourses);

      await Firebase.editCourse(courseId, { saved: course.saved });
    } catch (error) {
      console.error('Error updating order:', error);
    }
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
      <div className="education-container">
        <h2 className="education-title">Обучение</h2>
        <div className="toggle-btns">
          <Button
            onClick={toggleInfo}
            className={showInfo ? 'toggle-btn-active' : 'toggle-btn'}
          >
            <p className={showInfo ? 'toggle-txt-active' : 'toggle-txt'}>Обучиться</p>
          </Button>
          <Button
            onClick={toggleContacts}
            className={showContacts ? 'toggle-btn-active' : 'toggle-btn'}
          >
            <p className={showContacts ? 'toggle-txt-active' : 'toggle-txt'}>Обучать</p>
          </Button>
        </div>
        <br />
        {showInfo && (
        <div>
          <Card
            className="card-info"
          >
            <div className="card-info-headers">
              <p
                className="card-info-header1"
              >
                Название
              </p>
              <p
                className="card-info-header2"
              >
                Длительность
              </p>
              <p
                className="card-info-header3"
              >
                Описание
              </p>
            </div>
            <div
              className="courses-wrap"
            >
              {courses?.map((course) => (
                <Courses course={course} key={course.id} onSaveClick={onSaveClick} onClickEducation={onClickEducation} userId={userId} />
              ))}
            </div>
          </Card>
        </div>
        )}
        {showContacts && (
        <div>
          <Card
            className="card-info"
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
                  className="contacts-info"
                  key={edu?.id}
                >
                  {' '}
                  <Card.Body>
                    <div
                      className="contacts-info-wrap"
                    >
                      <p
                        className="contacts-info-name"
                      >
                        {edu?.name}
                      </p>
                      <p className="contacts-info-descr">
                        {edu?.description}
                      </p>
                    </div>
                    <div className="course-actions-wrap">
                      <Button
                        className="course-save"
                        onClick={onClickAddCourse}
                      >
                        <p className="course-save-txt">Создать </p>
                      </Button>
                      <Button
                        className="course-details"
                        onClick={onClickEduInfo}
                      >
                        <p className="course-details-txt">Узнать подробнее</p>
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
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p className="contacts-title">Мои курсы</p>
              </div>
              {userCourses?.map((userCourse) => (
                <Card
                  className="courses-container"
                  key={userCourse?.id}
                >
                  {' '}
                  {/* First card */}
                  <Card.Body>
                    <div
                      className="card-info-details"
                    >
                      <p
                        className="card-info-name"
                      >
                        {userCourse?.name}
                      </p>
                      <p
                        className="card-info-duration"
                      >
                        {userCourse?.duration}
                      </p>
                      <p
                        className="card-info-descr"
                      >
                        {userCourse?.description}
                      </p>
                    </div>
                    <div className="course-actions-wrap">
                      <Button
                        className="course-details2"
                        onClick={() => onClickEducation(userCourse.id)}
                      >
                        <p className="course-details-txt"> Подробнее</p>

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
