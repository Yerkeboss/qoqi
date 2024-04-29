import React, { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useHistory } from 'react-router-dom';

const Croud = () => {
  const [crouds, setCrouds] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchCrouds = async () => {
      const croudsCollection = await firebase.firestore().collection('croud').get();
      const croudsData = croudsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCrouds(croudsData);
    };
    fetchCrouds();
  }, []);

  const onClickCroud = (croudId) => {
    history.push(`/croud/${croudId}`);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2" height={300}>
      <div style={{ marginTop: '-2vw' }}>
        {crouds?.map((croud) => (
          <Card
            style={{
              marginLeft: '1.5vw', width: '99%', borderRadius: '1vw', marginTop: '2vw'
            }}
            key={croud?.id}
            onClick={() => onClickCroud(croud.id)}
          >
            <Card.Body style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                display: 'flex', justifyContent: 'center', background: 'white', width: '10vw', borderRadius: '1vw', marginLeft: '1.5vw', marginTop: '1.5vw', position: 'absolute', flexGrow: '1'
              }}
              >
                <p>{croud?.date}</p>
              </div>
              <div style={{
                display: 'flex', justifyContent: 'center', width: '30vw', marginLeft: '2vw', position: 'absolute', marginTop: '24vw'
              }}
              >
                <p style={{
                  color: 'white', fontWeight: 'bold', fontSize: '2vw', lineHeight: '2.5vw'
                }}
                >
                  {croud?.label}
                </p>
              </div>
              <Image style={{ width: '100%' }} src={croud?.image} />
            </Card.Body>
          </Card>
        ))}
      </div>
    </SkeletonTheme>
  );
};
export default Croud;
