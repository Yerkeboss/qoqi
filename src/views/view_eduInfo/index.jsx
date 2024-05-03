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
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '3vw'
          }}
          key={edu?.id}
        >
          <Button
            style={{
              backgroundColor: 'white',
              border: '2px solid #F28290',
              borderRadius: '1vw',
              width: 'fit-content',
              height: '4vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '1vw',
              paddingRight: '1vw',
              marginRight: '1vw'
            }}
            onClick={backToOrder}
          >
            <p style={{ color: '#F28290' }}>Назад</p>
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
              style={{
                border: '1px solid black',
                borderRadius: '2vw',
                height: '100%',
                width:'fit-content'
              }}
            >
              {/* Dividing the card into two sides */}
              <Card.Body
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  alignItems: 'flex-start', // Align items at the top
                  width:'fit-content'
                }}
              >
                <div style = {{     display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'flex-start', // Align items at the top
                  width: '100%'}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingRight:'2vw', // Added margin between the two sides
                    width: '50%' // Set width to 50% for equal division
                  }}
                >
                 <Image src ={edu?.image} style= {{ borderRadius:'1vw',marginTop:'2vw', maxWidth:'30vw', marginLeft:'2vw' }}/>
                 </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: '100%', // Set width to 50% for equal division
                    paddingLeft:'2vw',
                    paddingRight:'2vw'
                  }}
                >

                  <p style={{ fontSize: '1.8vw', width: '100%', }}>
                    {`${edu?.name}`}
                  </p>
                  <p style={{ fontSize: '1.8vw', width: '100%',lineHeight:'3vw' }}>
                    {`${edu?.about}`}
                  </p>
                </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%', // Set width to 50% for equal division
                    paddingLeft:'2vw',
                    paddingRight:'2vw'
                  }}
                >
                  <p style={{ fontSize: '1.8vw', width: '100%', lineHeight:'3vw' }}>
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
