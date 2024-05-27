import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom';
import 'firebase/firestore';
import { LoadingOutlined } from '@ant-design/icons';
import firebase from 'firebase/app';
import { useDocumentTitle, useScrollTop } from '@/hooks';

const ViewEduInfo = () => {
  const history = useHistory();

  const [eduInfo, setEduInfo] = useState([]);

  useEffect(() => {
    const fetchEduInfo = async () => {
      const eduCollection = await firebase.firestore().collection('educate').get();
      const eduData = eduCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEduInfo(eduData);
    };
    fetchEduInfo();
  }, []);

  console.log('eduInfo', eduInfo);


  useScrollTop();

  const backToOrder = () => {
    history.push('/educationList');
  };

  return (
    <div
      className="content"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
                  {eduInfo?.map((edu) => (
        <div
        className="course-info-wrap"
          key={edu?.id}
        >
          <Button
         className="course-back-btn"
            onClick={backToOrder}
          >
         <p className="course-back-txt">Назад</p>
          </Button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Card
              className="course-info-card"
            >
              {/* Dividing the card into two sides */}
              <Card.Body
             className='eduinfo-card-body'
              >
                <div className='eduinfo-card-content'>
                <div
                 className='eduinfo-image-wrap'
                >
                 <Image src ={edu?.image} className='eduinfo-image'/>
                 </div>
                <div
                className='eduinfo-details'
                >

                  <p className='eduinfo-name'>
                    {`${edu?.name}`}
                  </p>
                  <p className='eduinfo-about'>
                    {`${edu?.about}`}
                  </p>
                </div>
                </div>
                <div
               className='eduinfo-descr-wrap'
                >
                  <p className='eduinfo-descr'>
                    {`${edu?.description}`}
                  </p>

                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
                  ))}
    </div>
  );
};

export default ViewEduInfo;
