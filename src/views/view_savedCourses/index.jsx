import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDocumentTitle, useScrollTop, useUserId } from '@/hooks';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import Firebase from '../../services/firebase';
import Courses from './Courses';

const SavedCourses = () => {
  useDocumentTitle('Education | Qoqiqaz');
  useScrollTop();


  const [courses, setCourses] = useState([]);
  const [eduInfo, setEduInfo] = useState([]);
  const history = useHistory();
  const userId = useUserId();

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = await firebase.firestore().collection('education').get();
      const coursesData = coursesCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const filteredCourses = coursesData.filter((course) => course.saved && course.saved.includes(userId));
      setCourses(filteredCourses);
    };
    const fetchEduInfo = async () => {
      const eduCollection = await firebase.firestore().collection('educate').get();
      const eduData = eduCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEduInfo(eduData);
    };
    fetchCourses();
    fetchEduInfo();
  }, [userId, courses]);


  const onClickEducation = (courseId) => {
    history.push(`/education/${courseId}`);
  };
  const BackToSavedList = () => {
    history.push('/saved');
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
        flexDirection: 'column',
        marginTop: '2vw'
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
          <Button
            style={{
              backgroundColor: 'white',
              border: '2px solid #F28290 ',
              borderRadius: '1vw',
              width: 'fit-content',
              height: '4vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '1vw',
              paddingRight: '1vw',
              position: 'relative',
              marginBottom: '2vw',
              marginLeft: '1.5vw'
            }}
            onClick={BackToSavedList}
          >
            <p style={{ color: '#F28290' }}>Назад</p>
          </Button>
          <h2 style={{ marginLeft: '1.5vw', height: '20%' }}>Зарегистрированные курсы</h2>
        </div>
        <div style={{
          overflowY: 'scroll',
          height: '60vw'
        }}
        >
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
              marginLeft: '2rem'
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
                <Courses course={course} key={course.id} onSaveClick={onSaveClick} onClickEducation={onClickEducation} userId={userId} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default SavedCourses;
